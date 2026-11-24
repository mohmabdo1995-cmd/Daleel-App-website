import {
  collection,
  deleteDoc,
  doc,
  DocumentSnapshot,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import {
  auth,
  authPersistenceReady,
  db,
  FirebaseService,
  handleFirestoreError,
  isFirestoreQuotaError,
  isFirestoreQuotaExceeded,
  markFirestoreQuotaExceeded,
  OperationType,
} from './firebase';
import {
  MedicalTerm,
  MedicalTermSource,
  MedicalTermVerificationStatus,
} from '../types';
import { MEDICAL_TERMS_SEED } from '../data/medicalTermsSeed';
import {
  buildMedicalSearchTokens,
  containsArabic,
  normalizeArabic,
  normalizeEnglish,
  slugifyMedicalTermId,
} from './medicalSearch';
import { DataSyncService } from './dataSyncService';
import { CacheSourceKind, FirestoreAuditMetrics, SmartCache } from './smartCache';

const MEDICAL_TERMS_COLLECTION = 'medical_terms';
const LOCAL_CACHE_KEY = 'daleelak_medical_terms_cache_v1';
const MEMORY_QUERY_CACHE_TTL_MS = 60 * 1000;

export const ADMIN_AUTHORIZED_EMAILS = ['mohmabdo1995@gmail.com'];

export interface MedicalTermDraftInput {
  id?: string;
  term_en: string;
  term_ar: string;
  synonyms: string[];
  pronunciation: string;
  ipa: string;
  audio_url?: string;
  english_definition: string;
  arabic_definition: string;
  specialty: string;
  sources: MedicalTermSource[];
  verification_status: MedicalTermVerificationStatus;
  last_verified: string;
  created_at?: string;
}

export interface BulkImportPreviewRow {
  rowNumber: number;
  valid: boolean;
  error?: string;
  term?: MedicalTerm;
  action: 'create' | 'skip_duplicate' | 'update' | 'invalid';
}

export interface BulkImportResult {
  created: number;
  updated: number;
  skipped: number;
  failed: number;
  errors: string[];
}

export interface PaginatedTermsResult {
  items: MedicalTerm[];
  lastCursor: DocumentSnapshot | null;
  hasMore: boolean;
  fromFirestore: boolean;
}

const remoteSearchCache = new Map<string, { items: MedicalTerm[]; ts: number }>();

export function isValidHttpsUrl(rawUrl: string): boolean {
  const trimmed = (rawUrl || '').trim();
  if (!trimmed.startsWith('https://')) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' && Boolean(parsed.hostname);
  } catch {
    return false;
  }
}

export function sanitizeAndValidateMedicalTerm(
  input: MedicalTermDraftInput,
  existingCreatedAt?: string
): { valid: true; term: MedicalTerm } | { valid: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  const termEn = (input.term_en || '').trim();
  const termAr = (input.term_ar || '').trim();
  const englishDef = (input.english_definition || '').trim();
  const arabicDef = (input.arabic_definition || '').trim();
  const specialty = (input.specialty || '').trim();
  const pronunciation = (input.pronunciation || '').trim().slice(0, 200);
  const ipa = (input.ipa || '').trim().slice(0, 200);
  const audioUrl = (input.audio_url || '').trim().slice(0, 1000);

  if (termEn.length < 2 || termEn.length > 200) {
    errors.term_en = 'يرجى إدخال المصطلح الإنجليزي (من 2 إلى 200 حرف).';
  }
  if (termAr.length < 2 || termAr.length > 200) {
    errors.term_ar = 'يرجى إدخال المقابل العربي للمصطلح (من 2 إلى 200 حرف).';
  }
  if (englishDef.length < 10 || englishDef.length > 3000) {
    errors.english_definition = 'يرجى إدخال شرح علمي واضح بالإنجليزية (10 أحرف على الأقل).';
  }
  if (arabicDef.length < 10 || arabicDef.length > 3000) {
    errors.arabic_definition = 'يرجى إدخال شرح علمي دقيق بالعربية (10 أحرف على الأقل).';
  }
  if (specialty.length < 2 || specialty.length > 100) {
    errors.specialty = 'يرجى تحديد التخصص الطبي للمصطلح.';
  }
  if (audioUrl && !isValidHttpsUrl(audioUrl)) {
    errors.audio_url = 'رابط الملف الصوتي يجب أن يبدأ بـ https://';
  }

  const cleanSources: MedicalTermSource[] = [];
  for (const s of input.sources || []) {
    const name = (s?.name || '').trim().slice(0, 150);
    const url = (s?.url || '').trim().slice(0, 1000);
    if (!name && !url) continue;
    if (!name || !isValidHttpsUrl(url)) {
      errors.sources = 'يجب أن يتضمن كل مصدر اسماً علمياً ورابطاً موثوقاً يبدأ بـ https://';
      break;
    }
    cleanSources.push({
      name,
      url,
      accessedAt: (s?.accessedAt || '').trim().slice(0, 30) || new Date().toISOString().split('T')[0],
    });
  }

  if (cleanSources.length === 0 && !errors.sources) {
    errors.sources = 'يجب إضافة مصدر علمي موثوق واحد على الأقل (مثل MedlinePlus أو NIH/NCI أو WHO).';
  }
  if (cleanSources.length > 10) {
    errors.sources = 'الحد الأقصى للمصادر هو 10 مصادر لكل مصطلح.';
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  const id = input.id && /^[a-zA-Z0-9_\-]+$/.test(input.id)
    ? input.id.slice(0, 128)
    : slugifyMedicalTermId(termEn);

  const cleanSynonyms = Array.from(
    new Set(
      (input.synonyms || [])
        .map((s) => s.trim())
        .filter((s) => s.length >= 1 && s.length <= 120)
    )
  ).slice(0, 25);

  const allowedStatuses: MedicalTermVerificationStatus[] = ['verified', 'needs_review', 'draft'];
  const status: MedicalTermVerificationStatus = allowedStatuses.includes(input.verification_status)
    ? input.verification_status
    : 'needs_review';

  const nowIso = new Date().toISOString();
  const lastVerified = (input.last_verified || '').trim().slice(0, 30) || nowIso.split('T')[0];
  const createdAt = existingCreatedAt || input.created_at || nowIso;

  const term: MedicalTerm = {
    id,
    term_en: termEn,
    term_en_lower: termEn.toLowerCase(),
    term_ar: termAr,
    synonyms: cleanSynonyms,
    pronunciation,
    ipa,
    ...(audioUrl ? { audio_url: audioUrl } : {}),
    english_definition: englishDef,
    arabic_definition: arabicDef,
    specialty,
    sources: cleanSources,
    verification_status: status,
    last_verified: lastVerified,
    search_tokens: buildMedicalSearchTokens({
      term_en: termEn,
      term_ar: termAr,
      synonyms: cleanSynonyms,
      specialty,
    }),
    created_at: createdAt,
    updated_at: nowIso,
  };

  return { valid: true, term };
}

function normalizeFirestoreTermDoc(id: string, raw: Record<string, unknown>): MedicalTerm {
  const termEn = String(raw.term_en || '');
  const termAr = String(raw.term_ar || '');
  const synonyms = Array.isArray(raw.synonyms)
    ? raw.synonyms.filter((s): s is string => typeof s === 'string')
    : [];
  const specialty = String(raw.specialty || 'Clinical Terminology');
  const sources: MedicalTermSource[] = Array.isArray(raw.sources)
    ? raw.sources
        .filter((s): s is MedicalTermSource => Boolean(s && typeof s === 'object' && 'name' in s && 'url' in s))
        .map((s) => ({
          name: String(s.name),
          url: String(s.url),
          ...(s.accessedAt ? { accessedAt: String(s.accessedAt) } : {}),
        }))
    : [];

  const statusRaw = String(raw.verification_status || 'verified');
  const verification_status: MedicalTermVerificationStatus =
    statusRaw === 'needs_review' || statusRaw === 'draft' ? statusRaw : 'verified';

  const tokens = Array.isArray(raw.search_tokens) && raw.search_tokens.length > 0
    ? raw.search_tokens.filter((t): t is string => typeof t === 'string')
    : buildMedicalSearchTokens({ term_en: termEn, term_ar: termAr, synonyms, specialty });

  return {
    id,
    term_en: termEn,
    term_en_lower: String(raw.term_en_lower || termEn.toLowerCase()),
    term_ar: termAr,
    synonyms,
    pronunciation: String(raw.pronunciation || ''),
    ipa: String(raw.ipa || ''),
    ...(typeof raw.audio_url === 'string' && raw.audio_url ? { audio_url: raw.audio_url } : {}),
    english_definition: String(raw.english_definition || ''),
    arabic_definition: String(raw.arabic_definition || ''),
    specialty,
    sources,
    verification_status,
    last_verified: String(raw.last_verified || ''),
    search_tokens: tokens,
    created_at: String(raw.created_at || ''),
    updated_at: String(raw.updated_at || ''),
  };
}

function mergeCatalogWithDelta(
  deltaItems: MedicalTerm[],
  deletedIds: Set<string>,
  verifiedOnly: boolean,
  extraAdminItems: MedicalTerm[] = []
): MedicalTerm[] {
  const map = new Map<string, MedicalTerm>();
  for (const seed of MEDICAL_TERMS_SEED) {
    if (!deletedIds.has(seed.id)) {
      map.set(seed.id, seed);
    }
  }
  for (const item of deltaItems) {
    if (item?.id) {
      map.set(item.id, item);
    }
  }
  for (const extra of extraAdminItems) {
    if (extra?.id) {
      map.set(extra.id, extra);
    }
  }

  const result: MedicalTerm[] = [];
  for (const term of map.values()) {
    if (verifiedOnly && term.verification_status !== 'verified') continue;
    result.push(term);
  }
  result.sort((a, b) => (a.term_en_lower || '').localeCompare(b.term_en_lower || ''));
  return result;
}

let medicalDeltaRegistered = false;
function ensureMedicalDeltaRegistered(): void {
  if (medicalDeltaRegistered) return;
  medicalDeltaRegistered = true;
  DataSyncService.registerCollection<MedicalTerm[]>({
    key: 'medical_terms_delta',
    firestoreCollection: MEDICAL_TERMS_COLLECTION,
    defaultValue: [],
    isArray: true,
    updatedAtField: 'updated_at',
    normalizeItem: (id, raw) => normalizeFirestoreTermDoc(id, raw),
  });
}

ensureMedicalDeltaRegistered();

function saveLocalTermsCache(terms: MedicalTerm[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(
      LOCAL_CACHE_KEY,
      JSON.stringify({ ts: Date.now(), items: terms.slice(0, 120) })
    );
  } catch {
    // ignore storage quota errors
  }
}

export function loadLocalTermsCache(): MedicalTerm[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LOCAL_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts?: number; items?: MedicalTerm[] };
    if (Array.isArray(parsed?.items) && parsed.items.length > 0) {
      return parsed.items;
    }
  } catch {
    // ignore
  }
  return null;
}

export class MedicalTermsService {
  /**
   * Checks whether current Firebase Auth session satisfies Firestore `isAdmin()` rules.
   */
  static async isVerifiedAdminFirebaseSession(): Promise<boolean> {
    const user = auth.currentUser;
    if (!user || user.isAnonymous || !user.emailVerified) return false;
    const email = (user.email || '').toLowerCase();
    if (ADMIN_AUTHORIZED_EMAILS.includes(email)) return true;

    try {
      const adminDoc = await getDoc(doc(db, 'admins', user.uid));
      FirestoreAuditMetrics.recordGetDoc('admins', 1, false);
      return adminDoc.exists();
    } catch {
      return false;
    }
  }

  /**
   * Signs in the site administrator via Google OAuth to obtain a verified Admin ID token
   * accepted by Firestore security rules.
   */
  static async signInAdminWithGoogle(): Promise<{
    authorized: boolean;
    email?: string | null;
    error?: string;
  }> {
    await authPersistenceReady;
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    provider.setCustomParameters({ prompt: 'select_account' });

    const cred = await signInWithPopup(auth, provider);
    const email = (cred.user.email || '').toLowerCase();
    const isVerified = cred.user.emailVerified;

    if (!isVerified) {
      return {
        authorized: false,
        email: cred.user.email,
        error: 'البريد الإلكتروني لهذا الحساب غير موثق.',
      };
    }

    if (ADMIN_AUTHORIZED_EMAILS.includes(email)) {
      return { authorized: true, email: cred.user.email };
    }

    try {
      const adminSnap = await getDoc(doc(db, 'admins', cred.user.uid));
      if (adminSnap.exists()) {
        return { authorized: true, email: cred.user.email };
      }
    } catch {
      // not authorized in /admins collection
    }

    return {
      authorized: false,
      email: cred.user.email,
      error: `الحساب (${cred.user.email || 'غير معروف'}) ليس لديه صلاحية مسؤول (Admin) في النظام.`,
    };
  }

  /**
   * Fetches paginated verified terms directly from Firestore (public read).
   * Falls back seamlessly to verified curated index if Firestore has not yet been seeded.
   */
  static async fetchPublicVerifiedTermsPage(
    pageSize = 60,
    cursor?: DocumentSnapshot | null
  ): Promise<PaginatedTermsResult> {
    if (!isFirestoreQuotaExceeded()) {
      const colRef = collection(db, MEDICAL_TERMS_COLLECTION);
      try {
        const q = cursor
          ? query(
              colRef,
              where('verification_status', '==', 'verified'),
              orderBy('term_en_lower'),
              startAfter(cursor),
              limit(pageSize)
            )
          : query(
              colRef,
              where('verification_status', '==', 'verified'),
              orderBy('term_en_lower'),
              limit(pageSize)
            );

        const snapshot = await getDocs(q);
        FirestoreAuditMetrics.recordGetDocs(MEDICAL_TERMS_COLLECTION, snapshot.size);
        const firestoreItems = snapshot.docs.map((d) =>
          normalizeFirestoreTermDoc(d.id, d.data() as Record<string, unknown>)
        );

        if (firestoreItems.length > 0) {
          const lastDoc = snapshot.docs[snapshot.docs.length - 1] || null;
          if (!cursor) {
            saveLocalTermsCache(firestoreItems);
          }
          return {
            items: firestoreItems,
            lastCursor: lastDoc,
            hasMore: snapshot.docs.length === pageSize,
            fromFirestore: true,
          };
        }
      } catch (err) {
        if (isFirestoreQuotaError(err)) {
          markFirestoreQuotaExceeded();
        }
        console.warn('Firestore paginated fetch fallback to verified curated index:', err);
      }
    }

    // Fallback before admin initial seed or when offline/quota-limited
    if (!cursor) {
      const cached = loadLocalTermsCache();
      const fallbackItems =
        cached && cached.length >= MEDICAL_TERMS_SEED.length ? cached : MEDICAL_TERMS_SEED;
      return {
        items: fallbackItems,
        lastCursor: null,
        hasMore: false,
        fromFirestore: false,
      };
    }

    return { items: [], lastCursor: null, hasMore: false, fromFirestore: false };
  }

  /**
   * Targeted server-side token query ONLY as fallback when local 3,950+ index has 0 matches.
   * Only queries `verification_status == 'verified'` so Firestore rules enforce public safety.
   */
  static async queryPublicTermsByTokenRemote(rawQuery: string): Promise<MedicalTerm[]> {
    const trimmed = (rawQuery || '').trim();
    if (trimmed.length < 3) return [];

    const isAr = containsArabic(trimmed);
    const norm = isAr ? normalizeArabic(trimmed) : normalizeEnglish(trimmed);
    const firstWord = norm.split(/\s+/)[0] || '';
    if (firstWord.length < 2) return [];

    const cacheKey = `${isAr ? 'ar' : 'en'}:${firstWord}`;
    const cached = remoteSearchCache.get(cacheKey);
    if (cached && Date.now() - cached.ts < MEMORY_QUERY_CACHE_TTL_MS) {
      return cached.items;
    }

    if (isFirestoreQuotaExceeded()) {
      return [];
    }

    try {
      const colRef = collection(db, MEDICAL_TERMS_COLLECTION);
      const tokenKey = firstWord.slice(0, 10);
      const q = query(
        colRef,
        where('verification_status', '==', 'verified'),
        where('search_tokens', 'array-contains', tokenKey),
        limit(40)
      );
      const snap = await getDocs(q);
      FirestoreAuditMetrics.recordGetDocs(MEDICAL_TERMS_COLLECTION, snap.size);
      const items = snap.docs.map((d) =>
        normalizeFirestoreTermDoc(d.id, d.data() as Record<string, unknown>)
      );
      remoteSearchCache.set(cacheKey, { items, ts: Date.now() });
      return items;
    } catch (err) {
      if (isFirestoreQuotaError(err)) {
        markFirestoreQuotaExceeded();
      }
      console.warn('Remote token lookup failed gracefully:', err);
      return [];
    }
  }

  /**
   * Fetches a single verified term by slug ID: checks IndexedDB delta + local seed first (0 reads),
   * and falls back to a single `getDoc` ONLY if missing locally.
   */
  static async getPublicTermById(termId: string): Promise<MedicalTerm | null> {
    const cleanId = slugifyMedicalTermId(termId);
    ensureMedicalDeltaRegistered();

    const cachedDelta = await SmartCache.getCollection<MedicalTerm[]>('medical_terms_delta');
    const fromDelta = cachedDelta?.data?.find((t) => t.id === cleanId);
    if (fromDelta && fromDelta.verification_status === 'verified') {
      return fromDelta;
    }

    const fromSeed = MEDICAL_TERMS_SEED.find((t) => t.id === cleanId);
    if (fromSeed) {
      return fromSeed;
    }

    if (isFirestoreQuotaExceeded()) return null;

    try {
      const snap = await getDoc(doc(db, MEDICAL_TERMS_COLLECTION, cleanId));
      FirestoreAuditMetrics.recordGetDoc(MEDICAL_TERMS_COLLECTION, 1, false);
      if (snap.exists()) {
        const parsed = normalizeFirestoreTermDoc(snap.id, snap.data() as Record<string, unknown>);
        if (parsed.verification_status === 'verified') return parsed;
      }
    } catch (err) {
      if (isFirestoreQuotaError(err)) markFirestoreQuotaExceeded();
    }
    return null;
  }

  /**
   * Primary Student Dictionary subscription:
   * Uses bundled 3,950+ verified terms + IndexedDB `medical_terms_delta` synced via single-read
   * `site_config/sync_manifest` check (0 `medical_terms` reads when unchanged!).
   */
  static subscribeMergedVerifiedCatalog(
    callback: (items: MedicalTerm[], source: CacheSourceKind) => void
  ): () => void {
    ensureMedicalDeltaRegistered();
    return DataSyncService.subscribeCollection<MedicalTerm[]>(
      'medical_terms_delta',
      async (deltaItems, source) => {
        const deletedIds = await DataSyncService.getCachedDeletedIds('medical_terms_delta');
        const merged = mergeCatalogWithDelta(
          Array.isArray(deltaItems) ? deltaItems : [],
          deletedIds,
          true
        );
        callback(merged, source);
      }
    );
  }

  /**
   * Zero-read summary for Admin Overview card using cached delta + bundled index.
   */
  static async getCachedAdminTermsSummary(): Promise<{
    total: number;
    needsReview: number;
    hasDeltaCache: boolean;
  }> {
    ensureMedicalDeltaRegistered();
    const rec = await SmartCache.getCollection<MedicalTerm[]>('medical_terms_delta');
    const deletedIds = await DataSyncService.getCachedDeletedIds('medical_terms_delta');
    const merged = mergeCatalogWithDelta(
      Array.isArray(rec?.data) ? rec!.data : [],
      deletedIds,
      false
    );
    return {
      total: merged.length,
      needsReview: merged.filter((t) => t.verification_status === 'needs_review').length,
      hasDeltaCache: Boolean(rec),
    };
  }

  /**
   * Admin catalog subscription (Lazy-loaded ONLY when MedicalTermsManager mounts):
   * - Hydrates immediately from bundled seed + IndexedDB `medical_terms_delta` (0 reads!)
   * - When authenticated as verified Firebase Admin, performs ONE bounded `getDocs` ONLY for
   *   `needs_review` / `draft` documents (limit 200) instead of reading all 3,950+ verified docs!
   */
  static subscribeAdminMedicalTerms(
    callback: (items: MedicalTerm[], fromFirestore: boolean) => void,
    onError?: (err: unknown) => void
  ): () => void {
    ensureMedicalDeltaRegistered();
    let isDisposed = false;
    let latestDelta: MedicalTerm[] = [];
    let latestExtraAdmin: MedicalTerm[] = [];
    let hasRemoteData = false;

    const emitMerged = async () => {
      if (isDisposed) return;
      const deletedIds = await DataSyncService.getCachedDeletedIds('medical_terms_delta');
      const merged = mergeCatalogWithDelta(latestDelta, deletedIds, false, latestExtraAdmin);
      callback(merged, hasRemoteData);
    };

    const unsubDelta = DataSyncService.subscribeCollection<MedicalTerm[]>(
      'medical_terms_delta',
      (deltaItems, source) => {
        latestDelta = Array.isArray(deltaItems) ? deltaItems : [];
        if (source === 'cloud') hasRemoteData = true;
        void emitMerged();
      }
    );

    const fetchAdminReviewQueueOnce = async () => {
      if (isDisposed || isFirestoreQuotaExceeded()) return;
      const isAdminSession = await this.isVerifiedAdminFirebaseSession();
      if (isDisposed || !isAdminSession) return;

      try {
        const colRef = collection(db, MEDICAL_TERMS_COLLECTION);
        const q = query(
          colRef,
          where('verification_status', 'in', ['needs_review', 'draft']),
          limit(200)
        );
        const snap = await getDocs(q);
        FirestoreAuditMetrics.recordGetDocs(MEDICAL_TERMS_COLLECTION, snap.size);
        latestExtraAdmin = snap.docs.map((d) =>
          normalizeFirestoreTermDoc(d.id, d.data() as Record<string, unknown>)
        );
        hasRemoteData = true;
        await emitMerged();
      } catch (err) {
        if (isFirestoreQuotaError(err)) {
          markFirestoreQuotaExceeded();
        }
        onError?.(err);
      }
    };

    const unsubAuth = onAuthStateChanged(auth, () => {
      void fetchAdminReviewQueueOnce();
    });

    return () => {
      isDisposed = true;
      unsubDelta();
      unsubAuth();
    };
  }

  /**
   * Backward-compatible public subscription backed by IndexedDB + bundled seed (0 redundant 250-doc reads).
   */
  static subscribePublicVerifiedTerms(
    callback: (items: MedicalTerm[], hasRemoteData: boolean) => void
  ): () => void {
    return this.subscribeMergedVerifiedCatalog((items, source) => {
      callback(items, source === 'cloud');
    });
  }

  /**
   * Creates a new medical term in Firestore (Admin Only, duplicate-safe) -> updates IndexedDB + sync_manifest.
   */
  static async addMedicalTerm(input: MedicalTermDraftInput): Promise<MedicalTerm> {
    ensureMedicalDeltaRegistered();
    const validation = sanitizeAndValidateMedicalTerm(input);
    if (!validation.valid) {
      const errs = 'errors' in validation ? validation.errors : {};
      const firstErr = String(Object.values(errs)[0] || 'بيانات المصطلح غير مكتملة.');
      throw new Error(firstErr);
    }

    const term = validation.term;
    const docRef = doc(db, MEDICAL_TERMS_COLLECTION, term.id);
    const path = `${MEDICAL_TERMS_COLLECTION}/${term.id}`;

    try {
      const existing = await getDoc(docRef);
      FirestoreAuditMetrics.recordGetDoc(MEDICAL_TERMS_COLLECTION, 1, false);
      if (existing.exists()) {
        throw new Error(`المصطلح "${term.term_en}" موجود مسبقاً (المعرف: ${term.id}). يرجى تعديله بدلاً من تكراره.`);
      }
      await setDoc(docRef, term);
      remoteSearchCache.clear();
      await DataSyncService.recordConfirmedMutation('medical_terms_delta', {
        type: 'upsert',
        item: term,
      });
      FirebaseService.addAdminLog('إضافة مصطلح طبي', `${term.term_en} (${term.term_ar}) [${term.verification_status}]`).catch(() => {});
      return term;
    } catch (err) {
      if (err instanceof Error && err.message.includes('موجود مسبقاً')) {
        throw err;
      }
      handleFirestoreError(err, OperationType.CREATE, path);
    }
  }

  /**
   * Updates an existing medical term in Firestore (Admin Only) -> updates IndexedDB + sync_manifest.
   */
  static async updateMedicalTerm(
    termId: string,
    input: MedicalTermDraftInput,
    existingCreatedAt?: string
  ): Promise<MedicalTerm> {
    ensureMedicalDeltaRegistered();
    const validation = sanitizeAndValidateMedicalTerm({ ...input, id: termId }, existingCreatedAt);
    if (!validation.valid) {
      const errs = 'errors' in validation ? validation.errors : {};
      const firstErr = String(Object.values(errs)[0] || 'بيانات المصطلح غير صالحة.');
      throw new Error(firstErr);
    }

    const term = validation.term;
    const docRef = doc(db, MEDICAL_TERMS_COLLECTION, termId);
    const path = `${MEDICAL_TERMS_COLLECTION}/${termId}`;

    try {
      let persistedTerm = term;
      const snap = await getDoc(docRef);
      FirestoreAuditMetrics.recordGetDoc(MEDICAL_TERMS_COLLECTION, 1, false);
      if (!snap.exists()) {
        await setDoc(docRef, term);
      } else {
        const snapData = snap.data() as Record<string, unknown>;
        const preservedCreatedAt = String(snapData.created_at || term.created_at);
        persistedTerm = {
          ...term,
          id: termId,
          created_at: preservedCreatedAt,
        };
        await updateDoc(docRef, persistedTerm as unknown as Record<string, unknown>);
      }
      remoteSearchCache.clear();
      await DataSyncService.recordConfirmedMutation('medical_terms_delta', {
        type: 'upsert',
        item: persistedTerm,
      });
      FirebaseService.addAdminLog('تحديث مصطلح طبي', `${persistedTerm.term_en} [${persistedTerm.verification_status}]`).catch(() => {});
      return persistedTerm;
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, path);
    }
  }

  /**
   * Deletes a medical term permanently from Firestore (Admin Only) -> records tombstone in sync_manifest & IndexedDB.
   */
  static async deleteMedicalTerm(termId: string, label?: string): Promise<void> {
    ensureMedicalDeltaRegistered();
    const path = `${MEDICAL_TERMS_COLLECTION}/${termId}`;
    try {
      await deleteDoc(doc(db, MEDICAL_TERMS_COLLECTION, termId));
      remoteSearchCache.clear();
      await DataSyncService.recordConfirmedMutation('medical_terms_delta', {
        type: 'delete',
        id: termId,
      });
      FirebaseService.addAdminLog('حذف مصطلح طبي', label ? `${label} (${termId})` : termId).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, path);
    }
  }

  /**
   * Seeds the curated verified baseline dataset into Firestore in safe batches,
   * never overwriting terms that already exist in Firestore.
   */
  static async seedBaselineMedicalTerms(
    existingMap: Map<string, MedicalTerm>
  ): Promise<{ inserted: number; skipped: number }> {
    ensureMedicalDeltaRegistered();
    const toInsert = MEDICAL_TERMS_SEED.filter((t) => !existingMap.has(t.id));
    const skipped = MEDICAL_TERMS_SEED.length - toInsert.length;

    if (toInsert.length === 0) {
      return { inserted: 0, skipped };
    }

    const BATCH_LIMIT = 400;
    try {
      for (let i = 0; i < toInsert.length; i += BATCH_LIMIT) {
        const chunk = toInsert.slice(i, i + BATCH_LIMIT);
        const batch = writeBatch(db);
        for (const item of chunk) {
          batch.set(doc(db, MEDICAL_TERMS_COLLECTION, item.id), item);
        }
        await batch.commit();
      }
      remoteSearchCache.clear();
      const cachedDelta = await SmartCache.getCollection<MedicalTerm[]>('medical_terms_delta');
      await DataSyncService.recordConfirmedMutation('medical_terms_delta', {
        type: 'replace',
        data: Array.isArray(cachedDelta?.data) ? cachedDelta!.data : [],
      });
      FirebaseService.addAdminLog(
        'مزامنة قاعدة المصطلحات الطبية',
        `تمت إضافة ${toInsert.length} مصطلحاً موثقاً (تخطي ${skipped} موجوداً مسبقاً)`
      ).catch(() => {});
      return { inserted: toInsert.length, skipped };
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, MEDICAL_TERMS_COLLECTION);
    }
  }

  /**
   * Parses JSON array or CSV text into validated bulk import preview rows
   * with duplicate detection against existing Firestore terms.
   */
  static parseBulkImportPayload(
    rawText: string,
    format: 'json' | 'csv',
    existingTerms: MedicalTerm[],
    preserveVerified = true
  ): BulkImportPreviewRow[] {
    const existingById = new Map(existingTerms.map((t) => [t.id, t]));
    let records: Record<string, unknown>[] = [];

    if (format === 'json') {
      const parsed = JSON.parse(rawText);
      if (!Array.isArray(parsed)) {
        throw new Error('يجب أن يكون ملف JSON عبارة عن مصفوفة [...] من المصطلحات.');
      }
      records = parsed.filter((r): r is Record<string, unknown> => Boolean(r && typeof r === 'object'));
    } else {
      records = parseCsvToObjects(rawText);
    }

    const seenIdsInBatch = new Set<string>();
    return records.map((rec, index) => {
      const rowNumber = index + 1;
      const synonymsRaw = rec.synonyms;
      const synonymsList: string[] = Array.isArray(synonymsRaw)
        ? synonymsRaw.map((x) => String(x))
        : typeof synonymsRaw === 'string'
        ? synonymsRaw
            .split(/[;|،,]/)
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

      let sourcesList: MedicalTermSource[] = [];
      if (Array.isArray(rec.sources)) {
        sourcesList = rec.sources.map((s: any) => ({
          name: String(s?.name || ''),
          url: String(s?.url || ''),
          accessedAt: s?.accessedAt ? String(s.accessedAt) : undefined,
        }));
      } else if (typeof rec.source_name === 'string' && typeof rec.source_url === 'string') {
        sourcesList = [{ name: rec.source_name, url: rec.source_url }];
      }

      const statusRaw = String(rec.verification_status || 'needs_review').trim();
      const status: MedicalTermVerificationStatus =
        statusRaw === 'verified' || statusRaw === 'draft' ? statusRaw : 'needs_review';

      const draftInput: MedicalTermDraftInput = {
        id: typeof rec.id === 'string' ? rec.id : undefined,
        term_en: String(rec.term_en || ''),
        term_ar: String(rec.term_ar || ''),
        synonyms: synonymsList,
        pronunciation: String(rec.pronunciation || ''),
        ipa: String(rec.ipa || ''),
        audio_url: typeof rec.audio_url === 'string' ? rec.audio_url : undefined,
        english_definition: String(rec.english_definition || ''),
        arabic_definition: String(rec.arabic_definition || ''),
        specialty: String(rec.specialty || ''),
        sources: sourcesList,
        verification_status: status,
        last_verified: String(rec.last_verified || new Date().toISOString().split('T')[0]),
      };

      const validation = sanitizeAndValidateMedicalTerm(draftInput);
      if (!validation.valid) {
        const errs = 'errors' in validation ? validation.errors : {};
        return {
          rowNumber,
          valid: false,
          error: Object.values(errs).join(' • '),
          action: 'invalid',
        };
      }

      const term = validation.term;
      if (seenIdsInBatch.has(term.id)) {
        return {
          rowNumber,
          valid: false,
          error: `تكرار داخل نفس ملف الاستيراد للمصطلح (${term.term_en}).`,
          action: 'skip_duplicate',
        };
      }
      seenIdsInBatch.add(term.id);

      const existing = existingById.get(term.id);
      if (existing) {
        if (preserveVerified && existing.verification_status === 'verified') {
          return {
            rowNumber,
            valid: true,
            term,
            action: 'skip_duplicate',
          };
        }
        return {
          rowNumber,
          valid: true,
          term: { ...term, created_at: existing.created_at || term.created_at },
          action: 'update',
        };
      }

      return {
        rowNumber,
        valid: true,
        term,
        action: 'create',
      };
    });
  }

  static async commitBulkImportRows(rows: BulkImportPreviewRow[]): Promise<BulkImportResult> {
    const actionable = rows.filter(
      (r) => r.valid && r.term && (r.action === 'create' || r.action === 'update')
    );
    const skipped = rows.filter((r) => r.action === 'skip_duplicate').length;
    const failed = rows.filter((r) => !r.valid).length;
    const errors: string[] = rows
      .filter((r) => !r.valid && r.error)
      .map((r) => `صف ${r.rowNumber}: ${r.error}`);

    let created = 0;
    let updated = 0;
    const BATCH_LIMIT = 400;

    try {
      for (let i = 0; i < actionable.length; i += BATCH_LIMIT) {
        const chunk = actionable.slice(i, i + BATCH_LIMIT);
        const batch = writeBatch(db);
        for (const row of chunk) {
          if (!row.term) continue;
          const ref = doc(db, MEDICAL_TERMS_COLLECTION, row.term.id);
          batch.set(ref, row.term, { merge: row.action === 'update' });
          if (row.action === 'create') created++;
          else updated++;
        }
        await batch.commit();
      }
      remoteSearchCache.clear();
      const cachedDelta = await SmartCache.getCollection<MedicalTerm[]>('medical_terms_delta');
      const deltaMap = new Map<string, MedicalTerm>(
        (Array.isArray(cachedDelta?.data) ? cachedDelta!.data : []).map((t) => [t.id, t])
      );
      for (const row of actionable) {
        if (row.term) deltaMap.set(row.term.id, row.term);
      }
      await DataSyncService.recordConfirmedMutation('medical_terms_delta', {
        type: 'replace',
        data: Array.from(deltaMap.values()),
      });
      FirebaseService.addAdminLog(
        'استيراد دفعة مصطلحات طبية',
        `جديد: ${created}، تحديث: ${updated}، تخطي مكرر: ${skipped}`
      ).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, MEDICAL_TERMS_COLLECTION);
    }

    return { created, updated, skipped, failed, errors };
  }
}

function parseCsvToObjects(csvText: string): Record<string, unknown>[] {
  const lines: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const ch = csvText[i];
    if (ch === '"') {
      if (inQuotes && csvText[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (current.trim()) lines.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) lines.push(current);

  if (lines.length < 2) {
    throw new Error('ملف CSV يجب أن يحتوي على صف العناوين وصف بيانات واحد على الأقل.');
  }

  const splitRow = (line: string): string[] => {
    const cols: string[] = [];
    let cell = '';
    let quoted = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (quoted && line[i + 1] === '"') {
          cell += '"';
          i++;
        } else {
          quoted = !quoted;
        }
      } else if (ch === ',' && !quoted) {
        cols.push(cell.trim());
        cell = '';
      } else {
        cell += ch;
      }
    }
    cols.push(cell.trim());
    return cols;
  };

  const headers = splitRow(lines[0]).map((h) => h.trim());
  const rows: Record<string, unknown>[] = [];
  for (let r = 1; r < lines.length; r++) {
    const vals = splitRow(lines[r]);
    const obj: Record<string, unknown> = {};
    headers.forEach((h, idx) => {
      if (h) obj[h] = vals[idx] ?? '';
    });
    rows.push(obj);
  }
  return rows;
}
