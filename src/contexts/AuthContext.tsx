import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../services/firebase';
import { StorageService } from '../services/storage';
import { NotificationService } from '../services/notifications';
import {
  DEFAULT_USER_PREFERENCES,
  sanitizePreferences,
  UserAccountService,
} from '../services/userAccount';
import { GpaCourse, Lecture, UserPreferences, UserProfile } from '../types';

export type AuthModalMode = 'login' | 'signup';

interface AuthContextValue {
  user: User | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  authLoading: boolean;
  authSubmitting: boolean;
  authError: string | null;
  preferences: UserPreferences;
  lectures: Lecture[];
  gpaCourses: GpaCourse[];
  isAuthModalOpen: boolean;
  authModalMode: AuthModalMode;
  isNewSignupOnboarding: boolean;
  isProfileModalOpen: boolean;
  openAuthModal: (mode?: AuthModalMode) => void;
  closeAuthModal: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  clearAuthError: () => void;
  completeOnboarding: () => void;
  signInWithGoogle: () => Promise<{ isNewUser: boolean } | null>;
  logout: () => Promise<void>;
  updateProfile: (updates: {
    displayName?: string;
    college?: string;
    academicYear?: string;
  }) => Promise<void>;
  updatePreferences: (updates: Partial<UserPreferences>) => Promise<void>;
  addLecture: (lecture: Omit<Lecture, 'id' | 'createdAt' | 'userId'>) => Promise<void>;
  updateLecture: (lecture: Lecture) => Promise<void>;
  deleteLecture: (id: string) => Promise<void>;
  toggleLectureCompleted: (id: string) => Promise<void>;
  addGpaCourse: (course: Omit<GpaCourse, 'id' | 'userId'>) => Promise<void>;
  deleteGpaCourse: (id: string) => Promise<void>;
  resetGpaCourses: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const GUEST_PREFS_STORAGE_KEY = 'daleelak_guest_preferences_v1';

function loadGuestPreferences(): UserPreferences {
  try {
    const raw = localStorage.getItem(GUEST_PREFS_STORAGE_KEY);
    if (raw) {
      return sanitizePreferences(JSON.parse(raw));
    }
  } catch {
    // ignore
  }
  const settings = StorageService.getSettings();
  return sanitizePreferences({
    theme: settings.theme,
    notificationsEnabled: settings.notificationsEnabled,
    soundEnabled: settings.soundEnabled,
  });
}

function saveGuestPreferences(prefs: UserPreferences): void {
  try {
    localStorage.setItem(GUEST_PREFS_STORAGE_KEY, JSON.stringify(prefs));
    StorageService.saveSettings({
      theme: prefs.theme,
      notificationsEnabled: prefs.notificationsEnabled,
      soundEnabled: prefs.soundEnabled,
    });
  } catch {
    // ignore
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [authSubmitting, setAuthSubmitting] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [guestPreferences, setGuestPreferences] = useState<UserPreferences>(() => loadGuestPreferences());
  const [lectures, setLectures] = useState<Lecture[]>(() => StorageService.getLectures());
  const [gpaCourses, setGpaCourses] = useState<GpaCourse[]>(() => StorageService.getGpaCourses());

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<AuthModalMode>('login');
  const [isNewSignupOnboarding, setIsNewSignupOnboarding] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const migratedUidRef = useRef<string | null>(null);

  const isAuthenticated = Boolean(user && !user.isAnonymous);
  const preferences: UserPreferences =
    isAuthenticated && userProfile?.preferences
      ? userProfile.preferences
      : guestPreferences;

  // Apply theme & notification preferences side-effects whenever preferences change
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (preferences.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    NotificationService.setPreferences({
      notificationsEnabled: preferences.notificationsEnabled,
      soundEnabled: preferences.soundEnabled,
    });
  }, [preferences.theme, preferences.notificationsEnabled, preferences.soundEnabled]);

  // Listen to Firebase Authentication state
  useEffect(() => {
    let isMounted = true;
    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!isMounted) return;

      if (firebaseUser && !firebaseUser.isAnonymous) {
        setUser(firebaseUser);
        setAuthError(null);
        try {
          const { profile, isNewUser } = await UserAccountService.ensureUserProfile(firebaseUser);
          if (!isMounted) return;
          setUserProfile(profile);

          // Migrate local guest lectures once per authenticated session if any exist
          if (migratedUidRef.current !== firebaseUser.uid) {
            migratedUidRef.current = firebaseUser.uid;
            const guestLecs = StorageService.getLectures();
            if (guestLecs.length > 0) {
              await UserAccountService.migrateGuestLectures(firebaseUser.uid, guestLecs);
              StorageService.saveLectures([]);
            }
            if (isNewUser) {
              const guestGpa = StorageService.getGpaCourses();
              if (guestGpa.length > 0) {
                await UserAccountService.migrateGuestGpaCourses(firebaseUser.uid, guestGpa);
              }
            }
          }
        } catch (err) {
          console.error('Failed ensuring user profile:', err);
        } finally {
          if (isMounted) setAuthLoading(false);
        }
      } else {
        // Guest or anonymous admin session -> isolate user cloud state cleanly
        migratedUidRef.current = null;
        setUser(null);
        setUserProfile(null);
        setLectures(StorageService.getLectures());
        setGpaCourses(StorageService.getGpaCourses());
        setGuestPreferences(loadGuestPreferences());
        setAuthLoading(false);
      }
    });

    return () => {
      isMounted = false;
      unsubscribeAuth();
    };
  }, []);

  // Attach Firestore realtime listeners ONLY when auth is ready and verified user is authenticated
  useEffect(() => {
    if (!user || user.isAnonymous) return;

    const unsubProfile = UserAccountService.subscribeUserProfile(
      user,
      (profile) => {
        if (profile) setUserProfile(profile);
      },
      (err) => {
        console.error('User profile snapshot error:', err);
      }
    );

    const unsubLectures = UserAccountService.subscribeUserLectures(
      user.uid,
      (cloudLectures) => {
        setLectures(cloudLectures);
      },
      (err) => {
        console.error('User lectures snapshot error:', err);
      }
    );

    const unsubGpa = UserAccountService.subscribeUserGpaCourses(
      user.uid,
      (cloudCourses) => {
        setGpaCourses(cloudCourses);
      },
      (err) => {
        console.error('User GPA snapshot error:', err);
      }
    );

    return () => {
      unsubProfile();
      unsubLectures();
      unsubGpa();
    };
  }, [user]);

  const openAuthModal = useCallback((mode: AuthModalMode = 'login') => {
    setAuthError(null);
    setAuthModalMode(mode);
    setIsNewSignupOnboarding(false);
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
    setIsNewSignupOnboarding(false);
    setAuthError(null);
  }, []);

  const openProfileModal = useCallback(() => {
    setIsProfileModalOpen(true);
  }, []);

  const closeProfileModal = useCallback(() => {
    setIsProfileModalOpen(false);
  }, []);

  const clearAuthError = useCallback(() => {
    setAuthError(null);
  }, []);

  const completeOnboarding = useCallback(() => {
    setIsNewSignupOnboarding(false);
    setIsAuthModalOpen(false);
  }, []);

  const signInWithGoogle = useCallback(async (): Promise<{ isNewUser: boolean } | null> => {
    setAuthSubmitting(true);
    setAuthError(null);
    try {
      const result = await UserAccountService.signInWithGoogleOAuth();
      setUser(result.user);
      setUserProfile(result.profile);

      // Migrate guest lectures immediately
      const guestLecs = StorageService.getLectures();
      if (guestLecs.length > 0) {
        await UserAccountService.migrateGuestLectures(result.user.uid, guestLecs);
        StorageService.saveLectures([]);
      }
      if (result.isNewUser) {
        const guestGpa = StorageService.getGpaCourses();
        if (guestGpa.length > 0) {
          await UserAccountService.migrateGuestGpaCourses(result.user.uid, guestGpa);
        }
        setIsNewSignupOnboarding(true);
      } else {
        setIsNewSignupOnboarding(false);
        setIsAuthModalOpen(false);
      }
      migratedUidRef.current = result.user.uid;
      return { isNewUser: result.isNewUser };
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code || '';
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        setAuthError('تم إلغاء نافذة تسجيل الدخول قبل إتمام العملية.');
      } else if (code === 'auth/popup-blocked') {
        setAuthError('قام المتصفح بحظر نافذة Google المنبثقة. يرجى السماح بالنوافذ المنبثقة والمحاولة مرة أخرى.');
      } else {
        setAuthError('تعذر إتمام تسجيل الدخول عبر Google. يرجى المحاولة مرة أخرى.');
      }
      return null;
    } finally {
      setAuthSubmitting(false);
    }
  }, []);

  const logout = useCallback(async () => {
    await UserAccountService.logoutUserAccount();
    migratedUidRef.current = null;
    setUser(null);
    setUserProfile(null);
    setIsProfileModalOpen(false);
    setIsNewSignupOnboarding(false);
    setLectures(StorageService.getLectures());
    setGpaCourses(StorageService.getGpaCourses());
  }, []);

  const updateProfile = useCallback(
    async (updates: { displayName?: string; college?: string; academicYear?: string }) => {
      if (!user || !userProfile) return;
      const updated = await UserAccountService.updateUserProfileAndPreferences(
        user.uid,
        userProfile,
        updates
      );
      setUserProfile(updated);
    },
    [user, userProfile]
  );

  const updatePreferences = useCallback(
    async (updates: Partial<UserPreferences>) => {
      if (user && userProfile) {
        const updated = await UserAccountService.updateUserProfileAndPreferences(
          user.uid,
          userProfile,
          { preferences: updates }
        );
        setUserProfile(updated);
      } else {
        const next = sanitizePreferences(updates, guestPreferences);
        setGuestPreferences(next);
        saveGuestPreferences(next);
      }
    },
    [user, userProfile, guestPreferences]
  );

  // --- Lectures Operations ---
  const addLecture = useCallback(
    async (lecture: Omit<Lecture, 'id' | 'createdAt' | 'userId'>) => {
      if (user && !user.isAnonymous) {
        await UserAccountService.addUserLecture(user.uid, lecture);
      } else {
        StorageService.addLecture(lecture);
        setLectures(StorageService.getLectures());
      }
    },
    [user]
  );

  const updateLecture = useCallback(
    async (lecture: Lecture) => {
      if (user && !user.isAnonymous) {
        await UserAccountService.updateUserLecture(user.uid, lecture);
      } else {
        StorageService.updateLecture(lecture);
        setLectures(StorageService.getLectures());
      }
    },
    [user]
  );

  const deleteLecture = useCallback(
    async (id: string) => {
      if (user && !user.isAnonymous) {
        await UserAccountService.deleteUserLecture(user.uid, id);
      } else {
        StorageService.deleteLecture(id);
        setLectures(StorageService.getLectures());
      }
    },
    [user]
  );

  const toggleLectureCompleted = useCallback(
    async (id: string) => {
      if (user && !user.isAnonymous) {
        const target = lectures.find((l) => l.id === id);
        if (!target) return;
        await UserAccountService.updateUserLecture(user.uid, {
          ...target,
          completed: !target.completed,
        });
      } else {
        StorageService.toggleLectureCompleted(id);
        setLectures(StorageService.getLectures());
      }
    },
    [user, lectures]
  );

  // --- GPA Courses Operations ---
  const addGpaCourse = useCallback(
    async (course: Omit<GpaCourse, 'id' | 'userId'>) => {
      if (user && !user.isAnonymous) {
        await UserAccountService.addUserGpaCourse(user.uid, course);
      } else {
        const created: GpaCourse = {
          ...course,
          id: 'gpa-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
        };
        const next = [...gpaCourses, created];
        setGpaCourses(next);
        StorageService.saveGpaCourses(next);
      }
    },
    [user, gpaCourses]
  );

  const deleteGpaCourse = useCallback(
    async (id: string) => {
      if (user && !user.isAnonymous) {
        await UserAccountService.deleteUserGpaCourse(user.uid, id);
      } else {
        const next = gpaCourses.filter((c) => c.id !== id);
        setGpaCourses(next);
        StorageService.saveGpaCourses(next);
      }
    },
    [user, gpaCourses]
  );

  const resetGpaCourses = useCallback(async () => {
    if (user && !user.isAnonymous) {
      await UserAccountService.clearUserGpaCourses(user.uid);
    } else {
      setGpaCourses([]);
      StorageService.saveGpaCourses([]);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        isAuthenticated,
        authLoading,
        authSubmitting,
        authError,
        preferences: preferences || DEFAULT_USER_PREFERENCES,
        lectures,
        gpaCourses,
        isAuthModalOpen,
        authModalMode,
        isNewSignupOnboarding,
        isProfileModalOpen,
        openAuthModal,
        closeAuthModal,
        openProfileModal,
        closeProfileModal,
        clearAuthError,
        completeOnboarding,
        signInWithGoogle,
        logout,
        updateProfile,
        updatePreferences,
        addLecture,
        updateLecture,
        deleteLecture,
        toggleLectureCompleted,
        addGpaCourse,
        deleteGpaCourse,
        resetGpaCourses,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return ctx;
}
