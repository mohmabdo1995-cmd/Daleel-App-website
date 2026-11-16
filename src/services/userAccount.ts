import {
  GoogleAuthProvider,
  signInWithPopup,
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
import { auth, db, handleFirestoreError, OperationType } from './firebase';
import { GpaCourse, Lecture, UserPreferences, UserProfile } from '../types';

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  theme: 'light',
  notificationsEnabled: true,
  soundEnabled: true,
  defaultScheduleView: 'calendar',
  pomodoroWorkMinutes: 25,
  pomodoroBreakMinutes: 5,
  favoriteSubjects: [],
};

export function sanitizeId(raw: string | undefined, prefix: string): string {
  const cleaned = (raw || '').replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 100);
  if (cleaned.length >= 1) return cleaned;
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
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
    favoriteSubjects: favsRaw,
  };
}

function buildNewUserProfile(user: User): UserProfile {
  const now = new Date().toISOString();
  const displayName = (user.displayName || user.email?.split('@')[0] || 'طالب دليلك الجامعي')
    .trim()
    .slice(0, 120);
  const email = (user.email || `${user.uid}@user.local`).trim().slice(0, 254);

  const profile: UserProfile = {
    uid: user.uid,
    email,
    displayName: displayName || 'طالب دليلك الجامعي',
    photoURL: (user.photoURL || '').slice(0, 1000),
    college: 'كلية الطب والعلوم الصحية',
    academicYear: '',
    preferences: { ...DEFAULT_USER_PREFERENCES },
    createdAt: now,
    updatedAt: now,
  };
  return profile;
}

function normalizeUserProfile(raw: Partial<UserProfile>, user: User): UserProfile {
  const now = new Date().toISOString();
  return {
    uid: raw.uid || user.uid,
    email: (raw.email || user.email || `${user.uid}@user.local`).slice(0, 254),
    displayName: (raw.displayName || user.displayName || 'طالب دليلك الجامعي').trim().slice(0, 120) || 'طالب دليلك الجامعي',
    photoURL: (raw.photoURL ?? user.photoURL ?? '').slice(0, 1000),
    college: (raw.college ?? '').slice(0, 150),
    academicYear: (raw.academicYear ?? '').slice(0, 80),
    preferences: sanitizePreferences(raw.preferences),
    createdAt: raw.createdAt || now,
    updatedAt: raw.updatedAt || now,
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

export class UserAccountService {
  // Sign in or sign up with Google OAuth 2.0 popup
  static async signInWithGoogleOAuth(): Promise<{
    user: User;
    profile: UserProfile;
    isNewUser: boolean;
  }> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    const result = await signInWithPopup(auth, provider);
    const user = result.user;
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
      return { user, profile: newProfile, isNewUser: true };
    }

    const existingProfile = normalizeUserProfile(snap.data() as Partial<UserProfile>, user);
    return { user, profile: existingProfile, isNewUser: false };
  }

  static async ensureUserProfile(user: User): Promise<{ profile: UserProfile; isNewUser: boolean }> {
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

    return {
      profile: normalizeUserProfile(snap.data() as Partial<UserProfile>, user),
      isNewUser: false,
    };
  }

  static async logoutUserAccount(): Promise<void> {
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
        : (currentProfile.photoURL || '');
    const nextCollege =
      updates.college !== undefined
        ? updates.college.trim().slice(0, 150)
        : (currentProfile.college || '');
    const nextAcademicYear =
      updates.academicYear !== undefined
        ? updates.academicYear.trim().slice(0, 80)
        : (currentProfile.academicYear || '');
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
    // Required by firestore.rules allow list: resource.data.userId == request.auth.uid
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
    // Required by firestore.rules allow list: resource.data.userId == request.auth.uid
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

    // Only seed guest GPA courses into a brand-new user's empty GPA list
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
}
