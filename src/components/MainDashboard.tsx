import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ActivePage, Lecture, Subject } from '../types';
import { GraduationCap, BookOpen, CalendarCheck, ArrowLeft, Send, Sparkles, Clock, Calendar, Smartphone, Download, FileText, Video, ShieldCheck, LogIn, UserPlus, Sliders, LogOut, Star, Stethoscope, Users, ChevronDown, Check, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { SUBJECTS_DATA } from '../data/academicContent';
import { FirebaseService } from '../services/firebase';

interface MainDashboardProps {
  onNavigate: (page: ActivePage) => void;
  lectureCount: number;
  upcomingCount: number;
  lectures?: Lecture[];
}

export const MainDashboard: React.FC<MainDashboardProps> = ({
  onNavigate,
  lectureCount,
  upcomingCount,
  lectures = []
}) => {
  const { isAuthenticated, userProfile, preferences, updatePreferences, openAuthModal, openProfileModal, logout } = useAuth();
  const favoriteSubjects = preferences.favoriteSubjects || [];
  const [availableSubjects, setAvailableSubjects] = useState<Subject[]>(SUBJECTS_DATA);
  const [isSubjectsMenuOpen, setIsSubjectsMenuOpen] = useState(false);
  const subjectsPickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsubscribe = FirebaseService.subscribeSubjects((data) => {
      const active = (data || []).filter((s: Subject & { visible?: boolean }) => s.visible !== false);
      setAvailableSubjects(active.length > 0 ? active : SUBJECTS_DATA);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isSubjectsMenuOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (subjectsPickerRef.current && !subjectsPickerRef.current.contains(e.target as Node)) {
        setIsSubjectsMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSubjectsMenuOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSubjectsMenuOpen]);

  const enrolledSubjectIds = preferences.enrolledSubjects || [];
  const validSubjectIds = new Set(availableSubjects.map((s) => s.id));
  const selectedEnrolledSubjects = enrolledSubjectIds.filter((id) => validSubjectIds.has(id));
  const selectedSubjectsCount = selectedEnrolledSubjects.length;

  const formatSubjectsCountLabel = (count: number): string => {
    if (count === 0) return '0 مواد';
    if (count === 1) return '1 مادة';
    if (count === 2) return '2 مادتان';
    if (count <= 10) return `${count} مواد`;
    return `${count} مادة`;
  };

  const toggleEnrolledSubject = (subjectId: string) => {
    const exists = selectedEnrolledSubjects.includes(subjectId);
    const next = exists
      ? selectedEnrolledSubjects.filter((id) => id !== subjectId)
      : [...selectedEnrolledSubjects, subjectId].slice(0, 50);
    void updatePreferences({ enrolledSubjects: next });
  };

  const currentDateFormatted = new Date().toLocaleDateString('ar-EG', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      
      {/* Top Welcome Title */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-right"
      >
        <div>
          <div className="flex items-center gap-2 text-[#16958E] font-bold text-xs mb-1">
            <Sparkles className="w-4 h-4 text-[#16958E]" />
            <span>تصميم شبكي تفاعلي • Bento Grid</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-tajawal text-[#071A3D] dark:text-white tracking-tight">
            لوحة تحكم دليلك الجامعي 🎓
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            تصفح الخدمات والأقسام الأكاديمية والمحاضرات بأسلوب منظم وسريع
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {isAuthenticated && userProfile ? (
            <>
              <button
                onClick={openProfileModal}
                className="px-4 py-2.5 bg-[#16958E] hover:bg-[#127d77] text-white rounded-xl font-bold text-xs shadow-md shadow-[#16958E]/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-[#BCEBFF]" />
                <span>تفضيلاتي وحسابي</span>
              </button>
              <button
                onClick={() => logout()}
                className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/50 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>خروج</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => openAuthModal('login')}
                className="px-4 py-2.5 bg-[#071A3D] hover:bg-[#16958E] text-white rounded-xl font-bold text-xs shadow-md shadow-[#071A3D]/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-[#BCEBFF]" />
                <span>تسجيل الدخول</span>
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="px-4 py-2.5 bg-[#BCEBFF]/40 hover:bg-[#BCEBFF]/70 text-[#071A3D] dark:text-white dark:bg-[#16958E]/20 border border-[#16958E]/30 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-[#16958E] dark:text-[#BCEBFF]" />
                <span>حساب جديد</span>
              </button>
            </>
          )}
          <a
            href="http://t.me/Daleelak_AlJamaei_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#071A3D] hover:bg-[#16958E] text-white rounded-xl font-bold text-xs shadow-md shadow-[#071A3D]/20 transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4 rotate-180 text-[#BCEBFF]" />
            <span>بوت التلجرام الرسمى</span>
          </a>
        </div>
      </motion.div>

      {/* Account Cloud Sync / Guest Banner */}
      {isAuthenticated && userProfile ? (
        <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-extrabold text-[#071A3D] dark:text-white">
                حسابك متصل ومتزامن سحابياً ({userProfile.email})
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                يتم حفظ جدول المحاضرات ومقررات المعدل التراكمي وتفضيلاتك الشخصية تلقائياً في حسابك.
              </p>
            </div>
          </div>
          <button
            onClick={openProfileModal}
            className="px-4 py-2 rounded-xl bg-white dark:bg-white/10 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 text-xs font-bold hover:bg-emerald-100/60 transition-colors cursor-pointer self-start sm:self-center"
          >
            تعديل التفضيلات
          </button>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-[#BCEBFF]/25 dark:bg-[#16958E]/15 border border-[#16958E]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#071A3D] text-[#BCEBFF] flex items-center justify-center flex-shrink-0">
              <LogIn className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-extrabold text-[#071A3D] dark:text-white">
                أنت تستخدم المنصة في وضع الضيف المحلي
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                سجّل الدخول أو أنشئ حساباً لحفظ جدولك الدراسي ومعدلك وتفضيلاتك والوصول إليها من أي جهاز.
              </p>
            </div>
          </div>
          <button
            onClick={() => openAuthModal('signup')}
            className="px-4 py-2 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-sm transition-colors cursor-pointer self-start sm:self-center flex-shrink-0"
          >
            حفظ بياناتي بحساب
          </button>
        </div>
      )}

      {/* Quick Access Bar for Articles, Videos & Medical Terminology Index */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => onNavigate('articles')}
          className="p-5 rounded-2xl bg-gradient-to-r from-[#071A3D] to-[#16958E] text-white shadow-md cursor-pointer flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-[#BCEBFF] flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold font-tajawal text-base">المقالات والأبحاث الأكاديمية</h4>
              <p className="text-xs text-[#BCEBFF]">استعرض أحدث المقالات والإرشادات الطبية والتعليمية</p>
            </div>
          </div>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => onNavigate('videos')}
          className="p-5 rounded-2xl bg-gradient-to-r from-[#16958E] to-[#071A3D] text-white shadow-md cursor-pointer flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-[#BCEBFF] flex-shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold font-tajawal text-base">المكتبة المرئية والفيديوهات</h4>
              <p className="text-xs text-[#BCEBFF]">شروحات ومحاضرات فيديو مسجلة مع مشغل تفاعلي</p>
            </div>
          </div>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => onNavigate('dictionary')}
          className="p-5 rounded-2xl bg-gradient-to-r from-[#071A3D] via-[#0e2d63] to-[#16958E] text-white shadow-md cursor-pointer flex items-center justify-between group border border-[#BCEBFF]/30"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-[#BCEBFF] flex-shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold font-tajawal text-base">فهرس المصطلحات الطبية</h4>
              <p className="text-xs text-[#BCEBFF]">بحث ذكي ثنائي اللغة، نطق صوتي، ومراجع موثقة</p>
            </div>
          </div>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
        </motion.div>
      </div>

      {/* Bento Grid Layout Main Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Bento Box 1: Hero & Stats Banner (Col 8) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-8 bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 rounded-[2rem] p-6 sm:p-8 shadow-sm relative flex flex-col justify-between z-20"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#BCEBFF]/20 dark:bg-[#16958E]/10 rounded-full -translate-x-20 -translate-y-20 opacity-60"></div>
          </div>
          
          <div className="relative z-10">
            <span className="px-4 py-1.5 bg-[#BCEBFF]/40 dark:bg-[#16958E]/20 text-[#071A3D] dark:text-[#BCEBFF] rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block border border-[#16958E]/30">
              {isAuthenticated && userProfile ? `مرحباً بك، ${userProfile.displayName}` : 'مرحباً بك، طالب الكلية'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#071A3D] dark:text-white leading-tight mb-3 font-tajawal">
              ابدأ رحلتك الأكاديمية <br />
              <span className="text-[#16958E] dark:text-[#BCEBFF]">بذكاء وتنظيم فاخر</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-6">
              منصة شاملة لمتابعة الجداول والكتب والملخصات وتنبيهات المحاضرات الفورية مع ربط التلجرام الحقيقي.
            </p>
          </div>

          {/* Sub-Stats Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 relative z-20 pt-4 border-t border-[#BCEBFF]/40 dark:border-[#16958E]/30">
            <div className="bg-[#BCEBFF]/20 dark:bg-[#071A3D]/60 p-3.5 sm:p-4 rounded-2xl border border-[#BCEBFF]/50 dark:border-[#16958E]/30">
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold mb-1">المحاضرات الكلية</p>
              <p className="text-xl sm:text-2xl font-extrabold text-[#071A3D] dark:text-white font-montserrat tabular-nums">{lectureCount}</p>
            </div>
            <div className="bg-[#BCEBFF]/20 dark:bg-[#071A3D]/60 p-3.5 sm:p-4 rounded-2xl border border-[#BCEBFF]/50 dark:border-[#16958E]/30">
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold mb-1">المحاضرات القادمة</p>
              <p className="text-xl sm:text-2xl font-extrabold text-[#16958E] dark:text-[#BCEBFF] font-montserrat tabular-nums">{upcomingCount}</p>
            </div>
            <div ref={subjectsPickerRef} className="relative">
              <button
                type="button"
                onClick={() => setIsSubjectsMenuOpen((prev) => !prev)}
                aria-expanded={isSubjectsMenuOpen}
                aria-haspopup="dialog"
                className={`w-full h-full text-right bg-[#BCEBFF]/20 hover:bg-[#BCEBFF]/35 dark:bg-[#071A3D]/60 dark:hover:bg-[#16958E]/20 p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSubjectsMenuOpen
                    ? 'border-[#16958E] ring-2 ring-[#16958E]/25'
                    : 'border-[#BCEBFF]/50 dark:border-[#16958E]/30'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold">المواد المقررة</p>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#16958E] dark:text-[#BCEBFF] transition-transform flex-shrink-0 ${
                      isSubjectsMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#16958E] dark:text-[#BCEBFF] font-montserrat tabular-nums">
                  {formatSubjectsCountLabel(selectedSubjectsCount)}
                </p>
              </button>

              {isSubjectsMenuOpen && (
                <div
                  role="dialog"
                  aria-label="اختيار المواد المقررة"
                  className="absolute left-0 top-full mt-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] z-50 rounded-2xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF] dark:border-[#16958E]/50 shadow-2xl p-3 text-right"
                >
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-2 border-b border-slate-100 dark:border-white/10">
                    <div>
                      <p className="text-xs font-extrabold text-[#071A3D] dark:text-white font-tajawal">
                        اختر المواد المقررة عليك
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        {selectedSubjectsCount} من {availableSubjects.length} محددة
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSubjectsMenuOpen(false)}
                      aria-label="إغلاق القائمة"
                      className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2 text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() =>
                        void updatePreferences({
                          enrolledSubjects: availableSubjects.map((s) => s.id).slice(0, 50),
                        })
                      }
                      className="text-[#16958E] dark:text-[#BCEBFF] hover:underline cursor-pointer"
                    >
                      تحديد الكل
                    </button>
                    {selectedSubjectsCount > 0 && (
                      <button
                        type="button"
                        onClick={() => void updatePreferences({ enrolledSubjects: [] })}
                        className="text-rose-500 hover:underline cursor-pointer"
                      >
                        مسح التحديد
                      </button>
                    )}
                  </div>

                  <div className="max-h-56 overflow-y-auto space-y-1.5 pl-0.5">
                    {availableSubjects.map((subj) => {
                      const isSelected = selectedEnrolledSubjects.includes(subj.id);
                      return (
                        <button
                          key={subj.id}
                          type="button"
                          onClick={() => toggleEnrolledSubject(subj.id)}
                          className={`w-full flex items-center justify-between gap-2.5 p-2 rounded-xl border text-right transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#16958E]/10 dark:bg-[#16958E]/25 border-[#16958E]/50 text-[#071A3D] dark:text-white'
                              : 'bg-slate-50/70 hover:bg-[#BCEBFF]/20 dark:bg-white/5 dark:hover:bg-white/10 border-slate-200/70 dark:border-white/10 text-slate-700 dark:text-slate-200'
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold font-tajawal truncate">{subj.nameAr}</p>
                            {subj.nameEn && (
                              <p className="text-[10px] text-slate-400 font-mono truncate">
                                {subj.nameEn}
                              </p>
                            )}
                          </div>
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 border transition-colors ${
                              isSelected
                                ? 'bg-[#16958E] border-[#16958E] text-white'
                                : 'bg-white dark:bg-[#071A3D] border-slate-300 dark:border-slate-600'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.8]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bento Box 2: Schedule Card (Col 4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 text-slate-800 dark:text-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#BCEBFF]/40 dark:border-[#16958E]/30">
              <h3 className="text-[#071A3D] dark:text-white font-bold text-base font-tajawal flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#16958E]" />
                <span>الجدول الدراسي</span>
              </h3>
              <span className="text-slate-400 text-xs font-montserrat">{currentDateFormatted}</span>
            </div>

            {lectures.length === 0 ? (
              <div className="my-6 py-6 text-center flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#BCEBFF]/40 text-[#16958E] flex items-center justify-center mb-1">
                  <Calendar className="w-6 h-6" />
                </div>
                <p className="text-[#071A3D] dark:text-white font-bold text-sm font-tajawal">لا توجد محاضرات حالياً</p>
                <p className="text-slate-400 text-xs max-w-[220px]">
                  لم يتم إضافة أي محاضرات في جدول التذكير بعد
                </p>
              </div>
            ) : (
              <div className="space-y-3 mb-6 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                {lectures.slice(0, 4).map((lec) => {
                  const todayStr = new Date().toISOString().split('T')[0];
                  return (
                    <div key={lec.id} className="flex gap-3 items-center p-2.5 rounded-xl bg-[#BCEBFF]/20 dark:bg-[#071A3D]/40 border border-[#BCEBFF]/50 dark:border-[#16958E]/30">
                      <div className="text-[#16958E] dark:text-[#BCEBFF] font-bold text-[11px] font-mono w-14 flex-shrink-0 text-center bg-[#BCEBFF]/40 py-1 rounded-lg border border-[#16958E]/30">
                        {lec.time}
                      </div>
                      <div className="flex-1 min-w-0 text-right">
                        <p className={`text-xs font-bold font-tajawal truncate ${lec.completed ? 'line-through text-slate-400' : 'text-[#071A3D] dark:text-white'}`}>
                          {lec.title}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] truncate mt-0.5">
                          {lec.subject} {lec.hall ? `• ${lec.hall}` : ''} {lec.professor ? `• ${lec.professor}` : ''}
                        </p>
                      </div>
                      {lec.date === todayStr && (
                        <span className="px-2 py-0.5 rounded-full bg-[#16958E] text-white font-bold text-[9px] flex-shrink-0">
                          اليوم
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('schedule')}
            className="w-full py-3 bg-[#071A3D] hover:bg-[#16958E] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            <span>عرض وإدارة الجدول الكامل</span>
            <ArrowLeft className="w-4 h-4 text-[#BCEBFF]" />
          </button>
        </motion.div>

      </div>

      {/* Core 3 Main Section Bento Cards Grid - STRICT REQUIREMENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: معلومات عن الكلية والمواد */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -6, scale: 1.01 }}
          onClick={() => onNavigate('college')}
          className="group cursor-pointer bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 rounded-[2rem] p-7 shadow-sm hover:border-[#16958E] transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#071A3D] text-[#BCEBFF] flex items-center justify-center shadow-lg shadow-[#071A3D]/25 group-hover:scale-110 transition-transform mb-6">
              <GraduationCap className="w-7 h-7 stroke-[2.2]" />
            </div>

            <span className="text-[11px] font-bold text-[#16958E] dark:text-[#BCEBFF] font-montserrat uppercase tracking-wider block mb-1">
              القسم الأول
            </span>

            <h3 className="text-xl font-bold font-tajawal text-[#071A3D] dark:text-white mb-2 group-hover:text-[#16958E] transition-colors">
              ١. معلومات عن الكلية والمواد
            </h3>

            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
              شرح كامل لنظام الكلية، الساعات المعتمدة، التقييم والأكاديميا، ونصائح الطلاب المستجدين لحساب المعدل.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#BCEBFF]/40 dark:border-[#16958E]/30 text-[#16958E] dark:text-[#BCEBFF] font-bold text-xs">
            <span>تصفح دليل الكلية</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          </div>
        </motion.div>

        {/* Card 2: مصادر الدراسة والمقررات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ y: -6, scale: 1.01 }}
          onClick={() => onNavigate('resources')}
          className="group cursor-pointer bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 rounded-[2rem] p-7 shadow-sm hover:border-[#16958E] transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#16958E] text-white flex items-center justify-center shadow-lg shadow-[#16958E]/25 group-hover:scale-110 transition-transform mb-6">
              <BookOpen className="w-7 h-7 stroke-[2.2]" />
            </div>

            <span className="text-[11px] font-bold text-[#071A3D] dark:text-[#BCEBFF] font-montserrat uppercase tracking-wider block mb-1">
              القسم الثاني
            </span>

            <h3 className="text-xl font-bold font-tajawal text-[#071A3D] dark:text-white mb-2 group-hover:text-[#16958E] transition-colors">
              ٢. مصادر الدراسة والمقررات
            </h3>

            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
              مكتبة المقررات (Anatomy, Physiology, Biochemistry, Microbiology, Pathology, Pharmacology) والمراجع الطبية.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#BCEBFF]/40 dark:border-[#16958E]/30 text-[#16958E] dark:text-[#BCEBFF] font-bold text-xs">
            <span>فتح المقررات الأكاديمية</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          </div>
        </motion.div>

        {/* Card 3: التنظيم والتذكير */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ y: -6, scale: 1.01 }}
          onClick={() => onNavigate('schedule')}
          className="group cursor-pointer bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 rounded-[2rem] p-7 shadow-sm hover:border-[#16958E] transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#071A3D] text-[#BCEBFF] flex items-center justify-center shadow-lg shadow-[#071A3D]/25 group-hover:scale-110 transition-transform mb-6">
              <CalendarCheck className="w-7 h-7 stroke-[2.2]" />
            </div>

            <span className="text-[11px] font-bold text-[#16958E] dark:text-[#BCEBFF] font-montserrat uppercase tracking-wider block mb-1">
              القسم الثالث
            </span>

            <h3 className="text-xl font-bold font-tajawal text-[#071A3D] dark:text-white mb-2 group-hover:text-[#16958E] transition-colors">
              ٣. التنظيم والتذكير
            </h3>

            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
              إدارة جدول المحاضرات التفاعلي، التخزين الدائم، والتنبيهات التلقائية المباشرة بالفيسبوك والمتصفح.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#BCEBFF]/40 dark:border-[#16958E]/30 text-[#16958E] dark:text-[#BCEBFF] font-bold text-xs">
            <span>جدول المحاضرات والتنبيهات</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          </div>
        </motion.div>

      </div>

      {/* Secondary Bento Grid Row: Subjects Quick Access & Telegram & Smart Notifications */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Subjects Bento Grid Card (Col 5) */}
        <div className="md:col-span-5 bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#071A3D] dark:text-white text-base font-tajawal">المواد الدراسية السريعة</h3>
            <button
              onClick={() => onNavigate('subjects')}
              className="text-[#16958E] dark:text-[#BCEBFF] text-xs font-bold hover:underline"
            >
              عرض الكل
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div onClick={() => onNavigate('subjects')} className="relative flex flex-col items-center p-3 rounded-2xl bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 border border-[#BCEBFF]/50 dark:border-[#16958E]/30 hover:scale-105 cursor-pointer transition-transform">
              {favoriteSubjects.includes('anatomy') && <Star className="w-3 h-3 text-amber-500 fill-amber-400 absolute top-1.5 left-1.5" />}
              <div className="w-10 h-10 bg-[#071A3D] text-[#BCEBFF] rounded-xl flex items-center justify-center mb-1.5 font-bold font-mono text-xs">An</div>
              <span className="text-[10px] font-bold text-[#071A3D] dark:text-white">Anatomy</span>
            </div>

            <div onClick={() => onNavigate('subjects')} className="relative flex flex-col items-center p-3 rounded-2xl bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 border border-[#BCEBFF]/50 dark:border-[#16958E]/30 hover:scale-105 cursor-pointer transition-transform">
              {favoriteSubjects.includes('physiology') && <Star className="w-3 h-3 text-amber-500 fill-amber-400 absolute top-1.5 left-1.5" />}
              <div className="w-10 h-10 bg-[#16958E] text-white rounded-xl flex items-center justify-center mb-1.5 font-bold font-mono text-xs">Ph</div>
              <span className="text-[10px] font-bold text-[#071A3D] dark:text-white">Physiology</span>
            </div>

            <div onClick={() => onNavigate('subjects')} className="relative flex flex-col items-center p-3 rounded-2xl bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 border border-[#BCEBFF]/50 dark:border-[#16958E]/30 hover:scale-105 cursor-pointer transition-transform">
              {favoriteSubjects.includes('biochemistry') && <Star className="w-3 h-3 text-amber-500 fill-amber-400 absolute top-1.5 left-1.5" />}
              <div className="w-10 h-10 bg-[#071A3D] text-[#BCEBFF] rounded-xl flex items-center justify-center mb-1.5 font-bold font-mono text-xs">Bc</div>
              <span className="text-[10px] font-bold text-[#071A3D] dark:text-white">Biochem</span>
            </div>

            <div onClick={() => onNavigate('subjects')} className="relative flex flex-col items-center p-3 rounded-2xl bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 border border-[#BCEBFF]/50 dark:border-[#16958E]/30 hover:scale-105 cursor-pointer transition-transform">
              {favoriteSubjects.includes('microbiology') && <Star className="w-3 h-3 text-amber-500 fill-amber-400 absolute top-1.5 left-1.5" />}
              <div className="w-10 h-10 bg-[#16958E] text-white rounded-xl flex items-center justify-center mb-1.5 font-bold font-mono text-xs">Mi</div>
              <span className="text-[10px] font-bold text-[#071A3D] dark:text-white">Microbio</span>
            </div>

            <div onClick={() => onNavigate('subjects')} className="relative flex flex-col items-center p-3 rounded-2xl bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 border border-[#BCEBFF]/50 dark:border-[#16958E]/30 hover:scale-105 cursor-pointer transition-transform">
              {favoriteSubjects.includes('pathology') && <Star className="w-3 h-3 text-amber-500 fill-amber-400 absolute top-1.5 left-1.5" />}
              <div className="w-10 h-10 bg-[#071A3D] text-[#BCEBFF] rounded-xl flex items-center justify-center mb-1.5 font-bold font-mono text-xs">Pa</div>
              <span className="text-[10px] font-bold text-[#071A3D] dark:text-white">Pathology</span>
            </div>

            <div onClick={() => onNavigate('subjects')} className="relative flex flex-col items-center p-3 rounded-2xl bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 border border-[#BCEBFF]/50 dark:border-[#16958E]/30 hover:scale-105 cursor-pointer transition-transform">
              {favoriteSubjects.includes('pharmacology') && <Star className="w-3 h-3 text-amber-500 fill-amber-400 absolute top-1.5 left-1.5" />}
              <div className="w-10 h-10 bg-[#16958E] text-white rounded-xl flex items-center justify-center mb-1.5 font-bold font-mono text-xs">Pm</div>
              <span className="text-[10px] font-bold text-[#071A3D] dark:text-white">Pharmaco</span>
            </div>
          </div>
        </div>

        {/* Telegram Bento Card (Col 4) */}
        <a
          href="http://t.me/Daleelak_AlJamaei_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-4 bg-gradient-to-br from-[#071A3D] via-[#16958E] to-[#071A3D] rounded-[2rem] p-6 shadow-lg shadow-[#071A3D]/20 flex flex-col items-center justify-center text-center text-white group cursor-pointer hover:scale-[1.02] transition-transform"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-[#BCEBFF]">
            <Send className="w-8 h-8 rotate-180" />
          </div>
          <h4 className="text-xl font-bold font-tajawal mb-1">بوت التلجرام الرسمى</h4>
          <p className="text-[#BCEBFF] text-xs leading-relaxed max-w-xs">
            تواصل معنا واحصل على الملخصات والتحديثات الأكاديمية مباشرة على التلجرام
          </p>
        </a>

        {/* Smart Notifications & PWA Bento Card (Col 3) */}
        <div className="md:col-span-3 bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#BCEBFF]/40 text-[#16958E] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Smartphone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#071A3D] dark:text-white text-sm font-tajawal">تطبيق الهاتف PWA</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">مثبت في قائمة تطبيقاتك</p>
            </div>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-pwa-install'))}
              className="w-full p-3 rounded-2xl bg-[#16958E] hover:bg-[#127d77] text-white flex items-center justify-between text-xs font-bold transition-all shadow-md shadow-[#16958E]/20 active:scale-95 cursor-pointer"
            >
              <span>تثبيت التطبيق الآن</span>
              <Download className="w-4 h-4 text-[#BCEBFF]" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('innova')}
              className="w-full p-3 rounded-2xl bg-[#BCEBFF]/30 hover:bg-[#BCEBFF]/55 dark:bg-[#09204a] dark:hover:bg-[#16958E]/25 border border-[#16958E]/35 text-[#071A3D] dark:text-white flex items-center justify-between text-xs font-bold transition-all active:scale-95 cursor-pointer"
            >
              <span>جمعية إنوفا INNOVA</span>
              <Users className="w-4 h-4 text-[#16958E] dark:text-[#BCEBFF]" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
