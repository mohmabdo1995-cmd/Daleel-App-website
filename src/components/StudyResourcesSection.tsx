import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { STUDY_RESOURCES, SUBJECTS_DATA } from '../data/academicContent';
import { StudyResource, Subject } from '../types';
import { FirebaseService } from '../services/firebase';
import { sanitizeSafeHttpUrl } from '../services/userAccount';
import { useAuth } from '../contexts/AuthContext';
import { Modal } from './common/Modal';
import { getDraftState, setDraftState, clearDraftState } from '../services/navigationState';

interface PersonalResourceDraft {
  isOpen: boolean;
  newTitle: string;
  newUrl: string;
  newDescription: string;
  newSubjectTag: string;
  newCategory: 'book' | 'video' | 'telegram' | 'notes' | 'summary';
}
import {
  BookOpen,
  Send,
  Video,
  FileText,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Search,
  Compass,
  Bookmark,
  Plus,
  Trash2,
  ShieldCheck,
  LogIn,
} from 'lucide-react';

interface StudyResourcesSectionProps {
  onBack: () => void;
  onNavigateToSubject: (subjectId: string) => void;
}

export const StudyResourcesSection: React.FC<StudyResourcesSectionProps> = ({
  onBack,
  onNavigateToSubject,
}) => {
  const {
    isAuthenticated,
    preferences,
    personalResources,
    toggleSavedResource,
    addPersonalResource,
    deletePersonalResource,
    openAuthModal,
  } = useAuth();

  const initialPersonalDraft = getDraftState<PersonalResourceDraft | null>(
    'resources_personal_draft',
    null
  );

  const [resources, setResources] = useState<StudyResource[]>(STUDY_RESOURCES);
  const [subjects, setSubjects] = useState<Subject[]>(SUBJECTS_DATA);
  const [filterCategory, setFilterCategory] = useState<string>(() =>
    getDraftState<string>('resources_filter_category', 'all')
  );
  const [searchQuery, setSearchQuery] = useState<string>(() =>
    getDraftState<string>('resources_search', '')
  );
  const [resourceError, setResourceError] = useState<string | null>(null);

  // Add Personal Study Resource Modal State
  const [isAddPersonalOpen, setIsAddPersonalOpen] = useState<boolean>(
    Boolean(initialPersonalDraft?.isOpen)
  );
  const [newTitle, setNewTitle] = useState(initialPersonalDraft?.newTitle || '');
  const [newUrl, setNewUrl] = useState(initialPersonalDraft?.newUrl || '');
  const [newDescription, setNewDescription] = useState(initialPersonalDraft?.newDescription || '');
  const [newSubjectTag, setNewSubjectTag] = useState(initialPersonalDraft?.newSubjectTag || 'general');
  const [newCategory, setNewCategory] = useState<'book' | 'video' | 'telegram' | 'notes' | 'summary'>(
    initialPersonalDraft?.newCategory || 'notes'
  );
  const [savingPersonal, setSavingPersonal] = useState(false);

  useEffect(() => {
    setDraftState('resources_filter_category', filterCategory);
  }, [filterCategory]);

  useEffect(() => {
    setDraftState('resources_search', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (isAddPersonalOpen || newTitle.trim() || newUrl.trim() || newDescription.trim()) {
      setDraftState<PersonalResourceDraft>('resources_personal_draft', {
        isOpen: isAddPersonalOpen,
        newTitle,
        newUrl,
        newDescription,
        newSubjectTag,
        newCategory,
      });
    } else {
      clearDraftState('resources_personal_draft');
    }
  }, [isAddPersonalOpen, newTitle, newUrl, newDescription, newSubjectTag, newCategory]);

  useEffect(() => {
    const unsubscribeResources = FirebaseService.subscribeStudyResources((data) => {
      if (data && data.length > 0) {
        setResources(data);
      } else {
        setResources(STUDY_RESOURCES);
      }
    });

    const unsubscribeSubjects = FirebaseService.subscribeSubjects((data) => {
      if (data && data.length > 0) {
        setSubjects(data);
      }
    });

    return () => {
      unsubscribeResources();
      unsubscribeSubjects();
    };
  }, []);

  const getSubjectDisplayName = (subjectId?: string, subjectTag?: string) => {
    const rawTag = subjectTag || subjectId;
    if (!rawTag || rawTag === 'general') return 'جميع المقررات / عام';
    const found = subjects.find((s) => s.id.toLowerCase() === rawTag.toLowerCase());
    if (found) {
      return `${found.nameAr} (${found.nameEn})`;
    }
    return rawTag;
  };

  const hasValidSubject = (res: StudyResource) => {
    const tag = res.subjectId || res.subjectTag;
    return Boolean(tag && tag !== 'general' && tag.trim() !== '');
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'telegram':
        return <Send className="w-5 h-5 text-[#16958E] rotate-180" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-[#071A3D] dark:text-[#BCEBFF]" />;
      case 'video':
        return <Video className="w-5 h-5 text-[#16958E]" />;
      case 'notes':
        return <FileText className="w-5 h-5 text-[#071A3D] dark:text-[#BCEBFF]" />;
      default:
        return <Layers className="w-5 h-5 text-[#16958E]" />;
    }
  };

  const savedIds = preferences.savedResourceIds || [];
  const activeResources = resources.filter((res) => res.isActive !== false);

  const handleToggleBookmark = async (id: string) => {
    setResourceError(null);
    try {
      await toggleSavedResource(id);
    } catch {
      setResourceError('تعذر حفظ المصدر في مفضلتك السحابية حالياً.');
    }
  };

  const handleCreatePersonalResource = async (e: React.FormEvent) => {
    e.preventDefault();
    setResourceError(null);
    const safeUrl = sanitizeSafeHttpUrl(newUrl);
    if (!newTitle.trim() || !safeUrl) {
      setResourceError('يرجى إدخال عنوان المصدر ورابط صالح يبدأ بـ http:// أو https://');
      return;
    }

    setSavingPersonal(true);
    try {
      await addPersonalResource({
        title: newTitle.trim(),
        description: newDescription.trim() || 'مصدر دراسي مضاف شخصياً',
        url: safeUrl,
        subjectTag: newSubjectTag,
        category: newCategory,
      });
      clearDraftState('resources_personal_draft');
      setNewTitle('');
      setNewUrl('');
      setNewDescription('');
      setNewSubjectTag('general');
      setNewCategory('notes');
      setIsAddPersonalOpen(false);
    } catch {
      setResourceError('تعذر حفظ المصدر الشخصي حالياً.');
    } finally {
      setSavingPersonal(false);
    }
  };

  const handleDeletePersonal = async (id: string) => {
    setResourceError(null);
    try {
      await deletePersonalResource(id);
    } catch {
      setResourceError('تعذر حذف المصدر الشخصي حالياً.');
    }
  };

  const filteredResources = activeResources.filter((res) => {
    const matchesCategory =
      filterCategory === 'all'
        ? true
        : filterCategory === 'saved'
        ? savedIds.includes(res.id)
        : res.category === filterCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (res.subjectTag && res.subjectTag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (res.subjectId && res.subjectId.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 h-9 sm:h-10 px-3.5 rounded-xl bg-[#BCEBFF]/30 hover:bg-[#BCEBFF]/60 text-[#071A3D] dark:text-[#BCEBFF] font-bold text-xs sm:text-sm transition-all mb-4 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>الرجوع للرئيسية</span>
          </button>

          <div className="flex items-center gap-2 text-[#16958E] dark:text-[#BCEBFF] font-bold text-sm">
            <Sparkles className="w-4 h-4 text-[#16958E]" />
            <span>القسم الثاني - مصادر الدراسة والكتب</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-tajawal text-[#071A3D] dark:text-white mt-1">
            مصادر الدراسة والمكتبة الرقمية 📖
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
            مجموعة متجددة ومختارة من أفضل المراجع العلمية، الأطلس الطبي، والبوتات التعليمية المعتمدة.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsAddPersonalOpen(true)}
            className="h-11 sm:h-12 px-4 sm:px-5 rounded-2xl bg-[#BCEBFF]/35 hover:bg-[#BCEBFF]/60 text-[#071A3D] dark:text-white border border-[#16958E]/40 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#16958E]" />
            <span>إضافة مصدر خاص لي</span>
          </button>

          {/* Prominent Telegram Button */}
          <a
            href="http://t.me/Daleelak_AlJamaei_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-12 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-[#071A3D] to-[#16958E] hover:from-[#0a2558] hover:to-[#1ba8a0] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#071A3D]/25 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Send className="w-5 h-5 rotate-180 text-[#BCEBFF]" />
            <span>فتح بوت التلجرام</span>
          </a>
        </div>
      </div>

      {/* Sync Banner */}
      <div
        className={`mb-6 p-3.5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-right ${
          isAuthenticated
            ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/40'
            : 'bg-[#BCEBFF]/20 dark:bg-[#16958E]/15 border-[#16958E]/30'
        }`}
      >
        <div className="flex items-center gap-2 text-xs font-bold text-[#071A3D] dark:text-white">
          {isAuthenticated ? (
            <>
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>مصادرك المحفوظة والروابط الشخصية متزامنة تلقائياً مع حسابك في السحابة.</span>
            </>
          ) : (
            <>
              <LogIn className="w-4 h-4 text-[#16958E] flex-shrink-0" />
              <span>سجّل الدخول بحساب Google لحفظ مصادرك المفضلة وروابطك الشخصية في السحابة.</span>
            </>
          )}
        </div>
        {!isAuthenticated && (
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="px-3.5 py-1.5 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-[11px] font-bold transition-colors cursor-pointer self-start sm:self-center flex-shrink-0"
          >
            تسجيل الدخول للمزامنة
          </button>
        )}
      </div>

      {resourceError && (
        <div className="mb-6 p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-200 text-xs font-bold flex items-center justify-between">
          <span>{resourceError}</span>
          <button type="button" onClick={() => setResourceError(null)} className="underline text-[11px] cursor-pointer">
            إغلاق
          </button>
        </div>
      )}

      {/* Main Telegram Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 mb-8 relative overflow-hidden shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4 text-right">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#071A3D] to-[#16958E] text-white flex items-center justify-center shadow-lg shadow-[#071A3D]/30 flex-shrink-0">
              <Send className="w-8 h-8 rotate-180 text-[#BCEBFF]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#16958E] dark:text-[#BCEBFF]">البوت الأكاديمي الشامل</span>
              <h2 className="text-2xl font-bold font-tajawal text-[#071A3D] dark:text-white mt-0.5">
                بوت التلجرام: @Daleelak_AlJamaei_bot
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed max-w-2xl">
                احصل على التجميعات المعتمدة، ملخصات المواد (Anatomy, Physiology, Biochemistry, Microbiology, Pathology, Pharmacology)، وأسئلة الامتحانات السابقة فورياً.
              </p>
            </div>
          </div>

          <a
            href="http://t.me/Daleelak_AlJamaei_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 rounded-2xl bg-[#071A3D] hover:bg-[#16958E] text-white font-bold text-base shadow-lg shadow-[#071A3D]/25 transition-all text-center whitespace-nowrap active:scale-95 flex items-center justify-center gap-2"
          >
            <span>انتقال للبوت الآن</span>
            <ExternalLink className="w-4 h-4 text-[#BCEBFF]" />
          </a>
        </div>
      </motion.div>

      {/* Personal Saved Resources Section (if any created by student) */}
      {personalResources.length > 0 && (
        <div className="mb-8 p-5 rounded-3xl bg-[#BCEBFF]/15 dark:bg-[#071A3D]/70 border border-[#16958E]/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold font-tajawal text-[#071A3D] dark:text-white flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-[#16958E]" />
              <span>مصادري الشخصية المحفوظة ({personalResources.length})</span>
            </h3>
            <button
              type="button"
              onClick={() => setIsAddPersonalOpen(true)}
              className="text-xs font-bold text-[#16958E] hover:underline cursor-pointer"
            >
              + إضافة مصدر جديد
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalResources.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 flex flex-col justify-between gap-3 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold font-tajawal text-sm text-[#071A3D] dark:text-white">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-[#16958E] dark:text-[#BCEBFF] font-medium">
                      {getSubjectDisplayName(item.subjectTag)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeletePersonal(item.id)}
                    title="حذف المصدر الشخصي"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                {item.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-[#BCEBFF]/30 dark:border-[#16958E]/20">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-[11px] font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>فتح المصدر</span>
                    <ExternalLink className="w-3 h-3 text-[#BCEBFF]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#BCEBFF]/40 dark:border-[#16958E]/30 pb-4 mb-8">
        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
          <button
            onClick={() => setFilterCategory('all')}
            className={`h-9 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center whitespace-nowrap cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-[#071A3D] text-white shadow-sm'
                : 'bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 text-[#071A3D] dark:text-slate-300 hover:bg-[#BCEBFF]/40'
            }`}
          >
            جميع المصادر ({activeResources.length})
          </button>

          <button
            onClick={() => setFilterCategory('saved')}
            className={`h-9 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${
              filterCategory === 'saved'
                ? 'bg-[#16958E] text-white shadow-sm'
                : 'bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 text-[#071A3D] dark:text-slate-300 hover:bg-[#BCEBFF]/40'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>محفوظاتي ({savedIds.length})</span>
          </button>

          <button
            onClick={() => setFilterCategory('telegram')}
            className={`h-9 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center whitespace-nowrap cursor-pointer ${
              filterCategory === 'telegram'
                ? 'bg-[#071A3D] text-white shadow-sm'
                : 'bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 text-[#071A3D] dark:text-slate-300 hover:bg-[#BCEBFF]/40'
            }`}
          >
            بوت التلجرام
          </button>

          <button
            onClick={() => setFilterCategory('book')}
            className={`h-9 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center whitespace-nowrap cursor-pointer ${
              filterCategory === 'book'
                ? 'bg-[#071A3D] text-white shadow-sm'
                : 'bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 text-[#071A3D] dark:text-slate-300 hover:bg-[#BCEBFF]/40'
            }`}
          >
            الأطلس والكتب
          </button>

          <button
            onClick={() => setFilterCategory('video')}
            className={`h-9 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center whitespace-nowrap cursor-pointer ${
              filterCategory === 'video'
                ? 'bg-[#071A3D] text-white shadow-sm'
                : 'bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 text-[#071A3D] dark:text-slate-300 hover:bg-[#BCEBFF]/40'
            }`}
          >
            الشروحات والمرئيات
          </button>

          <button
            onClick={() => setFilterCategory('notes')}
            className={`h-9 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center whitespace-nowrap cursor-pointer ${
              filterCategory === 'notes'
                ? 'bg-[#071A3D] text-white shadow-sm'
                : 'bg-[#BCEBFF]/20 dark:bg-[#071A3D]/50 text-[#071A3D] dark:text-slate-300 hover:bg-[#BCEBFF]/40'
            }`}
          >
            الملخصات وبنك الأسئلة
          </button>
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث باسم المصدر أو المادة..."
            className="w-full pr-9 pl-3 py-2 rounded-xl border border-[#BCEBFF] dark:border-[#16958E]/40 text-xs font-medium focus:outline-none focus:border-[#16958E] dark:bg-[#071A3D] dark:text-white"
          />
        </div>
      </div>

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-[#071A3D] rounded-3xl border border-[#BCEBFF]/60 dark:border-[#16958E]/20 p-8">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-60" />
          <h3 className="font-bold text-base text-[#071A3D] dark:text-white">لم يتم العثور على مصادر مطابقة</h3>
          <p className="text-xs text-slate-500 mt-1">جرب تغيير التصنيف أو مسح عبارة البحث</p>
        </div>
      )}

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((res, index) => {
          const destinationUrl = res.url || res.link;
          const targetSubjectId = res.subjectId || res.subjectTag;
          const showSubjectButton = hasValidSubject(res);
          const isSaved = savedIds.includes(res.id);

          return (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 hover:border-[#16958E] shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#BCEBFF]/20 dark:bg-[#071A3D]/70 border border-[#BCEBFF]/40 dark:border-[#16958E]/30">
                      {getCategoryIcon(res.category)}
                    </div>
                    <div>
                      <h3 className="font-bold font-tajawal text-[#071A3D] dark:text-white text-lg">
                        {res.title}
                      </h3>
                      <span className="text-xs text-[#16958E] dark:text-[#BCEBFF] font-medium inline-flex items-center gap-1">
                        <Compass className="w-3 h-3 inline text-[#16958E]" />
                        <span>{getSubjectDisplayName(res.subjectId, res.subjectTag)}</span>
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleBookmark(res.id)}
                    title={isSaved ? 'إزالة من المحفوظات' : 'حفظ في مكتبتي'}
                    className={`p-2 rounded-xl border transition-all cursor-pointer flex-shrink-0 ${
                      isSaved
                        ? 'bg-[#16958E] text-white border-[#16958E]'
                        : 'bg-[#BCEBFF]/15 dark:bg-white/5 text-slate-500 dark:text-slate-300 border-[#BCEBFF]/40 dark:border-[#16958E]/30 hover:text-[#16958E]'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                  </button>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#BCEBFF]/40 dark:border-[#16958E]/20 flex items-center justify-between gap-2">
                <a
                  href={destinationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer"
                  title={`الانتقال إلى: ${destinationUrl}`}
                >
                  <span>الانتقال للمصدر</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#BCEBFF]" />
                </a>

                {showSubjectButton && targetSubjectId && (
                  <button
                    onClick={() => onNavigateToSubject(targetSubjectId)}
                    className="text-xs font-bold text-slate-500 hover:text-[#16958E] transition-colors flex items-center gap-1 cursor-pointer"
                    title={`فتح مادة ${targetSubjectId}`}
                  >
                    <span>استعراض المادة</span>
                    <span>←</span>
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Add Personal Study Resource Modal */}
      <Modal
        isOpen={isAddPersonalOpen}
        onClose={() => setIsAddPersonalOpen(false)}
        maxWidth="md"
        title="إضافة مصدر دراسي شخصي"
        subtitle={
          isAuthenticated
            ? 'سيُحفظ هذا الرابط في حسابك السحابي ولن يظهر للآخرين'
            : 'سيُحفظ محلياً ويمكن مزامنته عند تسجيل الدخول'
        }
        icon={<Bookmark className="w-5 h-5 text-[#16958E]" />}
      >
        <form onSubmit={handleCreatePersonalResource} className="space-y-4 text-right">
          <div>
            <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1">
              عنوان المصدر *
            </label>
            <input
              type="text"
              required
              maxLength={200}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="مثال: ملخص التشريح العصبي"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1">
              رابط المصدر (HTTP / HTTPS) *
            </label>
            <input
              type="url"
              required
              dir="ltr"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="https://example.com/notes"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1">
                المادة المرتبطة
              </label>
              <select
                value={newSubjectTag}
                onChange={(e) => setNewSubjectTag(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-[#0a224d] border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
              >
                <option value="general">عام / جميع المواد</option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nameAr} ({s.nameEn})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1">
                التصنيف
              </label>
              <select
                value={newCategory}
                onChange={(e) =>
                  setNewCategory(e.target.value as 'book' | 'video' | 'telegram' | 'notes' | 'summary')
                }
                className="w-full px-3 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-[#0a224d] border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
              >
                <option value="notes">ملخص / مذكرة</option>
                <option value="book">كتاب / مرجع</option>
                <option value="video">فيديو / شرح</option>
                <option value="telegram">قناة / بوت تلجرام</option>
                <option value="summary">تجميعات</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#071A3D] dark:text-slate-200 mb-1">
              ملاحظة أو وصف قصير
            </label>
            <textarea
              rows={2}
              maxLength={1000}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="وصف مختصر للمصدر..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#BCEBFF]/15 dark:bg-white/5 border border-[#BCEBFF]/60 dark:border-[#16958E]/30 text-xs text-[#071A3D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16958E]"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAddPersonalOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white text-xs font-bold cursor-pointer"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={savingPersonal}
              className="px-5 py-2 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-md cursor-pointer disabled:opacity-60"
            >
              {savingPersonal ? 'جاري الحفظ...' : 'حفظ المصدر'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
