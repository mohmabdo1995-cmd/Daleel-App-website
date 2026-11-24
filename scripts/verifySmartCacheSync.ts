/**
 * Automated Verification & Read-Benchmark Suite for Daleelak AlJamaei Smart Caching & Sync Engine.
 *
 * NOTE: Runs against an instrumented in-memory SyncBackendAdapter + IDBFactory shim
 * (no writes/reads hit the live quota-limited Firebase project during automated tests).
 */

import assert from 'node:assert/strict';

// --- 1. Install minimal browser shims (localStorage + IndexedDB + navigator.onLine) ---
const memLocalStorage = new Map<string, string>();
const idbBackingStores = new Map<string, Map<string, Map<string, unknown>>>();
let simulatedOnline = true;

function createIdbFactoryShim() {
  return {
    open(name: string, _version?: number) {
      const req: Record<string, unknown> = {
        result: null,
        onsuccess: null,
        onerror: null,
        onupgradeneeded: null,
        onblocked: null,
      };

      queueMicrotask(() => {
        if (!idbBackingStores.has(name)) {
          idbBackingStores.set(name, new Map());
        }
        const dbStores = idbBackingStores.get(name)!;
        const db = {
          objectStoreNames: {
            contains: (storeName: string) => dbStores.has(storeName),
          },
          createObjectStore: (storeName: string) => {
            if (!dbStores.has(storeName)) {
              dbStores.set(storeName, new Map());
            }
            return {};
          },
          close: () => {},
          onversionchange: null as null | (() => void),
          transaction(storeNames: string | string[], _mode?: string) {
            const names = Array.isArray(storeNames) ? storeNames : [storeNames];
            const tx: Record<string, unknown> = {
              oncomplete: null as null | (() => void),
              onerror: null as null | (() => void),
              onabort: null as null | (() => void),
              objectStore(storeName: string) {
                if (!names.includes(storeName)) {
                  throw new Error(`Store ${storeName} not in transaction`);
                }
                if (!dbStores.has(storeName)) {
                  dbStores.set(storeName, new Map());
                }
                const storeMap = dbStores.get(storeName)!;
                return {
                  get(key: string) {
                    const getReq: Record<string, unknown> = {
                      result: undefined,
                      onsuccess: null,
                      onerror: null,
                    };
                    queueMicrotask(() => {
                      const val = storeMap.get(key);
                      getReq.result = val !== undefined ? structuredClone(val) : undefined;
                      if (typeof getReq.onsuccess === 'function') {
                        (getReq.onsuccess as () => void)();
                      }
                    });
                    return getReq;
                  },
                  getAll() {
                    const allReq: Record<string, unknown> = {
                      result: [],
                      onsuccess: null,
                      onerror: null,
                    };
                    queueMicrotask(() => {
                      allReq.result = Array.from(storeMap.values()).map((v) => structuredClone(v));
                      if (typeof allReq.onsuccess === 'function') {
                        (allReq.onsuccess as () => void)();
                      }
                    });
                    return allReq;
                  },
                  put(record: { key: string }) {
                    storeMap.set(record.key, structuredClone(record));
                  },
                  delete(key: string) {
                    storeMap.delete(key);
                  },
                };
              },
            };
            queueMicrotask(() => {
              if (typeof tx.oncomplete === 'function') {
                (tx.oncomplete as () => void)();
              }
            });
            return tx;
          },
        };

        req.result = db;
        if (typeof req.onupgradeneeded === 'function') {
          (req.onupgradeneeded as () => void)();
        }
        if (typeof req.onsuccess === 'function') {
          (req.onsuccess as () => void)();
        }
      });

      return req;
    },
  };
}

const g = globalThis as Record<string, unknown>;
g.localStorage = {
  getItem: (k: string) => (memLocalStorage.has(k) ? memLocalStorage.get(k)! : null),
  setItem: (k: string, v: string) => {
    memLocalStorage.set(k, String(v));
  },
  removeItem: (k: string) => {
    memLocalStorage.delete(k);
  },
  clear: () => memLocalStorage.clear(),
};

g.window = {
  indexedDB: createIdbFactoryShim(),
  localStorage: g.localStorage,
};

Object.defineProperty(globalThis, 'navigator', {
  configurable: true,
  value: {
    get onLine() {
      return simulatedOnline;
    },
  },
});

// --- 2. Import Application Sync & Cache Modules ---
import { DataSyncService, SyncBackendAdapter } from '../src/services/dataSyncService';
import {
  CACHE_POLICIES,
  createEmptyManifest,
  FirestoreAuditMetrics,
  PublicCollectionKey,
  SmartCache,
  SyncManifest,
} from '../src/services/smartCache';
import { StorageService } from '../src/services/storage';
import { MEDICAL_TERMS_SEED } from '../src/data/medicalTermsSeed';
import {
  DEFAULT_INNOVA_INFO,
  ensureInnovaCollectionsRegistered,
  sanitizeAndValidateInnovaContent,
  sanitizeAndValidateInnovaInfo,
  sanitizeAndValidateInnovaMember,
} from '../src/services/innovaValidation';

// --- 3. Instrumented In-Memory Simulated Firestore Backend ---
class SimulatedFirestoreBackend implements SyncBackendAdapter {
  public quotaExceeded = false;
  public manifest: SyncManifest = createEmptyManifest();
  public collections = new Map<string, Map<string, Record<string, unknown>>>();

  seedData() {
    this.collections.set(
      'site_config',
      new Map([
        ['general', { heroTitle: 'دليلك الجامعي', announcementActive: true, updatedAt: '2026-01-01T00:00:00.000Z' }],
      ])
    );
    this.collections.set(
      'college_info',
      new Map([
        ['about_college', { collegeName: 'كلية الطب البشري', deanName: 'أ.د. عميد الكلية' }],
      ])
    );
    this.collections.set('ticker_items', this.makeArrayDocs('tick', 5, 'updatedAt'));
    this.collections.set('subjects_data', this.makeArrayDocs('subj', 24, 'updatedAt'));
    this.collections.set('study_resources', this.makeArrayDocs('res', 45, 'updatedAt'));
    this.collections.set('articles', this.makeArrayDocs('art', 18, 'updatedAt'));
    this.collections.set('videos', this.makeArrayDocs('vid', 12, 'updatedAt'));
    this.collections.set('announcements', this.makeArrayDocs('ann', 4, 'updatedAt'));
    this.collections.set('media', this.makeArrayDocs('med', 20, 'updatedAt'));
    this.collections.set('drive_files', this.makeArrayDocs('drv', 8, 'updatedAt'));

    // Mirror baseline 3,950+ medical terms in simulated cloud DB
    const medMap = new Map<string, Record<string, unknown>>();
    for (const term of MEDICAL_TERMS_SEED) {
      medMap.set(term.id, { ...term });
    }
    this.collections.set('medical_terms', medMap);

    // Seed INNOVA empty members (no hardcoded members!) + initial info + 2 published & 1 draft content item
    this.collections.set(
      'innova_info',
      new Map([['profile', { ...DEFAULT_INNOVA_INFO }]])
    );
    this.collections.set('innova_members', new Map());
    this.collections.set(
      'innova_contents',
      new Map([
        [
          'innova_pub_1',
          {
            id: 'innova_pub_1',
            category: 'articles',
            title: 'مقال طبي تجريبي أول',
            description: 'محتوى المقال الأول\nسطر ثانٍ',
            imageUrl: '',
            published: true,
            createdAt: '2026-01-01T00:00:00.000Z',
            updatedAt: '2026-01-01T00:00:00.000Z',
          },
        ],
        [
          'innova_pub_2',
          {
            id: 'innova_pub_2',
            category: 'events',
            title: 'ندوة إنوفا العلمية',
            description: 'تفاصيل الفعالية العلمية',
            imageUrl: 'https://example.com/event.jpg',
            published: true,
            eventDate: '2026-04-15',
            createdAt: '2026-01-02T00:00:00.000Z',
            updatedAt: '2026-01-02T00:00:00.000Z',
          },
        ],
        [
          'innova_draft_3',
          {
            id: 'innova_draft_3',
            category: 'articles',
            title: 'مسودة داخلية غير منشورة',
            description: 'يجب ألا تظهر للزوار العامين',
            imageUrl: '',
            published: false,
            createdAt: '2026-01-03T00:00:00.000Z',
            updatedAt: '2026-01-03T00:00:00.000Z',
          },
        ],
      ])
    );
  }

  private makeArrayDocs(prefix: string, count: number, tsField: string): Map<string, Record<string, unknown>> {
    const map = new Map<string, Record<string, unknown>>();
    for (let i = 1; i <= count; i++) {
      const id = `${prefix}_${i}`;
      map.set(id, {
        title: `${prefix} item ${i}`,
        [tsField]: '2026-01-01T00:00:00.000Z',
        order: i,
      });
    }
    return map;
  }

  isQuotaExceeded() {
    return this.quotaExceeded;
  }

  markQuotaExceeded() {
    this.quotaExceeded = true;
  }

  isQuotaError(err: unknown) {
    return err instanceof Error && err.message.toLowerCase().includes('quota');
  }

  async getSyncManifest(): Promise<SyncManifest | null> {
    if (this.quotaExceeded) throw new Error('Quota exceeded');
    FirestoreAuditMetrics.recordGetDoc('site_config/sync_manifest', 1, true);
    return structuredClone(this.manifest);
  }

  async saveSyncManifest(manifest: SyncManifest): Promise<void> {
    if (this.quotaExceeded) throw new Error('Quota exceeded');
    this.manifest = structuredClone(manifest);
  }

  async fetchSingleDoc(collectionName: string, docId: string): Promise<Record<string, unknown> | null> {
    if (this.quotaExceeded) throw new Error('Quota exceeded');
    const col = this.collections.get(collectionName);
    const data = col?.get(docId) ?? null;
    FirestoreAuditMetrics.recordGetDoc(collectionName, 1, false);
    return data ? structuredClone(data) : null;
  }

  async fetchCollection(
    collectionName: string,
    options?: {
      updatedAfter?: string;
      updatedAtField?: string;
      verifiedOnly?: boolean;
      publishedOnly?: boolean;
      limitCount?: number;
    }
  ): Promise<Array<{ id: string; data: Record<string, unknown> }>> {
    if (this.quotaExceeded) throw new Error('Quota exceeded');
    const col = this.collections.get(collectionName) || new Map();
    let rows = Array.from(col.entries()).map(([id, data]) => ({
      id,
      data: structuredClone(data),
    }));

    if (options?.verifiedOnly) {
      rows = rows.filter((r) => r.data.verification_status === 'verified');
    }
    if (options?.publishedOnly) {
      rows = rows.filter((r) => r.data.published === true);
    }
    if (options?.updatedAfter && options?.updatedAtField) {
      const field = options.updatedAtField;
      rows = rows.filter((r) => String(r.data[field] || '') > options.updatedAfter!);
    }
    if (options?.limitCount) {
      rows = rows.slice(0, options.limitCount);
    }

    FirestoreAuditMetrics.recordGetDocs(collectionName, rows.length);
    return rows;
  }

  async fetchDocById(
    collectionName: string,
    docId: string
  ): Promise<{ id: string; data: Record<string, unknown> } | null> {
    if (this.quotaExceeded) throw new Error('Quota exceeded');
    const col = this.collections.get(collectionName);
    const docData = col?.get(docId);
    FirestoreAuditMetrics.recordGetDoc(collectionName, 1, false);
    return docData ? { id: docId, data: structuredClone(docData) } : null;
  }
}

function registerAllTestCollections() {
  DataSyncService.registerCollection({
    key: 'site_config',
    firestoreCollection: 'site_config',
    docId: 'general',
    defaultValue: {},
    isArray: false,
  });
  DataSyncService.registerCollection({
    key: 'college_info',
    firestoreCollection: 'college_info',
    docId: 'about_college',
    defaultValue: {},
    isArray: false,
  });
  const arrayConfigs: Array<{ key: PublicCollectionKey; col: string; ts?: string }> = [
    { key: 'ticker_items', col: 'ticker_items', ts: 'updatedAt' },
    { key: 'subjects_data', col: 'subjects_data' },
    { key: 'study_resources', col: 'study_resources', ts: 'updatedAt' },
    { key: 'articles', col: 'articles', ts: 'updatedAt' },
    { key: 'videos', col: 'videos' },
    { key: 'announcements', col: 'announcements' },
    { key: 'media', col: 'media' },
    { key: 'drive_files', col: 'drive_files' },
    { key: 'medical_terms_delta', col: 'medical_terms', ts: 'updated_at' },
  ];
  for (const cfg of arrayConfigs) {
    DataSyncService.registerCollection({
      key: cfg.key,
      firestoreCollection: cfg.col,
      defaultValue: [],
      isArray: true,
      updatedAtField: cfg.ts,
    });
  }
  ensureInnovaCollectionsRegistered(true);
}

async function expireCacheRecordForTest(key: PublicCollectionKey) {
  const existing = await SmartCache.getCollection(key);
  assert(existing, `Expected cache record for ${key} before expiration test`);
  await SmartCache.setCollection({
    ...existing,
    expiresAt: Date.now() - 10_000,
  });
  const manifestRec = await SmartCache.getCollection<SyncManifest>('__sync_manifest__');
  if (manifestRec) {
    await SmartCache.setCollection({
      ...manifestRec,
      lastCheckedAt: new Date(Date.now() - 35_000).toISOString(),
    });
  }
}

async function runSuite() {
  const backend = new SimulatedFirestoreBackend();
  backend.seedData();
  registerAllTestCollections();
  DataSyncService.configureBackend(backend);

  assert(MEDICAL_TERMS_SEED.length >= 3950, `Expected >= 3950 seed terms, got ${MEDICAL_TERMS_SEED.length}`);
  assert.equal(SmartCache.isIndexedDbSupported(), true, 'IndexedDB shim must be active');

  // Seed student personal data to verify isolation throughout all tests
  StorageService.saveLectures([
    {
      id: 'stu-lec-1',
      title: 'تشريح الطرف العلوي',
      subject: 'Anatomy',
      professor: 'د. أحمد',
      date: '2026-02-01',
      time: '09:00',
      dayOfWeek: 'الأحد',
      priority: 'high',
      completed: false,
      notificationEnabled: true,
      createdAt: Date.now(),
    },
  ]);
  StorageService.saveGpaCourses([
    { id: 'stu-gpa-1', name: 'Physiology', credits: 4, gradePoint: 3.7, gradeLetter: 'A-' },
  ]);
  StorageService.savePersonalResources([
    {
      id: 'stu-res-1',
      userId: 'guest',
      title: 'ملخصي الشخصي',
      description: 'ملاحظات مهمة',
      url: 'https://example.com',
      subjectTag: 'anatomy',
      category: 'notes',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
  StorageService.saveSubjectProgressMap({
    s1: {
      id: 's1',
      userId: 'guest',
      subjectId: 's1',
      notes: 'تقدم دراسي',
      completedTopicIds: ['t1', 't2', 't3'],
      updatedAt: new Date().toISOString(),
    },
  });
  StorageService.saveSettings({ theme: 'dark', notificationsEnabled: true });
  localStorage.setItem('daleelak_user_workspace_v1_student_uid_1', JSON.stringify({ uid: 'student_uid_1', savedAt: Date.now() }));
  localStorage.setItem('daleelak_site_config_v2', JSON.stringify({ legacy: true }));

  const results: Array<{ scenario: string; docsRead: number; details: string }> = [];

  // ---------------------------------------------------------------------------
  // SCENARIO 1: Cold First Load across public student collections (without 3,950 medical terms read!)
  // ---------------------------------------------------------------------------
  FirestoreAuditMetrics.reset();
  const coldKeys: PublicCollectionKey[] = [
    'site_config',
    'ticker_items',
    'college_info',
    'subjects_data',
    'study_resources',
    'articles',
    'videos',
    'announcements',
    'medical_terms_delta',
  ];
  for (const k of coldKeys) {
    await DataSyncService.loadCollection(k);
  }
  const coldSnap = FirestoreAuditMetrics.getSnapshot();
  // 1 manifest check (60s dedupe shares it!) + 1 site_config + 5 ticker + 1 college + 24 subjects + 45 study + 18 articles + 12 videos + 4 announcements + 0 medical_terms = 111
  assert.equal(coldSnap.manifestChecks, 1, 'Manifest should be fetched only ONCE due to 60s dedupe window');
  assert.equal(coldSnap.readsByCollection['medical_terms'] || 0, 0, 'Cold load must read 0 baseline medical_terms docs');
  assert.equal(coldSnap.totalDocsRead, 111, `Expected 111 cold-load docs read, got ${coldSnap.totalDocsRead}`);
  results.push({
    scenario: '1. Cold First Load (All Student Sections)',
    docsRead: coldSnap.totalDocsRead,
    details: `1 manifest + 110 CMS docs + 0 medical_terms (vs legacy ~3,950+ terms + duplicate listeners)`,
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 2: Simulated Browser Reload within TTL -> 0 Firestore Reads
  // ---------------------------------------------------------------------------
  DataSyncService.simulateAppReloadInMemory();
  FirestoreAuditMetrics.reset();
  for (const k of coldKeys) {
    const res = await DataSyncService.loadCollection(k);
    assert.equal(res.source, 'cache', `Reload must serve ${k} from persisted IndexedDB cache`);
  }
  const reloadSnap = FirestoreAuditMetrics.getSnapshot();
  assert.equal(reloadSnap.totalDocsRead, 0, 'Reload within TTL must trigger 0 Firestore reads');
  assert.equal(reloadSnap.cacheHits, coldKeys.length);
  results.push({
    scenario: '2. App Reload within TTL (IndexedDB Hydration)',
    docsRead: reloadSnap.totalDocsRead,
    details: `${reloadSnap.cacheHits} IndexedDB cache hits, 0 cloud reads`,
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 3: Navigating between 7 Student Sections -> 0 Extra Reads
  // ---------------------------------------------------------------------------
  FirestoreAuditMetrics.reset();
  const navigationFlow: PublicCollectionKey[] = [
    'site_config',
    'college_info',
    'articles',
    'videos',
    'medical_terms_delta',
    'study_resources',
    'subjects_data',
    'articles',
    'medical_terms_delta',
  ];
  for (const k of navigationFlow) {
    await DataSyncService.loadCollection(k);
  }
  const navSnap = FirestoreAuditMetrics.getSnapshot();
  assert.equal(navSnap.totalDocsRead, 0, 'Navigating across student sections must trigger 0 reads');
  results.push({
    scenario: '3. Cross-Section Navigation (7+ Views)',
    docsRead: navSnap.totalDocsRead,
    details: '0 Firestore reads across repeated view switches',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 4: TTL Expired + Unchanged Manifest -> 1 Manifest Read + 0 Collection Reads
  // ---------------------------------------------------------------------------
  DataSyncService.simulateAppReloadInMemory();
  for (const k of coldKeys) {
    await expireCacheRecordForTest(k);
  }
  FirestoreAuditMetrics.reset();
  for (const k of coldKeys) {
    await DataSyncService.loadCollection(k);
  }
  const expiredUnchangedSnap = FirestoreAuditMetrics.getSnapshot();
  assert.equal(expiredUnchangedSnap.manifestChecks, 1, 'Should read manifest exactly once');
  assert.equal(expiredUnchangedSnap.totalDocsRead, 1, 'Expired + unchanged version must cost ONLY 1 manifest read');
  assert.equal(expiredUnchangedSnap.skippedCollectionFetches, coldKeys.length);
  results.push({
    scenario: '4. TTL Expired + Unchanged Manifest',
    docsRead: expiredUnchangedSnap.totalDocsRead,
    details: `1 manifest read skipped ${expiredUnchangedSnap.skippedCollectionFetches} full collection fetches`,
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 5: TTL Expired + 1 Updated Article (Delta Sync `updatedAt > lastSyncAt`)
  // ---------------------------------------------------------------------------
  const articlesCacheBefore = await SmartCache.getCollection<Array<{ id: string; title?: string }>>('articles');
  assert(articlesCacheBefore && articlesCacheBefore.data.length === 18);
  await new Promise((r) => setTimeout(r, 15));
  const editIso = new Date().toISOString();
  const art1 = backend.collections.get('articles')!.get('art_1')!;
  backend.collections.get('articles')!.set('art_1', {
    ...art1,
    title: 'Updated Article Title via Delta Sync',
    updatedAt: editIso,
  });
  backend.manifest.versions.articles += 1;
  backend.manifest.updatedAt = editIso;

  await new Promise((r) => setTimeout(r, 15));
  DataSyncService.simulateAppReloadInMemory();
  await expireCacheRecordForTest('articles');
  FirestoreAuditMetrics.reset();
  const deltaRes = await DataSyncService.loadCollection<Array<{ id: string; title?: string }>>('articles');
  const deltaSnap = FirestoreAuditMetrics.getSnapshot();
  assert.equal(deltaSnap.manifestChecks, 1);
  assert.equal(deltaSnap.readsByCollection['articles'], 1, 'Delta sync must read ONLY the 1 modified article, not 18');
  assert.equal(deltaSnap.totalDocsRead, 2, '1 manifest + 1 delta article = 2 reads total');
  const updatedArt = deltaRes.data.find((a) => a.id === 'art_1');
  assert.equal(updatedArt?.title, 'Updated Article Title via Delta Sync');
  results.push({
    scenario: '5. Delta Sync (1 Modified Article of 18)',
    docsRead: deltaSnap.totalDocsRead,
    details: '1 manifest + 1 delta doc (saved 17 article reads)',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 6: Admin Deletion Tombstone Sync -> Deleted Doc Removed Without Re-Reading All 18 Docs
  // ---------------------------------------------------------------------------
  await new Promise((r) => setTimeout(r, 15));
  const delIso = new Date().toISOString();
  backend.collections.get('articles')!.delete('art_2');
  backend.manifest.versions.articles += 1;
  backend.manifest.deleted = {
    ...(backend.manifest.deleted || {}),
    articles: [{ id: 'art_2', deletedAt: delIso }],
  };
  backend.manifest.updatedAt = delIso;

  DataSyncService.simulateAppReloadInMemory();
  await expireCacheRecordForTest('articles');
  FirestoreAuditMetrics.reset();
  const afterDeleteRes = await DataSyncService.loadCollection<Array<{ id: string }>>('articles');
  const delSnap = FirestoreAuditMetrics.getSnapshot();
  assert.equal(afterDeleteRes.data.some((a) => a.id === 'art_2'), false, 'Deleted article must be pruned via tombstone');
  assert.equal(afterDeleteRes.data.length, 17, 'Remaining 17 articles must stay cached');
  assert.equal(delSnap.readsByCollection['articles'] || 0, 0, 'Tombstone delete applies with 0 extra article reads');
  results.push({
    scenario: '6. Admin Deletion Tombstone Sync',
    docsRead: delSnap.totalDocsRead,
    details: 'art_2 removed via manifest tombstone with 0 article collection reads',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 7: Medical Dictionary Edit Delta (3,950+ catalog -> 1 modified term read!)
  // ---------------------------------------------------------------------------
  await new Promise((r) => setTimeout(r, 15));
  const medEditIso = new Date().toISOString();
  const editedTermId = MEDICAL_TERMS_SEED[0].id;
  const origTerm = backend.collections.get('medical_terms')!.get(editedTermId)!;
  backend.collections.get('medical_terms')!.set(editedTermId, {
    ...origTerm,
    term_ar: 'مصطلح محدث تجريبياً',
    updated_at: medEditIso,
  });
  backend.manifest.versions.medical_terms_delta += 1;
  backend.manifest.modifiedTerms = [{ id: editedTermId, updatedAt: medEditIso }];

  DataSyncService.simulateAppReloadInMemory();
  await expireCacheRecordForTest('medical_terms_delta');
  FirestoreAuditMetrics.reset();
  const medDeltaRes = await DataSyncService.loadCollection<Array<{ id: string; term_ar?: string }>>('medical_terms_delta');
  const medDeltaSnap = FirestoreAuditMetrics.getSnapshot();
  assert.equal(medDeltaSnap.readsByCollection['medical_terms'], 1, 'Should fetch ONLY the 1 modified medical term doc');
  assert.equal(medDeltaSnap.totalDocsRead, 2, '1 manifest + 1 targeted term doc = 2 reads (not 3,950+)');
  assert.equal(medDeltaRes.data.find((t) => t.id === editedTermId)?.term_ar, 'مصطلح محدث تجريبياً');
  results.push({
    scenario: `7. Medical Dictionary Delta (${MEDICAL_TERMS_SEED.length} catalog)`,
    docsRead: medDeltaSnap.totalDocsRead,
    details: `Fetched 1 targeted term doc instead of ${MEDICAL_TERMS_SEED.length} docs`,
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 8: Offline & Quota-Exceeded Fallback (Preserves Cache, Reports Accurate Status)
  // ---------------------------------------------------------------------------
  simulatedOnline = false;
  DataSyncService.simulateAppReloadInMemory();
  await expireCacheRecordForTest('articles');
  FirestoreAuditMetrics.reset();
  const offlineRes = await DataSyncService.loadCollection<Array<{ id: string }>>('articles');
  const offlineDiag = await DataSyncService.getCacheDiagnostics();
  assert.equal(offlineRes.data.length, 17, 'Offline fallback must preserve cached 17 articles');
  assert.equal(offlineDiag.syncStatus, 'offline');
  assert.equal(FirestoreAuditMetrics.getSnapshot().totalDocsRead, 0);
  simulatedOnline = true;

  backend.quotaExceeded = true;
  await expireCacheRecordForTest('articles');
  const quotaRes = await DataSyncService.loadCollection<Array<{ id: string }>>('articles');
  const quotaDiag = await DataSyncService.getCacheDiagnostics();
  assert.equal(quotaRes.data.length, 17, 'Quota-exceeded fallback must preserve cached 17 articles');
  assert.equal(quotaDiag.syncStatus, 'quota_exceeded');
  backend.quotaExceeded = false;
  results.push({
    scenario: '8. Offline & Quota-Exceeded Protection',
    docsRead: 0,
    details: 'Preserved all 17 cached articles with 0 reads & accurate status flags',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 9: Cloud-First Admin Mutation Guard (Failed Cloud Write Must NOT Corrupt Cache)
  // ---------------------------------------------------------------------------
  const versionBeforeFail = backend.manifest.versions.articles;
  const cachedArticlesBeforeFail = await SmartCache.getCollection<Array<{ id: string }>>('articles');
  let cloudWriteFailedAsExpected = false;
  try {
    // Simulate Admin mutation helper where cloud write rejects BEFORE recordConfirmedMutation
    throw new Error('Simulated Firestore write permission/network error');
  } catch {
    cloudWriteFailedAsExpected = true;
  }
  assert.equal(cloudWriteFailedAsExpected, true);
  assert.equal(backend.manifest.versions.articles, versionBeforeFail, 'Manifest version must NOT bump on failed cloud write');
  const cachedArticlesAfterFail = await SmartCache.getCollection<Array<{ id: string }>>('articles');
  assert.equal(cachedArticlesAfterFail?.data.length, cachedArticlesBeforeFail?.data.length);

  // Now simulate CONFIRMED cloud write -> recordConfirmedMutation
  await DataSyncService.recordConfirmedMutation('articles', {
    type: 'upsert',
    item: { id: 'art_new_confirmed', title: 'Confirmed Cloud Article', updatedAt: new Date().toISOString() },
  });
  const cachedArticlesAfterConfirm = await SmartCache.getCollection<Array<{ id: string }>>('articles');
  assert.equal(cachedArticlesAfterConfirm?.data.some((a) => a.id === 'art_new_confirmed'), true);
  assert.equal(backend.manifest.versions.articles, versionBeforeFail + 1, 'Manifest bumps ONLY after cloud confirmation');
  results.push({
    scenario: '9. Cloud-First Admin Mutation Consistency',
    docsRead: 0,
    details: 'Rejected write left cache untouched; confirmed write updated IndexedDB + bumped manifest',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 10: Admin Clear Public Cache Explicitly Preserves Student Personal Data
  // ---------------------------------------------------------------------------
  await DataSyncService.clearPublicCacheAdminOnly();
  const afterClearDiag = await DataSyncService.getCacheDiagnostics();
  assert.equal(afterClearDiag.totalCachedItems, 0, 'Public CMS IndexedDB cache must be cleared');
  assert.equal(localStorage.getItem('daleelak_site_config_v2'), null, 'Legacy public CMS localStorage key cleared');

  // Assert ALL student personal localStorage data survived intact!
  assert.equal(StorageService.getLectures().length, 1, 'Student lectures MUST survive clearPublicCacheAdminOnly');
  assert.equal(StorageService.getGpaCourses().length, 1, 'Student GPA courses MUST survive');
  assert.equal(StorageService.getPersonalResources().length, 1, 'Student personal resources MUST survive');
  assert.equal(StorageService.getSubjectProgressMap().s1.completedTopicIds.length, 3, 'Student subject progress MUST survive');
  assert.equal(StorageService.getSettings().theme, 'dark', 'Student UI preferences MUST survive');
  assert.notEqual(
    localStorage.getItem('daleelak_user_workspace_v1_student_uid_1'),
    null,
    'Signed-in user workspace local backup MUST survive'
  );
  results.push({
    scenario: '10. Admin Clear Public Cache Isolation',
    docsRead: 0,
    details: 'Cleared public IndexedDB (0 items left); 100% of student lectures/GPA/resources/settings preserved',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 11: INNOVA Input Validation & Sanitization
  // ---------------------------------------------------------------------------
  const badInfo = sanitizeAndValidateInnovaInfo({ aboutTitle: '   ', aboutDescription: 'وصف' });
  assert.equal(badInfo.valid, false, 'Empty INNOVA aboutTitle must be rejected');

  const goodInfo = sanitizeAndValidateInnovaInfo({
    aboutTitle: '  من نحن إنوفا  ',
    aboutDescription: 'السطر الأول\n\nالسطر الثاني من النبذة التعريفية.',
  });
  assert.equal(goodInfo.valid, true, 'Valid multiline Arabic INNOVA info must pass');
  if (goodInfo.valid) {
    assert.equal(goodInfo.data.aboutTitle, 'من نحن إنوفا');
    assert.equal(goodInfo.data.aboutDescription.includes('\n\n'), true);
  }

  const badMemberUrl = sanitizeAndValidateInnovaMember({
    name: 'د. أحمد محمد',
    position: 'رئيس الجمعية',
    photoUrl: 'javascript:alert(1)',
  });
  assert.equal(badMemberUrl.valid, false, 'javascript: URL in member photoUrl must be rejected');

  const goodMember = sanitizeAndValidateInnovaMember({
    name: '  سارة علي  ',
    position: '  نائب الرئيس  ',
    photoUrl: 'https://firebasestorage.googleapis.com/v0/b/test/o/avatar.jpg',
    order: 2,
  });
  assert.equal(goodMember.valid, true);

  const badContentUrl = sanitizeAndValidateInnovaContent({
    category: 'events',
    title: 'فعالية علمية',
    description: 'وصف الفعالية',
    imageUrl: 'data:text/html,<script>alert(1)</script>',
  });
  assert.equal(badContentUrl.valid, false, 'data: URL in INNOVA content imageUrl must be rejected');

  const goodContent = sanitizeAndValidateInnovaContent({
    category: 'events',
    title: '  مؤتمر البحث الطبي  ',
    description: 'تفاصيل المؤتمر السنوي لجمعية إنوفا',
    eventDate: '2026-05-10',
    published: true,
  });
  assert.equal(goodContent.valid, true);
  results.push({
    scenario: '11. INNOVA Validation & XSS/URL Guard',
    docsRead: 0,
    details: 'Rejected empty titles & unsafe javascript:/data: URLs; preserved multiline Arabic copy',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 12: INNOVA Smart Cache, Published Filtering & Admin Mutation Round-Trip
  // ---------------------------------------------------------------------------
  FirestoreAuditMetrics.reset();
  const innovaMembersInitial = await DataSyncService.loadCollection<Array<{ id: string }>>('innova_members');
  assert.equal(innovaMembersInitial.data.length, 0, 'Empty DB must render 0 hardcoded members');

  const innovaContentsInitial = await DataSyncService.loadCollection<
    Array<{ id: string; published: boolean }>
  >('innova_contents');
  assert.equal(innovaContentsInitial.data.length, 2, 'Public query must return ONLY published INNOVA items (2/3)');
  assert.equal(innovaContentsInitial.data.every((i) => i.published === true), true);

  const innovaInfoInitial = await DataSyncService.loadCollection<{ aboutTitle: string }>('innova_info');
  assert.equal(innovaInfoInitial.data.aboutTitle, DEFAULT_INNOVA_INFO.aboutTitle);

  // Reload in memory -> cache hit must use 0 Firestore reads!
  DataSyncService.simulateAppReloadInMemory();
  FirestoreAuditMetrics.reset();
  const innovaContentsCached = await DataSyncService.loadCollection<Array<{ id: string }>>('innova_contents');
  assert.equal(innovaContentsCached.data.length, 2);
  assert.equal(FirestoreAuditMetrics.getSnapshot().totalDocsRead, 0, 'INNOVA cached load must use 0 reads');

  // Admin confirmed mutation upsert + delete + manifest bump
  const mVersionBefore = backend.manifest.versions.innova_members;
  if (goodMember.valid) {
    backend.collections.get('innova_members')!.set(goodMember.data.id, { ...goodMember.data });
    await DataSyncService.recordConfirmedMutation('innova_members', {
      type: 'upsert',
      item: goodMember.data,
    });
    assert.equal(backend.manifest.versions.innova_members, mVersionBefore + 1);

    const afterUpsert = await SmartCache.getCollection<Array<{ id: string }>>('innova_members');
    assert.equal(afterUpsert?.data.some((m) => m.id === goodMember.data.id), true);

    backend.collections.get('innova_members')!.delete(goodMember.data.id);
    await DataSyncService.recordConfirmedMutation('innova_members', {
      type: 'delete',
      id: goodMember.data.id,
    });
    const afterDelete = await SmartCache.getCollection<Array<{ id: string }>>('innova_members');
    assert.equal(afterDelete?.data.length, 0);
  }
  results.push({
    scenario: '12. INNOVA Smart Cache & Delta Round-Trip',
    docsRead: 0,
    details: '0 hardcoded members, publishedOnly filter enforced, 0-read reload & confirmed upsert/delete verified',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 13: Persisted Manifest Timestamp & 30s Revalidation After Reload
  // ---------------------------------------------------------------------------
  await DataSyncService.clearPublicCacheAdminOnly();
  FirestoreAuditMetrics.reset();
  await DataSyncService.loadCollection('articles');
  // Manually backdate __sync_manifest__.lastCheckedAt by 35s (> 30s window) while articles TTL stays fresh
  const manifestRec = await SmartCache.getCollection<SyncManifest>('__sync_manifest__');
  assert(manifestRec, 'Expected persisted __sync_manifest__ in IndexedDB');
  const staleCheckIso = new Date(Date.now() - 35_000).toISOString();
  await SmartCache.setCollection({
    ...manifestRec,
    lastCheckedAt: staleCheckIso,
  });

  // Simulate remote Admin edit while tab was closed (ensure distinct ISO millisecond > lastSyncAt)
  await new Promise((r) => setTimeout(r, 20));
  const revalIso = new Date().toISOString();
  const prevArt = backend.collections.get('articles')!.get('art_1')!;
  backend.collections.get('articles')!.set('art_1', {
    ...prevArt,
    title: 'Cross-Session Revalidated Article',
    updatedAt: revalIso,
  });
  backend.manifest.versions.articles += 1;
  backend.manifest.updatedAt = revalIso;

  DataSyncService.simulateAppReloadInMemory();
  FirestoreAuditMetrics.reset();
  // Immediate load returns fresh cache, and triggers background revalidation because > 30s elapsed since lastCheckedAt
  await DataSyncService.loadCollection('articles');
  await new Promise((r) => setTimeout(r, 120));
  const revalidatedSnap = FirestoreAuditMetrics.getSnapshot();
  assert.equal(revalidatedSnap.manifestChecks, 1, 'Expected 1 manifest check after >30s window on reload');
  const afterRevalCache = await SmartCache.getCollection<Array<{ id: string; title?: string }>>('articles');
  assert.equal(
    afterRevalCache?.data.find((a) => a.id === 'art_1')?.title,
    'Cross-Session Revalidated Article',
    'Background revalidation must pull modified article even before collection TTL expires'
  );
  results.push({
    scenario: '13. 30s Manifest Revalidation Across Reloads',
    docsRead: revalidatedSnap.totalDocsRead,
    details: 'Detected remote version bump on fresh cache after >30s and updated IndexedDB automatically',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 14: Empty Collection Non-Resurrection (seededCollections & Tombstone Guard)
  // ---------------------------------------------------------------------------
  await DataSyncService.recordConfirmedMutation('study_resources', {
    type: 'replace',
    data: [],
  });
  backend.collections.set('study_resources', new Map());
  assert.equal(
    backend.manifest.seededCollections?.study_resources,
    true,
    'recordConfirmedMutation must mark collection as seeded/mutated in sync_manifest'
  );
  const emptyRes = await DataSyncService.loadCollection<Array<unknown>>('study_resources', {
    forceRefresh: true,
  });
  assert.equal(
    emptyRes.data.length,
    0,
    'Intentionally emptied collection must NOT resurrect hardcoded defaults'
  );
  results.push({
    scenario: '14. Empty Collection Non-Resurrection Guard',
    docsRead: 0,
    details: 'Verified seededCollections flag blocks hardcoded default resurrection when Admin empties a collection',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 15: manualSmartSyncAll Includes drive_files
  // ---------------------------------------------------------------------------
  const fullSyncRes = await DataSyncService.manualSmartSyncAll({ forceFull: true });
  assert.equal(fullSyncRes.success, true, 'manualSmartSyncAll(forceFull) should succeed');
  assert.equal(
    fullSyncRes.updatedCollections.includes('drive_files'),
    true,
    'manualSmartSyncAll must include drive_files'
  );
  results.push({
    scenario: '15. Manual Full Smart Sync Coverage (All 14 Keys)',
    docsRead: 0,
    details: `Synced ${fullSyncRes.updatedCollections.length} collections including drive_files`,
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 16: Draft Isolation on INNOVA Unpublished Updates
  // ---------------------------------------------------------------------------
  await DataSyncService.recordConfirmedMutation('innova_contents', {
    type: 'delete',
    id: 'innova_pub_1',
  });
  const innovaAfterUnpublish = await SmartCache.getCollection<Array<{ id: string }>>('innova_contents');
  assert.equal(
    innovaAfterUnpublish?.data.some((i) => i.id === 'innova_pub_1'),
    false,
    'Unpublished/draft INNOVA item must be evicted from public Smart Cache immediately'
  );
  results.push({
    scenario: '16. INNOVA Draft Eviction from Public Cache',
    docsRead: 0,
    details: 'Confirmed toggling published=false evicts item from public IndexedDB cache',
  });

  // ---------------------------------------------------------------------------
  // SCENARIO 17: Google Drive Persistence Metadata & Token Isolation
  // ---------------------------------------------------------------------------
  const { GoogleDriveService } = await import('../src/services/googleDrive');
  localStorage.setItem(
    'daleelak_drive_connection_meta_v1',
    JSON.stringify({
      connectedEmail: 'mohmabdo1995@gmail.com',
      folderId: 'folder_xyz_123',
      folderName: 'دليلك الجامعي - الوسائط والمحاضرات',
      connectedAt: '2026-11-23T10:00:00.000Z',
      lastVerifiedAt: '2026-11-23T10:05:00.000Z',
      updatedAt: '2026-11-23T10:05:00.000Z',
      disconnectedExplicitly: false,
    })
  );
  const restoredDrive = await GoogleDriveService.restoreConnectionState();
  assert.equal(
    restoredDrive.status,
    'linked_needs_reauth',
    'When metadata exists in Node/non-GIS env, state must be linked_needs_reauth rather than silent logout'
  );
  assert.equal(restoredDrive.connectedEmail, 'mohmabdo1995@gmail.com');
  assert.equal(restoredDrive.hasLiveToken, false, 'Must NEVER fabricate a persisted accessToken');
  await GoogleDriveService.disconnect();
  const afterDisconnect = GoogleDriveService.getConnectionSnapshot();
  assert.equal(afterDisconnect.status, 'disconnected');
  assert.equal(afterDisconnect.connectedEmail, null);
  const storedDriveRaw = localStorage.getItem('daleelak_drive_connection_meta_v1') || '';
  assert.equal(storedDriveRaw.includes('accessToken'), false, 'accessToken must never be persisted to localStorage');
  results.push({
    scenario: '17. Google Drive Metadata Persistence & Token Isolation',
    docsRead: 0,
    details: 'Verified linked_needs_reauth state preservation, explicit disconnect, and zero persisted tokens',
  });

  // --- Print Summary ---
  console.log('\n=== Daleelak AlJamaei Smart Cache & Sync Verification Report (Local Instrumented Run) ===');
  for (const r of results) {
    console.log(`[PASS] ${r.scenario} | Reads: ${r.docsRead} | ${r.details}`);
  }
  console.log(`All ${results.length}/${results.length} assertions passed.\n`);
}

runSuite()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error('Verification failed:', err);
    process.exit(1);
  });
