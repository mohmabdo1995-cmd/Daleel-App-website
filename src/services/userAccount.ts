import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  User,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import {
  auth,
  authPersistenceReady,
  db,
  handleFirestoreError,
  OperationType,
} from './firebase';
import {
  GpaCourse,
  Lecture,
  PersonalStudyResource,
  SubjectStudyProgress,
  UserPreferences,
  UserProfile,
} from '../types';

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  theme: 'light',
  notificationsEnabled: true,
  soundEnabled: true,
  defaultScheduleView: 'calendar',
  pomodoroWorkMinutes: 25,
  pomodoroBreakMinutes: 5,
  favoriteSubjects: [],
  savedResourceIds: [],
};

const REDIRECT_PENDING_KEY = 'daleelak_google_redirect_pending_v1';

// In-flight deduplication locks so concurrent auth events never race on profile creation
let activeGoogleAuthPromise: Promise<GoogleOAuthFlowResult> | null = null;
const inFlightEnsureProfileMap = new Map<string, Promise<{ profile: UserProfile; isNewUser: boolean }>>();

export interface GoogleOAuthFlowResult {
  status: 'authenticated' | 'redirecting';
  user?: User;
  profile?: UserProfile;
  isNewUser?: boolean;
}

export function isEmbeddedIframe(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

export function isInAppWebView(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return /FBAN|FBAV|Instagram|Telegram|Line\/|MicroMessenger|BytedanceWebview|TikTok|;\s*wv\)/i.test(ua);
}

export function isMobileOrStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = navigator?.userAgent || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isStandalone =
    window.matchMedia?.('(display-mode: standalone)').matches ||
    Boolean((navigator as unknown as { standalone?: boolean })?.standalone);
  return isMobile || isStandalone;
}

export function sanitizeId(raw: string | undefined, prefix: string): string {
  const cleaned = (raw || '').replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 100);
  if (cleaned.length >= 1) return cleaned;
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function sanitizeSafeHttpUrl(rawUrl: string): string {
  const trimmed = (rawUrl || '').trim().slice(0, 1000);
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString();
    }
  } catch {
    // invalid URL
  }
  return '';
}

export function sanitizePreferences(
  prefs?: Partial<UserPreferences> | null,
  fallback: UserPreferences = DEFAULT_USER_PREFERENCES
): UserPreferences {
  const workRaw = Number(prefs?.pomodoroWorkMinutes ?? fallback.pomodoroWorkMinutes);
  const breakRaw = Number(prefs?.pomodoroBreakMinutes ?? fallback.pomodoroBreakMinutes);
  const favsRaw = Array.isArray(prefs?.favoriteSubjects)
    ? prefs!.favoriteSubjects.filter((s): s is string => typeof s === 'string' && s.trim().length > 0).slice(0, 20)
    : fallback.favoriteSubjects;
  const savedRaw = Array.isArray(prefs?.savedResourceIds)
    ? prefs!.savedResourceIds.filter((s): s is string => typeof s === 'string' && s.trim().length > 0).slice(0, 100)
    : fallback.savedResourceIds;

  return {
    theme: prefs?.theme === 'dark' ? 'dark' : 'light',
    notificationsEnabled:
      typeof prefs?.notificationsEnabled === 'boolean'
        ? prefs.notificationsEnabled
        : fallback.notificationsEnabled,
    soundEnabled:
      typeof prefs?.soundEnabled === 'boolean'
        ? prefs.soundEnabled
        : fallback.soundEnabled,
    defaultScheduleView: prefs?.defaultScheduleView === 'list' ? 'list' : 'calendar',
    pomodoroWorkMinutes: Math.min(120, Math.max(1, Math.round(Number.isFinite(workRaw) ? workRaw : 25))),
    pomodoroBreakMinutes: Math.min(60, Math.max(1, Math.round(Number.isFinite(breakRaw) ? breakRaw : 5))),
    favoriteSubjects: Array.from(new Set(favsRaw)),
    savedResourceIds: Array.from(new Set(savedRaw)),
  };
}

export function mapFirebaseAuthErrorToArabic(err: unknown): string {
  const errObj = err as { code?: string; message?: string } | null;
  const code = errObj?.code || '';
  const msg = errObj?.message || '';
  const host = typeof window !== 'undefined' ? window.location.hostname : '';

  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
    return 'تم إلغاء نافذة تسجيل الدخول عبر Google قبل إتمام العملية. يمكنك المحاولة مرة أخرى في أي وقت.';
  }
  if (code === 'auth/popup-blocked') {
    if (isEmbeddedIframe()) {
      return 'قام المتصفح بحظر النافذة المنبثقة داخل إطار المعاينة. يرجى السماح بالنوافذ المنبثقة لهذا الموقع أو فتح التطبيق في تبويب مستقل ثم إعادة المحاولة.';
    }
    return 'قام المتصفح بحظر النافذة المنبثقة لتسجيل الدخول. يرجى السماح بالنوافذ المنبثقة والمحاولة مرة أخرى.';
  }
  if (code === 'auth/unauthorized-domain') {
    return `النطاق الحالي (${host}) غير مدرج ضمن النطاقات المصرح بها (Authorized Domains) في Firebase Authentication. يرجى إضافته من إعدادات Firebase Console.`;
  }
  if (code === 'auth/operation-not-allowed') {
    return 'مزوّد تسجيل الدخول عبر Google غير مفعّل حالياً في Firebase Console (Authentication -> Sign-in method).';
  }
  if (code === 'auth/network-request-failed') {
    return 'تعذر الاتصال بخوادم المصادقة بسبب انقطاع أو ضعف الشبكة. تحقق من اتصالك بالإنترنت ثم حاول مجدداً.';
  }
  if (code === 'auth/web-storage-unsupported') {
    return 'المتصفح يمنع تخزين الجلسات أو ملفات تعريف الارتباط اللازمة لتسجيل الدخول. يرجى تفعيل التخزين أو الخروج من وضع التصفح الخفي الصارم.';
  }
  if (code === 'auth/user-disabled') {
    return 'تم تعطيل هذا الحساب من قبل إدارة النظام.';
  }
  if (code === 'auth/account-exists-with-different-credential') {
    return 'يوجد حساب مرتبط بنفس البريد الإلكتروني بطريقة تسجيل دخول مختلفة.';
  }
  if (code === 'auth/too-many-requests') {
    return 'تم إجراء محاولات كثيرة متتالية. يرجى الانتظار قليلاً ثم المحاولة مرة أخرى.';
  }
  if (code === 'auth/internal-error') {
    return 'حدث خطأ داخلي في خدمة المصادقة أو إعدادات OAuth. تحقق من اتصال الشبكة وإعدادات النطاقات المصرح بها.';
  }
  if (msg.includes('in-app-webview')) {
    return 'متصفحات التطبيقات المدمجة (مثل تيليجرام أو فيسبوك) قد تمنع دخول Google. يرجى فتح الرابط في متصفح Chrome أو Safari لإتمام تسجيل الدخول.';
  }
  if (msg.includes('permission-denied') || msg.includes('Missing or insufficient permissions')) {
    return 'تم التحقق من حساب Google، لكن قواعد قاعدة البيانات رفضت حفظ الملف الشخصي. تأكد من توثيق البريد الإلكتروني وصلاحيات Firestore Rules.';
  }
  return 'تعذر إتمام تسجيل الدخول عبر Google. يرجى التحقق من الاتصال بالإنترنت والمحاولة مرة أخرى.';
}

function createGoogleProvider(): GoogleAuthProvider {
  const provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  provider.setCustomParameters({ prompt: 'select_account' });
  return provider;
}

function buildNewUserProfile(user: User): UserProfile {
  const now = new Date().toISOString();
  const displayName = (user.displayName || user.email?.split('@')[0] || 'طالب دليلك الجامعي')
    .trim()
    .slice(0, 120);
  const email = (user.email || `${user.uid}@user.local`).trim().slice(0, 254);

  return {
    uid: user.uid,
    email,
    displayName: displayName || 'طالب دليلك الجامعي',
    photoURL: (user.photoURL || '').slice(0, 1000),
    college: 'كلية الطب والعلوم الصحية',
    academicYear: '',
    authProvider: user.providerData?.[0]?.providerId || 'google.com',
    preferences: { ...DEFAULT_USER_PREFERENCES },
    createdAt: now,
    updatedAt: now,
    lastLoginAt: now,
  };
}

function normalizeUserProfile(raw: Partial<UserProfile>, user: User): UserProfile {
  const now = new Date().toISOString();
  return {
    uid: raw.uid || user.uid,
    email: (raw.email || user.email || `${user.uid}@user.local`).slice(0, 254),
    displayName: (raw.displayName || user.displayName || 'طالب دليلك الجامعي').trim().slice(0, 120) || 'طالب دليلك الجامعي',
    photoURL: (raw.photoURL || user.photoURL || '').slice(0, 1000),
    college: (raw.college ?? '').slice(0, 150),
    academicYear: (raw.academicYear ?? '').slice(0, 80),
    authProvider: (raw.authProvider || user.providerData?.[0]?.providerId || 'google.com').slice(0, 60),
    preferences: sanitizePreferences(raw.preferences),
    createdAt: raw.createdAt || now,
    updatedAt: raw.updatedAt || now,
    lastLoginAt: raw.lastLoginAt || raw.updatedAt || now,
  };
}

function sanitizeLecturePayload(lecture: Lecture, userId: string): Lecture {
  const id = sanitizeId(lecture.id, 'lec');
  const title = (lecture.title || 'محاضرة').trim().slice(0, 200) || 'محاضرة';
  const subject = (lecture.subject || 'عام').trim().slice(0, 100) || 'عام';
  const date = (lecture.date || new Date().toISOString().split('T')[0]).trim().slice(0, 20);
  const time = (lecture.time || '09:00').trim().slice(0, 10);
  const dayOfWeek = (lecture.dayOfWeek || 'الأحد').trim().slice(0, 30);
  const priority: 'high' | 'medium' | 'low' =
    lecture.priority === 'high' || lecture.priority === 'low' ? lecture.priority : 'medium';

  return {
    id,
    userId,
    title,
    subject,
    professor: (lecture.professor || '').trim().slice(0, 150),
    hall: (lecture.hall || '').trim().slice(0, 150),
    date: date.length >= 8 ? date : new Date().toISOString().split('T')[0],
    time: time.length >= 4 ? time : '09:00',
    dayOfWeek: dayOfWeek.length >= 2 ? dayOfWeek : 'الأحد',
    notes: (lecture.notes || '').trim().slice(0, 1000),
    priority,
    completed: Boolean(lecture.completed),
    notificationEnabled: typeof lecture.notificationEnabled === 'boolean' ? lecture.notificationEnabled : true,
    createdAt: typeof lecture.createdAt === 'number' && Number.isFinite(lecture.createdAt) ? lecture.createdAt : Date.now(),
  };
}

function sanitizeGpaCoursePayload(course: GpaCourse, userId: string): GpaCourse {
  const id = sanitizeId(course.id, 'gpa');
  const name = (course.name || 'مادة دراسية').trim().slice(0, 150) || 'مادة دراسية';
  const creditsNum = Number(course.credits);
  const gradePointNum = Number(course.gradePoint);
  const gradeLetter = (course.gradeLetter || 'A').trim().slice(0, 10) || 'A';

  return {
    id,
    userId,
    name,
    credits: Math.min(12, Math.max(1, Number.isFinite(creditsNum) ? creditsNum : 3)),
    gradePoint: Math.min(5, Math.max(0, Number.isFinite(gradePointNum) ? gradePointNum : 4.0)),
    gradeLetter,
  };
}

function sanitizePersonalResourcePayload(
  input: PersonalStudyResource,
  userId: string
): PersonalStudyResource {
  const now = new Date().toISOString();
  const id = sanitizeId(input.id, 'pres');
  const safeUrl = sanitizeSafeHttpUrl(input.url);
  if (!safeUrl) {
    throw new Error('يرجى إدخال رابط مصدر صالح يبدأ بـ http:// أو https://');
  }
  const allowedCats = ['book', 'video', 'telegram', 'notes', 'summary'] as const;
  const category = allowedCats.includes(input.category) ? input.category : 'notes';

  return {
    id,
    userId,
    title: (input.title || 'مصدر دراسي').trim().slice(0, 200) || 'مصدر دراسي',
    description: (input.description || '').trim().slice(0, 1000),
    url: safeUrl,
    subjectTag: (input.subjectTag || 'general').trim().slice(0, 100) || 'general',
    category,
    createdAt: input.createdAt || now,
    updatedAt: now,
  };
}

function sanitizeSubjectProgressPayload(
  subjectIdRaw: string,
  userId: string,
  notes: string,
  completedTopicIds: string[]
): SubjectStudyProgress {
  const safeSubjectId = sanitizeId(subjectIdRaw, 'subj');
  const cleanTopics = Array.from(
    new Set(
      (completedTopicIds || [])
        .filter((t): t is string => typeof t === 'string' && t.trim().length > 0)
        .map((t) => t.trim().slice(0, 100))
    )
  ).slice(0, 100);

  return {
    id: safeSubjectId,
    userId,
    subjectId: subjectIdRaw.trim().slice(0, 100) || safeSubjectId,
    notes: (notes || '').slice(0, 4000),
    completedTopicIds: cleanTopics,
    updatedAt: new Date().toISOString(),
  };
}

export class UserAccountService {
  /**
   * Resolve any pending Firebase redirect result on boot BEFORE rendering guest state.
   */
  static async resolvePendingGoogleRedirect(): Promise<{
    user: User;
    profile: UserProfile;
    isNewUser: boolean;
  } | null> {
    await authPersistenceReady;
    const result = await getRedirectResult(auth);
    try {
      sessionStorage.removeItem(REDIRECT_PENDING_KEY);
    } catch {
      // ignore
    }
    if (!result || !result.user || result.user.isAnonymous) {
      return null;
    }
    const ensured = await this.ensureUserProfile(result.user);
    return {
      user: result.user,
      profile: ensured.profile,
      isNewUser: ensured.isNewUser,
    };
  }

  /**
   * Production Google OAuth Sign-In / Sign-Up with deduplicated execution,
   * iframe & mobile awareness, and safe popup -> redirect fallback.
   */
  static async signInWithGoogleOAuth(): Promise<GoogleOAuthFlowResult> {
    if (activeGoogleAuthPromise) {
      return activeGoogleAuthPromise;
    }

    activeGoogleAuthPromise = (async (): Promise<GoogleOAuthFlowResult> => {
      await authPersistenceReady;

      if (isInAppWebView()) {
        throw new Error('in-app-webview');
      }

      const provider = createGoogleProvider();

      try {
        const result = await signInWithPopup(auth, provider);
        const ensured = await this.ensureUserProfile(result.user);
        return {
          status: 'authenticated',
          user: result.user,
          profile: ensured.profile,
          isNewUser: ensured.isNewUser,
        };
      } catch (err: unknown) {
        const code = (err as { code?: string })?.code || '';
        const shouldFallbackToRedirect =
          (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') &&
          !isEmbeddedIframe();

        if (shouldFallbackToRedirect) {
          try {
            sessionStorage.setItem(REDIRECT_PENDING_KEY, '1');
          } catch {
            // ignore
          }
          await signInWithRedirect(auth, provider);
          return { status: 'redirecting' };
        }

        throw err;
      }
    })();

    try {
      return await activeGoogleAuthPromise;
    } finally {
      activeGoogleAuthPromise = null;
    }
  }

  static hasPendingRedirectFlag(): boolean {
    try {
      return sessionStorage.getItem(REDIRECT_PENDING_KEY) === '1';
    } catch {
      return false;
    }
  }

  static clearPendingRedirectFlag(): void {
    try {
      sessionStorage.removeItem(REDIRECT_PENDING_KEY);
    } catch {
      // ignore
    }
  }

  /**
   * Ensure user document exists in Firestore without racing or overwriting existing user data.
   */
  static async ensureUserProfile(
    user: User
  ): Promise<{ profile: UserProfile; isNewUser: boolean }> {
    const existingPromise = inFlightEnsureProfileMap.get(user.uid);
    if (existingPromise) {
      return existingPromise;
    }

    const task = (async (): Promise<{ profile: UserProfile; isNewUser: boolean }> => {
      const userPath = `users/${user.uid}`;
      const userRef = doc(db, 'users', user.uid);

      let snap;
      try {
        snap = await getDoc(userRef);
      } catch (err) {
        handleFirestoreError(err, OperationType.GET, userPath);
      }

      if (!snap.exists()) {
        const newProfile = buildNewUserProfile(user);
        try {
          await setDoc(userRef, newProfile);
        } catch (err) {
          handleFirestoreError(err, OperationType.CREATE, userPath);
        }
        return { profile: newProfile, isNewUser: true };
      }

      const raw = snap.data() as Partial<UserProfile>;
      const existingProfile = normalizeUserProfile(raw, user);
      const now = new Date().toISOString();

      // Safely update lastLoginAt (and fill empty photoURL if Google added one) without overwriting user edits
      try {
        const updatePayload: Record<string, string> = {
          lastLoginAt: now,
          updatedAt: now,
        };
        if (!raw.photoURL && user.photoURL) {
          updatePayload.photoURL = user.photoURL.slice(0, 1000);
        }
        await updateDoc(userRef, updatePayload);
        existingProfile.lastLoginAt = now;
        existingProfile.updatedAt = now;
      } catch {
        // Non-fatal metadata update if offline or schema-restricted
      }

      return {
        profile: existingProfile,
        isNewUser: false,
      };
    })();

    inFlightEnsureProfileMap.set(user.uid, task);
    try {
      return await task;
    } finally {
      inFlightEnsureProfileMap.delete(user.uid);
    }
  }

  static async logoutUserAccount(): Promise<void> {
    this.clearPendingRedirectFlag();
    await signOut(auth);
  }

  static subscribeUserProfile(
    user: User,
    callback: (profile: UserProfile | null) => void,
    onError?: (err: unknown) => void
  ): () => void {
    const userPath = `users/${user.uid}`;
    const userRef = doc(db, 'users', user.uid);

    return onSnapshot(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          callback(normalizeUserProfile(snapshot.data() as Partial<UserProfile>, user));
        } else {
          callback(null);
        }
      },
      (err) => {
        if (onError) {
          onError(err);
        } else {
          handleFirestoreError(err, OperationType.GET, userPath);
        }
      }
    );
  }

  static async updateUserProfileAndPreferences(
    uid: string,
    currentProfile: UserProfile,
    updates: {
      displayName?: string;
      photoURL?: string;
      college?: string;
      academicYear?: string;
      preferences?: Partial<UserPreferences>;
    }
  ): Promise<UserProfile> {
    const userPath = `users/${uid}`;
    const userRef = doc(db, 'users', uid);

    const nextDisplayName =
      updates.displayName !== undefined
        ? updates.displayName.trim().slice(0, 120) || currentProfile.displayName
        : currentProfile.displayName;
    const nextPhotoURL =
      updates.photoURL !== undefined
        ? updates.photoURL.trim().slice(0, 1000)
        : currentProfile.photoURL || '';
    const nextCollege =
      updates.college !== undefined
        ? updates.college.trim().slice(0, 150)
        : currentProfile.college || '';
    const nextAcademicYear =
      updates.academicYear !== undefined
        ? updates.academicYear.trim().slice(0, 80)
        : currentProfile.academicYear || '';
    const nextPreferences = updates.preferences
      ? sanitizePreferences(updates.preferences, currentProfile.preferences)
      : sanitizePreferences(currentProfile.preferences);
    const updatedAt = new Date().toISOString();

    const updatePayload = {
      displayName: nextDisplayName,
      photoURL: nextPhotoURL,
      college: nextCollege,
      academicYear: nextAcademicYear,
      preferences: nextPreferences,
      updatedAt,
    };

    try {
      await updateDoc(userRef, updatePayload);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, userPath);
    }

    return {
      ...currentProfile,
      ...updatePayload,
    };
  }

  // --- Lectures Subcollection (/users/{uid}/lectures/{lectureId}) ---
  static subscribeUserLectures(
    uid: string,
    callback: (lectures: Lecture[]) => void,
    onError?: (err: unknown) => void
  ): () => void {
    const path = `users/${uid}/lectures`;
    const colRef = collection(db, 'users', uid, 'lectures');
    const q = query(colRef, where('userId', '==', uid));

    return onSnapshot(
      q,
      (snapshot) => {
        const list: Lecture[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data() as Lecture;
          list.push({ ...data, id: docSnap.id });
        });
        list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        callback(list);
      },
      (err) => {
        if (onError) {
          onError(err);
        } else {
          handleFirestoreError(err, OperationType.LIST, path);
        }
      }
    );
  }

  static async addUserLecture(
    uid: string,
    lectureInput: Omit<Lecture, 'id' | 'createdAt' | 'userId'>
  ): Promise<Lecture> {
    const id = sanitizeId(undefined, 'lec');
    const path = `users/${uid}/lectures/${id}`;
    const payload = sanitizeLecturePayload(
      {
        ...lectureInput,
        id,
        userId: uid,
        createdAt: Date.now(),
      },
      uid
    );

    try {
      await setDoc(doc(db, 'users', uid, 'lectures', id), payload);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, path);
    }
    return payload;
  }

  static async updateUserLecture(uid: string, lecture: Lecture): Promise<void> {
    const safeId = sanitizeId(lecture.id, 'lec');
    const path = `users/${uid}/lectures/${safeId}`;
    const payload = sanitizeLecturePayload({ ...lecture, id: safeId }, uid);
    const { id: _id, userId: _uid, createdAt: _createdAt, ...mutableFields } = payload;

    try {
      await updateDoc(doc(db, 'users', uid, 'lectures', safeId), mutableFields);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, path);
    }
  }

  static async deleteUserLecture(uid: string, lectureId: string): Promise<void> {
    const path = `users/${uid}/lectures/${lectureId}`;
    try {
      await deleteDoc(doc(db, 'users', uid, 'lectures', lectureId));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, path);
    }
  }

  static async migrateGuestLectures(uid: string, guestLectures: Lecture[]): Promise<number> {
    if (!guestLectures.length) return 0;
    const path = `users/${uid}/lectures`;
    const colRef = collection(db, 'users', uid, 'lectures');
    const existingIds = new Set<string>();

    try {
      const existingSnap = await getDocs(query(colRef, where('userId', '==', uid)));
      existingSnap.forEach((d) => existingIds.add(d.id));
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, path);
    }

    const toMigrate = guestLectures
      .map((lec) => sanitizeLecturePayload(lec, uid))
      .filter((lec) => !existingIds.has(lec.id));

    if (!toMigrate.length) return 0;

    const batch = writeBatch(db);
    for (const lec of toMigrate.slice(0, 400)) {
      batch.set(doc(db, 'users', uid, 'lectures', lec.id), lec);
    }

    try {
      await batch.commit();
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, path);
    }

    return toMigrate.length;
  }

  // --- GPA Courses Subcollection (/users/{uid}/gpa_courses/{courseId}) ---
  static subscribeUserGpaCourses(
    uid: string,
    callback: (courses: GpaCourse[]) => void,
    onError?: (err: unknown) => void
  ): () => void {
    const path = `users/${uid}/gpa_courses`;
    const colRef = collection(db, 'users', uid, 'gpa_courses');
    const q = query(colRef, where('userId', '==', uid));

    return onSnapshot(
      q,
      (snapshot) => {
        const list: GpaCourse[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data() as GpaCourse;
          list.push({ ...data, id: docSnap.id });
        });
        callback(list);
      },
      (err) => {
        if (onError) {
          onError(err);
        } else {
          handleFirestoreError(err, OperationType.LIST, path);
        }
      }
    );
  }

  static async addUserGpaCourse(
    uid: string,
    courseInput: Omit<GpaCourse, 'id' | 'userId'>
  ): Promise<GpaCourse> {
    const id = sanitizeId(undefined, 'gpa');
    const path = `users/${uid}/gpa_courses/${id}`;
    const payload = sanitizeGpaCoursePayload({ ...courseInput, id, userId: uid }, uid);

    try {
      await setDoc(doc(db, 'users', uid, 'gpa_courses', id), payload);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, path);
    }
    return payload;
  }

  static async deleteUserGpaCourse(uid: string, courseId: string): Promise<void> {
    const path = `users/${uid}/gpa_courses/${courseId}`;
    try {
      await deleteDoc(doc(db, 'users', uid, 'gpa_courses', courseId));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, path);
    }
  }

  static async clearUserGpaCourses(uid: string): Promise<void> {
    const path = `users/${uid}/gpa_courses`;
    const colRef = collection(db, 'users', uid, 'gpa_courses');
    let snap;
    try {
      snap = await getDocs(query(colRef, where('userId', '==', uid)));
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, path);
    }

    if (snap.empty) return;

    const batch = writeBatch(db);
    snap.forEach((docSnap) => {
      batch.delete(docSnap.ref);
    });

    try {
      await batch.commit();
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, path);
    }
  }

  static async migrateGuestGpaCourses(uid: string, guestCourses: GpaCourse[]): Promise<number> {
    if (!guestCourses.length) return 0;
    const path = `users/${uid}/gpa_courses`;
    const colRef = collection(db, 'users', uid, 'gpa_courses');
    let existingCount = 0;

    try {
      const existingSnap = await getDocs(query(colRef, where('userId', '==', uid)));
      existingCount = existingSnap.size;
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, path);
    }

    if (existingCount > 0) return 0;

    const batch = writeBatch(db);
    const sanitized = guestCourses.map((c) => sanitizeGpaCoursePayload(c, uid)).slice(0, 100);
    for (const c of sanitized) {
      batch.set(doc(db, 'users', uid, 'gpa_courses', c.id), c);
    }

    try {
      await batch.commit();
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, path);
    }

    return sanitized.length;
  }

  // --- Personal Study Resources Subcollection (/users/{uid}/personal_resources/{resourceId}) ---
  static subscribePersonalResources(
    uid: string,
    callback: (items: PersonalStudyResource[]) => void,
    onError?: (err: unknown) => void
  ): () => void {
    const path = `users/${uid}/personal_resources`;
    const colRef = collection(db, 'users', uid, 'personal_resources');
    const q = query(colRef, where('userId', '==', uid));

    return onSnapshot(
      q,
      (snapshot) => {
        const list: PersonalStudyResource[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data() as PersonalStudyResource;
          list.push({ ...data, id: docSnap.id });
        });
        list.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
        callback(list);
      },
      (err) => {
        if (onError) {
          onError(err);
        } else {
          handleFirestoreError(err, OperationType.LIST, path);
        }
      }
    );
  }

  static async addPersonalResource(
    uid: string,
    input: Omit<PersonalStudyResource, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
  ): Promise<PersonalStudyResource> {
    const id = sanitizeId(undefined, 'pres');
    const now = new Date().toISOString();
    const path = `users/${uid}/personal_resources/${id}`;
    const payload = sanitizePersonalResourcePayload(
      {
        ...input,
        id,
        userId: uid,
        createdAt: now,
        updatedAt: now,
      },
      uid
    );

    try {
      await setDoc(doc(db, 'users', uid, 'personal_resources', id), payload);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, path);
    }
    return payload;
  }

  static async deletePersonalResource(uid: string, resourceId: string): Promise<void> {
    const safeId = sanitizeId(resourceId, 'pres');
    const path = `users/${uid}/personal_resources/${safeId}`;
    try {
      await deleteDoc(doc(db, 'users', uid, 'personal_resources', safeId));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, path);
    }
  }

  static async migrateGuestPersonalResources(
    uid: string,
    guestItems: PersonalStudyResource[]
  ): Promise<number> {
    if (!guestItems.length) return 0;
    const path = `users/${uid}/personal_resources`;
    const colRef = collection(db, 'users', uid, 'personal_resources');
    const existingIds = new Set<string>();

    try {
      const existingSnap = await getDocs(query(colRef, where('userId', '==', uid)));
      existingSnap.forEach((d) => existingIds.add(d.id));
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, path);
    }

    const toMigrate: PersonalStudyResource[] = [];
    for (const item of guestItems) {
      try {
        const sanitized = sanitizePersonalResourcePayload(item, uid);
        if (!existingIds.has(sanitized.id)) {
          toMigrate.push(sanitized);
        }
      } catch {
        // skip invalid draft URL
      }
    }

    if (!toMigrate.length) return 0;
    const batch = writeBatch(db);
    for (const item of toMigrate.slice(0, 100)) {
      batch.set(doc(db, 'users', uid, 'personal_resources', item.id), item);
    }

    try {
      await batch.commit();
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, path);
    }
    return toMigrate.length;
  }

  // --- Subject Study Progress & Personal Notes (/users/{uid}/subject_progress/{subjectId}) ---
  static subscribeSubjectProgress(
    uid: string,
    callback: (progressMap: Record<string, SubjectStudyProgress>) => void,
    onError?: (err: unknown) => void
  ): () => void {
    const path = `users/${uid}/subject_progress`;
    const colRef = collection(db, 'users', uid, 'subject_progress');
    const q = query(colRef, where('userId', '==', uid));

    return onSnapshot(
      q,
      (snapshot) => {
        const map: Record<string, SubjectStudyProgress> = {};
        snapshot.forEach((docSnap) => {
          const data = docSnap.data() as SubjectStudyProgress;
          map[data.subjectId || docSnap.id] = { ...data, id: docSnap.id };
        });
        callback(map);
      },
      (err) => {
        if (onError) {
          onError(err);
        } else {
          handleFirestoreError(err, OperationType.LIST, path);
        }
      }
    );
  }

  static async upsertSubjectProgress(
    uid: string,
    subjectId: string,
    notes: string,
    completedTopicIds: string[]
  ): Promise<SubjectStudyProgress> {
    const payload = sanitizeSubjectProgressPayload(subjectId, uid, notes, completedTopicIds);
    const path = `users/${uid}/subject_progress/${payload.id}`;

    try {
      await setDoc(doc(db, 'users', uid, 'subject_progress', payload.id), payload);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, path);
    }
    return payload;
  }
}
