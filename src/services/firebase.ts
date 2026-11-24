import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  initializeFirestore,
  doc,
  getDoc,
  getDocFromServer,
  setDoc,
  onSnapshot,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  where,
  writeBatch,
  setLogLevel
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { Subject, Lecture, StudyResource, ArticleItem, VideoItem, CollegeInfoData, TickerItem } from '../types';
import { COLLEGE_INFO, SUBJECTS_DATA, DEFAULT_ARTICLES, DEFAULT_VIDEOS, STUDY_RESOURCES } from '../data/academicContent';
import {
  DataSyncService,
  SyncBackendAdapter,
} from './dataSyncService';
import {
  FirestoreAuditMetrics,
  PublicCollectionKey,
  SyncManifest,
} from './smartCache';

import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from 'firebase/auth';

// Silence verbose connection notices
setLogLevel('error');

// Initialize Firebase with direct forced long polling for 100% reliable connection in iframe/proxy environments
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const FIRESTORE_DATABASE_ID =
  (firebaseConfig as any).firestoreDatabaseId || 'ai-studio-fbb922c0-8b2e-4e61-a574-1d9176292ec7';

export const db = initializeFirestore(
  app,
  { experimentalForceLongPolling: true },
  FIRESTORE_DATABASE_ID
);
export const auth = getAuth(app);
auth.languageCode = 'ar';

export const authPersistenceReady: Promise<void> = (async () => {
  if (typeof window === 'undefined') return;
  const levels = [browserLocalPersistence, browserSessionPersistence, inMemoryPersistence];
  for (const persistence of levels) {
    try {
      await setPersistence(auth, persistence);
      return;
    } catch {
      // Try next fallback persistence mechanism when storage/IndexedDB is restricted
    }
  }
})();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export const FIRESTORE_QUOTA_UPGRADE_URL = `https://console.firebase.google.com/project/${
  (firebaseConfig as { projectId?: string }).projectId || 'static-run-w6shk'
}/firestore/databases/${FIRESTORE_DATABASE_ID}/data?openUpgradeDialog=true`;

let firestoreQuotaExceededInSession = false;

export function isFirestoreQuotaError(error: unknown): boolean {
  if (!error) return false;
  const code = String((error as { code?: unknown })?.code || '').toLowerCase();
  const msg = error instanceof Error ? error.message : String(error);
  const lower = msg.toLowerCase();
  return (
    code === 'resource-exhausted' ||
    lower.includes('resource-exhausted') ||
    lower.includes('quota limit exceeded') ||
    lower.includes('quota exceeded') ||
    lower.includes('free daily read units')
  );
}

export function markFirestoreQuotaExceeded(): void {
  firestoreQuotaExceededInSession = true;
}

export function isFirestoreQuotaExceeded(): boolean {
  return firestoreQuotaExceededInSession;
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  if (isFirestoreQuotaError(error)) {
    markFirestoreQuotaExceeded();
  }
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  if (isFirestoreQuotaError(error)) {
    console.warn('Firestore Quota Notice: ', JSON.stringify(errInfo));
  } else {
    console.error('Firestore Error: ', JSON.stringify(errInfo));
  }
  throw new Error(JSON.stringify(errInfo));
}

export async function testFirestoreConnection(): Promise<boolean> {
  if (isFirestoreQuotaExceeded()) return false;
  try {
    await getDocFromServer(doc(db, 'site_config', 'sync_manifest'));
    FirestoreAuditMetrics.recordGetDoc('site_config', 1, true);
    return true;
  } catch (error) {
    if (isFirestoreQuotaError(error)) {
      markFirestoreQuotaExceeded();
      return false;
    }
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
    return false;
  }
}

// Types for Admin & Dynamic Site Config
export interface SectionVisibility {
  newsTicker: boolean;
  heroSection: boolean;
  heroStats: boolean;
  heroButtons: boolean;
  telegramCard: boolean;
  collegeInfoSection: boolean;
  subjectsSection: boolean;
  scheduleSection: boolean;
  resourcesSection: boolean;
  articlesSection: boolean;
  videosSection: boolean;
  gpaCalculator: boolean;
  pomodoroTimer: boolean;
  announcementsBanner: boolean;
  contactFooter: boolean;
  pwaInstallPrompt: boolean;
  medicalDictionarySection: boolean;
}

export interface ButtonConfig {
  id: string;
  label: string;
  link: string;
  type: 'primary' | 'secondary' | 'outline' | 'telegram';
  visible: boolean;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  content: string;
  badge: string;
  link?: string;
  visible: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'pdf' | 'video' | 'logo';
  size?: string;
  category?: string;
  visible: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface AdminLogItem {
  id: string;
  action: string;
  details: string;
  timestamp: string;
}

export interface SiteConfig {
  siteTitle: string;
  siteSubtitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadgeText: string;
  heroPrimaryBtnText: string;
  heroPrimaryBtnLink: string;
  telegramBotName: string;
  telegramBotLink: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  footerCopyright: string;
  footerAboutText: string;
  siteLogoUrl: string;
  heroBgUrl: string;
  primaryColor: string; // hex or tailwind class
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  sectionVisibility: SectionVisibility;
  buttons: ButtonConfig[];
  tickerSpeed?: 'slow' | 'normal' | 'fast';
  tickerTitle?: string;
  tickerInitialized?: boolean;
}

export const DEFAULT_TICKER_ITEMS: TickerItem[] = [
  {
    id: 'ticker-1',
    text: 'مرحباً بكم في منصة دليلك الجامعي الأكاديمية الشاملة لكليتنا',
    badge: 'ترحيب',
    link: 'main',
    visible: true,
    order: 1,
    createdAt: new Date().toISOString()
  },
  {
    id: 'ticker-2',
    text: 'تم إطلاق ميزة التقويم الشهري التفاعلي الجديد في قسم الجدول الدراسي',
    badge: 'جديد',
    link: 'schedule',
    visible: true,
    order: 2,
    createdAt: new Date().toISOString()
  },
  {
    id: 'ticker-3',
    text: 'يمكنك الآن تفعيل الإشعارات اللحظية للتذكير بمواعيد المحاضرات الأكاديمية والامتحانات',
    badge: 'تنبيه',
    link: 'schedule',
    visible: true,
    order: 3,
    createdAt: new Date().toISOString()
  },
  {
    id: 'ticker-4',
    text: 'انضم إلى بوت وقناة التلجرام الرسمية للحصول على أحدث الملخصات والمراجع والمحاضرات',
    badge: 'هام',
    link: 'http://t.me/Daleelak_AlJamaei_bot',
    visible: true,
    order: 4,
    createdAt: new Date().toISOString()
  }
];

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  siteTitle: 'دليلك الجامعي',
  siteSubtitle: 'جامعتك في جيبك',
  heroTitle: 'ابدأ رحلتك الأكاديمية بذكاء وتنظيم',
  heroSubtitle: 'منصة أكاديمية كاملة لمتابعة الجداول والكتب والملخصات وتنبيهات المحاضرات الفورية مع ربط التلجرام.',
  heroBadgeText: 'مرحباً بك، طالب الكلية',
  heroPrimaryBtnText: 'دخول للوحة الرئيسية',
  heroPrimaryBtnLink: 'main',
  telegramBotName: '@Daleelak_AlJamaei_bot',
  telegramBotLink: 'http://t.me/Daleelak_AlJamaei_bot',
  contactEmail: 'contact@daleelak-jamei.edu',
  contactPhone: '+966 50 000 0000',
  contactAddress: 'مبنى المجمع الأكاديمي الرئيسي - قاعة 101',
  footerCopyright: 'جميع الحقوق محفوظة © ' + new Date().getFullYear() + ' - دليلك الجامعي',
  footerAboutText: 'منصة أكاديمية شاملة ومصممة خصيصاً لمساعدة الطلاب الجامعيين في تنقيح المواد والأكاديميا وإدارة المحاضرات بمرونة عالية.',
  siteLogoUrl: '',
  heroBgUrl: '',
  primaryColor: '#2563eb', // blue-600
  seoTitle: 'دليلك الجامعي - جامعتك في جيبك',
  seoDescription: 'دليل رقمي شامل للطلاب الجامعيين لتنظيم المحاضرات وتصفح المواد والمصادر.',
  seoKeywords: 'جامعة, محاضرات, طب, تشريح, وظائف أعضاء, كيمياء حيوية, جدول دراسي, GPA',
  tickerSpeed: 'fast',
  tickerTitle: 'شريط الأخبار والتنبيهات',
  sectionVisibility: {
    newsTicker: true,
    heroSection: true,
    heroStats: true,
    heroButtons: true,
    telegramCard: true,
    collegeInfoSection: true,
    subjectsSection: true,
    scheduleSection: true,
    resourcesSection: true,
    articlesSection: true,
    videosSection: true,
    gpaCalculator: true,
    pomodoroTimer: true,
    announcementsBanner: true,
    contactFooter: true,
    pwaInstallPrompt: true,
    medicalDictionarySection: true,
  },
  buttons: [
    { id: 'btn-enter', label: 'دخول اللوحة', link: 'main', type: 'primary', visible: true },
    { id: 'btn-telegram', label: 'بوت التلجرام', link: 'http://t.me/Daleelak_AlJamaei_bot', type: 'telegram', visible: true },
    { id: 'btn-gpa', label: 'حاسبة المعدل GPA', link: 'gpa', type: 'secondary', visible: true },
    { id: 'btn-pomodoro', label: 'مؤقت التركيز', link: 'pomodoro', type: 'secondary', visible: true },
  ]
};

const SITE_CONFIG_DOC_ID = 'general';
const COLLEGE_INFO_DOC_ID = 'about_college';
const LOCAL_STORAGE_SITE_CONFIG_KEY = 'daleelak_site_config_v2';
const LOCAL_STORAGE_TICKER_ITEMS_KEY = 'daleelak_ticker_items_v1';
const LOCAL_STORAGE_TICKER_SEEDED_KEY = 'daleelak_ticker_seeded_v1';

function stripUndefinedFields<T extends Record<string, any>>(obj: T): Partial<T> {
  const clean: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      clean[key] = value;
    }
  }
  return clean as Partial<T>;
}

function getCachedTickerItems(): TickerItem[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_TICKER_ITEMS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function saveCachedTickerItems(items: TickerItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_STORAGE_TICKER_ITEMS_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('daleelak-ticker-updated', { detail: items }));
  } catch (e) {
    console.warn('Failed saving ticker items to localStorage:', e);
  }
}

function getCachedSiteConfig(): SiteConfig {
  if (typeof window === 'undefined') return DEFAULT_SITE_CONFIG;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_SITE_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_SITE_CONFIG,
        ...parsed,
        sectionVisibility: {
          ...DEFAULT_SITE_CONFIG.sectionVisibility,
          ...(parsed.sectionVisibility || {})
        }
      };
    }
  } catch {
    // Ignore JSON error
  }
  return DEFAULT_SITE_CONFIG;
}

function saveCachedSiteConfig(config: SiteConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_STORAGE_SITE_CONFIG_KEY, JSON.stringify(config));
    window.dispatchEvent(new CustomEvent('daleelak-site-config-updated', { detail: config }));
  } catch (e) {
    console.warn('Failed saving site config to localStorage:', e);
  }
}

// Configure Centralized DataSyncService with live Firestore backend & read instrumentation
const SITE_CONFIG_DOC_ID_FOR_MANIFEST = 'sync_manifest';

const firestoreSyncAdapter: SyncBackendAdapter = {
  isQuotaExceeded: () => isFirestoreQuotaExceeded(),
  markQuotaExceeded: () => markFirestoreQuotaExceeded(),
  isQuotaError: (err: unknown) => isFirestoreQuotaError(err),
  getSyncManifest: async () => {
    const snap = await getDoc(doc(db, 'site_config', SITE_CONFIG_DOC_ID_FOR_MANIFEST));
    FirestoreAuditMetrics.recordGetDoc('site_config', 1, true);
    if (!snap.exists()) return null;
    return snap.data() as SyncManifest;
  },
  saveSyncManifest: async (manifest: SyncManifest) => {
    await setDoc(doc(db, 'site_config', SITE_CONFIG_DOC_ID_FOR_MANIFEST), manifest, { merge: true });
  },
  fetchSingleDoc: async (collectionName: string, docId: string) => {
    const snap = await getDoc(doc(db, collectionName, docId));
    FirestoreAuditMetrics.recordGetDoc(collectionName, 1, false);
    if (!snap.exists()) return null;
    return snap.data() as Record<string, unknown>;
  },
  fetchDocById: async (collectionName: string, docId: string) => {
    const snap = await getDoc(doc(db, collectionName, docId));
    FirestoreAuditMetrics.recordGetDoc(collectionName, 1, false);
    if (!snap.exists()) return null;
    return { id: snap.id, data: snap.data() as Record<string, unknown> };
  },
  fetchCollection: async (collectionName: string, options) => {
    const colRef = collection(db, collectionName);
    const constraints: any[] = [];
    if (options?.verifiedOnly) {
      constraints.push(where('verification_status', '==', 'verified'));
    }
    if (options?.publishedOnly) {
      constraints.push(where('published', '==', true));
    }
    if (options?.updatedAfter && options?.updatedAtField) {
      constraints.push(where(options.updatedAtField, '>', options.updatedAfter));
    }
    if (options?.limitCount && options.limitCount > 0) {
      constraints.push(limit(options.limitCount));
    }
    const q = constraints.length > 0 ? query(colRef, ...constraints) : colRef;
    const snap = await getDocs(q);
    FirestoreAuditMetrics.recordGetDocs(collectionName, snap.size);
    return snap.docs.map((d) => ({ id: d.id, data: d.data() as Record<string, unknown> }));
  },
};

DataSyncService.configureBackend(firestoreSyncAdapter);

const DEFAULT_COLLEGE_INFO_VALUE: CollegeInfoData = {
  title: COLLEGE_INFO.title,
  tagline: COLLEGE_INFO.tagline,
  image: COLLEGE_INFO.image,
  overview: COLLEGE_INFO.overview,
  creditSystem: COLLEGE_INFO.creditSystem,
  survivalTips: COLLEGE_INFO.survivalTips.map((t, idx) => ({ id: 'tip-' + idx, ...t })),
  customSections: [],
};

// Register all public CMS collections with DataSyncService
DataSyncService.registerCollection<SiteConfig>({
  key: 'site_config',
  firestoreCollection: 'site_config',
  docId: SITE_CONFIG_DOC_ID,
  defaultValue: DEFAULT_SITE_CONFIG,
  isArray: false,
  normalizeItem: (_id, raw) => ({
    ...DEFAULT_SITE_CONFIG,
    ...(raw as Partial<SiteConfig>),
    sectionVisibility: {
      ...DEFAULT_SITE_CONFIG.sectionVisibility,
      ...((raw as Partial<SiteConfig>).sectionVisibility || {}),
    },
  }),
});

DataSyncService.registerCollection<ArticleItem[]>({
  key: 'articles',
  firestoreCollection: 'articles',
  defaultValue: DEFAULT_ARTICLES,
  isArray: true,
  updatedAtField: 'updatedAt',
  sortItems: (items) =>
    [...(items as ArticleItem[])].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ),
});

DataSyncService.registerCollection<VideoItem[]>({
  key: 'videos',
  firestoreCollection: 'videos',
  defaultValue: DEFAULT_VIDEOS,
  isArray: true,
  updatedAtField: 'updatedAt',
  sortItems: (items) =>
    [...(items as VideoItem[])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
});

DataSyncService.registerCollection<CollegeInfoData>({
  key: 'college_info',
  firestoreCollection: 'college_info',
  docId: COLLEGE_INFO_DOC_ID,
  defaultValue: DEFAULT_COLLEGE_INFO_VALUE,
  isArray: false,
  normalizeItem: (_id, raw) => {
    const data = raw as Partial<CollegeInfoData>;
    return {
      title: data.title || COLLEGE_INFO.title,
      tagline: data.tagline || COLLEGE_INFO.tagline,
      image: data.image || COLLEGE_INFO.image,
      overview: data.overview || COLLEGE_INFO.overview,
      creditSystem: data.creditSystem || COLLEGE_INFO.creditSystem,
      survivalTips:
        data.survivalTips && data.survivalTips.length > 0
          ? data.survivalTips
          : COLLEGE_INFO.survivalTips.map((t, idx) => ({ id: 'tip-' + idx, ...t })),
      customSections: data.customSections || [],
    };
  },
});

DataSyncService.registerCollection<Subject[]>({
  key: 'subjects_data',
  firestoreCollection: 'subjects_data',
  defaultValue: SUBJECTS_DATA,
  isArray: true,
  updatedAtField: 'updatedAt',
});

DataSyncService.registerCollection<StudyResource[]>({
  key: 'study_resources',
  firestoreCollection: 'study_resources',
  defaultValue: STUDY_RESOURCES,
  isArray: true,
  updatedAtField: 'updatedAt',
  normalizeItem: (id, data) => ({
    id,
    title: String(data.title || ''),
    description: String(data.description || ''),
    link: String(data.link || data.url || ''),
    url: String(data.url || data.link || ''),
    subjectId: String(data.subjectId || 'general'),
    subjectTag: String(data.subjectTag || data.subjectId || ''),
    category: String(data.category || 'book'),
    icon: String(data.icon || 'BookOpen'),
    isExternal: data.isExternal !== false,
    isActive: data.isActive !== false,
    order: typeof data.order === 'number' ? data.order : 0,
    createdAt: String(data.createdAt || new Date().toISOString()),
    updatedAt: String(data.updatedAt || new Date().toISOString()),
  }),
  sortItems: (items) =>
    [...(items as StudyResource[])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
});

DataSyncService.registerCollection<TickerItem[]>({
  key: 'ticker_items',
  firestoreCollection: 'ticker_items',
  defaultValue: DEFAULT_TICKER_ITEMS,
  isArray: true,
  updatedAtField: 'updatedAt',
  normalizeItem: (id, data) => ({
    id,
    text: typeof data.text === 'string' ? data.text : '',
    badge: typeof data.badge === 'string' ? data.badge : '',
    link: typeof data.link === 'string' ? data.link : '',
    visible: data.visible !== false,
    order: typeof data.order === 'number' && Number.isFinite(data.order) ? data.order : 0,
    createdAt: typeof data.createdAt === 'string' ? data.createdAt : '',
  }),
  sortItems: (items) =>
    [...(items as TickerItem[])].sort((a, b) => {
      const orderDiff = (a.order ?? 0) - (b.order ?? 0);
      if (orderDiff !== 0) return orderDiff;
      return (a.createdAt || '').localeCompare(b.createdAt || '');
    }),
});

DataSyncService.registerCollection<AnnouncementItem[]>({
  key: 'announcements',
  firestoreCollection: 'announcements',
  defaultValue: [],
  isArray: true,
  updatedAtField: 'updatedAt',
});

DataSyncService.registerCollection<MediaItem[]>({
  key: 'media',
  firestoreCollection: 'media',
  defaultValue: [],
  isArray: true,
  updatedAtField: 'updatedAt',
});

export class FirebaseService {
  // 1. Subscribe to Site Config via Smart IndexedDB Cache + Manifest Sync
  static subscribeSiteConfig(callback: (config: SiteConfig) => void): () => void {
    return DataSyncService.subscribeCollection<SiteConfig>('site_config', (cfg) => {
      saveCachedSiteConfig(cfg);
      callback(cfg);
    });
  }

  // 2. Save / Update Site Config (Cloud-First -> Confirm -> Cache Update + Manifest Bump)
  static async updateSiteConfig(partialConfig: Partial<SiteConfig>): Promise<void> {
    try {
      const cached = await DataSyncService.loadCollection<SiteConfig>('site_config');
      const current = cached.data || getCachedSiteConfig();
      const updated: SiteConfig = {
        ...current,
        ...partialConfig,
        sectionVisibility: {
          ...current.sectionVisibility,
          ...(partialConfig.sectionVisibility || {})
        }
      };

      const cleanUpdated = stripUndefinedFields(updated) as SiteConfig;
      const docRef = doc(db, 'site_config', SITE_CONFIG_DOC_ID);
      await setDoc(docRef, cleanUpdated, { merge: true });

      saveCachedSiteConfig(cleanUpdated);
      await DataSyncService.recordConfirmedMutation('site_config', {
        type: 'replace',
        data: cleanUpdated,
      });
      this.addAdminLog('تحديث بيانات الموقع', 'تم تعديل الإعدادات العامة ونصوص الموقع').catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `site_config/${SITE_CONFIG_DOC_ID}`);
    }
  }

  // 3. Toggle Individual Section Visibility Switch
  static async toggleSectionVisibility(sectionKey: keyof SectionVisibility, value: boolean): Promise<void> {
    const cached = await DataSyncService.loadCollection<SiteConfig>('site_config');
    const current = cached.data || getCachedSiteConfig();
    const updatedVisibility = {
      ...current.sectionVisibility,
      [sectionKey]: value
    };
    await this.updateSiteConfig({ sectionVisibility: updatedVisibility });
    this.addAdminLog('تغيير حالة ظهور قسم', `تم تغيير قسم ${sectionKey} إلى ${value ? 'تفعيل ON' : 'إخفاء OFF'}`).catch(() => {});
  }

  // 4. Articles Management (Shared Smart Cache + Cloud-First Mutations)
  static subscribeArticles(callback: (articles: ArticleItem[]) => void): () => void {
    return DataSyncService.subscribeCollection<ArticleItem[]>('articles', (articles) => {
      callback(articles);
    });
  }

  static async addArticle(item: Omit<ArticleItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const colRef = collection(db, 'articles');
      const now = new Date().toISOString();
      const payload = stripUndefinedFields({
        ...item,
        createdAt: now,
        updatedAt: now
      });
      const docRef = await addDoc(colRef, payload);
      await DataSyncService.recordConfirmedMutation('articles', {
        type: 'upsert',
        item: { id: docRef.id, ...payload } as ArticleItem,
      });
      this.addAdminLog('إضافة مقال جديد', `عنوان المقال: ${item.title} (${item.status})`).catch(() => {});
      return docRef.id;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'articles');
    }
  }

  static async updateArticle(id: string, partial: Partial<ArticleItem>): Promise<void> {
    try {
      const docRef = doc(db, 'articles', id);
      const now = new Date().toISOString();
      const updatePayload = stripUndefinedFields({
        ...partial,
        updatedAt: now
      });
      await updateDoc(docRef, updatePayload);
      const cached = await DataSyncService.loadCollection<ArticleItem[]>('articles');
      const existing = cached.data.find((a) => a.id === id);
      if (existing) {
        await DataSyncService.recordConfirmedMutation('articles', {
          type: 'upsert',
          item: { ...existing, ...updatePayload, id } as ArticleItem,
        });
      } else {
        await DataSyncService.loadCollection('articles', { forceRefresh: true });
      }
      this.addAdminLog('تحديث مقال', `معرف المقال: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `articles/${id}`);
    }
  }

  static async deleteArticle(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'articles', id);
      await deleteDoc(docRef);
      await DataSyncService.recordConfirmedMutation('articles', {
        type: 'delete',
        id,
      });
      this.addAdminLog('حذف مقال', `معرف المقال: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `articles/${id}`);
    }
  }

  // 5. Video Management
  static subscribeVideos(callback: (videos: VideoItem[]) => void): () => void {
    return DataSyncService.subscribeCollection<VideoItem[]>('videos', (videos) => {
      callback(videos);
    });
  }

  static async addVideo(item: Omit<VideoItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    if (typeof item.videoUrl === 'string' && item.videoUrl.trim().toLowerCase().startsWith('blob:')) {
      throw new Error('روابط blob: المؤقتة غير صالحة للنشر السحابي. يرجى رفع الفيديو عبر Google Drive أو إدخال رابط مباشر.');
    }
    try {
      const colRef = collection(db, 'videos');
      const now = new Date().toISOString();
      const payload = stripUndefinedFields({
        ...item,
        createdAt: now,
        updatedAt: now
      });
      const docRef = await addDoc(colRef, payload);
      await DataSyncService.recordConfirmedMutation('videos', {
        type: 'upsert',
        item: { id: docRef.id, ...payload } as VideoItem,
      });
      this.addAdminLog('إضافة فيديو جديد', `عنوان الفيديو: ${item.title}`).catch(() => {});
      return docRef.id;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'videos');
    }
  }

  static async seedDefaultArticlesAndVideos(): Promise<void> {
    try {
      const existingArticles = (await DataSyncService.loadCollection<ArticleItem[]>('articles')).data || [];
      const existingVideos = (await DataSyncService.loadCollection<VideoItem[]>('videos')).data || [];
      const colArt = collection(db, 'articles');
      const addedArticles: ArticleItem[] = [];
      for (const art of DEFAULT_ARTICLES) {
        const now = new Date().toISOString();
        const payload = {
          title: art.title,
          subtitle: art.subtitle || '',
          category: art.category || 'عام',
          status: art.status,
          author: art.author || 'هيئة الإرشاد الأكاديمي',
          coverImage: art.coverImage || '',
          content: art.content,
          createdAt: art.createdAt || now,
          updatedAt: now
        };
        const ref = await addDoc(colArt, payload);
        addedArticles.push({ id: ref.id, ...payload });
      }
      const colVid = collection(db, 'videos');
      const addedVideos: VideoItem[] = [];
      for (const vid of DEFAULT_VIDEOS) {
        const now = new Date().toISOString();
        const payload = {
          title: vid.title,
          description: vid.description || '',
          videoUrl: vid.videoUrl,
          thumbnailUrl: vid.thumbnailUrl || '',
          duration: vid.duration || '00:00',
          order: vid.order || 1,
          visible: vid.visible !== false,
          fileType: vid.fileType || 'video/mp4',
          createdAt: vid.createdAt || now,
          updatedAt: now
        };
        const ref = await addDoc(colVid, payload);
        addedVideos.push({ id: ref.id, ...payload });
      }
      await DataSyncService.recordConfirmedMutation('articles', {
        type: 'replace',
        data: [...addedArticles, ...existingArticles],
      });
      await DataSyncService.recordConfirmedMutation('videos', {
        type: 'replace',
        data: [...existingVideos, ...addedVideos],
      });
      this.addAdminLog('استيراد البيانات النموذجية', 'تم استيراد المقالات والفيديوهات الأكاديمية بنجاح').catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'articles_and_videos');
    }
  }

  static async updateVideo(id: string, partial: Partial<VideoItem>): Promise<void> {
    if (typeof partial.videoUrl === 'string' && partial.videoUrl.trim().toLowerCase().startsWith('blob:')) {
      throw new Error('روابط blob: المؤقتة غير صالحة للنشر السحابي. يرجى رفع الفيديو عبر Google Drive أو إدخال رابط مباشر.');
    }
    try {
      const docRef = doc(db, 'videos', id);
      const now = new Date().toISOString();
      const updatePayload = stripUndefinedFields({
        ...partial,
        updatedAt: now
      });
      await updateDoc(docRef, updatePayload);
      const cached = await DataSyncService.loadCollection<VideoItem[]>('videos');
      const existing = cached.data.find((v) => v.id === id);
      if (existing) {
        await DataSyncService.recordConfirmedMutation('videos', {
          type: 'upsert',
          item: { ...existing, ...updatePayload, id } as VideoItem,
        });
      } else {
        await DataSyncService.loadCollection('videos', { forceRefresh: true });
      }
      this.addAdminLog('تحديث فيديو', `معرف الفيديو: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `videos/${id}`);
    }
  }

  static async deleteVideo(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'videos', id);
      await deleteDoc(docRef);
      await DataSyncService.recordConfirmedMutation('videos', {
        type: 'delete',
        id,
      });
      this.addAdminLog('حذف فيديو', `معرف الفيديو: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `videos/${id}`);
    }
  }

  // 6. About College Section Info
  static subscribeCollegeInfo(callback: (data: CollegeInfoData) => void): () => void {
    return DataSyncService.subscribeCollection<CollegeInfoData>('college_info', (data) => {
      callback(data);
    });
  }

  static async updateCollegeInfo(data: Partial<CollegeInfoData>): Promise<void> {
    try {
      const docRef = doc(db, 'college_info', COLLEGE_INFO_DOC_ID);
      const cleanPayload = stripUndefinedFields(data);
      await setDoc(docRef, cleanPayload, { merge: true });
      const cached = await DataSyncService.loadCollection<CollegeInfoData>('college_info');
      const merged: CollegeInfoData = {
        ...cached.data,
        ...cleanPayload,
      };
      await DataSyncService.recordConfirmedMutation('college_info', {
        type: 'replace',
        data: merged,
      });
      this.addAdminLog('تحديث قسم الكلية', 'تم تعديل ومعالجة معلومات عن الكلية').catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `college_info/${COLLEGE_INFO_DOC_ID}`);
    }
  }

  // 7. Academic Subjects Data
  static subscribeSubjects(callback: (subjects: Subject[]) => void): () => void {
    return DataSyncService.subscribeCollection<Subject[]>('subjects_data', (subjects) => {
      callback(subjects);
    });
  }

  static async addSubject(sub: Subject): Promise<void> {
    try {
      const now = new Date().toISOString();
      const payload = stripUndefinedFields({ ...sub, updatedAt: now }) as Subject;
      const docRef = doc(db, 'subjects_data', sub.id);
      await setDoc(docRef, payload);
      await DataSyncService.recordConfirmedMutation('subjects_data', {
        type: 'upsert',
        item: payload,
      });
      this.addAdminLog('إضافة مادة أكاديمية', `اسم المادة: ${sub.nameAr}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `subjects_data/${sub.id}`);
    }
  }

  static async updateSubject(id: string, partial: Partial<Subject>): Promise<void> {
    try {
      const docRef = doc(db, 'subjects_data', id);
      const now = new Date().toISOString();
      const updatePayload = stripUndefinedFields({ ...partial, updatedAt: now });
      await updateDoc(docRef, updatePayload);
      const cached = await DataSyncService.loadCollection<Subject[]>('subjects_data');
      const existing = cached.data.find((s) => s.id === id);
      if (existing) {
        await DataSyncService.recordConfirmedMutation('subjects_data', {
          type: 'upsert',
          item: { ...existing, ...updatePayload, id } as Subject,
        });
      } else {
        await DataSyncService.loadCollection('subjects_data', { forceRefresh: true });
      }
      this.addAdminLog('تحديث مادة أكاديمية', `معرف المادة: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `subjects_data/${id}`);
    }
  }

  static async deleteSubject(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'subjects_data', id);
      await deleteDoc(docRef);
      await DataSyncService.recordConfirmedMutation('subjects_data', {
        type: 'delete',
        id,
      });
      this.addAdminLog('حذف مادة أكاديمية', `معرف المادة: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `subjects_data/${id}`);
    }
  }

  // 8. Announcements & Ads Manager
  static subscribeAnnouncements(callback: (items: AnnouncementItem[]) => void): () => void {
    return DataSyncService.subscribeCollection<AnnouncementItem[]>('announcements', (items) => {
      callback(items);
    });
  }

  static async addAnnouncement(item: Omit<AnnouncementItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
    try {
      const colRef = collection(db, 'announcements');
      const now = new Date().toISOString();
      const payload = stripUndefinedFields({
        ...item,
        createdAt: now,
        updatedAt: now
      });
      const docRef = await addDoc(colRef, payload);
      await DataSyncService.recordConfirmedMutation('announcements', {
        type: 'upsert',
        item: { id: docRef.id, ...payload } as AnnouncementItem,
      });
      this.addAdminLog('إضافة إعلان/تنبيه جديد', `عنوان: ${item.title}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'announcements');
    }
  }

  static async updateAnnouncement(id: string, partial: Partial<AnnouncementItem>): Promise<void> {
    try {
      const docRef = doc(db, 'announcements', id);
      const now = new Date().toISOString();
      const updatePayload = stripUndefinedFields({ ...partial, updatedAt: now });
      await updateDoc(docRef, updatePayload);
      const cached = await DataSyncService.loadCollection<AnnouncementItem[]>('announcements');
      const existing = cached.data.find((a) => a.id === id);
      if (existing) {
        await DataSyncService.recordConfirmedMutation('announcements', {
          type: 'upsert',
          item: { ...existing, ...updatePayload, id } as AnnouncementItem,
        });
      } else {
        await DataSyncService.loadCollection('announcements', { forceRefresh: true });
      }
      this.addAdminLog('تحديث إعلان', `معرف الإعلان: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `announcements/${id}`);
    }
  }

  static async deleteAnnouncement(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'announcements', id);
      await deleteDoc(docRef);
      await DataSyncService.recordConfirmedMutation('announcements', {
        type: 'delete',
        id,
      });
      this.addAdminLog('حذف إعلان', `معرف الإعلان: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `announcements/${id}`);
    }
  }

  // 9. Media & Assets Manager
  static subscribeMedia(callback: (items: MediaItem[]) => void): () => void {
    return DataSyncService.subscribeCollection<MediaItem[]>('media', (items) => {
      callback(items);
    });
  }

  static async addMedia(item: Omit<MediaItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
    try {
      const colRef = collection(db, 'media');
      const now = new Date().toISOString();
      const payload = stripUndefinedFields({
        ...item,
        createdAt: now,
        updatedAt: now
      });
      const docRef = await addDoc(colRef, payload);
      await DataSyncService.recordConfirmedMutation('media', {
        type: 'upsert',
        item: { id: docRef.id, ...payload } as MediaItem,
      });
      this.addAdminLog('إضافة ملف ميديا', `اسم: ${item.name} (${item.type})`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'media');
    }
  }

  static async updateMedia(id: string, partial: Partial<MediaItem>): Promise<void> {
    try {
      const docRef = doc(db, 'media', id);
      const now = new Date().toISOString();
      const updatePayload = stripUndefinedFields({ ...partial, updatedAt: now });
      await updateDoc(docRef, updatePayload);
      const cached = await DataSyncService.loadCollection<MediaItem[]>('media');
      const existing = cached.data.find((m) => m.id === id);
      if (existing) {
        await DataSyncService.recordConfirmedMutation('media', {
          type: 'upsert',
          item: { ...existing, ...updatePayload, id } as MediaItem,
        });
      } else {
        await DataSyncService.loadCollection('media', { forceRefresh: true });
      }
      this.addAdminLog('تحديث ملف ميديا', `معرف الملف: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `media/${id}`);
    }
  }

  static async deleteMedia(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'media', id);
      await deleteDoc(docRef);
      await DataSyncService.recordConfirmedMutation('media', {
        type: 'delete',
        id,
      });
      this.addAdminLog('حذف ملف ميديا', `معرف الملف: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `media/${id}`);
    }
  }

  // 10. Admin Action Audit Logs (Bounded getDocs on demand - eliminates continuous listener!)
  static subscribeAdminLogs(callback: (logs: AdminLogItem[]) => void): () => void {
    let active = true;
    (async () => {
      if (isFirestoreQuotaExceeded()) {
        if (active) callback([]);
        return;
      }
      try {
        const q = query(collection(db, 'admin_logs'), orderBy('timestamp', 'desc'), limit(50));
        const snapshot = await getDocs(q);
        FirestoreAuditMetrics.recordGetDocs('admin_logs', snapshot.size);
        if (!active) return;
        const logs = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        })) as AdminLogItem[];
        callback(logs);
      } catch (err) {
        if (isFirestoreQuotaError(err)) markFirestoreQuotaExceeded();
        console.warn('Admin logs fetch fallback:', err);
        if (active) callback([]);
      }
    })();
    return () => {
      active = false;
    };
  }

  static async addAdminLog(action: string, details: string): Promise<void> {
    try {
      const colRef = collection(db, 'admin_logs');
      await addDoc(colRef, {
        action,
        details,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      console.error('Error writing admin log:', err);
    }
  }

  // 11. News Ticker (شريط الأخبار المتحرك)
  static subscribeTicker(callback: (items: TickerItem[]) => void): () => void {
    return DataSyncService.subscribeCollection<TickerItem[]>('ticker_items', (items) => {
      saveCachedTickerItems(items);
      callback(items);
    });
  }

  static async addTickerItem(item: Omit<TickerItem, 'id' | 'createdAt'>): Promise<string> {
    const cleanText = (item.text || '').trim().slice(0, 1000);
    if (!cleanText) {
      throw new Error('نص الخبر مطلوب');
    }
    const now = new Date().toISOString();
    const payload = {
      text: cleanText,
      badge: (item.badge || '').trim().slice(0, 40),
      link: (item.link || '').trim().slice(0, 500),
      visible: item.visible !== false,
      order: typeof item.order === 'number' && Number.isFinite(item.order) ? item.order : 1,
      createdAt: now,
      updatedAt: now
    };

    try {
      const colRef = collection(db, 'ticker_items');
      const docRef = await addDoc(colRef, payload);

      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_TICKER_SEEDED_KEY, '1');
      }
      setDoc(doc(db, 'site_config', SITE_CONFIG_DOC_ID), { tickerInitialized: true }, { merge: true }).catch(() => {});

      const newItem: TickerItem = { id: docRef.id, ...payload };
      await DataSyncService.recordConfirmedMutation('ticker_items', {
        type: 'upsert',
        item: newItem,
      });

      this.addAdminLog('إضافة خبر للشريط المتحرك', `نص الخبر: ${cleanText.slice(0, 40)}`).catch(() => {});
      return docRef.id;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'ticker_items');
    }
  }

  static async updateTickerItem(id: string, partial: Partial<TickerItem>): Promise<void> {
    const cleanPartial: Record<string, any> = {};
    if (partial.text !== undefined) {
      const cleanText = partial.text.trim().slice(0, 1000);
      if (!cleanText) throw new Error('نص الخبر مطلوب');
      cleanPartial.text = cleanText;
    }
    if (partial.badge !== undefined) {
      cleanPartial.badge = partial.badge.trim().slice(0, 40);
    }
    if (partial.link !== undefined) {
      cleanPartial.link = partial.link.trim().slice(0, 500);
    }
    if (partial.visible !== undefined) {
      cleanPartial.visible = Boolean(partial.visible);
    }
    if (partial.order !== undefined && typeof partial.order === 'number' && Number.isFinite(partial.order)) {
      cleanPartial.order = partial.order;
    }
    cleanPartial.updatedAt = new Date().toISOString();

    try {
      const docRef = doc(db, 'ticker_items', id);
      await setDoc(docRef, cleanPartial, { merge: true });

      const cached = await DataSyncService.loadCollection<TickerItem[]>('ticker_items');
      const existing = cached.data.find((x) => x.id === id);
      if (existing) {
        await DataSyncService.recordConfirmedMutation('ticker_items', {
          type: 'upsert',
          item: { ...existing, ...cleanPartial, id },
        });
      } else {
        await DataSyncService.loadCollection('ticker_items', { forceRefresh: true });
      }

      this.addAdminLog('تحديث خبر في الشريط المتحرك', `معرف الخبر: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `ticker_items/${id}`);
    }
  }

  static async reorderTickerItems(orderedItems: TickerItem[]): Promise<void> {
    try {
      const batch = writeBatch(db);
      const now = new Date().toISOString();
      const normalized = orderedItems.map((item, idx) => {
        const nextOrder = idx + 1;
        const docRef = doc(db, 'ticker_items', item.id);
        batch.set(docRef, { order: nextOrder, updatedAt: now }, { merge: true });
        return { ...item, order: nextOrder };
      });
      await batch.commit();
      await DataSyncService.recordConfirmedMutation('ticker_items', {
        type: 'replace',
        data: normalized,
      });
      this.addAdminLog('إعادة ترتيب شريط الأخبار', `تم تحديث ترتيب ${normalized.length} أخبار`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, 'ticker_items');
    }
  }

  static async deleteTickerItem(id: string): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_TICKER_SEEDED_KEY, '1');
    }
    try {
      setDoc(doc(db, 'site_config', SITE_CONFIG_DOC_ID), { tickerInitialized: true }, { merge: true }).catch(() => {});
      const docRef = doc(db, 'ticker_items', id);
      await deleteDoc(docRef);

      await DataSyncService.recordConfirmedMutation('ticker_items', {
        type: 'delete',
        id,
      });

      this.addAdminLog('حذف خبر من الشريط المتحرك', `معرف الخبر: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `ticker_items/${id}`);
    }
  }

  static async seedDefaultTickerItems(): Promise<void> {
    try {
      const batch = writeBatch(db);
      const now = new Date().toISOString();
      const seeded = DEFAULT_TICKER_ITEMS.map((item) => ({ ...item, createdAt: now, updatedAt: now }));
      for (const item of seeded) {
        const docRef = doc(db, 'ticker_items', item.id);
        batch.set(docRef, {
          text: item.text,
          badge: item.badge || '',
          link: item.link || '',
          visible: item.visible !== false,
          order: item.order,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        });
      }
      batch.set(doc(db, 'site_config', SITE_CONFIG_DOC_ID), { tickerInitialized: true }, { merge: true });
      await batch.commit();

      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_TICKER_SEEDED_KEY, '1');
      }
      const existing = (await DataSyncService.loadCollection<TickerItem[]>('ticker_items')).data || [];
      const mergedMap = new Map<string, TickerItem>();
      existing.forEach((it) => mergedMap.set(it.id, it));
      seeded.forEach((it) => mergedMap.set(it.id, it));
      const merged = Array.from(mergedMap.values()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      await DataSyncService.recordConfirmedMutation('ticker_items', {
        type: 'replace',
        data: merged,
      });

      this.addAdminLog('استعادة شريط الأخبار الافتراضي', 'تم استرجاع الأخبار النموذجية لشريط الأخبار').catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'ticker_items');
    }
  }

  // 12. Dynamic Study Resources & Digital Library (مصادر الدراسة والمكتبة الرقمية)
  static subscribeStudyResources(callback: (resources: StudyResource[]) => void): () => void {
    return DataSyncService.subscribeCollection<StudyResource[]>('study_resources', (resources) => {
      callback(resources);
    });
  }

  static async addStudyResource(item: Omit<StudyResource, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const colRef = collection(db, 'study_resources');
      const now = new Date().toISOString();
      const payload = {
        title: item.title.trim(),
        description: item.description.trim(),
        link: item.link || item.url || '',
        url: item.url || item.link || '',
        subjectId: item.subjectId || 'general',
        subjectTag: item.subjectTag || item.subjectId || '',
        category: item.category || 'book',
        icon: item.icon || 'BookOpen',
        isExternal: item.isExternal !== false,
        isActive: item.isActive !== false,
        order: item.order ?? 0,
        createdAt: now,
        updatedAt: now
      };
      const docRef = await addDoc(colRef, payload);
      await DataSyncService.recordConfirmedMutation('study_resources', {
        type: 'upsert',
        item: { id: docRef.id, ...payload } as StudyResource,
      });
      this.addAdminLog('إضافة مصدر دراسي جديد', `اسم المصدر: ${item.title}`).catch(() => {});
      return docRef.id;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'study_resources');
    }
  }

  static async updateStudyResource(id: string, partial: Partial<StudyResource>): Promise<void> {
    try {
      const docRef = doc(db, 'study_resources', id);
      const updatePayload: Record<string, any> = {
        ...stripUndefinedFields(partial),
        updatedAt: new Date().toISOString()
      };
      if (partial.url && !partial.link) updatePayload.link = partial.url;
      if (partial.link && !partial.url) updatePayload.url = partial.link;
      if (partial.subjectId && !partial.subjectTag) updatePayload.subjectTag = partial.subjectId;
      if (partial.subjectTag && !partial.subjectId) updatePayload.subjectId = partial.subjectTag;

      await updateDoc(docRef, updatePayload);
      const cached = await DataSyncService.loadCollection<StudyResource[]>('study_resources');
      const existing = cached.data.find((r) => r.id === id);
      if (existing) {
        await DataSyncService.recordConfirmedMutation('study_resources', {
          type: 'upsert',
          item: { ...existing, ...updatePayload, id } as StudyResource,
        });
      } else {
        await DataSyncService.loadCollection('study_resources', { forceRefresh: true });
      }
      this.addAdminLog('تحديث مصدر دراسي', `معرف المصدر: ${id} (${partial.title || ''})`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `study_resources/${id}`);
    }
  }

  static async deleteStudyResource(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'study_resources', id);
      await deleteDoc(docRef);
      await DataSyncService.recordConfirmedMutation('study_resources', {
        type: 'delete',
        id,
      });
      this.addAdminLog('حذف مصدر دراسي', `معرف المصدر: ${id}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `study_resources/${id}`);
    }
  }

  static async seedDefaultStudyResources(): Promise<void> {
    try {
      const existing = (await DataSyncService.loadCollection<StudyResource[]>('study_resources')).data || [];
      const mergedMap = new Map<string, StudyResource>();
      existing.forEach((r) => mergedMap.set(r.id, r));
      for (let idx = 0; idx < STUDY_RESOURCES.length; idx++) {
        const res = STUDY_RESOURCES[idx];
        const docRef = doc(db, 'study_resources', res.id);
        const now = new Date().toISOString();
        const payload = {
          title: res.title,
          description: res.description,
          link: res.link,
          url: res.link,
          subjectId: res.subjectId,
          subjectTag: res.subjectId,
          category: res.category,
          icon: res.icon || 'BookOpen',
          isExternal: true,
          isActive: true,
          order: idx + 1,
          createdAt: now,
          updatedAt: now
        };
        await setDoc(docRef, payload, { merge: true });
        mergedMap.set(res.id, { id: res.id, ...payload } as StudyResource);
      }
      await DataSyncService.recordConfirmedMutation('study_resources', {
        type: 'replace',
        data: Array.from(mergedMap.values()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
      });
      this.addAdminLog('استعادة المصادر النموذجية', 'تم استرجاع المصادر الدراسية الافتراضية').catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'study_resources');
    }
  }

  // 13. Full Backup JSON Export & Validated Import across all 14 CMS/Content Collections
  static async exportFullData(): Promise<string> {
    try {
      const siteSnap = await getDoc(doc(db, 'site_config', SITE_CONFIG_DOC_ID));
      FirestoreAuditMetrics.recordGetDoc('site_config', 1, false);
      const siteConfigData = siteSnap.exists() ? siteSnap.data() : DEFAULT_SITE_CONFIG;

      const collegeSnap = await getDoc(doc(db, 'college_info', COLLEGE_INFO_DOC_ID));
      FirestoreAuditMetrics.recordGetDoc('college_info', 1, false);
      const collegeInfoData = collegeSnap.exists() ? collegeSnap.data() : DEFAULT_COLLEGE_INFO_VALUE;

      const innovaInfoSnap = await getDoc(doc(db, 'innova_info', 'profile'));
      FirestoreAuditMetrics.recordGetDoc('innova_info', 1, false);
      const innovaInfoData = innovaInfoSnap.exists() ? innovaInfoSnap.data() : null;

      const readAll = async (colName: string) => {
        const snap = await getDocs(collection(db, colName));
        FirestoreAuditMetrics.recordGetDocs(colName, snap.size);
        return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      };

      const [
        subjectsData,
        studyResources,
        articles,
        videos,
        tickerItems,
        announcements,
        media,
        driveFiles,
        innovaMembers,
        innovaContents,
        medicalTermsCustom,
      ] = await Promise.all([
        readAll('subjects_data'),
        readAll('study_resources'),
        readAll('articles'),
        readAll('videos'),
        readAll('ticker_items'),
        readAll('announcements'),
        readAll('media'),
        readAll('drive_files'),
        readAll('innova_members'),
        readAll('innova_contents'),
        readAll('medical_terms'),
      ]);

      const backupPayload = {
        schemaVersion: 2,
        exportedAt: new Date().toISOString(),
        siteConfig: siteConfigData,
        collegeInfo: collegeInfoData,
        subjectsData,
        studyResources,
        articles,
        videos,
        tickerItems,
        announcements,
        media,
        driveFiles,
        innovaInfo: innovaInfoData,
        innovaMembers,
        innovaContents,
        medicalTermsCustom,
      };

      return JSON.stringify(backupPayload, null, 2);
    } catch (err) {
      handleFirestoreError(err, OperationType.GET, 'backup_export');
    }
  }

  static async importFullData(
    jsonString: string,
    options?: { mode?: 'merge' | 'replace' }
  ): Promise<{ success: boolean; stats: Record<string, number>; errors: string[] }> {
    const mode = options?.mode === 'replace' ? 'replace' : 'merge';
    const errors: string[] = [];
    const stats: Record<string, number> = {
      siteConfig: 0,
      collegeInfo: 0,
      subjectsData: 0,
      studyResources: 0,
      articles: 0,
      videos: 0,
      tickerItems: 0,
      announcements: 0,
      media: 0,
      driveFiles: 0,
      innovaInfo: 0,
      innovaMembers: 0,
      innovaContents: 0,
      medicalTermsCustom: 0,
    };

    let parsed: Record<string, unknown>;
    try {
      const raw = JSON.parse(jsonString);
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
        throw new Error('صيغة JSON غير متوافقة.');
      }
      parsed = raw as Record<string, unknown>;
    } catch {
      throw new Error('الملف المرفق غير صالح، يرجى التأكد من اختيار ملف JSON صحيح.');
    }

    const recognizedKeys = [
      'siteConfig',
      'collegeInfo',
      'subjectsData',
      'studyResources',
      'articles',
      'videos',
      'tickerItems',
      'announcements',
      'media',
      'driveFiles',
      'innovaInfo',
      'innovaMembers',
      'innovaContents',
      'medicalTermsCustom',
    ];
    const hasKnownSection = recognizedKeys.some((k) => k in parsed && parsed[k] !== undefined);
    if (!hasKnownSection) {
      throw new Error('ملف النسخة الاحتياطية لا يحتوي على أي أقسام معروفة لمنصة دليلك الجامعي.');
    }

    const isNonEmptyStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;
    const nowIso = new Date().toISOString();

    // 1. Single-document restorations
    if (parsed.siteConfig && typeof parsed.siteConfig === 'object' && !Array.isArray(parsed.siteConfig)) {
      try {
        await this.updateSiteConfig(parsed.siteConfig as Partial<SiteConfig>);
        stats.siteConfig = 1;
      } catch (err: unknown) {
        errors.push(`فشل استعادة الإعدادات العامة: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    if (parsed.collegeInfo && typeof parsed.collegeInfo === 'object' && !Array.isArray(parsed.collegeInfo)) {
      try {
        await this.updateCollegeInfo(parsed.collegeInfo as Partial<CollegeInfoData>);
        stats.collegeInfo = 1;
      } catch (err: unknown) {
        errors.push(`فشل استعادة معلومات الكلية: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    if (parsed.innovaInfo && typeof parsed.innovaInfo === 'object' && !Array.isArray(parsed.innovaInfo)) {
      try {
        const infoObj = parsed.innovaInfo as Record<string, unknown>;
        if (!isNonEmptyStr(infoObj.aboutTitle) || !isNonEmptyStr(infoObj.aboutDescription)) {
          errors.push('تم تخطي innovaInfo لعدم اكتمال الحقول المطلوبة (aboutTitle / aboutDescription).');
        } else {
          const payload = {
            id: 'profile',
            aboutTitle: infoObj.aboutTitle.trim(),
            aboutDescription: infoObj.aboutDescription.trim(),
            createdAt: isNonEmptyStr(infoObj.createdAt) ? infoObj.createdAt : nowIso,
            updatedAt: nowIso,
          };
          await setDoc(doc(db, 'innova_info', 'profile'), payload, { merge: true });
          await DataSyncService.recordConfirmedMutation('innova_info', { type: 'replace', data: payload });
          stats.innovaInfo = 1;
        }
      } catch (err: unknown) {
        errors.push(`فشل استعادة تعريف إنوفا: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    // 2. Validated batch array restoration helper
    const restoreArrayCollection = async (
      firestoreCollection: string,
      syncKey: PublicCollectionKey,
      items: unknown,
      statKey: string,
      validateItem: (raw: Record<string, unknown>, idx: number) => Record<string, unknown> | string
    ) => {
      if (!Array.isArray(items)) return;

      const validRows: Array<{ id?: string; data: Record<string, unknown> }> = [];
      items.forEach((entry, idx) => {
        if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
          errors.push(`${firestoreCollection}[${idx}]: عنصر غير صالح.`);
          return;
        }
        const result = validateItem(entry as Record<string, unknown>, idx);
        if (typeof result === 'string') {
          errors.push(`${firestoreCollection}[${idx}]: ${result}`);
          return;
        }
        const rawId = (entry as { id?: unknown }).id;
        const cleanId = isNonEmptyStr(rawId) ? rawId.trim().replace(/[^a-zA-Z0-9_\-]/g, '_') : undefined;
        validRows.push({ id: cleanId, data: stripUndefinedFields(result) });
      });

      if (mode === 'replace') {
        try {
          const existingSnap = await getDocs(collection(db, firestoreCollection));
          const keepIds = new Set(validRows.map((r) => r.id).filter(Boolean) as string[]);
          const toDelete = existingSnap.docs.filter((d) => !keepIds.has(d.id));
          for (let i = 0; i < toDelete.length; i += 400) {
            const delBatch = writeBatch(db);
            toDelete.slice(i, i + 400).forEach((d) => delBatch.delete(d.ref));
            await delBatch.commit();
          }
        } catch (err: unknown) {
          errors.push(`فشل تنظيف السجلات القديمة في ${firestoreCollection}: ${err instanceof Error ? err.message : String(err)}`);
        }
      }

      if (validRows.length === 0) return;

      const BATCH_SIZE = 400;
      for (let i = 0; i < validRows.length; i += BATCH_SIZE) {
        const chunk = validRows.slice(i, i + BATCH_SIZE);
        const batch = writeBatch(db);
        for (const row of chunk) {
          const targetRef = row.id
            ? doc(db, firestoreCollection, row.id)
            : doc(collection(db, firestoreCollection));
          const payloadWithTs =
            firestoreCollection === 'medical_terms'
              ? { ...row.data, id: targetRef.id, updated_at: nowIso }
              : firestoreCollection === 'innova_members' || firestoreCollection === 'innova_contents'
              ? { ...row.data, id: targetRef.id, updatedAt: nowIso }
              : { ...row.data, updatedAt: nowIso };
          batch.set(targetRef, payloadWithTs, { merge: mode === 'merge' });
        }
        try {
          await batch.commit();
          stats[statKey] += chunk.length;
        } catch (err: unknown) {
          errors.push(`فشل استعادة دفعة من ${firestoreCollection}: ${err instanceof Error ? err.message : String(err)}`);
        }
      }

      if (stats[statKey] > 0) {
        if (syncKey === 'medical_terms_delta') {
          await DataSyncService.loadCollection('medical_terms_delta', { forceRefresh: true });
        } else {
          const refreshed = await DataSyncService.loadCollection(syncKey, { forceRefresh: true });
          await DataSyncService.recordConfirmedMutation(syncKey, {
            type: 'replace',
            data: refreshed.data,
          });
        }
      }
    };

    await restoreArrayCollection('articles', 'articles', parsed.articles, 'articles', (item) => {
      if (!isNonEmptyStr(item.title) || !isNonEmptyStr(item.content)) {
        return 'يجب توفر العنوان والمحتوى للمقال.';
      }
      return {
        ...item,
        title: item.title.trim(),
        content: item.content,
        status: item.status === 'draft' ? 'draft' : 'published',
        createdAt: isNonEmptyStr(item.createdAt) ? item.createdAt : nowIso,
      };
    });

    await restoreArrayCollection('videos', 'videos', parsed.videos, 'videos', (item) => {
      if (!isNonEmptyStr(item.title) || !isNonEmptyStr(item.videoUrl)) {
        return 'يجب توفر العنوان ورابط الفيديو.';
      }
      if (item.videoUrl.trim().toLowerCase().startsWith('blob:')) {
        return 'رابط blob: غير مدعوم في الاستعادة السحابية.';
      }
      return {
        ...item,
        title: item.title.trim(),
        videoUrl: item.videoUrl.trim(),
        description: typeof item.description === 'string' ? item.description : '',
        order: typeof item.order === 'number' && Number.isFinite(item.order) ? item.order : 1,
        visible: item.visible !== false,
        createdAt: isNonEmptyStr(item.createdAt) ? item.createdAt : nowIso,
      };
    });

    await restoreArrayCollection('ticker_items', 'ticker_items', parsed.tickerItems, 'tickerItems', (item) => {
      if (!isNonEmptyStr(item.text)) return 'نص الخبر مطلوب.';
      return {
        ...item,
        text: item.text.trim().slice(0, 1000),
        visible: item.visible !== false,
        order: typeof item.order === 'number' && Number.isFinite(item.order) ? item.order : 1,
        createdAt: isNonEmptyStr(item.createdAt) ? item.createdAt : nowIso,
      };
    });

    await restoreArrayCollection('announcements', 'announcements', parsed.announcements, 'announcements', (item) => {
      if (!isNonEmptyStr(item.title) || !isNonEmptyStr(item.content)) {
        return 'عنوان الإعلان ومحتواه مطلوبان.';
      }
      return {
        ...item,
        title: item.title.trim(),
        content: item.content.trim(),
        badge: typeof item.badge === 'string' ? item.badge : 'إعلان',
        visible: item.visible !== false,
        createdAt: isNonEmptyStr(item.createdAt) ? item.createdAt : nowIso,
      };
    });

    await restoreArrayCollection('media', 'media', parsed.media, 'media', (item) => {
      if (!isNonEmptyStr(item.name) || !isNonEmptyStr(item.url)) {
        return 'اسم ملف الميديا ورابطه مطلوبان.';
      }
      return {
        ...item,
        name: item.name.trim(),
        url: item.url.trim(),
        visible: item.visible !== false,
        createdAt: isNonEmptyStr(item.createdAt) ? item.createdAt : nowIso,
      };
    });

    await restoreArrayCollection('study_resources', 'study_resources', parsed.studyResources, 'studyResources', (item) => {
      const resolvedUrl = isNonEmptyStr(item.link) ? item.link : isNonEmptyStr(item.url) ? item.url : '';
      if (!isNonEmptyStr(item.title) || !resolvedUrl) {
        return 'عنوان المصدر ورابطه مطلوبان.';
      }
      return {
        ...item,
        title: item.title.trim(),
        link: resolvedUrl,
        url: resolvedUrl,
        description: typeof item.description === 'string' ? item.description : '',
        subjectId: isNonEmptyStr(item.subjectId) ? item.subjectId : 'general',
        category: isNonEmptyStr(item.category) ? item.category : 'book',
        isActive: item.isActive !== false,
        createdAt: isNonEmptyStr(item.createdAt) ? item.createdAt : nowIso,
      };
    });

    await restoreArrayCollection('subjects_data', 'subjects_data', parsed.subjectsData, 'subjectsData', (item) => {
      if (!isNonEmptyStr(item.id) || (!isNonEmptyStr(item.nameAr) && !isNonEmptyStr(item.nameEn))) {
        return 'معرف المادة واسمها مطلوبان.';
      }
      return item;
    });

    await restoreArrayCollection('drive_files', 'drive_files', parsed.driveFiles, 'driveFiles', (item) => {
      if (!isNonEmptyStr(item.name) || !isNonEmptyStr(item.fileId) || !isNonEmptyStr(item.previewUrl)) {
        return 'بيانات ملف Google Drive ناقصة.';
      }
      return item;
    });

    await restoreArrayCollection('innova_members', 'innova_members', parsed.innovaMembers, 'innovaMembers', (item) => {
      if (!isNonEmptyStr(item.name) || !isNonEmptyStr(item.position)) {
        return 'اسم العضو والمنصب مطلوبان.';
      }
      return {
        ...item,
        name: item.name.trim(),
        position: item.position.trim(),
        photoUrl: typeof item.photoUrl === 'string' ? item.photoUrl.trim() : '',
        order: typeof item.order === 'number' && Number.isFinite(item.order) ? item.order : 0,
        createdAt: isNonEmptyStr(item.createdAt) ? item.createdAt : nowIso,
      };
    });

    await restoreArrayCollection('innova_contents', 'innova_contents', parsed.innovaContents, 'innovaContents', (item) => {
      if (!isNonEmptyStr(item.title) || !isNonEmptyStr(item.description)) {
        return 'عنوان ووصف محتوى إنوفا مطلوبان.';
      }
      return {
        ...item,
        title: item.title.trim(),
        description: item.description.trim(),
        imageUrl: typeof item.imageUrl === 'string' ? item.imageUrl.trim() : '',
        category: item.category === 'events' ? 'events' : 'articles',
        published: item.published !== false,
        createdAt: isNonEmptyStr(item.createdAt) ? item.createdAt : nowIso,
      };
    });

    await restoreArrayCollection('medical_terms', 'medical_terms_delta', parsed.medicalTermsCustom, 'medicalTermsCustom', (item) => {
      if (!isNonEmptyStr(item.term_en) || !isNonEmptyStr(item.term_ar)) {
        return 'المصطلح الطبي باللغتين الإنجليزية والعربية مطلوب.';
      }
      return {
        ...item,
        term_en: item.term_en.trim(),
        term_en_lower: item.term_en.trim().toLowerCase(),
        term_ar: item.term_ar.trim(),
        updated_at: nowIso,
      };
    });

    await this.addAdminLog(
      'استعادة نسخة احتياطية شاملة',
      `الوضع: ${mode} | مقالات: ${stats.articles}، فيديوهات: ${stats.videos}، مصادر: ${stats.studyResources}، مواد: ${stats.subjectsData}، إنوفا: ${stats.innovaMembers + stats.innovaContents}`
    );

    return {
      success: errors.length === 0,
      stats,
      errors,
    };
  }
}

