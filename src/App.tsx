import React, { useState, useEffect, useRef } from 'react';
import { ActivePage, SubjectId } from './types';
import { NotificationService } from './services/notifications';
import { FirebaseService, SiteConfig, DEFAULT_SITE_CONFIG } from './services/firebase';
import { AdminAuthService } from './services/adminAuth';
import { useAuth } from './contexts/AuthContext';
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

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('landing');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId | undefined>(undefined);
  const { lectures, syncError, clearSyncError } = useAuth();
  const lecturesRef = useRef(lectures);

  useEffect(() => {
    lecturesRef.current = lectures;
  }, [lectures]);
  
  // Real-time Firestore Site Config
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);

  // Hidden Admin State
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);

  // Modals
  const [isGpaOpen, setIsGpaOpen] = useState(false);
  const [isPomodoroOpen, setIsPomodoroOpen] = useState(false);
  const [openScheduleAddModal, setOpenScheduleAddModal] = useState(false);

  // Detect URL path or hash for hidden /admin route
  useEffect(() => {
    const checkAdminPath = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;
      if (pathname === '/admin' || hash === '#admin') {
        setIsAdminRoute(true);
        setIsAdminAuthenticated(AdminAuthService.isAuthenticated());
      } else {
        setIsAdminRoute(false);
      }
    };

    checkAdminPath();
    window.addEventListener('popstate', checkAdminPath);
    window.addEventListener('hashchange', checkAdminPath);

    return () => {
      window.removeEventListener('popstate', checkAdminPath);
      window.removeEventListener('hashchange', checkAdminPath);
    };
  }, []);

  // Real-time Firestore Site Configuration Subscription
  useEffect(() => {
    const unsubscribe = FirebaseService.subscribeSiteConfig((config) => {
      setSiteConfig(config);
    });
    return () => unsubscribe();
  }, []);

  // Start Notification Scheduler & dismiss Splash on Mount
  useEffect(() => {
    // Start background notification scheduler using live AuthContext lectures
    NotificationService.startScheduler(() => lecturesRef.current);

    // Dismiss initial HTML splash screen once React has painted its root component
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

  const handleNavigate = (page: ActivePage, subjectId?: SubjectId) => {
    setActivePage(page);
    if (subjectId) {
      setSelectedSubjectId(subjectId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exitAdminView = () => {
    setIsAdminRoute(false);
    if (window.location.pathname === '/admin') {
      window.history.pushState({}, '', '/');
    } else if (window.location.hash === '#admin') {
      window.location.hash = '';
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const upcomingCount = lectures.filter(l => l.date >= todayStr && !l.completed).length;

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
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#071A3D] text-[#071A3D] dark:text-white transition-colors duration-300 font-cairo" dir="rtl">
      
      {/* Header Bar */}
      <Header
        activePage={activePage}
        setActivePage={(p) => handleNavigate(p)}
        onOpenGpa={() => setIsGpaOpen(true)}
        onOpenPomodoro={() => setIsPomodoroOpen(true)}
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
            onBack={() => handleNavigate('main')}
            onNavigateToSubjects={() => handleNavigate('subjects')}
          />
        )}

        {(activePage === 'subjects' || activePage === 'subject-detail') && vis.subjectsSection !== false && (
          <SubjectsSection
            onBack={() => handleNavigate('main')}
            initialSelectedId={selectedSubjectId}
          />
        )}

        {activePage === 'schedule' && vis.scheduleSection !== false && (
          <ScheduleSection
            onBack={() => handleNavigate('main')}
            openAddModalInitially={openScheduleAddModal}
          />
        )}

        {activePage === 'resources' && vis.resourcesSection !== false && (
          <StudyResourcesSection
            onBack={() => handleNavigate('main')}
            onNavigateToSubject={(subId) => handleNavigate('subjects', subId as SubjectId)}
          />
        )}

        {activePage === 'articles' && (
          <ArticlesSection
            onBack={() => handleNavigate('main')}
          />
        )}

        {activePage === 'videos' && (
          <VideoLibrarySection
            onBack={() => handleNavigate('main')}
          />
        )}
      </main>

      {/* Footer */}
      {vis.contactFooter !== false && (
        <Footer onNavigate={(p) => handleNavigate(p)} />
      )}

      {/* Modals & Tools */}
      {vis.gpaCalculator !== false && (
        <GpaCalculatorModal isOpen={isGpaOpen} onClose={() => setIsGpaOpen(false)} />
      )}
      {vis.pomodoroTimer !== false && (
        <PomodoroTimerModal isOpen={isPomodoroOpen} onClose={() => setIsPomodoroOpen(false)} />
      )}

      {/* User Auth & Account Profile Modals */}
      <UserAuthModal />
      <UserProfileModal />
      
      {/* PWA Install Prompt */}
      {vis.pwaInstallPrompt !== false && (
        <PwaInstallPrompt />
      )}

    </div>
  );
}

