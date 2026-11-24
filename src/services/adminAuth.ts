// Persistent, Server-Verified Admin Authentication Service for "دليلك الجامعي"
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import {
  auth,
  authPersistenceReady,
  db,
  isFirestoreQuotaError,
  isFirestoreQuotaExceeded,
  markFirestoreQuotaExceeded,
} from './firebase';
import { FirestoreAuditMetrics } from './smartCache';

export const ADMIN_AUTHORIZED_EMAILS = ['mohmabdo1995@gmail.com'];

export interface AdminAuthSnapshot {
  checking: boolean;
  isAuthenticated: boolean;
  email: string | null;
  uid: string | null;
  verifiedBy: 'primary_email' | 'admins_collection' | null;
  error: string | null;
}

function mapAdminAuthErrorToArabic(error: unknown): string {
  const code = String((error as { code?: unknown })?.code || '').toLowerCase();
  const message = error instanceof Error ? error.message : String(error);

  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
    return 'تم إغلاق نافذة تسجيل الدخول قبل إتمام التحقق.';
  }
  if (code === 'auth/popup-blocked') {
    return 'قام المتصفح بحظر النافذة المنبثقة. يرجى السماح بالنوافذ المنبثقة والمحاولة مرة أخرى.';
  }
  if (code === 'auth/network-request-failed') {
    return 'تعذر الاتصال بخدمة المصادقة بسبب ضعف أو انقطاع الإنترنت.';
  }
  if (code === 'auth/unauthorized-domain') {
    return 'نطاق الموقع الحالي غير مضاف في النطاقات المصرح بها داخل Firebase Auth.';
  }
  if (isFirestoreQuotaError(error)) {
    return 'تم الوصول للحد المجاني اليومي لقاعدة البيانات، تم الاعتماد على التحقق المباشر لحساب المشرف الرئيسي.';
  }
  return message || 'حدث خطأ غير متوقع أثناء التحقق من حساب المشرف.';
}

export class AdminAuthService {
  private static verifiedAdminCache = new Map<
    string,
    { isAdmin: boolean; verifiedBy: 'primary_email' | 'admins_collection' | null; email: string | null }
  >();

  static isPrimaryAdminEmail(email?: string | null): boolean {
    if (!email) return false;
    return ADMIN_AUTHORIZED_EMAILS.includes(email.trim().toLowerCase());
  }

  /**
   * Ensures a superadmin document exists at /admins/{uid} when the primary admin signs in.
   * Non-fatal if Firestore quota is temporarily exceeded because rules also verify email + email_verified.
   */
  private static async ensurePrimaryAdminDoc(user: User): Promise<void> {
    if (!user.email || !user.emailVerified || !this.isPrimaryAdminEmail(user.email)) return;
    if (isFirestoreQuotaExceeded()) return;
    try {
      const ref = doc(db, 'admins', user.uid);
      const snap = await getDoc(ref);
      FirestoreAuditMetrics.recordGetDoc('admins', 1, false);
      if (!snap.exists()) {
        const now = new Date().toISOString();
        await setDoc(
          ref,
          {
            uid: user.uid,
            email: user.email.toLowerCase(),
            role: 'superadmin',
            verifiedAt: now,
            updatedAt: now,
          },
          { merge: true }
        );
      }
    } catch (err) {
      if (isFirestoreQuotaError(err)) {
        markFirestoreQuotaExceeded();
      } else {
        console.warn('Could not ensure /admins bootstrap document:', err);
      }
    }
  }

  /**
   * Strictly verifies whether a Firebase Auth User is an authorized & email-verified administrator.
   */
  static async verifyAdminUser(
    user: User | null,
    options?: { forceNetworkCheck?: boolean }
  ): Promise<{
    isAdmin: boolean;
    verifiedBy: 'primary_email' | 'admins_collection' | null;
    email: string | null;
    error?: string;
  }> {
    if (!user) {
      return { isAdmin: false, verifiedBy: null, email: null };
    }
    if (user.isAnonymous) {
      return {
        isAdmin: false,
        verifiedBy: null,
        email: null,
        error: 'الجلسات المجهولة غير مصرح لها بدخول لوحة التحكم.',
      };
    }
    if (!user.emailVerified) {
      return {
        isAdmin: false,
        verifiedBy: null,
        email: user.email || null,
        error: 'البريد الإلكتروني لهذا الحساب غير موثّق لدى Google.',
      };
    }

    const email = (user.email || '').trim().toLowerCase();
    if (this.isPrimaryAdminEmail(email)) {
      const cached = this.verifiedAdminCache.get(user.uid);
      if (!cached || options?.forceNetworkCheck) {
        void this.ensurePrimaryAdminDoc(user);
      }
      const res = {
        isAdmin: true,
        verifiedBy: 'primary_email' as const,
        email: user.email || email,
      };
      this.verifiedAdminCache.set(user.uid, res);
      return res;
    }

    if (!options?.forceNetworkCheck) {
      const cached = this.verifiedAdminCache.get(user.uid);
      if (cached) {
        return {
          ...cached,
          error: cached.isAdmin
            ? undefined
            : `الحساب (${user.email || 'غير معروف'}) لا يملك صلاحية مسؤول (Admin) في النظام.`,
        };
      }
    }

    if (isFirestoreQuotaExceeded()) {
      return {
        isAdmin: false,
        verifiedBy: null,
        email: user.email || null,
        error: `الحساب (${user.email || 'غير معروف'}) غير مدرج كمسؤول رئيسي.`,
      };
    }

    try {
      const adminSnap = await getDoc(doc(db, 'admins', user.uid));
      FirestoreAuditMetrics.recordGetDoc('admins', 1, false);
      if (adminSnap.exists()) {
        const res = {
          isAdmin: true,
          verifiedBy: 'admins_collection' as const,
          email: user.email || null,
        };
        this.verifiedAdminCache.set(user.uid, res);
        return res;
      }
    } catch (err) {
      if (isFirestoreQuotaError(err)) {
        markFirestoreQuotaExceeded();
      }
    }

    const denied = {
      isAdmin: false,
      verifiedBy: null,
      email: user.email || null,
    };
    this.verifiedAdminCache.set(user.uid, denied);
    return {
      ...denied,
      error: `الحساب (${user.email || 'غير معروف'}) ليس لديه صلاحية مسؤول (Admin) في النظام.`,
    };
  }

  /**
   * Synchronous quick check of current verified Firebase session (useful after initial listener settles).
   */
  static isAuthenticatedSync(): boolean {
    const user = auth.currentUser;
    if (!user || user.isAnonymous || !user.emailVerified) return false;
    if (this.isPrimaryAdminEmail(user.email)) return true;
    return this.verifiedAdminCache.get(user.uid)?.isAdmin === true;
  }

  /**
   * Async check awaiting Firebase Auth persistence restoration.
   */
  static async isAuthenticated(): Promise<boolean> {
    await authPersistenceReady;
    const verification = await this.verifyAdminUser(auth.currentUser);
    return verification.isAdmin;
  }

  /**
   * Subscribes to persistent Firebase Auth state & validates Admin permissions across reloads / new tabs.
   */
  static subscribeAdminAuthState(callback: (snapshot: AdminAuthSnapshot) => void): () => void {
    let active = true;
    let unsubscribeFirebase: (() => void) | undefined;

    callback({
      checking: true,
      isAuthenticated: false,
      email: null,
      uid: null,
      verifiedBy: null,
      error: null,
    });

    void (async () => {
      await authPersistenceReady;
      if (!active) return;

      unsubscribeFirebase = onAuthStateChanged(auth, async (user) => {
        if (!active) return;
        if (!user) {
          callback({
            checking: false,
            isAuthenticated: false,
            email: null,
            uid: null,
            verifiedBy: null,
            error: null,
          });
          return;
        }

        const verification = await this.verifyAdminUser(user);
        if (!active) return;
        callback({
          checking: false,
          isAuthenticated: verification.isAdmin,
          email: verification.email,
          uid: user.uid,
          verifiedBy: verification.verifiedBy,
          error: verification.isAdmin ? null : verification.error || null,
        });
      });
    })();

    return () => {
      active = false;
      if (unsubscribeFirebase) unsubscribeFirebase();
    };
  }

  /**
   * Interactive Google Sign-In for Administrator with account selection & persistent Firebase session.
   */
  static async loginWithGoogleAdmin(): Promise<{
    success: boolean;
    error?: string;
    email?: string | null;
  }> {
    try {
      await authPersistenceReady;
      const provider = new GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      provider.setCustomParameters({ prompt: 'select_account' });

      const cred = await signInWithPopup(auth, provider);
      const verification = await this.verifyAdminUser(cred.user, { forceNetworkCheck: true });

      if (!verification.isAdmin) {
        return {
          success: false,
          email: verification.email,
          error:
            verification.error ||
            `الحساب (${cred.user.email || 'غير معروف'}) ليس لديه صلاحية مسؤول (Admin) في النظام.`,
        };
      }

      await this.ensurePrimaryAdminDoc(cred.user);
      return {
        success: true,
        email: verification.email,
      };
    } catch (err) {
      return {
        success: false,
        error: mapAdminAuthErrorToArabic(err),
      };
    }
  }

  /**
   * Explicit Admin Logout: signs out of Firebase Auth so #admin is locked until re-authenticated.
   */
  static async logout(): Promise<void> {
    this.verifiedAdminCache.clear();
    try {
      if (auth.currentUser) {
        await signOut(auth);
      }
    } catch (e) {
      console.warn('Error during Admin Firebase signOut:', e);
    }
  }
}
