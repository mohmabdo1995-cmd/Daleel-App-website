// Google Drive Free Storage Service for "دليلك الجامعي"
// 15GB Cloud Storage Architecture via Decoupled Google Identity Services (GIS) OAuth 2.0 + Drive API v3
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import {
  auth,
  db,
  handleFirestoreError,
  isFirestoreQuotaError,
  isFirestoreQuotaExceeded,
  markFirestoreQuotaExceeded,
  OperationType,
} from './firebase';
import { DataSyncService } from './dataSyncService';
import { FirestoreAuditMetrics } from './smartCache';

export interface DriveFileItem {
  id: string;
  fileId: string;
  name: string;
  mimeType: string;
  sizeBytes: number;
  sizeFormatted: string;
  previewUrl: string;
  downloadUrl: string;
  thumbnailUrl?: string;
  category: 'video' | 'pdf' | 'image' | 'other';
  subject?: string;
  uploadedAt: string;
  updatedAt?: string;
  uploadedBy?: string;
}

export interface DriveStorageQuota {
  limitBytes: number;
  usageBytes: number;
  usageInDriveBytes: number;
  usageInDriveTrashBytes: number;
  limitFormatted: string;
  usageFormatted: string;
  freeFormatted: string;
  percentUsed: number;
}

export type DriveConnectionStatus =
  | 'disconnected'
  | 'restoring'
  | 'connected'
  | 'linked_needs_reauth';

export interface DriveConnectionMetadata {
  connectedEmail: string | null;
  folderId: string | null;
  folderName: string;
  connectedAt: string | null;
  lastVerifiedAt: string | null;
  updatedAt: string;
  disconnectedExplicitly: boolean;
}

export interface DriveConnectionSnapshot {
  status: DriveConnectionStatus;
  connectedEmail: string | null;
  folderId: string | null;
  folderName: string;
  connectedAt: string | null;
  lastVerifiedAt: string | null;
  hasLiveToken: boolean;
  error: string | null;
}

interface GisTokenResponse {
  access_token?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
}

interface GisTokenClient {
  requestAccessToken: (overrideConfig?: { prompt?: string; hint?: string }) => void;
}

declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: GisTokenResponse) => void;
            error_callback?: (err: { type?: string; message?: string }) => void;
          }) => GisTokenClient;
          revoke: (token: string, done?: () => void) => void;
        };
      };
    };
  }
}

const DRIVE_SCOPES = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/userinfo.email',
].join(' ');
const APP_FOLDER_NAME = 'دليلك الجامعي - الوسائط والمحاضرات';
const INTEGRATION_COLLECTION = 'admin_integrations';
const DRIVE_INTEGRATION_DOC_ID = 'google_drive';
const LOCAL_DRIVE_META_KEY = 'daleelak_drive_connection_meta_v1';

// Strictly volatile in-memory OAuth access token (never stored in localStorage, sessionStorage, or Firestore)
let memoryAccessToken: string | null = null;
let memoryTokenExpiresAt = 0;
let currentMeta: DriveConnectionMetadata | null = null;
let currentStatus: DriveConnectionStatus = 'disconnected';
let currentError: string | null = null;
let gisScriptPromise: Promise<void> | null = null;

const stateListeners = new Set<(snap: DriveConnectionSnapshot) => void>();

// Helper to format bytes to KB, MB, GB
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 بايت';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['بايت', 'كيلوبايت', 'ميجابايت', 'جيجابايت', 'تيرابايت'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

let driveCollectionRegistered = false;
function ensureDriveCollectionRegistered(): void {
  if (driveCollectionRegistered) return;
  driveCollectionRegistered = true;
  DataSyncService.registerCollection<DriveFileItem[]>({
    key: 'drive_files',
    firestoreCollection: 'drive_files',
    defaultValue: [],
    isArray: true,
    updatedAtField: 'updatedAt',
    sortItems: (items) =>
      [...(items as DriveFileItem[])].sort((a, b) =>
        (b.uploadedAt || '').localeCompare(a.uploadedAt || '')
      ),
  });
}

ensureDriveCollectionRegistered();

function loadLocalDriveMeta(): DriveConnectionMetadata | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LOCAL_DRIVE_META_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<DriveConnectionMetadata>;
    if (!parsed || typeof parsed !== 'object') return null;
    return {
      connectedEmail: typeof parsed.connectedEmail === 'string' ? parsed.connectedEmail : null,
      folderId: typeof parsed.folderId === 'string' ? parsed.folderId : null,
      folderName: typeof parsed.folderName === 'string' ? parsed.folderName : APP_FOLDER_NAME,
      connectedAt: typeof parsed.connectedAt === 'string' ? parsed.connectedAt : null,
      lastVerifiedAt: typeof parsed.lastVerifiedAt === 'string' ? parsed.lastVerifiedAt : null,
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : '',
      disconnectedExplicitly: Boolean(parsed.disconnectedExplicitly),
    };
  } catch {
    return null;
  }
}

function saveLocalDriveMeta(meta: DriveConnectionMetadata | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (!meta) {
      localStorage.removeItem(LOCAL_DRIVE_META_KEY);
    } else {
      localStorage.setItem(LOCAL_DRIVE_META_KEY, JSON.stringify(meta));
    }
  } catch {
    // ignore storage errors
  }
}

function hasUsableMemoryToken(): boolean {
  return Boolean(memoryAccessToken && Date.now() < memoryTokenExpiresAt - 15_000);
}

function buildSnapshot(): DriveConnectionSnapshot {
  return {
    status: currentStatus,
    connectedEmail: currentMeta?.disconnectedExplicitly ? null : currentMeta?.connectedEmail || null,
    folderId: currentMeta?.disconnectedExplicitly ? null : currentMeta?.folderId || null,
    folderName: currentMeta?.folderName || APP_FOLDER_NAME,
    connectedAt: currentMeta?.connectedAt || null,
    lastVerifiedAt: currentMeta?.lastVerifiedAt || null,
    hasLiveToken: hasUsableMemoryToken(),
    error: currentError,
  };
}

function emitConnectionState(): void {
  const snap = buildSnapshot();
  stateListeners.forEach((cb) => {
    try {
      cb(snap);
    } catch {
      // ignore listener errors
    }
  });
}

function getCurrentBrowserOrigin(): string {
  if (typeof window === 'undefined') return '';
  return window.location?.origin || '';
}

function getConfiguredDriveClientId(): string {
  return ((firebaseConfig as { oAuthClientId?: string }).oAuthClientId || '').trim();
}

async function loadGisScript(): Promise<void> {
  if (typeof window === 'undefined') {
    throw new Error('Google Drive متاح في بيئة المتصفح فقط.');
  }
  if (window.google?.accounts?.oauth2?.initTokenClient) return;
  if (gisScriptPromise) return gisScriptPromise;

  gisScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://accounts.google.com/gsi/client"]'
    );
    if (existing) {
      if (window.google?.accounts?.oauth2?.initTokenClient) {
        resolve();
        return;
      }
      if (existing.dataset.gisLoadFailed === '1') {
        existing.remove();
      } else {
        const existingTimeoutId = window.setTimeout(() => {
          reject(new Error('انتهت مهلة تحميل خدمة مصادقة Google Drive.'));
        }, 12_000);
        existing.addEventListener(
          'load',
          () => {
            window.clearTimeout(existingTimeoutId);
            if (window.google?.accounts?.oauth2?.initTokenClient) {
              resolve();
            } else {
              reject(new Error('مكتبة Google Identity Services غير مكتملة.'));
            }
          },
          { once: true }
        );
        existing.addEventListener(
          'error',
          () => {
            window.clearTimeout(existingTimeoutId);
            existing.dataset.gisLoadFailed = '1';
            reject(new Error('تعذر تحميل مكتبة مصادقة Google Identity Services.'));
          },
          { once: true }
        );
        return;
      }
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    const timeoutId = window.setTimeout(() => {
      reject(new Error('انتهت مهلة تحميل خدمة مصادقة Google Drive.'));
    }, 12_000);

    script.onload = () => {
      window.clearTimeout(timeoutId);
      if (window.google?.accounts?.oauth2?.initTokenClient) {
        resolve();
      } else {
        reject(new Error('مكتبة Google Identity Services غير مكتملة.'));
      }
    };
    script.onerror = () => {
      window.clearTimeout(timeoutId);
      script.dataset.gisLoadFailed = '1';
      reject(new Error('تعذر الوصول إلى خدمة Google Identity Services. تحقق من الاتصال بالإنترنت.'));
    };
    document.head.appendChild(script);
  }).catch((err) => {
    gisScriptPromise = null;
    throw err;
  });

  return gisScriptPromise;
}

async function requestGisAccessToken(options: {
  prompt: '' | 'consent' | 'select_account';
  loginHint?: string | null;
  timeoutMs?: number;
}): Promise<{ accessToken: string; expiresInSec: number }> {
  const clientId = getConfiguredDriveClientId();
  if (!clientId) {
    throw new Error('معرّف عميل OAuth غير مضبوط في إعدادات المشروع.');
  }

  await loadGisScript();
  const oauth2 = window.google?.accounts?.oauth2;
  if (!oauth2?.initTokenClient) {
    throw new Error('تعذر تهيئة Google OAuth2 Token Client.');
  }

  const activeOrigin = getCurrentBrowserOrigin();

  return new Promise<{ accessToken: string; expiresInSec: number }>((resolve, reject) => {
    let settled = false;
    const timer = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error('انتهت مهلة الحصول على تصريح Google Drive.'));
    }, options.timeoutMs ?? 60_000);

    const tokenClient = oauth2.initTokenClient({
      client_id: clientId,
      scope: DRIVE_SCOPES,
      callback: (resp: GisTokenResponse) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        if (resp.error || !resp.access_token) {
          const rawErr = resp.error_description || resp.error || 'لم يتم استلام تصريح الوصول من Google Drive.';
          if (/origin_mismatch|redirect_uri_mismatch/i.test(rawErr)) {
            reject(
              new Error(
                `خطأ origin_mismatch في Google OAuth: النطاق الحالي (${activeOrigin}) غير مسجل ضمن Authorized JavaScript origins للعميل ${clientId}.`
              )
            );
            return;
          }
          reject(new Error(rawErr));
          return;
        }
        resolve({
          accessToken: resp.access_token,
          expiresInSec: Number(resp.expires_in) || 3500,
        });
      },
      error_callback: (err) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        if (err?.type === 'popup_closed') {
          reject(
            new Error(
              `تم إغلاق نافذة تفويض Google Drive قبل إتمام الربط. إذا ظهر خطأ Error 400: origin_mismatch، تأكد من إضافة النطاق (${activeOrigin}) في Google Cloud Console.`
            )
          );
        } else if (err?.type === 'popup_failed_to_open') {
          reject(new Error('قام المتصفح بحظر نافذة تفويض Google Drive. يرجى السماح بالنوافذ المنبثقة.'));
        } else {
          reject(new Error(err?.message || 'فشل التفويض عبر Google Drive.'));
        }
      },
    });

    tokenClient.requestAccessToken({
      prompt: options.prompt,
      ...(options.loginHint ? { hint: options.loginHint } : {}),
    });
  });
}

async function fetchGoogleUserEmail(token: string): Promise<string | null> {
  try {
    const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { email?: string };
    return typeof data.email === 'string' && data.email ? data.email : null;
  } catch {
    return null;
  }
}

async function persistConnectionMetadataToCloud(meta: DriveConnectionMetadata): Promise<void> {
  currentMeta = meta;
  saveLocalDriveMeta(meta);

  if (!auth.currentUser || isFirestoreQuotaExceeded()) return;
  try {
    await setDoc(doc(db, INTEGRATION_COLLECTION, DRIVE_INTEGRATION_DOC_ID), meta, { merge: true });
    FirestoreAuditMetrics.recordWriteConfirmed();
  } catch (err) {
    if (isFirestoreQuotaError(err)) {
      markFirestoreQuotaExceeded();
    } else {
      console.warn('Could not persist Drive metadata to Firestore:', err);
    }
  }
}

async function fetchCloudConnectionMetadata(): Promise<DriveConnectionMetadata | null> {
  if (!auth.currentUser || isFirestoreQuotaExceeded()) return null;
  try {
    const snap = await getDoc(doc(db, INTEGRATION_COLLECTION, DRIVE_INTEGRATION_DOC_ID));
    FirestoreAuditMetrics.recordGetDoc(INTEGRATION_COLLECTION, 1, false);
    if (!snap.exists()) return null;
    const raw = snap.data() as Partial<DriveConnectionMetadata>;
    return {
      connectedEmail: typeof raw.connectedEmail === 'string' ? raw.connectedEmail : null,
      folderId: typeof raw.folderId === 'string' ? raw.folderId : null,
      folderName: typeof raw.folderName === 'string' ? raw.folderName : APP_FOLDER_NAME,
      connectedAt: typeof raw.connectedAt === 'string' ? raw.connectedAt : null,
      lastVerifiedAt: typeof raw.lastVerifiedAt === 'string' ? raw.lastVerifiedAt : null,
      updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt : '',
      disconnectedExplicitly: Boolean(raw.disconnectedExplicitly),
    };
  } catch (err) {
    if (isFirestoreQuotaError(err)) {
      markFirestoreQuotaExceeded();
    }
    return null;
  }
}

async function executeDriveFetch(url: string, init: RequestInit = {}): Promise<Response> {
  if (!hasUsableMemoryToken()) {
    memoryAccessToken = null;
    memoryTokenExpiresAt = 0;
    if (currentMeta && !currentMeta.disconnectedExplicitly && currentMeta.connectedEmail) {
      currentStatus = 'linked_needs_reauth';
      currentError = 'انتهت صلاحية تصريح الجلسة المؤقت. يرجى الضغط على "تجديد التصريح" للمتابعة.';
      emitConnectionState();
    } else {
      currentStatus = 'disconnected';
      emitConnectionState();
    }
    throw new Error('يرجى تفعيل أو تجديد تصريح Google Drive أولاً.');
  }

  const headers = new Headers(init.headers || {});
  headers.set('Authorization', `Bearer ${memoryAccessToken}`);

  const response = await fetch(url, { ...init, headers });
  if (response.status === 401) {
    memoryAccessToken = null;
    memoryTokenExpiresAt = 0;
    if (currentMeta && !currentMeta.disconnectedExplicitly && currentMeta.connectedEmail) {
      currentStatus = 'linked_needs_reauth';
      currentError = 'انتهت صلاحية رمز الوصول (401). يرجى النقر على "تجديد تصريح Google Drive".';
    } else {
      currentStatus = 'disconnected';
    }
    emitConnectionState();
    throw new Error('انتهت صلاحية جلسة Google Drive. يرجى تجديد التصريح للمتابعة.');
  }

  return response;
}

export class GoogleDriveService {
  static getOAuthDiagnostics(): { origin: string; clientId: string; scopes: string[] } {
    return {
      origin: getCurrentBrowserOrigin(),
      clientId: getConfiguredDriveClientId(),
      scopes: DRIVE_SCOPES.split(' '),
    };
  }

  static getConnectionSnapshot(): DriveConnectionSnapshot {
    return buildSnapshot();
  }

  static subscribeConnectionState(
    listener: (snapshot: DriveConnectionSnapshot) => void
  ): () => void {
    stateListeners.add(listener);
    listener(buildSnapshot());
    return () => {
      stateListeners.delete(listener);
    };
  }

  /**
   * Restores persisted Drive connection metadata after page refresh / reopen
   * and attempts silent token renewal without altering Firebase Admin Auth.
   */
  static async restoreConnectionState(): Promise<DriveConnectionSnapshot> {
    const localMeta = loadLocalDriveMeta();
    if (localMeta) {
      currentMeta = localMeta;
    }

    const cloudMeta = await fetchCloudConnectionMetadata();
    if (cloudMeta) {
      if (!localMeta || (cloudMeta.updatedAt || '') >= (localMeta.updatedAt || '')) {
        currentMeta = cloudMeta;
        saveLocalDriveMeta(cloudMeta);
      }
    }

    if (!currentMeta || currentMeta.disconnectedExplicitly || !currentMeta.connectedEmail) {
      currentStatus = 'disconnected';
      currentError = null;
      emitConnectionState();
      return buildSnapshot();
    }

    if (hasUsableMemoryToken()) {
      currentStatus = 'connected';
      currentError = null;
      emitConnectionState();
      return buildSnapshot();
    }

    // Account & folder metadata exist across refresh -> attempt silent token acquisition first
    currentStatus = 'restoring';
    currentError = null;
    emitConnectionState();

    try {
      const { accessToken, expiresInSec } = await requestGisAccessToken({
        prompt: '',
        loginHint: currentMeta.connectedEmail,
        timeoutMs: 4500,
      });
      memoryAccessToken = accessToken;
      memoryTokenExpiresAt = Date.now() + expiresInSec * 1000;
      const nowIso = new Date().toISOString();
      await persistConnectionMetadataToCloud({
        ...currentMeta,
        lastVerifiedAt: nowIso,
        updatedAt: nowIso,
        disconnectedExplicitly: false,
      });
      currentStatus = 'connected';
      currentError = null;
    } catch {
      // Browser/Google declined silent token renewal -> keep linked identity honestly!
      memoryAccessToken = null;
      memoryTokenExpiresAt = 0;
      currentStatus = 'linked_needs_reauth';
      currentError = null;
    }

    emitConnectionState();
    return buildSnapshot();
  }

  /**
   * Backward-compatible listener initializer returning cleanup function.
   */
  static initAuth(
    onSuccess?: (user: { email: string | null }, token: string) => void,
    onFailure?: () => void
  ) {
    const unsubscribe = this.subscribeConnectionState((snap) => {
      if (snap.status === 'connected' && memoryAccessToken) {
        onSuccess?.({ email: snap.connectedEmail }, memoryAccessToken);
      } else if (snap.status === 'disconnected') {
        onFailure?.();
      }
    });
    void this.restoreConnectionState();
    return unsubscribe;
  }

  static isConnected(): boolean {
    return currentStatus === 'connected' && hasUsableMemoryToken();
  }

  static getAccessToken(): string | null {
    return hasUsableMemoryToken() ? memoryAccessToken : null;
  }

  /**
   * Decoupled GIS OAuth 2.0 Connection (Never overwrites Firebase Admin Auth session).
   */
  static async connectGoogleDrive(options?: {
    isRenewal?: boolean;
  }): Promise<{ email: string; accessToken: string; folderId: string }> {
    try {
      currentError = null;
      const hintEmail = options?.isRenewal ? currentMeta?.connectedEmail : undefined;
      const { accessToken, expiresInSec } = await requestGisAccessToken({
        prompt: options?.isRenewal ? 'select_account' : 'consent',
        loginHint: hintEmail,
        timeoutMs: 90_000,
      });

      memoryAccessToken = accessToken;
      memoryTokenExpiresAt = Date.now() + expiresInSec * 1000;

      const resolvedEmail =
        (await fetchGoogleUserEmail(accessToken)) ||
        hintEmail ||
        auth.currentUser?.email ||
        'حساب Google Drive';

      const folderId = await this.getOrCreateAppFolder(accessToken);
      const nowIso = new Date().toISOString();

      await persistConnectionMetadataToCloud({
        connectedEmail: resolvedEmail,
        folderId,
        folderName: APP_FOLDER_NAME,
        connectedAt: currentMeta?.connectedAt || nowIso,
        lastVerifiedAt: nowIso,
        updatedAt: nowIso,
        disconnectedExplicitly: false,
      });

      currentStatus = 'connected';
      currentError = null;
      emitConnectionState();
      return { email: resolvedEmail, accessToken, folderId };
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'فشل الاتصال بـ Google Drive';
      currentError = msg;
      if (currentMeta && !currentMeta.disconnectedExplicitly && currentMeta.connectedEmail) {
        currentStatus = 'linked_needs_reauth';
      } else {
        currentStatus = 'disconnected';
      }
      emitConnectionState();
      throw error;
    }
  }

  /**
   * Explicit Disconnect from Google Drive only (leaves Firebase Admin Auth & drive_files intact).
   */
  static async disconnect(): Promise<void> {
    const tokenToRevoke = memoryAccessToken;
    memoryAccessToken = null;
    memoryTokenExpiresAt = 0;

    if (tokenToRevoke && window.google?.accounts?.oauth2?.revoke) {
      try {
        window.google.accounts.oauth2.revoke(tokenToRevoke);
      } catch {
        // non-fatal
      }
    }

    const nowIso = new Date().toISOString();
    await persistConnectionMetadataToCloud({
      connectedEmail: null,
      folderId: null,
      folderName: APP_FOLDER_NAME,
      connectedAt: null,
      lastVerifiedAt: null,
      updatedAt: nowIso,
      disconnectedExplicitly: true,
    });

    currentStatus = 'disconnected';
    currentError = null;
    emitConnectionState();
  }

  /**
   * Get or create dedicated folder in user's Drive
   */
  static async getOrCreateAppFolder(explicitToken?: string): Promise<string> {
    if (explicitToken && !hasUsableMemoryToken()) {
      memoryAccessToken = explicitToken;
      memoryTokenExpiresAt = Date.now() + 3000 * 1000;
    }

    if (currentMeta?.folderId && !currentMeta.disconnectedExplicitly) {
      // Verify folder still exists & is not trashed
      try {
        const verifyRes = await executeDriveFetch(
          `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(
            currentMeta.folderId
          )}?fields=id,trashed`
        );
        if (verifyRes.ok) {
          const info = (await verifyRes.json()) as { id?: string; trashed?: boolean };
          if (info.id && !info.trashed) {
            return info.id;
          }
        }
      } catch (err) {
        if (err instanceof Error && err.message.includes('انتهت صلاحية')) {
          throw err;
        }
      }
    }

    const searchRes = await executeDriveFetch(
      `https://www.googleapis.com/drive/v3/files?q=name='${encodeURIComponent(
        APP_FOLDER_NAME
      )}' and mimeType='application/vnd.google-apps.folder' and trashed=false&fields=files(id,name)`
    );

    if (searchRes.ok) {
      const data = (await searchRes.json()) as { files?: Array<{ id: string }> };
      if (data.files && data.files.length > 0) {
        return data.files[0].id;
      }
    }

    const createRes = await executeDriveFetch('https://www.googleapis.com/drive/v3/files', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: APP_FOLDER_NAME,
        mimeType: 'application/vnd.google-apps.folder',
      }),
    });

    if (!createRes.ok) {
      throw new Error('فشل إنشاء مجلد دليلك الجامعي على Google Drive');
    }

    const folderData = (await createRes.json()) as { id: string };
    return folderData.id;
  }

  /**
   * Upload file to Google Drive + persist metadata strictly to Firestore (no swallowed DB errors).
   */
  static async uploadFile({
    file,
    category,
    subject,
  }: {
    file: File;
    category: 'video' | 'pdf' | 'image' | 'other';
    subject?: string;
  }): Promise<DriveFileItem> {
    if (!hasUsableMemoryToken()) {
      throw new Error('يرجى ربط حساب Google Drive أو تجديد تصريح الجلسة أولاً.');
    }

    const folderId = await this.getOrCreateAppFolder();

    const metadata = {
      name: file.name,
      parents: [folderId],
      description: `تم الرفع عبر منصة دليلك الجامعي • القسم: ${category}`,
    };

    const boundary = '-------314159265358979323846';
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;
    const metadataPart = `${delimiter}Content-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(
      metadata
    )}`;

    const fileReader = new FileReader();
    const arrayBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
      fileReader.onerror = reject;
      fileReader.readAsArrayBuffer(file);
    });

    const fileType = file.type || 'application/octet-stream';
    const mediaPartHeader = `${delimiter}Content-Type: ${fileType}\r\n\r\n`;

    const enc = new TextEncoder();
    const part1 = enc.encode(metadataPart);
    const part2 = enc.encode(mediaPartHeader);
    const part4 = enc.encode(closeDelimiter);

    const fullLength = part1.byteLength + part2.byteLength + arrayBuffer.byteLength + part4.byteLength;
    const combined = new Uint8Array(fullLength);
    combined.set(part1, 0);
    combined.set(part2, part1.byteLength);
    combined.set(new Uint8Array(arrayBuffer), part1.byteLength + part2.byteLength);
    combined.set(part4, part1.byteLength + part2.byteLength + arrayBuffer.byteLength);

    const uploadRes = await executeDriveFetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,mimeType,size,webViewLink,webContentLink,thumbnailLink',
      {
        method: 'POST',
        headers: {
          'Content-Type': `multipart/related; boundary=${boundary}`,
        },
        body: combined,
      }
    );

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      throw new Error(`فشل رفع الملف إلى Google Drive: ${errText}`);
    }

    const uploaded = (await uploadRes.json()) as { id: string };
    const fileId = uploaded.id;

    // Make file readable by link for students
    const permRes = await executeDriveFetch(
      `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}/permissions`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'reader', type: 'anyone' }),
      }
    );
    if (!permRes.ok) {
      console.warn('Could not set public permission on Drive file:', await permRes.text());
    }

    const nowIso = new Date().toISOString();
    const driveItem: DriveFileItem = {
      id: `drive_${fileId}`,
      fileId,
      name: file.name,
      mimeType: fileType,
      sizeBytes: file.size,
      sizeFormatted: formatBytes(file.size),
      previewUrl: `https://drive.google.com/file/d/${fileId}/preview`,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
      thumbnailUrl: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`,
      category,
      subject: (subject || 'عام').trim() || 'عام',
      uploadedAt: nowIso,
      updatedAt: nowIso,
      uploadedBy:
        currentMeta?.connectedEmail || auth.currentUser?.email || 'مسؤول المنصة',
    };

    try {
      await setDoc(doc(db, 'drive_files', driveItem.id), driveItem);
      ensureDriveCollectionRegistered();
      await DataSyncService.recordConfirmedMutation('drive_files', {
        type: 'upsert',
        item: driveItem,
      });
    } catch (fsErr) {
      handleFirestoreError(fsErr, OperationType.CREATE, `drive_files/${driveItem.id}`);
    }

    return driveItem;
  }

  /**
   * Fetch all files using IndexedDB-first Smart Cache + manifest check
   */
  static async getFiles(forceManifestCheck = false): Promise<DriveFileItem[]> {
    ensureDriveCollectionRegistered();
    const res = await DataSyncService.loadCollection<DriveFileItem[]>('drive_files', {
      forceManifestCheck,
    });
    return Array.isArray(res.data) ? res.data : [];
  }

  /**
   * Delete a file from Google Drive (if live token exists) and Firestore -> record tombstone deletion
   */
  static async deleteFile(item: DriveFileItem): Promise<void> {
    if (hasUsableMemoryToken()) {
      try {
        await executeDriveFetch(
          `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(item.fileId)}`,
          { method: 'DELETE' }
        );
      } catch (e) {
        console.warn('Could not delete from Drive API directly (continuing Firestore removal):', e);
      }
    }

    try {
      await deleteDoc(doc(db, 'drive_files', item.id));
      ensureDriveCollectionRegistered();
      await DataSyncService.recordConfirmedMutation('drive_files', {
        type: 'delete',
        id: item.id,
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `drive_files/${item.id}`);
    }
  }

  /**
   * Fetch storage quota details (15GB free tier stats)
   */
  static async getStorageQuota(): Promise<DriveStorageQuota | null> {
    if (!hasUsableMemoryToken()) return null;

    try {
      const res = await executeDriveFetch(
        'https://www.googleapis.com/drive/v3/about?fields=storageQuota'
      );

      if (!res.ok) return null;
      const data = (await res.json()) as {
        storageQuota?: {
          limit?: string;
          usage?: string;
          usageInDrive?: string;
          usageInDriveTrash?: string;
        };
      };
      const quota = data.storageQuota;
      if (!quota) return null;

      const limit = parseInt(quota.limit || '16106127360', 10);
      const usage = parseInt(quota.usage || '0', 10);
      const usageInDrive = parseInt(quota.usageInDrive || '0', 10);
      const usageInDriveTrash = parseInt(quota.usageInDriveTrash || '0', 10);

      const free = Math.max(0, limit - usage);
      const percentUsed = Math.min(100, Math.round((usage / (limit || 1)) * 100));

      return {
        limitBytes: limit,
        usageBytes: usage,
        usageInDriveBytes: usageInDrive,
        usageInDriveTrashBytes: usageInDriveTrash,
        limitFormatted: formatBytes(limit),
        usageFormatted: formatBytes(usage),
        freeFormatted: formatBytes(free),
        percentUsed,
      };
    } catch {
      return null;
    }
  }
}
