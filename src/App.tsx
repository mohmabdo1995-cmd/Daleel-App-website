import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ActivePage, SubjectId } from './types';
import { NotificationService } from './services/notifications';
import { FirebaseService, SiteConfig, DEFAULT_SITE_CONFIG } from './services/firebase';
import { AdminAuthService } from './services/adminAuth';
import { useAuth } from './contexts/AuthContext';
import {
  NavRouteState,
  NavModalType,
  parseRouteFromLocation,
  buildUrlFromRoute,
  saveScrollPosition,
  getSavedScrollPosition,
  persistActiveSessionSnapshot,
  createNavEntryId,
  isSameNavDestination,
  isValidNavRouteState,
  restoreScrollOffset,
} from './services/navigationState';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingHero } from './components/LandingHero';
import { MainDashboard } from './components/MainDashboard';
import { CollegeInfoSection } from './components/CollegeInfoSection';
import { SubjectsSection } from './components/SubjectsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { StudyResourcesSection } from './components/StudyResourcesSection';
import { GpaCalculatorModal } from './components/GpaCalculatorModal';
import { PomodoroTimerModal } from './components/PomodoroTimerModal';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { AdminDashboardLayout } from './components/admin/AdminDashboardLayout';
import { ArticlesSection } from './components/ArticlesSection';
import { VideoLibrarySection } from './components/VideoLibrarySection';
import { NewsTickerBar } from './components/NewsTickerBar';
import { UserAuthModal } from './components/auth/UserAuthModal';
import { UserProfileModal } from './components/auth/UserProfileModal';
import { MedicalDictionarySection } from './components/MedicalDictionarySection';

export default function App() {
  const {
    lectures,
    syncError,
    clearSyncError,
    isAuthModalOpen,
    isProfileModalOpen,
    openAuthModal,
    closeAuthModal,
    openProfileModal,
    closeProfileModal,
  } = useAuth();
  const lecturesRef = useRef(lectures);

  useEffect(() => {
    lecturesRef.current = lectures;
  }, [lectures]);

  // Persistent History-API-backed Navigation State
  const [navState, setNavState] = useState<NavRouteState>(() => parseRouteFromLocation());
  const currentNavRef = useRef<NavRouteState>(navState);
  const cancelScrollRestoreRef = useRef<(() => void) | null>(null);
  const isHandlingPopStateRef = useRef<boolean>(false);

  const activePage = navState.page;
  const selectedSubjectId = navState.subjectId;
  const activeArticleId = navState.articleId;
  const activeVideoId = navState.videoId;
  const activeTermId = navState.termId;

  // Real-time Firestore Site Config
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);

  // Hidden Admin State synchronized with URL & History
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(() => Boolean(navState.isAdmin));
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() =>
    AdminAuthService.isAuthenticated()
  );

  // App-level Modals
  const [isGpaOpen, setIsGpaOpen] = useState(navState.modal === 'gpa');
  const [isPomodoroOpen, setIsPomodoroOpen] = useState(navState.modal === 'pomodoro');
  const [openScheduleAddModal, setOpenScheduleAddModal] = useState(false);

  // Keep currentNavRef always up to date
  useEffect(() => {
    currentNavRef.current = navState;
    persistActiveSessionSnapshot(navState);
  }, [navState]);

  const flushCurrentScrollIntoHistory = useCallback(() => {
    if (typeof window === 'undefined') return;
    const current = currentNavRef.current;
    // Never overwrite destination scroll with 0 when navigating back on a modal-less layer unintentionally
    const currentY = window.scrollY;
    const updated: NavRouteState = {
      ...current,
      scrollY: currentY,
    };
    currentNavRef.current = updated;
    saveScrollPosition(updated, currentY);
    persistActiveSessionSnapshot(updated);
    try {
      window.history.replaceState(updated, '', window.location.href);
    } catch {
      // ignore sandboxed history errors
    }
  }, []);

  const navigateTo = useCallback(
    (
      page: ActivePage,
      options?: {
        subjectId?: SubjectId;
        articleId?: string;
        videoId?: string;
        termId?: string;
        modal?: NavModalType;
        isAdmin?: boolean;
        replace?: boolean;
        preserveScroll?: boolean;
      }
    ) => {
      const current = currentNavRef.current;
      const targetSubjectId =
        options && 'subjectId' in options
          ? options.subjectId
          : page === 'subject-detail'
          ? current.subjectId
          : undefined;
      const targetArticleId =
        options && 'articleId' in options
          ? options.articleId
          : page === 'articles'
          ? options.articleId
          : undefined;
      const targetVideoId =
        options && 'videoId' in options
          ? options.videoId
          : page === 'videos'
          ? options.videoId
          : undefined;
      const targetTermId =
        options && 'termId' in options
          ? options.termId
          : page === 'dictionary'
          ? options.termId
          : undefined;
      const targetModal: NavModalType = options && 'modal' in options ? (options.modal ?? null) : null;
      const targetIsAdmin = options?.isAdmin ?? false;

      if (
        !options?.replace &&
        isSameNavDestination(current, {
          page,
          subjectId: targetSubjectId,
          articleId: targetArticleId,
          videoId: targetVideoId,
          termId: targetTermId,
          modal: targetModal,
          isAdmin: targetIsAdmin,
        })
      ) {
        return;
      }

      // Persist scroll position of the view we are leaving
      const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      if (!options?.replace) {
        const prevUpdated: NavRouteState = {
          ...current,
          scrollY: currentScrollY,
        };
        saveScrollPosition(prevUpdated, currentScrollY);
        try {
          window.history.replaceState(prevUpdated, '', window.location.href);
        } catch {
          // ignore
        }
      }

      const isTopLevelPageSwitch =
        current.page !== page ||
        current.subjectId !== targetSubjectId ||
        Boolean(current.isAdmin) !== Boolean(targetIsAdmin);

      const nextState: NavRouteState = {
        __daleelakNav: true,
        entryId: options?.replace ? current.entryId : createNavEntryId(),
        index: options?.replace ? current.index : current.index + 1,
        page,
        subjectId: targetSubjectId,
        articleId: targetArticleId,
        videoId: targetVideoId,
        termId: targetTermId,
        modal: targetModal,
        isAdmin: targetIsAdmin,
        scrollY: options?.preserveScroll ? currentScrollY : 0,
        timestamp: Date.now(),
      };

      const nextUrl = buildUrlFromRoute(nextState);
      currentNavRef.current = nextState;
      setNavState(nextState);
      setIsAdminRoute(Boolean(targetIsAdmin));
      persistActiveSessionSnapshot(nextState);

      try {
        if (options?.replace) {
          window.history.replaceState(nextState, '', nextUrl);
        } else {
          window.history.pushState(nextState, '', nextUrl);
        }
      } catch {
        // ignore
      }

      if (isTopLevelPageSwitch && !options?.preserveScroll && typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    []
  );

  // Smart back helper shared by section back buttons & browser back
  const goBackInHistory = useCallback(
    (fallbackPage: ActivePage = 'main') => {
      if (typeof window !== 'undefined' && currentNavRef.current.index > 0) {
        window.history.back();
        return;
      }
      navigateTo(fallbackPage);
    },
    [navigateTo]
  );

  // Sync browser History API, Scroll Restoration, Admin path, and OS/WebView lifecycle events
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Take explicit deterministic control of scroll restoration after React renders
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Ensure base history entry carries valid NavRouteState and sync URL if restored from session
    const initial = currentNavRef.current;
    try {
      window.history.replaceState(initial, '', buildUrlFromRoute(initial));
    } catch {
      // ignore
    }
    if (initial.scrollY > 0) {
      cancelScrollRestoreRef.current?.();
      cancelScrollRestoreRef.current = restoreScrollOffset(initial.scrollY);
    }

    const syncAdminFromUrl = (): boolean => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;
      const adminActive = pathname === '/admin' || hash === '#admin';
      setIsAdminRoute(adminActive);
      if (adminActive) {
        setIsAdminAuthenticated(AdminAuthService.isAuthenticated());
      }
      return adminActive;
    };

    const handlePopState = (event: PopStateEvent) => {
      isHandlingPopStateRef.current = true;
      const adminActive = syncAdminFromUrl();

      let next: NavRouteState;
      if (isValidNavRouteState(event.state)) {
        next = { ...event.state, isAdmin: adminActive || event.state.isAdmin };
      } else {
        next = parseRouteFromLocation();
      }

      currentNavRef.current = next;
      setNavState(next);
      setIsAdminRoute(Boolean(next.isAdmin || adminActive));
      persistActiveSessionSnapshot(next);

      // Synchronize open modal overlays with popped history entry
      setIsGpaOpen(next.modal === 'gpa');
      setIsPomodoroOpen(next.modal === 'pomodoro');

      if (next.modal === 'auth') {
        openAuthModal('login');
      } else {
        closeAuthModal();
      }

      if (next.modal === 'profile') {
        openProfileModal();
      } else {
        closeProfileModal();
      }

      // Restore exact scroll offset of the destination history entry after DOM paints
      const targetScroll = getSavedScrollPosition(next);
      cancelScrollRestoreRef.current?.();
      cancelScrollRestoreRef.current = restoreScrollOffset(targetScroll);

      window.setTimeout(() => {
        isHandlingPopStateRef.current = false;
      }, 60);
    };

    const handleHashChange = () => {
      const adminActive = syncAdminFromUrl();
      const updated: NavRouteState = {
        ...currentNavRef.current,
        isAdmin: adminActive,
      };
      currentNavRef.current = updated;
      setNavState(updated);
      persistActiveSessionSnapshot(updated);
    };

    // Throttled scroll tracking so Back/Home/Process-Kill always know exact scrollY
    let scrollTimer: number | null = null;
    const handleScroll = () => {
      if (scrollTimer !== null) return;
      scrollTimer = window.setTimeout(() => {
        scrollTimer = null;
        flushCurrentScrollIntoHistory();
      }, 120);
    };

    const handleVisibilityOrHide = () => {
      if (document.visibilityState === 'hidden') {
        flushCurrentScrollIntoHistory();
      }
    };

    const handlePageHide = () => {
      flushCurrentScrollIntoHistory();
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      // If restored from mobile bfcache on Home/Recent Apps return, re-sync scroll cleanly without reloading
      if (event.persisted) {
        const targetScroll = getSavedScrollPosition(currentNavRef.current);
        if (targetScroll > 0) {
          cancelScrollRestoreRef.current?.();
          cancelScrollRestoreRef.current = restoreScrollOffset(targetScroll);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityOrHide);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      if (scrollTimer !== null) clearTimeout(scrollTimer);
      cancelScrollRestoreRef.current?.();
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityOrHide);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [
    flushCurrentScrollIntoHistory,
    openAuthModal,
    closeAuthModal,
    openProfileModal,
    closeProfileModal,
  ]);

  // Keep AuthContext-driven modals (AuthModal & ProfileModal) synchronized with History API
  // so Android Back closes the modal smoothly instead of jumping away from the page.
  useEffect(() => {
    if (isHandlingPopStateRef.current) return;
    const current = currentNavRef.current;

    if (isAuthModalOpen && current.modal !== 'auth') {
      navigateTo(current.page, {
        subjectId: current.subjectId,
        articleId: current.articleId,
        videoId: current.videoId,
        modal: 'auth',
        preserveScroll: true,
      });
    } else if (!isAuthModalOpen && current.modal === 'auth') {
      // Clear modal marker in-place so OAuth completion never fires history.back() unexpectedly
      const cleared: NavRouteState = { ...current, modal: null };
      currentNavRef.current = cleared;
      setNavState(cleared);
      persistActiveSessionSnapshot(cleared);
      try {
        window.history.replaceState(cleared, '', buildUrlFromRoute(cleared));
      } catch {
        // ignore
      }
    }
  }, [isAuthModalOpen, navigateTo]);

  useEffect(() => {
    if (isHandlingPopStateRef.current) return;
    const current = currentNavRef.current;

    if (isProfileModalOpen && current.modal !== 'profile') {
      navigateTo(current.page, {
        subjectId: current.subjectId,
        articleId: current.articleId,
        videoId: current.videoId,
        modal: 'profile',
        preserveScroll: true,
      });
    } else if (!isProfileModalOpen && current.modal === 'profile') {
      const cleared: NavRouteState = { ...current, modal: null };
      currentNavRef.current = cleared;
      setNavState(cleared);
      persistActiveSessionSnapshot(cleared);
      try {
        window.history.replaceState(cleared, '', buildUrlFromRoute(cleared));
      } catch {
        // ignore
      }
    }
  }, [isProfileModalOpen, navigateTo]);

  // Real-time Firestore Site Configuration Subscription
  useEffect(() => {
    const unsubscribe = FirebaseService.subscribeSiteConfig((config) => {
      setSiteConfig(config);
    });
    return () => unsubscribe();
  }, []);

  // Start Notification Scheduler & dismiss Splash on Mount
  useEffect(() => {
    NotificationService.startScheduler(() => lecturesRef.current);

    const splashTimer = setTimeout(() => {
      const dismiss = (window as unknown as { __dismissSplash?: () => void }).__dismissSplash;
      if (typeof dismiss === 'function') {
        dismiss();
      } else {
        const splash = document.getElementById('app-splash');
        if (splash) {
          document.body.classList.add('app-mounted');
          splash.classList.add('splash-fade-out');
          setTimeout(() => splash.remove(), 480);
        }
      }
    }, 80);

    return () => {
      clearTimeout(splashTimer);
      NotificationService.stopScheduler();
    };
  }, []);

  const handleNavigate = useCallback(
    (page: ActivePage, subjectId?: SubjectId) => {
      navigateTo(page, { subjectId });
    },
    [navigateTo]
  );

  const handleOpenGpa = useCallback(() => {
    setIsGpaOpen(true);
    const current = currentNavRef.current;
    navigateTo(current.page, {
      subjectId: current.subjectId,
      articleId: current.articleId,
      videoId: current.videoId,
      modal: 'gpa',
      preserveScroll: true,
    });
  }, [navigateTo]);

  const handleCloseGpa = useCallback(() => {
    setIsGpaOpen(false);
    if (currentNavRef.current.modal === 'gpa' && currentNavRef.current.index > 0) {
      window.history.back();
    } else if (currentNavRef.current.modal === 'gpa') {
      navigateTo(currentNavRef.current.page, {
        subjectId: currentNavRef.current.subjectId,
        modal: null,
        replace: true,
        preserveScroll: true,
      });
    }
  }, [navigateTo]);

  const handleOpenPomodoro = useCallback(() => {
    setIsPomodoroOpen(true);
    const current = currentNavRef.current;
    navigateTo(current.page, {
      subjectId: current.subjectId,
      articleId: current.articleId,
      videoId: current.videoId,
      modal: 'pomodoro',
      preserveScroll: true,
    });
  }, [navigateTo]);

  const handleClosePomodoro = useCallback(() => {
    setIsPomodoroOpen(false);
    if (currentNavRef.current.modal === 'pomodoro' && currentNavRef.current.index > 0) {
      window.history.back();
    } else if (currentNavRef.current.modal === 'pomodoro') {
      navigateTo(currentNavRef.current.page, {
        subjectId: currentNavRef.current.subjectId,
        modal: null,
        replace: true,
        preserveScroll: true,
      });
    }
  }, [navigateTo]);

  const exitAdminView = useCallback(() => {
    setIsAdminRoute(false);
    if (currentNavRef.current.index > 0) {
      window.history.back();
    } else {
      navigateTo('main', { isAdmin: false, replace: true });
    }
  }, [navigateTo]);

  const todayStr = new Date().toISOString().split('T')[0];
  const upcomingCount = lectures.filter((l) => l.date >= todayStr && !l.completed).length;

  // 1. If user is on /admin route and authenticated -> Render Full Admin Dashboard
  if (isAdminRoute && isAdminAuthenticated) {
    return <AdminDashboardLayout onCloseAdmin={exitAdminView} />;
  }

  // 2. If user is on /admin route but not authenticated -> Render Admin Password Login Screen
  if (isAdminRoute && !isAdminAuthenticated) {
    return (
      <AdminLoginModal
        onSuccess={() => setIsAdminAuthenticated(true)}
        onCancel={exitAdminView}
      />
    );
  }

  // 3. Public Web App view (No admin links visible to visitors)
  const vis = siteConfig.sectionVisibility || DEFAULT_SITE_CONFIG.sectionVisibility;

  return (
    <div
      className="min-h-screen flex flex-col bg-white dark:bg-[#071A3D] text-[#071A3D] dark:text-white transition-colors duration-300 font-cairo"
      dir="rtl"
    >
      {/* Header Bar */}
      <Header
        activePage={activePage}
        setActivePage={(p) => handleNavigate(p)}
        onOpenGpa={handleOpenGpa}
        onOpenPomodoro={handleOpenPomodoro}
        onOpenAddLecture={() => {
          setOpenScheduleAddModal(true);
          handleNavigate('schedule');
        }}
      />

      {/* Breaking News Ticker Bar directly under Header */}
      <NewsTickerBar
        siteConfig={siteConfig}
        onNavigate={(p) => handleNavigate(p)}
      />

      {syncError && (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs font-bold flex items-center justify-between gap-3">
            <span>{syncError}</span>
            <button
              type="button"
              onClick={clearSyncError}
              className="px-2.5 py-1 rounded-lg bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/60 text-rose-900 dark:text-rose-100 text-[11px] font-bold cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* Main Content Render */}
      <main className="flex-1">
        {activePage === 'landing' && (
          <LandingHero
            onEnter={() => handleNavigate('main')}
            siteConfig={siteConfig}
          />
        )}

        {activePage === 'main' && (
          <MainDashboard
            onNavigate={(p) => handleNavigate(p)}
            lectureCount={lectures.length}
            upcomingCount={upcomingCount}
            lectures={lectures}
          />
        )}

        {activePage === 'college' && vis.collegeInfoSection !== false && (
          <CollegeInfoSection
            onBack={() => goBackInHistory('main')}
            onNavigateToSubjects={() => handleNavigate('subjects')}
          />
        )}

        {(activePage === 'subjects' || activePage === 'subject-detail') &&
          vis.subjectsSection !== false && (
            <SubjectsSection
              onBack={() => goBackInHistory('main')}
              initialSelectedId={selectedSubjectId}
              onSelectSubject={(subId) => navigateTo('subject-detail', { subjectId: subId })}
              onBackFromSubject={() => {
                if (currentNavRef.current.index > 0) {
                  window.history.back();
                } else {
                  navigateTo('subjects', { subjectId: undefined });
                }
              }}
            />
          )}

        {activePage === 'schedule' && vis.scheduleSection !== false && (
          <ScheduleSection
            onBack={() => goBackInHistory('main')}
            openAddModalInitially={openScheduleAddModal}
            onConsumeInitialModal={() => setOpenScheduleAddModal(false)}
          />
        )}

        {activePage === 'resources' && vis.resourcesSection !== false && (
          <StudyResourcesSection
            onBack={() => goBackInHistory('main')}
            onNavigateToSubject={(subId) =>
              navigateTo('subject-detail', { subjectId: subId as SubjectId })
            }
          />
        )}

        {activePage === 'articles' && (
          <ArticlesSection
            onBack={() => goBackInHistory('main')}
            selectedArticleId={activeArticleId}
            onSelectArticle={(artId) =>
              navigateTo('articles', { articleId: artId, preserveScroll: true })
            }
            onCloseArticle={() => {
              if (currentNavRef.current.index > 0 && currentNavRef.current.articleId) {
                window.history.back();
              } else {
                navigateTo('articles', { articleId: undefined, replace: true, preserveScroll: true });
              }
            }}
          />
        )}

        {activePage === 'videos' && (
          <VideoLibrarySection
            onBack={() => goBackInHistory('main')}
            selectedVideoId={activeVideoId}
            onSelectVideo={(vidId) =>
              navigateTo('videos', { videoId: vidId, preserveScroll: true })
            }
            onCloseVideo={() => {
              if (currentNavRef.current.index > 0 && currentNavRef.current.videoId) {
                window.history.back();
              } else {
                navigateTo('videos', { videoId: undefined, replace: true, preserveScroll: true });
              }
            }}
          />
        )}

        {activePage === 'dictionary' && vis.medicalDictionarySection !== false && (
          <MedicalDictionarySection
            onBack={() => goBackInHistory('main')}
            selectedTermId={activeTermId}
            onSelectTerm={(termId) =>
              navigateTo('dictionary', { termId, preserveScroll: true })
            }
            onCloseTerm={() => {
              if (currentNavRef.current.index > 0 && currentNavRef.current.termId) {
                window.history.back();
              } else {
                navigateTo('dictionary', { termId: undefined, replace: true, preserveScroll: true });
              }
            }}
          />
        )}
      </main>

      {/* Footer */}
      {vis.contactFooter !== false && (
        <Footer onNavigate={(p) => handleNavigate(p)} />
      )}

      {/* Modals & Tools */}
      {vis.gpaCalculator !== false && (
        <GpaCalculatorModal isOpen={isGpaOpen} onClose={handleCloseGpa} />
      )}
      {vis.pomodoroTimer !== false && (
        <PomodoroTimerModal isOpen={isPomodoroOpen} onClose={handleClosePomodoro} />
      )}

      {/* User Auth & Account Profile Modals */}
      <UserAuthModal />
      <UserProfileModal />

      {/* PWA Install Prompt */}
      {vis.pwaInstallPrompt !== false && <PwaInstallPrompt />}
    </div>
  );
}
