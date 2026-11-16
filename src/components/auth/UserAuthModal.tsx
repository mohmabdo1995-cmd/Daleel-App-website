import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  Sliders,
  Calculator,
  CheckCircle2,
  AlertCircle,
  Loader2,
  GraduationCap,
  UserCheck,
  Bell,
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { useAuth, AuthModalMode } from '../../contexts/AuthContext';

const ACADEMIC_YEARS = [
  'السنة الأولى',
  'السنة الثانية',
  'السنة الثالثة',
  'السنة الرابعة',
  'السنة الخامسة',
  'السنة السادسة / الامتياز',
  'دراسات عليا',
];

export const UserAuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    authModalMode,
    isNewSignupOnboarding,
    authSubmitting,
    authError,
    userProfile,
    preferences,
    closeAuthModal,
    clearAuthError,
    completeOnboarding,
    signInWithGoogle,
    updateProfile,
    updatePreferences,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<AuthModalMode>(authModalMode);
  const [displayName, setDisplayName] = useState('');
  const [college, setCollege] = useState('كلية الطب والعلوم الصحية');
  const [academicYear, setAcademicYear] = useState('السنة الأولى');
  const [defaultView, setDefaultView] = useState<'calendar' | 'list'>('calendar');
  const [notifEnabled, setNotifEnabled] = useState(true);
  const [savingOnboarding, setSavingOnboarding] = useState(false);

  useEffect(() => {
    setActiveTab(authModalMode);
  }, [authModalMode, isAuthModalOpen]);

  useEffect(() => {
    if (userProfile) {
      setDisplayName(userProfile.displayName || '');
      setCollege(userProfile.college || 'كلية الطب والعلوم الصحية');
      setAcademicYear(userProfile.academicYear || 'السنة الأولى');
      setDefaultView(preferences.defaultScheduleView || 'calendar');
      setNotifEnabled(preferences.notificationsEnabled);
    }
  }, [userProfile, preferences.defaultScheduleView, preferences.notificationsEnabled]);

  const handleTabSwitch = (tab: AuthModalMode) => {
    clearAuthError();
    setActiveTab(tab);
  };

  const handleGoogleAuth = async () => {
    await signInWithGoogle();
  };

  const handleSaveOnboarding = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingOnboarding(true);
    try {
      await updateProfile({
        displayName: displayName.trim() || userProfile?.displayName,
        college: college.trim(),
        academicYear,
      });
      await updatePreferences({
        defaultScheduleView: defaultView,
        notificationsEnabled: notifEnabled,
      });
      completeOnboarding();
    } finally {
      setSavingOnboarding(false);
    }
  };

  return (
    <Modal
      isOpen={isAuthModalOpen}
      onClose={closeAuthModal}
      maxWidth="md"
      title={
        isNewSignupOnboarding
          ? 'مرحباً بك في دليلك الجامعي'
          : activeTab === 'signup'
          ? 'إنشاء حساب طالب جديد'
          : 'تسجيل الدخول إلى حسابك'
      }
      subtitle={
        isNewSignupOnboarding
          ? 'خصّص ملفك الأكاديمي وتفضيلاتك للبدء'
          : 'مزامنة جدولك الدراسي ومعدلك وتفضيلاتك بأمان'
      }
      icon={
        isNewSignupOnboarding ? (
          <UserCheck className="w-5 h-5 text-[#16958E]" />
        ) : (
          <ShieldCheck className="w-5 h-5 text-[#16958E]" />
        )
      }
    >
      {isNewSignupOnboarding ? (
        <form onSubmit={handleSaveOnboarding} className="space-y-4 text-right">
          <div className="p-4 rounded-2xl bg-[#16958E]/10 border border-[#16958E]/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#16958E] flex-shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <p className="font-bold text-[#071A3D] dark:text-white mb-0.5">
                تم إنشاء حسابك بنجاح عبر Google!
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                يمكنك الآن تأكيد بياناتك الأكاديمية واختيار العرض المفضل للجدول الدراسي.
              </p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1.5">
              الاسم الظاهر في المنصة
            </label>
            <input
              type="text"
              required
              maxLength={120}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="الاسم الكامل"
              className="w-full px-4 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-sm text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1.5">
                الكلية / التخصص
              </label>
              <input
                type="text"
                maxLength={150}
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="كلية الطب"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1.5">
                السنة الدراسية
              </label>
              <select
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-[#0a224d] border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
              >
                {ACADEMIC_YEARS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1.5">
              طريقة العرض الافتراضية للجدول الدراسي
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setDefaultView('calendar')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  defaultView === 'calendar'
                    ? 'bg-[#071A3D] text-white border-[#071A3D] dark:bg-[#16958E] dark:border-[#16958E]'
                    : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10'
                }`}
              >
                التقويم الشهري
              </button>
              <button
                type="button"
                onClick={() => setDefaultView('list')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  defaultView === 'list'
                    ? 'bg-[#071A3D] text-white border-[#071A3D] dark:bg-[#16958E] dark:border-[#16958E]'
                    : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10'
                }`}
              >
                قائمة البطاقات
              </button>
            </div>
          </div>

          <label className="flex items-center justify-between p-3 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/40 dark:border-[#16958E]/20 cursor-pointer">
            <span className="flex items-center gap-2 text-xs font-bold text-[#071A3D] dark:text-white">
              <Bell className="w-4 h-4 text-[#16958E]" />
              تفعيل تنبيهات المحاضرات التلقائية
            </span>
            <input
              type="checkbox"
              checked={notifEnabled}
              onChange={(e) => setNotifEnabled(e.target.checked)}
              className="w-4 h-4 accent-[#16958E] rounded cursor-pointer"
            />
          </label>

          <div className="flex items-center justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={completeOnboarding}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-white text-xs font-bold transition-colors cursor-pointer"
            >
              تخطي الآن
            </button>
            <button
              type="submit"
              disabled={savingOnboarding}
              className="px-6 py-2.5 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-60"
            >
              {savingOnboarding && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>حفظ وبدء الاستخدام</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-5 text-right">
          {/* Login / Sign Up Mode Switcher */}
          <div className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl bg-[#BCEBFF]/20 dark:bg-white/5 border border-[#BCEBFF]/50 dark:border-[#16958E]/20">
            <button
              type="button"
              onClick={() => handleTabSwitch('login')}
              className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-[#071A3D] text-white shadow-sm dark:bg-[#16958E]'
                  : 'text-[#071A3D] dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
              }`}
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              onClick={() => handleTabSwitch('signup')}
              className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'signup'
                  ? 'bg-[#071A3D] text-white shadow-sm dark:bg-[#16958E]'
                  : 'text-[#071A3D] dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
              }`}
            >
              إنشاء حساب جديد
            </button>
          </div>

          {/* Hero Explanation */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#071A3D] to-[#16958E] text-white relative overflow-hidden">
            <div className="flex items-center gap-2 text-[#BCEBFF] text-[11px] font-bold mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>حساب طالب موحد وآمن</span>
            </div>
            <h4 className="text-base font-extrabold font-tajawal mb-1">
              {activeTab === 'signup'
                ? 'ابدأ بمزامنة جدولك الدراسي ومعدلك الآن'
                : 'مرحباً بعودتك إلى دليلك الجامعي'}
            </h4>
            <p className="text-xs text-[#BCEBFF]/90 leading-relaxed">
              {activeTab === 'signup'
                ? 'أنشئ حسابك بنقرة واحدة عبر Google لحفظ جدول محاضراتك، مقررات المعدل التراكمي، وتفضيلات التركيز في السحابة.'
                : 'سجّل الدخول بحساب Google لاستعادة جدولك الدراسي وموادك وتفضيلاتك الشخصية من أي جهاز.'}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/40 dark:border-[#16958E]/20 flex sm:flex-col items-center sm:items-start gap-2.5 sm:gap-1.5">
              <CalendarCheck className="w-4 h-4 text-[#16958E] flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-[#071A3D] dark:text-white">جدول المحاضرات</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">حفظ ومزامنة فورية</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/40 dark:border-[#16958E]/20 flex sm:flex-col items-center sm:items-start gap-2.5 sm:gap-1.5">
              <Calculator className="w-4 h-4 text-[#16958E] flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-[#071A3D] dark:text-white">مواد المعدل GPA</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">مرتبطة بحسابك دائماً</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/40 dark:border-[#16958E]/20 flex sm:flex-col items-center sm:items-start gap-2.5 sm:gap-1.5">
              <Sliders className="w-4 h-4 text-[#16958E] flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-[#071A3D] dark:text-white">التفضيلات الخاصة</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">المظهر والتنبيهات وبومودورو</p>
              </div>
            </div>
          </div>

          {/* Error Feedback */}
          {authError && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={authSubmitting}
            className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-slate-50 dark:bg-white/10 dark:hover:bg-white/15 border-2 border-[#071A3D]/15 dark:border-[#16958E]/40 text-[#071A3D] dark:text-white font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60 active:scale-[0.99]"
          >
            {authSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin text-[#16958E]" />
            ) : (
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
                />
              </svg>
            )}
            <span>
              {authSubmitting
                ? 'جاري الاتصال بحساب Google...'
                : activeTab === 'signup'
                ? 'إنشاء حساب عبر Google'
                : 'المتابعة باستخدام Google'}
            </span>
          </button>

          <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#16958E]" />
            <span>بياناتك معزولة ومحمية بالكامل ولا يطلع عليها أي مستخدم آخر.</span>
          </p>
        </div>
      )}
    </Modal>
  );
};
