import {
  CACHE_POLICIES,
  CachedCollectionRecord,
  CacheSourceKind,
  createEmptyManifest,
  estimateByteSize,
  FirestoreAuditMetrics,
  isCacheRecordFresh,
  PublicCollectionKey,
  ReadAuditSnapshot,
  SmartCache,
  SyncHealthStatus,
  SyncManifest,
  SyncMetaRecord,
} from './smartCache';

export const PUBLIC_COLLECTION_KEYS: PublicCollectionKey[] = [
  'site_config',
  'ticker_items',
  'college_info',
  'subjects_data',
  'study_resources',
  'articles',
  'videos',
  'announcements',
  'media',
  'drive_files',
  'medical_terms_delta',
  'innova_info',
  'innova_members',
  'innova_contents',
];

const MANIFEST_CACHE_KEY = '__sync_manifest__';
const GLOBAL_META_KEY = '__global_sync_meta__';
const MANIFEST_RECHECK_WINDOW_MS = 30 * 1000; // Dedupes manifest reads within 30s while ensuring rapid cross-tab/reload freshness
const BROADCAST_CHANNEL_NAME = 'daleelak_smart_sync_bc';
const MAX_TOMBSTONES_PER_COLLECTION = 200;
const MAX_MODIFIED_TERM_REFS = 100;

export interface CollectionFetchConfig<T> {
  key: PublicCollectionKey;
  firestoreCollection: string;
  docId?: string; // If single-doc collection like site_config/general or college_info/about_college
  defaultValue: T;
  isArray: boolean;
  updatedAtField?: string; // e.g., 'updatedAt' or 'updated_at'
  normalizeItem?: (id: string, raw: Record<string, unknown>) => unknown;
  sortItems?: (items: unknown[]) => unknown[];
  filterPublicQuery?: boolean; // For medical_terms verified rule compliance
  publishedOnly?: boolean; // For innova_contents published == true rule compliance
}

export interface SyncBackendAdapter {
  isQuotaExceeded: () => boolean;
  markQuotaExceeded: () => void;
  isQuotaError: (err: unknown) => boolean;
  getSyncManifest: () => Promise<SyncManifest | null>;
  saveSyncManifest: (manifest: SyncManifest) => Promise<void>;
  fetchSingleDoc: (collectionName: string, docId: string) => Promise<Record<string, unknown> | null>;
  fetchCollection: (collectionName: string, options?: { updatedAfter?: string; updatedAtField?: string; verifiedOnly?: boolean; publishedOnly?: boolean; limitCount?: number }) => Promise<Array<{ id: string; data: Record<string, unknown> }>>;
  fetchDocById: (collectionName: string, docId: string) => Promise<{ id: string; data: Record<string, unknown> } | null>;
}

export interface CollectionDiagnosticInfo {
  key: PublicCollectionKey;
  labelAr: string;
  cached: boolean;
  itemCount: number;
  byteSizeApprox: number;
  version: number;
  cloudVersion: number | null;
  lastSyncAt: string | null;
  lastCheckedAt: string | null;
  expiresAt: number | null;
  isExpired: boolean;
  source: CacheSourceKind | 'none';
}

export interface CacheDiagnosticsSnapshot {
  indexedDbSupported: boolean;
  isOnline: boolean;
  isQuotaExceeded: boolean;
  syncStatus: SyncHealthStatus;
  lastSuccessSyncAt: string | null;
  lastAttemptAt: string | null;
  lastError: string | null;
  manifestUpdatedAt: string | null;
  totalCachedBytes: number;
  totalCachedItems: number;
  collections: CollectionDiagnosticInfo[];
  metrics: ReadAuditSnapshot;
}

class CentralizedDataSyncEngine {
  private backend: SyncBackendAdapter | null = null;
  private configs = new Map<PublicCollectionKey, CollectionFetchConfig<unknown>>();
  private subscribers = new Map<PublicCollectionKey, Set<(data: unknown, source: CacheSourceKind) => void>>();
  private inFlightManifestPromise: Promise<SyncManifest | null> | null = null;
  private lastManifestCheckAtMs = 0;
  private cachedManifest: SyncManifest | null = null;
  private inFlightSyncs = new Map<PublicCollectionKey, Promise<CachedCollectionRecord<unknown> | null>>();
  private diagnosticsListeners = new Set<() => void>();
  private broadcastChannel: BroadcastChannel | null = null;
  private backgroundRevalidatingKeys = new Set<PublicCollectionKey>();
  private globalMeta: SyncMetaRecord = {
    key: GLOBAL_META_KEY,
    lastSuccessSyncAt: null,
    lastAttemptAt: null,
    lastError: null,
    syncStatus: 'idle',
  };
  private metaLoaded = false;

  constructor() {
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        this.broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
        this.broadcastChannel.onmessage = (event) => {
          const payload = event?.data as { type?: string; key?: PublicCollectionKey } | undefined;
          if (payload?.type === 'collection_mutated' && payload.key) {
            this.lastManifestCheckAtMs = 0;
            void SmartCache.deleteCollection(payload.key).then(() =>
              this.loadCollection(payload.key!, { forceManifestCheck: true })
            );
          }
        };
      } catch {
        this.broadcastChannel = null;
      }
    }
  }

  configureBackend(adapter: SyncBackendAdapter): void {
    this.backend = adapter;
  }

  registerCollection<T>(config: CollectionFetchConfig<T>): void {
    this.configs.set(config.key, config as CollectionFetchConfig<unknown>);
  }

  private emitDiagnostics(): void {
    this.diagnosticsListeners.forEach((cb) => {
      try {
        cb();
      } catch {
        // ignore
      }
    });
  }

  subscribeDiagnostics(cb: () => void): () => void {
    this.diagnosticsListeners.add(cb);
    return () => {
      this.diagnosticsListeners.delete(cb);
    };
  }

  private async ensureMetaLoaded(): Promise<void> {
    if (this.metaLoaded) return;
    this.metaLoaded = true;
    const savedMeta = await SmartCache.getMeta(GLOBAL_META_KEY);
    if (savedMeta) {
      this.globalMeta = savedMeta;
    }
    const savedManifest = await SmartCache.getCollection<SyncManifest>(MANIFEST_CACHE_KEY);
    if (savedManifest?.data) {
      this.cachedManifest = savedManifest.data;
      if (savedManifest.lastCheckedAt) {
        const parsedMs = Date.parse(savedManifest.lastCheckedAt);
        if (Number.isFinite(parsedMs)) {
          this.lastManifestCheckAtMs = parsedMs;
        }
      }
    }
  }

  private async updateGlobalMeta(partial: Partial<SyncMetaRecord>): Promise<void> {
    this.globalMeta = {
      ...this.globalMeta,
      ...partial,
      key: GLOBAL_META_KEY,
    };
    await SmartCache.setMeta(this.globalMeta);
    this.emitDiagnostics();
  }

  private notifyCollectionSubscribers(key: PublicCollectionKey, data: unknown, source: CacheSourceKind): void {
    const subs = this.subscribers.get(key);
    if (!subs) return;
    subs.forEach((cb) => {
      try {
        cb(data, source);
      } catch (err) {
        console.warn(`Subscriber callback error for ${key}:`, err);
      }
    });
  }

  async getCachedDeletedIds(key: PublicCollectionKey): Promise<Set<string>> {
    await this.ensureMetaLoaded();
    const list = this.cachedManifest?.deleted?.[key] || [];
    return new Set(list.map((t) => t.id).filter(Boolean));
  }

  private isBrowserOffline(): boolean {
    return typeof navigator !== 'undefined' && navigator.onLine === false;
  }

  /**
   * Reads `site_config/sync_manifest` with single-flight dedupe & optional freshness window.
   * Cost: 1 Firestore read (or 0 if within dedupe window).
   */
  async getOrFetchManifest(forceNetwork = false): Promise<SyncManifest | null> {
    await this.ensureMetaLoaded();

    if (!this.backend) return this.cachedManifest;
    if (this.backend.isQuotaExceeded()) {
      await this.updateGlobalMeta({ syncStatus: 'quota_exceeded' });
      return this.cachedManifest;
    }
    if (this.isBrowserOffline()) {
      await this.updateGlobalMeta({ syncStatus: 'offline' });
      return this.cachedManifest;
    }

    const now = Date.now();
    if (!forceNetwork && this.cachedManifest && now - this.lastManifestCheckAtMs < MANIFEST_RECHECK_WINDOW_MS) {
      return this.cachedManifest;
    }

    if (this.inFlightManifestPromise) {
      return this.inFlightManifestPromise;
    }

    this.inFlightManifestPromise = (async () => {
      try {
        const remoteManifest = await this.backend!.getSyncManifest();
        this.lastManifestCheckAtMs = Date.now();
        if (remoteManifest) {
          this.cachedManifest = remoteManifest;
          await SmartCache.setCollection({
            key: MANIFEST_CACHE_KEY,
            data: remoteManifest,
            version: remoteManifest.schemaVersion || 1,
            lastSyncAt: new Date().toISOString(),
            lastCheckedAt: new Date().toISOString(),
            expiresAt: Date.now() + 15 * 60 * 1000,
            source: 'cloud',
            itemCount: 1,
            hasFullSnapshot: true,
            byteSizeApprox: estimateByteSize(remoteManifest),
          });
        }
        return this.cachedManifest;
      } catch (err) {
        if (this.backend?.isQuotaError(err)) {
          this.backend.markQuotaExceeded();
          await this.updateGlobalMeta({
            syncStatus: 'quota_exceeded',
            lastError: 'تم تجاوز الحصة اليومية المجانية لـ Firestore',
          });
        } else {
          await this.updateGlobalMeta({
            syncStatus: this.isBrowserOffline() ? 'offline' : 'error',
            lastError: err instanceof Error ? err.message : String(err),
          });
        }
        return this.cachedManifest;
      } finally {
        this.inFlightManifestPromise = null;
      }
    })();

    return this.inFlightManifestPromise;
  }

  /**
   * Revalidates a fresh cached collection against sync_manifest in the background if the 30s
   * manifest recheck window has elapsed, syncing ONLY if remote version differs.
   */
  private async revalidateInBackgroundIfChanged<T>(
    key: PublicCollectionKey,
    cached: CachedCollectionRecord<T>
  ): Promise<void> {
    if (this.backgroundRevalidatingKeys.has(key)) return;
    if (!this.backend || this.backend.isQuotaExceeded() || this.isBrowserOffline()) return;

    this.backgroundRevalidatingKeys.add(key);
    try {
      const manifest = await this.getOrFetchManifest(false);
      const remoteVersion = manifest?.versions?.[key] ?? null;
      if (remoteVersion !== null && remoteVersion !== cached.version) {
        await this.syncCollection<T>(key, {
          forceFull: false,
          forceManifestCheck: false,
          existingCache: cached,
        });
      }
    } finally {
      this.backgroundRevalidatingKeys.delete(key);
    }
  }

  /**
   * Hydrates immediately from IndexedDB/memory cache, and revalidates in background ONLY
   * when cache is missing, expired, or manifest recheck window has elapsed (1 manifest read -> 0 collection reads if unchanged).
   */
  subscribeCollection<T>(
    key: PublicCollectionKey,
    callback: (data: T, source: CacheSourceKind) => void
  ): () => void {
    let set = this.subscribers.get(key);
    if (!set) {
      set = new Set();
      this.subscribers.set(key, set);
    }
    const wrapped = callback as (data: unknown, source: CacheSourceKind) => void;
    set.add(wrapped);

    void this.loadCollection(key, { emitToCaller: (d, src) => callback(d as T, src) });

    return () => {
      const current = this.subscribers.get(key);
      if (current) {
        current.delete(wrapped);
      }
    };
  }

  async loadCollection<T>(
    key: PublicCollectionKey,
    options?: {
      forceRefresh?: boolean;
      forceManifestCheck?: boolean;
      emitToCaller?: (data: T, source: CacheSourceKind) => void;
    }
  ): Promise<{ data: T; source: CacheSourceKind }> {
    await this.ensureMetaLoaded();
    const cfg = this.configs.get(key) as CollectionFetchConfig<T> | undefined;
    if (!cfg) {
      throw new Error(`Collection "${key}" is not registered in DataSyncService`);
    }

    const cached = await SmartCache.getCollection<T>(key);
    const now = Date.now();

    if (cached && !options?.forceRefresh) {
      FirestoreAuditMetrics.recordCacheHit();
      options?.emitToCaller?.(cached.data, 'cache');

      if (isCacheRecordFresh(cached, now)) {
        if (options?.forceManifestCheck) {
          const synced = await this.syncCollection<T>(key, {
            forceFull: false,
            forceManifestCheck: true,
            existingCache: cached,
          });
          if (synced) {
            return { data: synced.data, source: synced.source };
          }
        } else if (Date.now() - this.lastManifestCheckAtMs >= MANIFEST_RECHECK_WINDOW_MS) {
          void this.revalidateInBackgroundIfChanged(key, cached);
        }
        return { data: cached.data, source: 'cache' };
      }
    } else if (!cached) {
      FirestoreAuditMetrics.recordCacheMiss();
      // Immediately deliver defaultValue so UI renders smoothly without hanging
      options?.emitToCaller?.(cfg.defaultValue, 'fallback');
    }

    // Cache missing, expired, or forceRefresh requested -> run single-flight sync
    const synced = await this.syncCollection<T>(key, {
      forceFull: Boolean(options?.forceRefresh),
      forceManifestCheck: Boolean(options?.forceManifestCheck || options?.forceRefresh),
      existingCache: cached,
    });

    if (synced) {
      return { data: synced.data, source: synced.source };
    }

    if (cached) {
      return { data: cached.data, source: 'cache' };
    }
    return { data: cfg.defaultValue, source: 'fallback' };
  }

  private async syncCollection<T>(
    key: PublicCollectionKey,
    options: {
      forceFull: boolean;
      forceManifestCheck: boolean;
      existingCache: CachedCollectionRecord<T> | null;
    }
  ): Promise<CachedCollectionRecord<T> | null> {
    const existingPromise = this.inFlightSyncs.get(key) as Promise<CachedCollectionRecord<T> | null> | undefined;
    if (existingPromise) {
      return existingPromise;
    }

    const task = (async (): Promise<CachedCollectionRecord<T> | null> => {
      const cfg = this.configs.get(key) as CollectionFetchConfig<T> | undefined;
      if (!cfg) return options.existingCache;

      const policy = CACHE_POLICIES[key];
      const existingCache = options.existingCache || (await SmartCache.getCollection<T>(key));

      if (!this.backend || this.backend.isQuotaExceeded() || this.isBrowserOffline()) {
        const status: SyncHealthStatus = this.backend?.isQuotaExceeded()
          ? 'quota_exceeded'
          : this.isBrowserOffline()
          ? 'offline'
          : 'idle';
        await this.updateGlobalMeta({ syncStatus: status });
        return existingCache;
      }

      const attemptAt = new Date().toISOString();
      await this.updateGlobalMeta({ lastAttemptAt: attemptAt, syncStatus: 'syncing' });

      try {
        const manifest = await this.getOrFetchManifest(options.forceManifestCheck);
        const remoteVersion = manifest?.versions?.[key] ?? null;

        // 1. Version-check optimization: if we already have a full cached snapshot and remote version matches,
        // skip downloading the collection completely (0 collection reads)!
        if (
          !options.forceFull &&
          existingCache &&
          existingCache.hasFullSnapshot &&
          remoteVersion !== null &&
          existingCache.version === remoteVersion
        ) {
          const refreshed: CachedCollectionRecord<T> = {
            ...existingCache,
            lastCheckedAt: new Date().toISOString(),
            expiresAt: Date.now() + policy.ttlMs,
            source: 'cache',
          };
          await SmartCache.setCollection(refreshed);
          FirestoreAuditMetrics.recordSkippedCollectionFetch();
          await this.updateGlobalMeta({
            syncStatus: 'synced',
            lastSuccessSyncAt: refreshed.lastCheckedAt,
            lastError: null,
          });
          return refreshed;
        }

        // 2. Special Medical Terms Delta Path:
        if (key === 'medical_terms_delta') {
          const updatedRecord = await this.syncMedicalTermsDelta(
            cfg as unknown as CollectionFetchConfig<unknown[]>,
            manifest,
            existingCache as CachedCollectionRecord<unknown[]> | null,
            options.forceFull
          );
          if (updatedRecord) {
            this.notifyCollectionSubscribers(key, updatedRecord.data, updatedRecord.source);
            await this.updateGlobalMeta({
              syncStatus: 'synced',
              lastSuccessSyncAt: updatedRecord.lastSyncAt,
              lastError: null,
            });
          }
          return updatedRecord as CachedCollectionRecord<T> | null;
        }

        const nowIso = new Date().toISOString();
        const targetVersion = remoteVersion ?? (existingCache?.version || 1);

        // 3. Single-document collections (site_config, college_info)
        if (!cfg.isArray && cfg.docId) {
          const raw = await this.backend.fetchSingleDoc(cfg.firestoreCollection, cfg.docId);
          const resolvedData = raw
            ? ((cfg.normalizeItem ? cfg.normalizeItem(cfg.docId, raw) : raw) as T)
            : existingCache?.data ?? cfg.defaultValue;

          const record: CachedCollectionRecord<T> = {
            key,
            data: resolvedData,
            version: targetVersion,
            lastSyncAt: nowIso,
            lastCheckedAt: nowIso,
            expiresAt: Date.now() + policy.ttlMs,
            source: 'cloud',
            itemCount: 1,
            hasFullSnapshot: true,
            byteSizeApprox: estimateByteSize(resolvedData),
          };
          await SmartCache.setCollection(record);
          this.notifyCollectionSubscribers(key, record.data, 'cloud');
          await this.updateGlobalMeta({
            syncStatus: 'synced',
            lastSuccessSyncAt: nowIso,
            lastError: null,
          });
          return record;
        }

        // 4. Array collection with Delta Sync (`updatedAt > lastSyncAt`) + Tombstone Deletions
        const canDeltaSync =
          !options.forceFull &&
          policy.supportsDeltaQuery &&
          Boolean(cfg.updatedAtField) &&
          Boolean(existingCache?.hasFullSnapshot) &&
          Boolean(existingCache?.lastSyncAt) &&
          Array.isArray(existingCache?.data);

        let finalItems: unknown[] = [];

        if (canDeltaSync && existingCache) {
          const deltaRaw = await this.backend.fetchCollection(cfg.firestoreCollection, {
            updatedAfter: existingCache.lastSyncAt,
            updatedAtField: cfg.updatedAtField,
            publishedOnly: Boolean(cfg.publishedOnly),
          });

          const mergedMap = new Map<string, { id: string } & Record<string, unknown>>();
          for (const prevItem of existingCache.data as Array<{ id: string } & Record<string, unknown>>) {
            if (prevItem && prevItem.id) {
              mergedMap.set(prevItem.id, prevItem);
            }
          }

          for (const row of deltaRaw) {
            const normalized = cfg.normalizeItem
              ? (cfg.normalizeItem(row.id, row.data) as { id: string } & Record<string, unknown>)
              : ({ id: row.id, ...row.data } as { id: string } & Record<string, unknown>);
            mergedMap.set(row.id, normalized);
          }

          const tombstones = manifest?.deleted?.[key] || [];
          for (const tomb of tombstones) {
            if (!tomb?.id) continue;
            if (!existingCache.lastSyncAt || tomb.deletedAt >= existingCache.lastSyncAt) {
              mergedMap.delete(tomb.id);
            }
          }

          finalItems = Array.from(mergedMap.values());
        } else {
          // Full snapshot read
          const rawRows = await this.backend.fetchCollection(cfg.firestoreCollection, {
            publishedOnly: Boolean(cfg.publishedOnly),
          });
          finalItems = rawRows.map((row) =>
            cfg.normalizeItem ? cfg.normalizeItem(row.id, row.data) : { id: row.id, ...row.data }
          );

          // Only apply initial defaults if collection has NEVER been seeded or mutated/deleted before
          const wasPreviouslyModifiedOrSeeded =
            (manifest?.versions?.[key] ?? 1) > 1 ||
            (manifest?.deleted?.[key]?.length ?? 0) > 0 ||
            Boolean(manifest?.seededCollections?.[key]);

          if (
            finalItems.length === 0 &&
            !wasPreviouslyModifiedOrSeeded &&
            Array.isArray(cfg.defaultValue) &&
            cfg.defaultValue.length > 0
          ) {
            if (key !== 'ticker_items' && key !== 'announcements' && key !== 'media' && key !== 'drive_files') {
              finalItems = cfg.defaultValue as unknown[];
            }
          }
        }

        if (cfg.sortItems) {
          finalItems = cfg.sortItems(finalItems);
        }

        const record: CachedCollectionRecord<T> = {
          key,
          data: finalItems as unknown as T,
          version: targetVersion,
          lastSyncAt: nowIso,
          lastCheckedAt: nowIso,
          expiresAt: Date.now() + policy.ttlMs,
          source: 'cloud',
          itemCount: finalItems.length,
          hasFullSnapshot: true,
          byteSizeApprox: estimateByteSize(finalItems),
        };

        await SmartCache.setCollection(record);
        this.notifyCollectionSubscribers(key, record.data, 'cloud');
        await this.updateGlobalMeta({
          syncStatus: 'synced',
          lastSuccessSyncAt: nowIso,
          lastError: null,
        });
        return record;
      } catch (err) {
        if (this.backend.isQuotaError(err)) {
          this.backend.markQuotaExceeded();
          await this.updateGlobalMeta({
            syncStatus: 'quota_exceeded',
            lastError: 'تم تجاوز الحد اليومي المجاني لقراءات Firestore',
          });
        } else {
          await this.updateGlobalMeta({
            syncStatus: this.isBrowserOffline() ? 'offline' : 'error',
            lastError: err instanceof Error ? err.message : String(err),
          });
        }
        // Never overwrite valid existing local cache on failure
        return existingCache;
      }
    })();

    this.inFlightSyncs.set(key, task as Promise<CachedCollectionRecord<unknown> | null>);
    try {
      return await task;
    } finally {
      this.inFlightSyncs.delete(key);
    }
  }

  private async syncMedicalTermsDelta(
    cfg: CollectionFetchConfig<unknown[]>,
    manifest: SyncManifest | null,
    existingCache: CachedCollectionRecord<unknown[]> | null,
    forceFull: boolean
  ): Promise<CachedCollectionRecord<unknown[]> | null> {
    const policy = CACHE_POLICIES.medical_terms_delta;
    const nowIso = new Date().toISOString();
    const targetVersion = manifest?.versions?.medical_terms_delta ?? (existingCache?.version || 1);

    const existingMap = new Map<string, { id: string } & Record<string, unknown>>();
    if (Array.isArray(existingCache?.data)) {
      for (const item of existingCache.data as Array<{ id: string } & Record<string, unknown>>) {
        if (item?.id) existingMap.set(item.id, item);
      }
    }

    const modifiedRefs = (manifest?.modifiedTerms || []).filter((ref) => {
      if (!ref?.id) return false;
      if (forceFull || !existingCache?.lastSyncAt) return true;
      return ref.updatedAt > existingCache.lastSyncAt;
    });

    if (modifiedRefs.length > 0 && modifiedRefs.length <= 50 && this.backend) {
      // Targeted single-doc fetches ONLY for recently modified/added terms (minimal reads!)
      for (const ref of modifiedRefs) {
        try {
          const docRes = await this.backend.fetchDocById(cfg.firestoreCollection, ref.id);
          if (docRes) {
            const normalized = cfg.normalizeItem
              ? (cfg.normalizeItem(docRes.id, docRes.data) as { id: string } & Record<string, unknown>)
              : ({ id: docRes.id, ...docRes.data } as { id: string } & Record<string, unknown>);
            existingMap.set(docRes.id, normalized);
          }
        } catch {
          // Skip doc if unpublished draft/needs_review for public viewer
        }
      }
    } else if (forceFull && this.backend) {
      // Bounded paginated read when Admin explicitly triggers full force refresh
      const rows = await this.backend.fetchCollection(cfg.firestoreCollection, {
        verifiedOnly: true,
        limitCount: 100,
      });
      for (const row of rows) {
        const normalized = cfg.normalizeItem
          ? (cfg.normalizeItem(row.id, row.data) as { id: string } & Record<string, unknown>)
          : ({ id: row.id, ...row.data } as { id: string } & Record<string, unknown>);
        existingMap.set(row.id, normalized);
      }
    }

    // Apply deleted tombstones
    const tombstones = manifest?.deleted?.medical_terms_delta || [];
    for (const tomb of tombstones) {
      if (!tomb?.id) continue;
      if (!existingCache?.lastSyncAt || tomb.deletedAt >= existingCache.lastSyncAt) {
        existingMap.delete(tomb.id);
      }
    }

    const deltaItems = Array.from(existingMap.values());
    const record: CachedCollectionRecord<unknown[]> = {
      key: 'medical_terms_delta',
      data: deltaItems,
      version: targetVersion,
      lastSyncAt: nowIso,
      lastCheckedAt: nowIso,
      expiresAt: Date.now() + policy.ttlMs,
      source: modifiedRefs.length > 0 || forceFull ? 'cloud' : existingCache?.source || 'cache',
      itemCount: deltaItems.length,
      hasFullSnapshot: true,
      byteSizeApprox: estimateByteSize(deltaItems),
    };

    await SmartCache.setCollection(record);
    return record;
  }

  /**
   * Called ONLY AFTER a Firestore write (add/update/delete) succeeds on the cloud.
   * Updates local IndexedDB cache immediately, notifies UI subscribers, and bumps `sync_manifest`.
   */
  async recordConfirmedMutation<T extends { id?: string }>(
    key: PublicCollectionKey,
    mutation:
      | { type: 'upsert'; item: T }
      | { type: 'replace'; data: unknown }
      | { type: 'delete'; id: string },
    options?: { skipManifestWrite?: boolean }
  ): Promise<void> {
    await this.ensureMetaLoaded();
    const cfg = this.configs.get(key);
    const policy = CACHE_POLICIES[key];
    const nowIso = new Date().toISOString();

    const currentManifest: SyncManifest = this.cachedManifest
      ? {
          ...this.cachedManifest,
          versions: { ...this.cachedManifest.versions },
          deleted: { ...(this.cachedManifest.deleted || {}) },
          modifiedTerms: [...(this.cachedManifest.modifiedTerms || [])],
        }
      : createEmptyManifest();

    const nextVersion = (currentManifest.versions[key] || 1) + 1;
    currentManifest.versions[key] = nextVersion;
    currentManifest.updatedAt = nowIso;
    currentManifest.seededCollections = {
      ...(currentManifest.seededCollections || {}),
      [key]: true,
    };

    if (mutation.type === 'delete') {
      const existingTombs = [...(currentManifest.deleted?.[key] || [])].filter(
        (t) => t.id !== mutation.id
      );
      existingTombs.unshift({ id: mutation.id, deletedAt: nowIso });
      if (!currentManifest.deleted) currentManifest.deleted = {};
      currentManifest.deleted[key] = existingTombs.slice(0, MAX_TOMBSTONES_PER_COLLECTION);

      if (key === 'medical_terms_delta' && currentManifest.modifiedTerms) {
        currentManifest.modifiedTerms = currentManifest.modifiedTerms.filter(
          (m) => m.id !== mutation.id
        );
      }
    } else if (mutation.type === 'upsert' && key === 'medical_terms_delta' && mutation.item.id) {
      const filtered = (currentManifest.modifiedTerms || []).filter(
        (m) => m.id !== mutation.item.id
      );
      filtered.unshift({ id: mutation.item.id, updatedAt: nowIso });
      currentManifest.modifiedTerms = filtered.slice(0, MAX_MODIFIED_TERM_REFS);
    }

    // Update local IndexedDB cache for this collection
    const cached = await SmartCache.getCollection<unknown>(key);
    let nextData: unknown = cached?.data;

    if (mutation.type === 'replace') {
      nextData = mutation.data;
    } else if (mutation.type === 'upsert') {
      const list = Array.isArray(cached?.data)
        ? [...(cached!.data as Array<{ id?: string }>)]
        : Array.isArray(cfg?.defaultValue)
        ? [...(cfg!.defaultValue as Array<{ id?: string }>)]
        : [];
      const idx = list.findIndex((it) => it && it.id === mutation.item.id);
      if (idx >= 0) {
        list[idx] = mutation.item;
      } else {
        list.unshift(mutation.item);
      }
      nextData = cfg?.sortItems ? cfg.sortItems(list) : list;
    } else if (mutation.type === 'delete') {
      const list = Array.isArray(cached?.data)
        ? (cached!.data as Array<{ id?: string }>).filter((it) => it?.id !== mutation.id)
        : [];
      nextData = cfg?.sortItems ? cfg.sortItems(list) : list;
    }

    const record: CachedCollectionRecord<unknown> = {
      key,
      data: nextData,
      version: nextVersion,
      lastSyncAt: nowIso,
      lastCheckedAt: nowIso,
      expiresAt: Date.now() + policy.ttlMs,
      source: 'cloud',
      itemCount: Array.isArray(nextData) ? nextData.length : 1,
      hasFullSnapshot: cached?.hasFullSnapshot ?? true,
      byteSizeApprox: estimateByteSize(nextData),
    };

    await SmartCache.setCollection(record);
    this.notifyCollectionSubscribers(key, nextData, 'cloud');

    // Persist bumped sync_manifest locally & on Firestore
    this.cachedManifest = currentManifest;
    this.lastManifestCheckAtMs = Date.now();
    await SmartCache.setCollection({
      key: MANIFEST_CACHE_KEY,
      data: currentManifest,
      version: currentManifest.schemaVersion,
      lastSyncAt: nowIso,
      lastCheckedAt: nowIso,
      expiresAt: Date.now() + 15 * 60 * 1000,
      source: 'cloud',
      itemCount: 1,
      hasFullSnapshot: true,
      byteSizeApprox: estimateByteSize(currentManifest),
    });

    let manifestError: string | null = null;
    if (!options?.skipManifestWrite && this.backend && !this.backend.isQuotaExceeded()) {
      try {
        await this.backend.saveSyncManifest(currentManifest);
        FirestoreAuditMetrics.recordWriteConfirmed();
      } catch (err) {
        manifestError = err instanceof Error ? err.message : String(err);
        if (this.backend.isQuotaError(err)) {
          this.backend.markQuotaExceeded();
        }
        console.warn('Could not update sync_manifest on Firestore:', err);
      }
    }

    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage({ type: 'collection_mutated', key, version: nextVersion });
      } catch {
        // ignore channel post errors
      }
    }

    await this.updateGlobalMeta({
      syncStatus: manifestError ? 'error' : 'synced',
      lastSuccessSyncAt: manifestError ? this.globalMeta.lastSuccessSyncAt : nowIso,
      lastError: manifestError ? `تم حفظ التعديل محلياً وسحابياً مع تعذر تحديث بيان المزامنة: ${manifestError}` : null,
    });
  }

  /**
   * Manual sync triggered by Admin Dashboard Cache Manager.
   */
  async manualSmartSyncAll(options?: { forceFull?: boolean }): Promise<{
    success: boolean;
    updatedCollections: PublicCollectionKey[];
    skippedCollections: PublicCollectionKey[];
    status: SyncHealthStatus;
    error?: string;
  }> {
    await this.ensureMetaLoaded();
    if (!this.backend) {
      return {
        success: false,
        updatedCollections: [],
        skippedCollections: [],
        status: 'error',
        error: 'محرك المزامنة غير مهيأ بعد.',
      };
    }

    if (this.isBrowserOffline()) {
      await this.updateGlobalMeta({
        syncStatus: 'offline',
        lastAttemptAt: new Date().toISOString(),
        lastError: 'الجهاز غير متصل بالإنترنت حالياً.',
      });
      return {
        success: false,
        updatedCollections: [],
        skippedCollections: [],
        status: 'offline',
        error: 'الجهاز غير متصل بالإنترنت حالياً. تم الحفاظ على البيانات المخزنة محلياً.',
      };
    }

    if (this.backend.isQuotaExceeded()) {
      await this.updateGlobalMeta({
        syncStatus: 'quota_exceeded',
        lastAttemptAt: new Date().toISOString(),
      });
      return {
        success: false,
        updatedCollections: [],
        skippedCollections: [],
        status: 'quota_exceeded',
        error: 'تم تجاوز حصة القراءة اليومية المجانية في Firestore مؤقتاً.',
      };
    }

    const updatedCollections: PublicCollectionKey[] = [];
    const skippedCollections: PublicCollectionKey[] = [];

    try {
      const manifest = await this.getOrFetchManifest(true);
      const targetKeys: PublicCollectionKey[] = [
        'site_config',
        'ticker_items',
        'college_info',
        'subjects_data',
        'study_resources',
        'articles',
        'videos',
        'announcements',
        'media',
        'drive_files',
        'medical_terms_delta',
        'innova_info',
        'innova_members',
        'innova_contents',
      ];

      for (const k of targetKeys) {
        if (!this.configs.has(k)) continue;
        const existing = await SmartCache.getCollection(k);
        const remoteVer = manifest?.versions?.[k] ?? null;

        if (
          !options?.forceFull &&
          existing?.hasFullSnapshot &&
          remoteVer !== null &&
          existing.version === remoteVer
        ) {
          skippedCollections.push(k);
          await SmartCache.setCollection({
            ...existing,
            lastCheckedAt: new Date().toISOString(),
            expiresAt: Date.now() + CACHE_POLICIES[k].ttlMs,
            source: 'cache',
          });
          FirestoreAuditMetrics.recordSkippedCollectionFetch();
          continue;
        }

        const res = await this.syncCollection(k, {
          forceFull: Boolean(options?.forceFull),
          forceManifestCheck: false,
          existingCache: existing,
        });
        if (res) {
          updatedCollections.push(k);
        }
      }

      const nowIso = new Date().toISOString();
      await this.updateGlobalMeta({
        syncStatus: 'synced',
        lastAttemptAt: nowIso,
        lastSuccessSyncAt: nowIso,
        lastError: null,
      });

      return {
        success: true,
        updatedCollections,
        skippedCollections,
        status: 'synced',
      };
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      const nextStatus: SyncHealthStatus = this.backend.isQuotaError(err)
        ? 'quota_exceeded'
        : this.isBrowserOffline()
        ? 'offline'
        : 'error';
      await this.updateGlobalMeta({
        syncStatus: nextStatus,
        lastAttemptAt: new Date().toISOString(),
        lastError: errMsg,
      });
      return {
        success: false,
        updatedCollections,
        skippedCollections,
        status: nextStatus,
        error: errMsg,
      };
    }
  }

  /**
   * Admin-only clear of PUBLIC CMS IndexedDB cache.
   * Explicitly preserves all student personal data (lectures, GPA, bookmarks, workspace drafts, preferences).
   */
  async clearPublicCacheAdminOnly(): Promise<void> {
    const keysToDelete: string[] = [...PUBLIC_COLLECTION_KEYS, MANIFEST_CACHE_KEY];
    await SmartCache.clearKeys(keysToDelete);
    this.cachedManifest = null;
    this.lastManifestCheckAtMs = 0;

    // Also clear legacy public CMS keys ONLY (never student personal keys!)
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('daleelak_site_config_v2');
        localStorage.removeItem('daleelak_ticker_items_v1');
        localStorage.removeItem('daleelak_medical_terms_cache_v1');
      } catch {
        // ignore
      }
    }

    await this.updateGlobalMeta({
      syncStatus: 'idle',
      lastError: null,
    });
  }

  async getCacheDiagnostics(): Promise<CacheDiagnosticsSnapshot> {
    await this.ensureMetaLoaded();
    const allStored = await SmartCache.listCollections();
    const byKey = new Map(allStored.map((r) => [r.key, r]));
    const now = Date.now();

    let totalCachedBytes = 0;
    let totalCachedItems = 0;

    const collections: CollectionDiagnosticInfo[] = PUBLIC_COLLECTION_KEYS.map((key) => {
      const rec = byKey.get(key);
      const policy = CACHE_POLICIES[key];
      if (rec) {
        totalCachedBytes += rec.byteSizeApprox || 0;
        totalCachedItems += rec.itemCount || 0;
      }
      return {
        key,
        labelAr: policy.labelAr,
        cached: Boolean(rec),
        itemCount: rec?.itemCount ?? 0,
        byteSizeApprox: rec?.byteSizeApprox ?? 0,
        version: rec?.version ?? 0,
        cloudVersion: this.cachedManifest?.versions?.[key] ?? null,
        lastSyncAt: rec?.lastSyncAt ?? null,
        lastCheckedAt: rec?.lastCheckedAt ?? null,
        expiresAt: rec?.expiresAt ?? null,
        isExpired: rec ? !isCacheRecordFresh(rec, now) : true,
        source: rec?.source ?? 'none',
      };
    });

    return {
      indexedDbSupported: SmartCache.isIndexedDbSupported(),
      isOnline: !this.isBrowserOffline(),
      isQuotaExceeded: Boolean(this.backend?.isQuotaExceeded()),
      syncStatus: this.backend?.isQuotaExceeded()
        ? 'quota_exceeded'
        : this.isBrowserOffline()
        ? 'offline'
        : this.globalMeta.syncStatus,
      lastSuccessSyncAt: this.globalMeta.lastSuccessSyncAt,
      lastAttemptAt: this.globalMeta.lastAttemptAt,
      lastError: this.globalMeta.lastError,
      manifestUpdatedAt: this.cachedManifest?.updatedAt ?? null,
      totalCachedBytes,
      totalCachedItems,
      collections,
      metrics: FirestoreAuditMetrics.getSnapshot(),
    };
  }

  /**
   * Helper for tests to clear memory cache while keeping IndexedDB persisted (simulates browser reload).
   */
  simulateAppReloadInMemory(): void {
    SmartCache.resetMemoryCacheOnly();
    this.cachedManifest = null;
    this.lastManifestCheckAtMs = 0;
    this.metaLoaded = false;
  }
}

export const DataSyncService = new CentralizedDataSyncEngine();
