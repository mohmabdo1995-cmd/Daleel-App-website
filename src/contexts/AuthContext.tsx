import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  auth,
  authPersistenceReady,
  isFirestoreQuotaError,
  isFirestoreQuotaExceeded,
  markFirestoreQuotaExceeded,
} from '../services/firebase';
import { StorageService } from '../services/storage';
import { NotificationService } from '../services/notifications';
import {
  buildFallbackUserProfile,
  DEFAULT_USER_PREFERENCES,
  FIRESTORE_QUOTA_AR_MESSAGE,
  loadCachedUserWorkspace,
  loadCachedUserWorkspaceFromIdb,
  mapFirebaseAuthErrorToArabic,
  sanitizePreferences,
  saveCachedUserWorkspace,
  UserAccountService,
} from '../services/userAccount';
import {
  GpaCourse,
  Lecture,
  PersonalStudyResource,
  SubjectStudyProgress,
  UserPreferences,
  UserProfile,
} from '../types';

export type AuthModalMode = 'login' | 'signup';

interface AuthContextValue {
  user: User | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  authLoading: boolean;
  authSubmitting: boolean;
  authError: string | null;
  syncError: string | null;
  preferences: UserPreferences;
  lectures: Lecture[];
  gpaCourses: GpaCourse[];
  personalResources: PersonalStudyResource[];
  subjectProgressMap: Record<string, SubjectStudyProgress>;
  isAuthModalOpen: boolean;
  authModalMode: AuthModalMode;
  isNewSignupOnboarding: boolean;
  isProfileModalOpen: boolean;
  openAuthModal: (mode?: AuthModalMode) => void;
  closeAuthModal: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  clearAuthError: () => void;
  clearSyncError: () => void;
  completeOnboarding: () => void;
  signInWithGoogle: () => Promise<{ isNewUser: boolean } | null>;
  logout: () => Promise<void>;
  updateProfile: (updates: {
    displayName?: string;
    college?: string;
    academicYear?: string;
  }) => Promise<void>;
  updatePreferences: (updates: Partial<UserPreferences>) => Promise<void>;
  toggleSavedResource: (resourceId: string) => Promise<void>;
  addPersonalResource: (
    resource: Omit<PersonalStudyResource, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
  ) => Promise<void>;
  deletePersonalResource: (id: string) => Promise<void>;
  saveSubjectProgress: (
    subjectId: string,
    notes: string,
    completedTopicIds: string[]
  ) => Promise<void>;
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
  const [syncError, setSyncError] = useState<string | null>(null);

  const [guestPreferences, setGuestPreferences] = useState<UserPreferences>(() => loadGuestPreferences());
  const [lectures, setLectures] = useState<Lecture[]>(() => StorageService.getLectures());
  const [gpaCourses, setGpaCourses] = useState<GpaCourse[]>(() => StorageService.getGpaCourses());
  const [personalResources, setPersonalResources] = useState<PersonalStudyResource[]>(() =>
    StorageService.getPersonalResources()
  );
  const [subjectProgressMap, setSubjectProgressMap] = useState<Record<string, SubjectStudyProgress>>(
    () => StorageService.getSubjectProgressMap()
  );

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<AuthModalMode>('login');
  const [isNewSignupOnboarding, setIsNewSignupOnboarding] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const migratedUidRef = useRef<string | null>(null);
  const activeUidRef = useRef<string | null>(null);
  const forceNextWorkspaceSyncRef = useRef<boolean>(false);

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

  const applyCachedWorkspace = useCallback((uid: string) => {
    const cached = loadCachedUserWorkspace(uid);
    if (cached) {
      if (Array.isArray(cached.lectures)) setLectures(cached.lectures);
      if (Array.isArray(cached.gpaCourses)) setGpaCourses(cached.gpaCourses);
      if (Array.isArray(cached.personalResources)) setPersonalResources(cached.personalResources);
      if (cached.subjectProgressMap && typeof cached.subjectProgressMap === 'object') {
        setSubjectProgressMap(cached.subjectProgressMap);
      }
      return;
    }
    void loadCachedUserWorkspaceFromIdb(uid).then(({ workspace }) => {
      if (!workspace || activeUidRef.current !== uid) return;
      if (Array.isArray(workspace.lectures)) setLectures(workspace.lectures);
      if (Array.isArray(workspace.gpaCourses)) setGpaCourses(workspace.gpaCourses);
      if (Array.isArray(workspace.personalResources)) setPersonalResources(workspace.personalResources);
      if (workspace.subjectProgressMap && typeof workspace.subjectProgressMap === 'object') {
        setSubjectProgressMap(workspace.subjectProgressMap);
      }
    });
  }, []);

  const migrateExplicitGuestDraftsOnce = useCallback(async (uid: string) => {
    if (migratedUidRef.current === uid || isFirestoreQuotaExceeded()) return;
    migratedUidRef.current = uid;

    const guestLectures = StorageService.getLectures();
    const guestGpa = StorageService.getGpaCourses();
    const guestPersonalRes = StorageService.getPersonalResources();

    const tasks: Promise<unknown>[] = [];
    if (guestLectures.length > 0) {
      tasks.push(UserAccountService.migrateGuestLectures(uid, guestLectures));
    }
    if (guestGpa.length > 0) {
      tasks.push(UserAccountService.migrateGuestGpaCourses(uid, guestGpa));
    }
    if (guestPersonalRes.length > 0) {
      tasks.push(UserAccountService.migrateGuestPersonalResources(uid, guestPersonalRes));
    }

    if (tasks.length > 0) {
      try {
        await Promise.all(tasks);
        StorageService.clearMigratedUserDrafts();
      } catch (err) {
        if (isFirestoreQuotaError(err)) {
          migratedUidRef.current = null;
        }
        console.warn('Guest data migration partial/deferred error:', err);
      }
    }
  }, []);

  // Boot Auth Lifecycle: resolve pending redirect first, then listen to onAuthStateChanged
  useEffect(() => {
    let isMounted = true;
    let unsubscribeAuth: (() => void) | undefined;

    const initAuthLifecycle = async () => {
      await authPersistenceReady;
      const hadPendingRedirect = UserAccountService.hasPendingRedirectFlag();

      try {
        const redirectResult = await UserAccountService.resolvePendingGoogleRedirect();
        if (!isMounted) return;
        if (redirectResult) {
          activeUidRef.current = redirectResult.user.uid;
          forceNextWorkspaceSyncRef.current = true;
          setUser(redirectResult.user);
          setUserProfile(redirectResult.profile);
          setAuthError(null);
          setSyncError(null);
          await migrateExplicitGuestDraftsOnce(redirectResult.user.uid);
          if (redirectResult.isNewUser) {
            setIsAuthModalOpen(true);
            setIsNewSignupOnboarding(true);
          } else {
            setIsAuthModalOpen(false);
            setIsNewSignupOnboarding(false);
          }
        }
      } catch (err) {
        console.error('Redirect Google Auth recovery error:', err);
        if (isMounted && hadPendingRedirect) {
          setAuthError(mapFirebaseAuthErrorToArabic(err));
          setIsAuthModalOpen(true);
        }
      }

      if (!isMounted) return;

      unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
        if (!isMounted) return;

        if (firebaseUser && !firebaseUser.isAnonymous) {
          const isSwitchingAccount =
            activeUidRef.current !== null && activeUidRef.current !== firebaseUser.uid;
          activeUidRef.current = firebaseUser.uid;

          if (isSwitchingAccount) {
            // Immediately clear previous user's in-memory records during account switch
            setLectures([]);
            setGpaCourses([]);
            setPersonalResources([]);
            setSubjectProgressMap({});
            setUserProfile(null);
          }

          setUser(firebaseUser);
          setAuthError(null);
          setSyncError(null);

          try {
            const { profile, fromQuotaFallback } = await UserAccountService.ensureUserProfile(firebaseUser);
            if (!isMounted) return;
            setUserProfile(profile);
            if (fromQuotaFallback) {
              applyCachedWorkspace(firebaseUser.uid);
              setSyncError(FIRESTORE_QUOTA_AR_MESSAGE);
            } else {
              await migrateExplicitGuestDraftsOnce(firebaseUser.uid);
            }
          } catch (err) {
            if (isFirestoreQuotaError(err)) {
              markFirestoreQuotaExceeded();
              console.warn('Firestore daily read quota exceeded on auth profile check; using local fallback.');
              if (isMounted) {
                setUserProfile(buildFallbackUserProfile(firebaseUser));
                applyCachedWorkspace(firebaseUser.uid);
                setSyncError(FIRESTORE_QUOTA_AR_MESSAGE);
              }
            } else {
              console.error('Failed ensuring user profile on auth change:', err);
              if (isMounted) {
                setSyncError(mapFirebaseAuthErrorToArabic(err));
              }
            }
          } finally {
            if (isMounted) setAuthLoading(false);
          }
        } else {
          // Signed out or anonymous admin session -> isolate & load guest workspace cleanly
          activeUidRef.current = null;
          migratedUidRef.current = null;
          setUser(null);
          setUserProfile(null);
          setLectures(StorageService.getLectures());
          setGpaCourses(StorageService.getGpaCourses());
          setPersonalResources(StorageService.getPersonalResources());
          setSubjectProgressMap(StorageService.getSubjectProgressMap());
          setGuestPreferences(loadGuestPreferences());
          setAuthLoading(false);
        }
      });
    };

    initAuthLifecycle();

    return () => {
      isMounted = false;
      if (unsubscribeAuth) unsubscribeAuth();
    };
  }, [applyCachedWorkspace, migrateExplicitGuestDraftsOnce]);

  // IndexedDB-first sync of user workspace (replaces 5 permanent onSnapshot listeners + duplicate user doc read)
  useEffect(() => {
    if (!user || user.isAnonymous) return;

    // 1. Immediately hydrate cached workspace (0 Firestore reads)
    applyCachedWorkspace(user.uid);

    if (isFirestoreQuotaExceeded()) {
      setUserProfile((prev) => prev || buildFallbackUserProfile(user));
      setSyncError(FIRESTORE_QUOTA_AR_MESSAGE);
      return;
    }

    let disposed = false;
    const shouldForceRefresh = forceNextWorkspaceSyncRef.current;
    forceNextWorkspaceSyncRef.current = false;

    UserAccountService.syncUserWorkspaceOnce(user.uid, { forceRefresh: shouldForceRefresh })
      .then((res) => {
        if (disposed) return;
        setLectures(res.lectures);
        setGpaCourses(res.gpaCourses);
        setPersonalResources(res.personalResources);
        setSubjectProgressMap(res.subjectProgressMap);
      })
      .catch((err) => {
        if (disposed) return;
        if (isFirestoreQuotaError(err)) {
          markFirestoreQuotaExceeded();
          setUserProfile((prev) => prev || buildFallbackUserProfile(user));
          applyCachedWorkspace(user.uid);
          setSyncError(FIRESTORE_QUOTA_AR_MESSAGE);
          return;
        }
        console.error('User workspace sync error:', err);
        const errMsg = err instanceof Error ? err.message : String(err);
        if (errMsg.includes('permission-denied') || errMsg.includes('Missing or insufficient permissions')) {
          setSyncError('تعذر مزامنة البيانات الخاصة بسبب صلاحيات الحساب. يرجى التأكد من توثيق حساب Google.');
        }
      });

    return () => {
      disposed = true;
    };
  }, [user, applyCachedWorkspace]);

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

  const clearSyncError = useCallback(() => {
    setSyncError(null);
  }, []);

  const completeOnboarding = useCallback(() => {
    setIsNewSignupOnboarding(false);
    setIsAuthModalOpen(false);
  }, []);

  const signInWithGoogle = useCallback(async (): Promise<{ isNewUser: boolean } | null> => {
    setAuthSubmitting(true);
    setAuthError(null);
    setSyncError(null);
    try {
      const result = await UserAccountService.signInWithGoogleOAuth();

      if (result.status === 'redirecting') {
        return null;
      }

      if (result.user && result.profile) {
        activeUidRef.current = result.user.uid;
        forceNextWorkspaceSyncRef.current = true;
        setUser(result.user);
        setUserProfile(result.profile);
        await migrateExplicitGuestDraftsOnce(result.user.uid);

        const isNew = Boolean(result.isNewUser);
        if (isNew) {
          setIsNewSignupOnboarding(true);
        } else {
          setIsNewSignupOnboarding(false);
          setIsAuthModalOpen(false);
        }
        return { isNewUser: isNew };
      }
      return null;
    } catch (err: unknown) {
      setAuthError(mapFirebaseAuthErrorToArabic(err));
      return null;
    } finally {
      setAuthSubmitting(false);
    }
  }, [migrateExplicitGuestDraftsOnce]);

  const logout = useCallback(async () => {
    // Wipe in-memory user data immediately so no private data remains visible during signOut
    activeUidRef.current = null;
    migratedUidRef.current = null;
    setUser(null);
    setUserProfile(null);
    setIsProfileModalOpen(false);
    setIsNewSignupOnboarding(false);
    setSyncError(null);
    setLectures([]);
    setGpaCourses([]);
    setPersonalResources([]);
    setSubjectProgressMap({});

    try {
      await UserAccountService.logoutUserAccount();
    } finally {
      setLectures(StorageService.getLectures());
      setGpaCourses(StorageService.getGpaCourses());
      setPersonalResources(StorageService.getPersonalResources());
      setSubjectProgressMap(StorageService.getSubjectProgressMap());
      setGuestPreferences(loadGuestPreferences());
    }
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
      saveCachedUserWorkspace(user.uid, { profile: updated });
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
        saveCachedUserWorkspace(user.uid, { profile: updated });
      } else {
        const next = sanitizePreferences(updates, guestPreferences);
        setGuestPreferences(next);
        saveGuestPreferences(next);
      }
    },
    [user, userProfile, guestPreferences]
  );

  const toggleSavedResource = useCallback(
    async (resourceId: string) => {
      const currentSaved = preferences.savedResourceIds || [];
      const exists = currentSaved.includes(resourceId);
      const nextSaved = exists
        ? currentSaved.filter((id) => id !== resourceId)
        : [resourceId, ...currentSaved].slice(0, 100);
      await updatePreferences({ savedResourceIds: nextSaved });
    },
    [preferences.savedResourceIds, updatePreferences]
  );

  const addPersonalResource = useCallback(
    async (
      input: Omit<PersonalStudyResource, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
    ) => {
      if (user && !user.isAnonymous) {
        const created = await UserAccountService.addPersonalResource(user.uid, input);
        setPersonalResources((prev) => {
          const next = [created, ...prev];
          saveCachedUserWorkspace(user.uid, { personalResources: next });
          return next;
        });
      } else {
        const now = new Date().toISOString();
        const created: PersonalStudyResource = {
          ...input,
          id: 'pres-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
          userId: 'guest',
          createdAt: now,
          updatedAt: now,
        };
        const next = [created, ...personalResources];
        setPersonalResources(next);
        StorageService.savePersonalResources(next);
      }
    },
    [user, personalResources]
  );

  const deletePersonalResource = useCallback(
    async (id: string) => {
      if (user && !user.isAnonymous) {
        await UserAccountService.deletePersonalResource(user.uid, id);
        setPersonalResources((prev) => {
          const next = prev.filter((r) => r.id !== id);
          saveCachedUserWorkspace(user.uid, { personalResources: next });
          return next;
        });
      } else {
        const next = personalResources.filter((r) => r.id !== id);
        setPersonalResources(next);
        StorageService.savePersonalResources(next);
      }
    },
    [user, personalResources]
  );

  const saveSubjectProgress = useCallback(
    async (subjectId: string, notes: string, completedTopicIds: string[]) => {
      if (user && !user.isAnonymous) {
        const saved = await UserAccountService.upsertSubjectProgress(
          user.uid,
          subjectId,
          notes,
          completedTopicIds
        );
        setSubjectProgressMap((prev) => {
          const nextMap = { ...prev, [saved.subjectId || saved.id]: saved };
          saveCachedUserWorkspace(user.uid, { subjectProgressMap: nextMap });
          return nextMap;
        });
      } else {
        const nextItem: SubjectStudyProgress = {
          id: subjectId,
          userId: 'guest',
          subjectId,
          notes,
          completedTopicIds,
          updatedAt: new Date().toISOString(),
        };
        const nextMap = { ...subjectProgressMap, [subjectId]: nextItem };
        setSubjectProgressMap(nextMap);
        StorageService.saveSubjectProgressMap(nextMap);
      }
    },
    [user, subjectProgressMap]
  );

  // --- Lectures Operations ---
  const addLecture = useCallback(
    async (lecture: Omit<Lecture, 'id' | 'createdAt' | 'userId'>) => {
      if (user && !user.isAnonymous) {
        const created = await UserAccountService.addUserLecture(user.uid, lecture);
        setLectures((prev) => {
          const next = [created, ...prev];
          saveCachedUserWorkspace(user.uid, { lectures: next });
          return next;
        });
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
        setLectures((prev) => {
          const next = prev.map((l) => (l.id === lecture.id ? lecture : l));
          saveCachedUserWorkspace(user.uid, { lectures: next });
          return next;
        });
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
        setLectures((prev) => {
          const next = prev.filter((l) => l.id !== id);
          saveCachedUserWorkspace(user.uid, { lectures: next });
          return next;
        });
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
        const updated = { ...target, completed: !target.completed };
        await UserAccountService.updateUserLecture(user.uid, updated);
        setLectures((prev) => {
          const next = prev.map((l) => (l.id === id ? updated : l));
          saveCachedUserWorkspace(user.uid, { lectures: next });
          return next;
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
        const created = await UserAccountService.addUserGpaCourse(user.uid, course);
        setGpaCourses((prev) => {
          const next = [...prev, created];
          saveCachedUserWorkspace(user.uid, { gpaCourses: next });
          return next;
        });
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
        setGpaCourses((prev) => {
          const next = prev.filter((c) => c.id !== id);
          saveCachedUserWorkspace(user.uid, { gpaCourses: next });
          return next;
        });
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
      setGpaCourses([]);
      saveCachedUserWorkspace(user.uid, { gpaCourses: [] });
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
        syncError,
        preferences: preferences || DEFAULT_USER_PREFERENCES,
        lectures,
        gpaCourses,
        personalResources,
        subjectProgressMap,
        isAuthModalOpen,
        authModalMode,
        isNewSignupOnboarding,
        isProfileModalOpen,
        openAuthModal,
        closeAuthModal,
        openProfileModal,
        closeProfileModal,
        clearAuthError,
        clearSyncError,
        completeOnboarding,
        signInWithGoogle,
        logout,
        updateProfile,
        updatePreferences,
        toggleSavedResource,
        addPersonalResource,
        deletePersonalResource,
        saveSubjectProgress,
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
