import React, { useState, useEffect } from 'react';
import {
  User,
  Sliders,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Sun,
  Moon,
  Bell,
  Volume2,
  CalendarDays,
  List,
  Timer,
  Bookmark,
  ShieldCheck,
  Loader2,
  CalendarCheck,
  Calculator,
  Save,
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { useAuth } from '../../contexts/AuthContext';
import { UserPreferences } from '../../types';

const ACADEMIC_YEARS = [
  'السنة الأولى',
  'السنة الثانية',
  'السنة الثالثة',
  'السنة الرابعة',
  'السنة الخامسة',
  'السنة السادسة / الامتياز',
  'دراسات عليا',
];

const SUBJECT_CHOICES = [
  { id: 'anatomy', label: 'التشريح (Anatomy)' },
  { id: 'physiology', label: 'وظائف الأعضاء (Physiology)' },
  { id: 'biochemistry', label: 'الكيمياء الحيوية (Biochemistry)' },
  { id: 'microbiology', label: 'الأحياء الدقيقة (Microbiology)' },
  { id: 'pathology', label: 'علم الأمراض (Pathology)' },
  { id: 'pharmacology', label: 'علم الأدوية (Pharmacology)' },
];

export const UserProfileModal: React.FC = () => {
  const {
    isProfileModalOpen,
    closeProfileModal,
    userProfile,
    preferences,
    lectures,
    gpaCourses,
    personalResources,
    updateProfile,
    updatePreferences,
    logout,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<'profile' | 'preferences'>('profile');

  // Profile form state
  const [displayName, setDisplayName] = useState('');
  const [college, setCollege] = useState('');
  const [academicYear, setAcademicYear] = useState('');

  // Preferences form state
  const [draftPrefs, setDraftPrefs] = useState<UserPreferences>(preferences);

  const [saving, setSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);
  const [saveErrorMsg, setSaveErrorMsg] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (isProfileModalOpen && userProfile) {
      setDisplayName(userProfile.displayName || '');
      setCollege(userProfile.college || '');
      setAcademicYear(userProfile.academicYear || '');
      setDraftPrefs(preferences);
      setSaveSuccessMsg(null);
      setSaveErrorMsg(null);
    }
  }, [isProfileModalOpen, userProfile, preferences]);

  if (!userProfile) return null;

  const initials = (userProfile.displayName || 'ط')
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim()) return;
    setSaving(true);
    setSaveSuccessMsg(null);
    setSaveErrorMsg(null);
    try {
      await updateProfile({
        displayName: displayName.trim(),
        college: college.trim(),
        academicYear: academicYear.trim(),
      });
      setSaveSuccessMsg('تم حفظ بيانات الملف الشخصي في حسابك بنجاح.');
    } catch {
      setSaveErrorMsg('تعذر حفظ البيانات السحابية. يرجى التحقق من الاتصال والمحاولة مرة أخرى.');
    } finally {
      setSaving(false);
    }
  };

  const handleSavePreferences = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveSuccessMsg(null);
    setSaveErrorMsg(null);
    try {
      await updatePreferences(draftPrefs);
      setSaveSuccessMsg('تم حفظ تفضيلاتك وإعداداتك في السحابة بنجاح.');
    } catch {
      setSaveErrorMsg('تعذر حفظ التفضيلات السحابية. يرجى المحاولة مرة أخرى.');
    } finally {
      setSaving(false);
    }
  };

  const toggleFavoriteSubject = (subjectId: string) => {
    setDraftPrefs((prev) => {
      const exists = prev.favoriteSubjects.includes(subjectId);
      const nextFavs = exists
        ? prev.favoriteSubjects.filter((id) => id !== subjectId)
        : [...prev.favoriteSubjects, subjectId].slice(0, 20);
      return { ...prev, favoriteSubjects: nextFavs };
    });
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    setSaveErrorMsg(null);
    try {
      await logout();
    } catch {
      setSaveErrorMsg('حدث خطأ أثناء تسجيل الخروج. حاول مرة أخرى.');
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <Modal
      isOpen={isProfileModalOpen}
      onClose={closeProfileModal}
      maxWidth="xl"
      title="الحساب الشخصي والتفضيلات"
      subtitle={userProfile.email}
      icon={<User className="w-5 h-5 text-[#16958E]" />}
    >
      <div className="space-y-5 text-right">
        {/* Account Header Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-l from-[#071A3D] to-[#16958E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {userProfile.photoURL ? (
              <img
                src={userProfile.photoURL}
                alt={userProfile.displayName}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-2xl object-cover border-2 border-[#BCEBFF]/60 flex-shrink-0"
              />
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-[#BCEBFF]/50 flex items-center justify-center font-extrabold text-lg text-[#BCEBFF] flex-shrink-0">
                {initials}
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-extrabold font-tajawal text-base truncate">
                  {userProfile.displayName}
                </h4>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-100 border border-emerald-300/30 text-[10px] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  متزامن سحابياً
                </span>
              </div>
              <p className="text-xs text-[#BCEBFF]/90 truncate mt-0.5">{userProfile.email}</p>
              {(userProfile.college || userProfile.academicYear) && (
                <p className="text-[11px] text-white/80 mt-0.5">
                  {[userProfile.college, userProfile.academicYear].filter(Boolean).join(' • ')}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="px-4 py-2 rounded-xl bg-rose-500/90 hover:bg-rose-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer flex-shrink-0 disabled:opacity-60"
          >
            {loggingOut ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogOut className="w-4 h-4" />}
            <span>تسجيل الخروج</span>
          </button>
        </div>

        {/* Admin Dashboard Quick Access (strictly visible to authorized owner email only) */}
        {userProfile.email?.toLowerCase() === 'mohmabdo1995@gmail.com' && (
          <button
            type="button"
            onClick={() => {
              closeProfileModal();
              window.location.hash = '#admin';
            }}
            className="w-full p-3.5 rounded-2xl bg-[#071A3D] hover:bg-[#0E2F5A] text-white border border-[#16958E]/50 flex items-center justify-between gap-3 shadow-md transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-sm font-bold font-tajawal">
              <ShieldCheck className="w-5 h-5 text-[#16958E]" />
              <span>الدخول إلى لوحة تحكم الأدمن (إدارة الموقع والأخبار)</span>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#16958E] text-white text-[11px] font-bold">
              فتح اللوحة
            </span>
          </button>
        )}

        {/* Synced Account Stats */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-3 rounded-2xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/50 dark:border-[#16958E]/25 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#16958E]/15 text-[#16958E] flex items-center justify-center flex-shrink-0">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold truncate">المحاضرات</p>
              <p className="text-base font-extrabold font-mono text-[#071A3D] dark:text-white">
                {lectures.length}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/50 dark:border-[#16958E]/25 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#071A3D]/10 dark:bg-[#16958E]/20 text-[#071A3D] dark:text-[#BCEBFF] flex items-center justify-center flex-shrink-0">
              <Calculator className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold truncate">مقررات GPA</p>
              <p className="text-base font-extrabold font-mono text-[#071A3D] dark:text-white">
                {gpaCourses.length}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/50 dark:border-[#16958E]/25 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#16958E]/15 text-[#16958E] flex items-center justify-center flex-shrink-0">
              <Bookmark className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold truncate">مصادري</p>
              <p className="text-base font-extrabold font-mono text-[#071A3D] dark:text-white">
                {personalResources.length + (preferences.savedResourceIds?.length || 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl bg-[#BCEBFF]/20 dark:bg-white/5 border border-[#BCEBFF]/40 dark:border-[#16958E]/20">
          <button
            type="button"
            onClick={() => {
              setSaveSuccessMsg(null);
              setSaveErrorMsg(null);
              setActiveTab('profile');
            }}
            className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'bg-[#071A3D] text-white dark:bg-[#16958E] shadow-sm'
                : 'text-[#071A3D] dark:text-slate-300'
            }`}
          >
            <User className="w-4 h-4" />
            <span>البيانات الشخصية</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSaveSuccessMsg(null);
              setSaveErrorMsg(null);
              setActiveTab('preferences');
            }}
            className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'preferences'
                ? 'bg-[#071A3D] text-white dark:bg-[#16958E] shadow-sm'
                : 'text-[#071A3D] dark:text-slate-300'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>التفضيلات والإعدادات</span>
          </button>
        </div>

        {saveSuccessMsg && (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-200 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        {saveErrorMsg && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-200 text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{saveErrorMsg}</span>
          </div>
        )}

        {/* Tab 1: Profile Form */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1.5">
                الاسم الكامل
              </label>
              <input
                type="text"
                required
                maxLength={120}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
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
                  placeholder="كلية الطب والعلوم الصحية"
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
                  <option value="">اختر السنة الدراسية</option>
                  {ACADEMIC_YEARS.map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                <span>حفظ بيانات الملف</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Preferences Form */}
        {activeTab === 'preferences' && (
          <form onSubmit={handleSavePreferences} className="space-y-4">
            {/* Theme Preference */}
            <div>
              <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-2">
                مظهر المنصة
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setDraftPrefs((p) => ({ ...p, theme: 'light' }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    draftPrefs.theme === 'light'
                      ? 'bg-[#071A3D] text-white border-[#071A3D] dark:bg-[#16958E] dark:border-[#16958E]'
                      : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  <span>المظهر الفاتح</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDraftPrefs((p) => ({ ...p, theme: 'dark' }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    draftPrefs.theme === 'dark'
                      ? 'bg-[#071A3D] text-white border-[#071A3D] dark:bg-[#16958E] dark:border-[#16958E]'
                      : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10'
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  <span>المظهر الداكن</span>
                </button>
              </div>
            </div>

            {/* Default Schedule View */}
            <div>
              <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-2">
                العرض الافتراضي لجدول المحاضرات
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setDraftPrefs((p) => ({ ...p, defaultScheduleView: 'calendar' }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    draftPrefs.defaultScheduleView === 'calendar'
                      ? 'bg-[#071A3D] text-white border-[#071A3D] dark:bg-[#16958E] dark:border-[#16958E]'
                      : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10'
                  }`}
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>التقويم الشهري</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDraftPrefs((p) => ({ ...p, defaultScheduleView: 'list' }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    draftPrefs.defaultScheduleView === 'list'
                      ? 'bg-[#071A3D] text-white border-[#071A3D] dark:bg-[#16958E] dark:border-[#16958E]'
                      : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10'
                  }`}
                >
                  <List className="w-4 h-4" />
                  <span>قائمة البطاقات</span>
                </button>
              </div>
            </div>

            {/* Notification & Sound Switches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="flex items-center justify-between p-3 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/40 dark:border-[#16958E]/20 cursor-pointer">
                <span className="flex items-center gap-2 text-xs font-bold text-[#071A3D] dark:text-white">
                  <Bell className="w-4 h-4 text-[#16958E]" />
                  تنبيهات المحاضرات
                </span>
                <input
                  type="checkbox"
                  checked={draftPrefs.notificationsEnabled}
                  onChange={(e) =>
                    setDraftPrefs((p) => ({ ...p, notificationsEnabled: e.target.checked }))
                  }
                  className="w-4 h-4 accent-[#16958E] rounded cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/40 dark:border-[#16958E]/20 cursor-pointer">
                <span className="flex items-center gap-2 text-xs font-bold text-[#071A3D] dark:text-white">
                  <Volume2 className="w-4 h-4 text-[#16958E]" />
                  الأصوات والتنبيه الصوتي
                </span>
                <input
                  type="checkbox"
                  checked={draftPrefs.soundEnabled}
                  onChange={(e) =>
                    setDraftPrefs((p) => ({ ...p, soundEnabled: e.target.checked }))
                  }
                  className="w-4 h-4 accent-[#16958E] rounded cursor-pointer"
                />
              </label>
            </div>

            {/* Pomodoro Durations */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1.5">
                  <Timer className="w-3.5 h-3.5 text-[#16958E]" />
                  <span>جلسة التركيز (دقيقة)</span>
                </label>
                <input
                  type="number"
                  min={1}
                  max={120}
                  value={draftPrefs.pomodoroWorkMinutes}
                  onChange={(e) =>
                    setDraftPrefs((p) => ({
                      ...p,
                      pomodoroWorkMinutes: Math.min(120, Math.max(1, Number(e.target.value) || 25)),
                    }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs font-mono text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1.5">
                  <Timer className="w-3.5 h-3.5 text-[#16958E]" />
                  <span>مدة الاستراحة (دقيقة)</span>
                </label>
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={draftPrefs.pomodoroBreakMinutes}
                  onChange={(e) =>
                    setDraftPrefs((p) => ({
                      ...p,
                      pomodoroBreakMinutes: Math.min(60, Math.max(1, Number(e.target.value) || 5)),
                    }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs font-mono text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
                />
              </div>
            </div>

            {/* Favorite Subjects */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-2">
                <Bookmark className="w-3.5 h-3.5 text-[#16958E]" />
                <span>المواد المفضلة للوصول السريع</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {SUBJECT_CHOICES.map((subj) => {
                  const selected = draftPrefs.favoriteSubjects.includes(subj.id);
                  return (
                    <button
                      key={subj.id}
                      type="button"
                      onClick={() => toggleFavoriteSubject(subj.id)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                        selected
                          ? 'bg-[#16958E] text-white border-[#16958E] shadow-xs'
                          : 'bg-[#BCEBFF]/15 dark:bg-white/5 text-[#071A3D] dark:text-slate-300 border-[#BCEBFF]/50 dark:border-white/10 hover:border-[#16958E]'
                      }`}
                    >
                      {subj.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                <span>حفظ التفضيلات</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
};
