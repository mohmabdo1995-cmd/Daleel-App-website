// Smart IndexedDB Caching & Telemetry Layer for Daleelak AlJamaei
// Persists public CMS catalogs and sync metadata locally in IndexedDB,
// keeping localStorage strictly for lightweight UI settings.

export type PublicCollectionKey =
  | 'site_config'
  | 'ticker_items'
  | 'college_info'
  | 'subjects_data'
  | 'study_resources'
  | 'articles'
  | 'videos'
  | 'announcements'
  | 'media'
  | 'drive_files'
  | 'medical_terms_delta'
  | 'innova_info'
  | 'innova_members'
  | 'innova_contents'
  | 'admin_logs';

export type CacheSourceKind = 'cloud' | 'cache' | 'fallback';
export type SyncHealthStatus = 'idle' | 'syncing' | 'synced' | 'offline' | 'quota_exceeded' | 'error';

export interface DeletedTombstone {
  id: string;
  deletedAt: string;
}

export interface ModifiedTermRef {
  id: string;
  updatedAt: string;
}

export interface SyncManifest {
  schemaVersion: number;
  updatedAt: string;
  versions: Record<PublicCollectionKey, number>;
  deleted?: Partial<Record<PublicCollectionKey, DeletedTombstone[]>>;
  modifiedTerms?: ModifiedTermRef[];
  seededCollections?: Partial<Record<PublicCollectionKey, boolean>>;
}

export interface CachePolicy {
  key: PublicCollectionKey;
  labelAr: string;
  ttlMs: number;
  supportsDeltaQuery: boolean;
}

export const CACHE_POLICIES: Record<PublicCollectionKey, CachePolicy> = {
  site_config: {
    key: 'site_config',
    labelAr: 'إعدادات الموقع العامة',
    ttlMs: 15 * 60 * 1000, // 15 min
    supportsDeltaQuery: false,
  },
  ticker_items: {
    key: 'ticker_items',
    labelAr: 'شريط الأخبار المتحرك',
    ttlMs: 15 * 60 * 1000, // 15 min
    supportsDeltaQuery: true,
  },
  college_info: {
    key: 'college_info',
    labelAr: 'معلومات الكلية',
    ttlMs: 6 * 60 * 60 * 1000, // 6 hours
    supportsDeltaQuery: false,
  },
  subjects_data: {
    key: 'subjects_data',
    labelAr: 'المواد الأكاديمية',
    ttlMs: 2 * 60 * 60 * 1000, // 2 hours
    supportsDeltaQuery: false,
  },
  study_resources: {
    key: 'study_resources',
    labelAr: 'مصادر الدراسة والمكتبة',
    ttlMs: 2 * 60 * 60 * 1000, // 2 hours
    supportsDeltaQuery: true,
  },
  articles: {
    key: 'articles',
    labelAr: 'المقالات والأبحاث',
    ttlMs: 60 * 60 * 1000, // 1 hour
    supportsDeltaQuery: true,
  },
  videos: {
    key: 'videos',
    labelAr: 'المكتبة المرئية',
    ttlMs: 60 * 60 * 1000, // 1 hour
    supportsDeltaQuery: false,
  },
  announcements: {
    key: 'announcements',
    labelAr: 'الإعلانات والتنبيهات',
    ttlMs: 30 * 60 * 1000, // 30 min
    supportsDeltaQuery: false,
  },
  media: {
    key: 'media',
    labelAr: 'الوسائط والصور',
    ttlMs: 60 * 60 * 1000, // 1 hour
    supportsDeltaQuery: false,
  },
  drive_files: {
    key: 'drive_files',
    labelAr: 'ملفات Google Drive',
    ttlMs: 60 * 60 * 1000, // 1 hour
    supportsDeltaQuery: false,
  },
  medical_terms_delta: {
    key: 'medical_terms_delta',
    labelAr: 'تحديثات الفهرس الطبي',
    ttlMs: 6 * 60 * 60 * 1000, // 6 hours
    supportsDeltaQuery: true,
  },
  innova_info: {
    key: 'innova_info',
    labelAr: 'بيانات وتعريف جمعية إنوفا',
    ttlMs: 2 * 60 * 60 * 1000, // 2 hours
    supportsDeltaQuery: false,
  },
  innova_members: {
    key: 'innova_members',
    labelAr: 'أعضاء المجلس التنفيذي لإنوفا',
    ttlMs: 60 * 60 * 1000, // 1 hour
    supportsDeltaQuery: true,
  },
  innova_contents: {
    key: 'innova_contents',
    labelAr: 'مقالات وفعاليات جمعية إنوفا',
    ttlMs: 60 * 60 * 1000, // 1 hour
    supportsDeltaQuery: true,
  },
  admin_logs: {
    key: 'admin_logs',
    labelAr: 'سجل عمليات المشرف',
    ttlMs: 15 * 60 * 1000, // 15 min
    supportsDeltaQuery: false,
  },
};

export interface CachedCollectionRecord<T = unknown> {
  key: string;
  data: T;
  version: number;
  lastSyncAt: string; // ISO
  lastCheckedAt: string; // ISO
  expiresAt: number; // epoch ms
  source: CacheSourceKind;
  itemCount: number;
  hasFullSnapshot: boolean;
  byteSizeApprox: number;
}

export interface SyncMetaRecord {
  key: string;
  lastSuccessSyncAt: string | null;
  lastAttemptAt: string | null;
  lastError: string | null;
  syncStatus: SyncHealthStatus;
}

export interface ReadAuditSnapshot {
  sessionStartedAt: string;
  getDocCalls: number;
  getDocsCalls: number;
  onSnapshotEvents: number;
  manifestChecks: number;
  totalDocsRead: number;
  cacheHits: number;
  cacheMisses: number;
  skippedCollectionFetches: number;
  writesConfirmed: number;
  readsByCollection: Record<string, number>;
}

const DB_NAME = 'daleelak_smart_cache_db';
const DB_VERSION = 1;
const STORE_COLLECTIONS = 'collections';
const STORE_META = 'sync_meta';

const DEFAULT_MANIFEST: SyncManifest = {
  schemaVersion: 1,
  updatedAt: new Date(0).toISOString(),
  versions: {
    site_config: 1,
    ticker_items: 1,
    college_info: 1,
    subjects_data: 1,
    study_resources: 1,
    articles: 1,
    videos: 1,
    announcements: 1,
    media: 1,
    drive_files: 1,
    medical_terms_delta: 1,
    innova_info: 1,
    innova_members: 1,
    innova_contents: 1,
    admin_logs: 1,
  },
  deleted: {},
  modifiedTerms: [],
};

export function createEmptyManifest(): SyncManifest {
  return {
    schemaVersion: 1,
    updatedAt: new Date().toISOString(),
    versions: { ...DEFAULT_MANIFEST.versions },
    deleted: {},
    modifiedTerms: [],
  };
}

// --- Read & Cache Telemetry Engine ---
class FirestoreMetricsTracker {
  private metrics: ReadAuditSnapshot = {
    sessionStartedAt: new Date().toISOString(),
    getDocCalls: 0,
    getDocsCalls: 0,
    onSnapshotEvents: 0,
    manifestChecks: 0,
    totalDocsRead: 0,
    cacheHits: 0,
    cacheMisses: 0,
    skippedCollectionFetches: 0,
    writesConfirmed: 0,
    readsByCollection: {},
  };

  private listeners = new Set<(snap: ReadAuditSnapshot) => void>();

  private emit() {
    const snap = this.getSnapshot();
    this.listeners.forEach((cb) => {
      try {
        cb(snap);
      } catch {
        // ignore listener errors
      }
    });
  }

  recordGetDoc(collectionName: string, docsRead = 1, isManifest = false) {
    this.metrics.getDocCalls += 1;
    if (isManifest) this.metrics.manifestChecks += 1;
    this.metrics.totalDocsRead += docsRead;
    this.metrics.readsByCollection[collectionName] =
      (this.metrics.readsByCollection[collectionName] || 0) + docsRead;
    this.emit();
  }

  recordGetDocs(collectionName: string, docsRead: number) {
    this.metrics.getDocsCalls += 1;
    this.metrics.totalDocsRead += docsRead;
    this.metrics.readsByCollection[collectionName] =
      (this.metrics.readsByCollection[collectionName] || 0) + docsRead;
    this.emit();
  }

  recordSnapshotDelivery(collectionName: string, docsRead: number) {
    this.metrics.onSnapshotEvents += 1;
    this.metrics.totalDocsRead += docsRead;
    this.metrics.readsByCollection[collectionName] =
      (this.metrics.readsByCollection[collectionName] || 0) + docsRead;
    this.emit();
  }

  recordCacheHit() {
    this.metrics.cacheHits += 1;
    this.emit();
  }

  recordCacheMiss() {
    this.metrics.cacheMisses += 1;
    this.emit();
  }

  recordSkippedCollectionFetch() {
    this.metrics.skippedCollectionFetches += 1;
    this.emit();
  }

  recordWriteConfirmed() {
    this.metrics.writesConfirmed += 1;
    this.emit();
  }

  getSnapshot(): ReadAuditSnapshot {
    return {
      ...this.metrics,
      readsByCollection: { ...this.metrics.readsByCollection },
    };
  }

  reset() {
    this.metrics = {
      sessionStartedAt: new Date().toISOString(),
      getDocCalls: 0,
      getDocsCalls: 0,
      onSnapshotEvents: 0,
      manifestChecks: 0,
      totalDocsRead: 0,
      cacheHits: 0,
      cacheMisses: 0,
      skippedCollectionFetches: 0,
      writesConfirmed: 0,
      readsByCollection: {},
    };
    this.emit();
  }

  subscribe(cb: (snap: ReadAuditSnapshot) => void): () => void {
    this.listeners.add(cb);
    cb(this.getSnapshot());
    return () => {
      this.listeners.delete(cb);
    };
  }
}

export const FirestoreAuditMetrics = new FirestoreMetricsTracker();

// --- IndexedDB Storage Adapter with Memory Fallback ---
class SmartIndexedDbStore {
  private dbPromise: Promise<IDBDatabase | null> | null = null;
  private memoryCollections = new Map<string, CachedCollectionRecord<unknown>>();
  private memoryMeta = new Map<string, SyncMetaRecord>();
  private idbAvailable: boolean | null = null;

  isIndexedDbSupported(): boolean {
    if (this.idbAvailable !== null) return this.idbAvailable;
    try {
      this.idbAvailable =
        typeof window !== 'undefined' &&
        typeof window.indexedDB !== 'undefined' &&
        window.indexedDB !== null;
    } catch {
      this.idbAvailable = false;
    }
    return this.idbAvailable;
  }

  private async openDb(): Promise<IDBDatabase | null> {
    if (!this.isIndexedDbSupported()) return null;
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise<IDBDatabase | null>((resolve) => {
      try {
        const req = window.indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains(STORE_COLLECTIONS)) {
            db.createObjectStore(STORE_COLLECTIONS, { keyPath: 'key' });
          }
          if (!db.objectStoreNames.contains(STORE_META)) {
            db.createObjectStore(STORE_META, { keyPath: 'key' });
          }
        };
        req.onsuccess = () => {
          const db = req.result;
          db.onversionchange = () => {
            db.close();
            this.dbPromise = null;
          };
          resolve(db);
        };
        req.onerror = () => {
          this.idbAvailable = false;
          resolve(null);
        };
        req.onblocked = () => {
          resolve(null);
        };
      } catch {
        this.idbAvailable = false;
        resolve(null);
      }
    });

    return this.dbPromise;
  }

  async getCollection<T>(key: string): Promise<CachedCollectionRecord<T> | null> {
    const mem = this.memoryCollections.get(key) as CachedCollectionRecord<T> | undefined;
    if (mem) return mem;

    const db = await this.openDb();
    if (!db) return null;

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(STORE_COLLECTIONS, 'readonly');
        const store = tx.objectStore(STORE_COLLECTIONS);
        const req = store.get(key);
        req.onsuccess = () => {
          const val = (req.result as CachedCollectionRecord<T> | undefined) || null;
          if (val) {
            this.memoryCollections.set(key, val);
          }
          resolve(val);
        };
        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });
  }

  async setCollection<T>(record: CachedCollectionRecord<T>): Promise<void> {
    this.memoryCollections.set(record.key, record);
    const db = await this.openDb();
    if (!db) return;

    await new Promise<void>((resolve) => {
      try {
        const tx = db.transaction(STORE_COLLECTIONS, 'readwrite');
        const store = tx.objectStore(STORE_COLLECTIONS);
        store.put(record);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
        tx.onabort = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  async deleteCollection(key: string): Promise<void> {
    this.memoryCollections.delete(key);
    const db = await this.openDb();
    if (!db) return;

    await new Promise<void>((resolve) => {
      try {
        const tx = db.transaction(STORE_COLLECTIONS, 'readwrite');
        tx.objectStore(STORE_COLLECTIONS).delete(key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  async listCollections(): Promise<CachedCollectionRecord<unknown>[]> {
    const db = await this.openDb();
    if (!db) {
      return Array.from(this.memoryCollections.values());
    }

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(STORE_COLLECTIONS, 'readonly');
        const req = tx.objectStore(STORE_COLLECTIONS).getAll();
        req.onsuccess = () => {
          const rows = Array.isArray(req.result) ? req.result : [];
          rows.forEach((r) => this.memoryCollections.set(r.key, r));
          resolve(rows);
        };
        req.onerror = () => resolve(Array.from(this.memoryCollections.values()));
      } catch {
        resolve(Array.from(this.memoryCollections.values()));
      }
    });
  }

  async getMeta(key: string): Promise<SyncMetaRecord | null> {
    const mem = this.memoryMeta.get(key);
    if (mem) return mem;

    const db = await this.openDb();
    if (!db) return null;

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(STORE_META, 'readonly');
        const req = tx.objectStore(STORE_META).get(key);
        req.onsuccess = () => {
          const val = (req.result as SyncMetaRecord | undefined) || null;
          if (val) this.memoryMeta.set(key, val);
          resolve(val);
        };
        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });
  }

  async setMeta(record: SyncMetaRecord): Promise<void> {
    this.memoryMeta.set(record.key, record);
    const db = await this.openDb();
    if (!db) return;

    await new Promise<void>((resolve) => {
      try {
        const tx = db.transaction(STORE_META, 'readwrite');
        tx.objectStore(STORE_META).put(record);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  async clearKeys(keys: string[]): Promise<void> {
    keys.forEach((k) => {
      this.memoryCollections.delete(k);
      this.memoryMeta.delete(k);
    });

    const db = await this.openDb();
    if (!db) return;

    await new Promise<void>((resolve) => {
      try {
        const tx = db.transaction([STORE_COLLECTIONS, STORE_META], 'readwrite');
        const colStore = tx.objectStore(STORE_COLLECTIONS);
        const metaStore = tx.objectStore(STORE_META);
        keys.forEach((k) => {
          colStore.delete(k);
          metaStore.delete(k);
        });
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  /**
   * Resets volatile in-memory caches ONLY (useful in deterministic tests / verification).
   */
  resetMemoryCacheOnly(): void {
    this.memoryCollections.clear();
    this.memoryMeta.clear();
  }
}

export const SmartCache = new SmartIndexedDbStore();

export function estimateByteSize(value: unknown): number {
  try {
    return new Blob([JSON.stringify(value)]).size;
  } catch {
    try {
      return JSON.stringify(value).length * 2;
    } catch {
      return 0;
    }
  }
}

export function isCacheRecordFresh(record: CachedCollectionRecord | null, now = Date.now()): boolean {
  if (!record) return false;
  return Number.isFinite(record.expiresAt) && record.expiresAt > now;
}
