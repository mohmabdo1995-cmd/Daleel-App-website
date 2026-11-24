import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Calendar,
  FileText,
  Layers,
  Sparkles,
  User,
  Users,
} from 'lucide-react';
import {
  InnovaContentCategory,
  InnovaContentItem,
  InnovaInfoData,
  InnovaMemberItem,
} from '../types';
import { DEFAULT_INNOVA_INFO, InnovaService } from '../services/innovaService';
import { Modal } from './common/Modal';
import { getDraftState, setDraftState } from '../services/navigationState';

interface InnovaAssociationSectionProps {
  onBack: () => void;
  selectedContentId?: string;
  onSelectContent?: (contentId: string) => void;
  onCloseContent?: () => void;
}

type ContentFilterTab = 'all' | InnovaContentCategory;

export const InnovaAssociationSection: React.FC<InnovaAssociationSectionProps> = ({
  onBack,
  selectedContentId,
  onSelectContent,
  onCloseContent,
}) => {
  const [info, setInfo] = useState<InnovaInfoData>(DEFAULT_INNOVA_INFO);
  const [members, setMembers] = useState<InnovaMemberItem[]>([]);
  const [contents, setContents] = useState<InnovaContentItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<ContentFilterTab>(() =>
    getDraftState<ContentFilterTab>('innova_content_filter', 'all')
  );
  const [activeModalItem, setActiveModalItem] = useState<InnovaContentItem | null>(null);
  const [failedMemberImgIds, setFailedMemberImgIds] = useState<Record<string, boolean>>({});
  const [failedContentImgIds, setFailedContentImgIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setDraftState('innova_content_filter', activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const unsubInfo = InnovaService.subscribeInnovaInfo((data) => {
      setInfo(data);
    });
    const unsubMembers = InnovaService.subscribeInnovaMembers((items) => {
      setMembers(items);
    });
    const unsubContents = InnovaService.subscribeInnovaContents((items) => {
      setContents(items);
    });

    return () => {
      unsubInfo();
      unsubMembers();
      unsubContents();
    };
  }, []);

  useEffect(() => {
    if (!selectedContentId) {
      setActiveModalItem(null);
      return;
    }
    const found = contents.find((item) => item.id === selectedContentId);
    if (found) {
      setActiveModalItem(found);
    }
  }, [selectedContentId, contents]);

  const counts = useMemo(() => {
    let articles = 0;
    let events = 0;
    for (const item of contents) {
      if (item.category === 'events') events++;
      else articles++;
    }
    return { all: contents.length, articles, events };
  }, [contents]);

  const filteredContents = useMemo(() => {
    if (activeFilter === 'all') return contents;
    return contents.filter((item) => item.category === activeFilter);
  }, [contents, activeFilter]);

  const openContentDetail = (item: InnovaContentItem) => {
    setActiveModalItem(item);
    onSelectContent?.(item.id);
  };

  const closeContentDetail = () => {
    setActiveModalItem(null);
    onCloseContent?.();
  };

  const formatDisplayDate = (dateStr?: string) => {
    if (!dateStr) return '';
    try {
      const parsed = new Date(dateStr);
      if (Number.isNaN(parsed.getTime())) return dateStr;
      return parsed.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10" dir="rtl">
      {/* Top Bar & Return */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/35 text-[#071A3D] dark:text-[#BCEBFF] text-xs font-bold hover:border-[#16958E] transition-colors cursor-pointer shadow-sm"
        >
          <ArrowRight className="w-4 h-4 text-[#16958E]" />
          <span>العودة</span>
        </button>

        <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
          دليلك الجامعي · جمعية إنوفا
        </div>
      </div>

      {/* SECTION 1: INNOVA Brand Identity Area */}
      <motion.section
        aria-labelledby="innova-identity-heading"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl bg-white dark:bg-[#09204a] border border-[#BCEBFF]/80 dark:border-[#16958E]/35 p-6 sm:p-10 shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
          {/* Unaltered INNOVA Brand Logo on pure white plate for original #071A3D & #16958E contrast */}
          <div className="flex-shrink-0 bg-white rounded-2xl border border-slate-200/90 px-6 py-5 shadow-sm">
            <img
              src="/assets/innova-logo.svg"
              alt="شعار جمعية إنوفا INNOVA"
              className="h-20 sm:h-24 w-auto object-contain select-none"
            />
          </div>

          <div className="flex-1 space-y-2.5">
            <p className="text-xs font-bold text-[#16958E] dark:text-[#BCEBFF] tracking-wide">
              الهوية الرسمية للجمعية · INNOVA Association
            </p>
            <h1
              id="innova-identity-heading"
              className="text-2xl sm:text-4xl font-extrabold font-tajawal text-[#071A3D] dark:text-white leading-snug"
            >
              جمعية إنوفا الطلابية | INNOVA
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              بوابة مخصصة للتعريف بجمعية إنوفا، استعراض قيادات المجلس التنفيذي، ومتابعة المقالات العلمية والفعاليات الجامعية أولاً بأول.
            </p>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: About INNOVA ("من نحن إنوفا") */}
      <motion.section
        aria-labelledby="innova-about-heading"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="rounded-3xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/35 p-6 sm:p-8 shadow-sm"
      >
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-[#16958E]/20">
          <div className="w-10 h-10 rounded-xl bg-[#BCEBFF]/40 dark:bg-[#16958E]/20 text-[#16958E] dark:text-[#BCEBFF] flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2
              id="innova-about-heading"
              className="text-xl sm:text-2xl font-extrabold font-tajawal text-[#071A3D] dark:text-white"
            >
              {info.aboutTitle || 'من نحن إنوفا'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              الرسالة والتعريف المؤسسي بالجمعية
            </p>
          </div>
        </div>

        <div className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-wrap font-normal">
          {info.aboutDescription || DEFAULT_INNOVA_INFO.aboutDescription}
        </div>
      </motion.section>

      {/* SECTION 3: Executive Board Members ("أعضاء إنوفا") */}
      <section aria-labelledby="innova-members-heading" className="space-y-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200/70 dark:border-[#16958E]/25 pb-3">
          <div className="flex items-center gap-2.5">
            <Users className="w-5 h-5 text-[#16958E]" />
            <h2
              id="innova-members-heading"
              className="text-xl sm:text-2xl font-extrabold font-tajawal text-[#071A3D] dark:text-white"
            >
              أعضاء إنوفا
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            المجلس التنفيذي · {members.length} {members.length === 1 ? 'عضو' : 'أعضاء'}
          </span>
        </div>

        {members.length === 0 ? (
          <div className="rounded-3xl bg-white dark:bg-[#071A3D] border border-dashed border-[#BCEBFF] dark:border-[#16958E]/40 p-10 text-center space-y-2">
            <Users className="w-9 h-9 text-[#16958E]/60 mx-auto" />
            <h3 className="text-sm font-bold text-[#071A3D] dark:text-white font-tajawal">
              لم يتم إضافة أعضاء المجلس التنفيذي بعد
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              ستظهر بطاقات أعضاء جمعية إنوفا ومناصبهم التنفيذية هنا تلقائياً بمجرد إضافتها من لوحة تحكم المشرف.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => {
              const showImage = Boolean(member.photoUrl) && !failedMemberImgIds[member.id];
              return (
                <article
                  key={member.id}
                  className="rounded-3xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/35 overflow-hidden shadow-sm hover:border-[#16958E] transition-colors flex flex-col"
                >
                  <div className="aspect-[4/3] w-full bg-slate-100 dark:bg-[#0a234f] overflow-hidden relative flex items-center justify-center">
                    {showImage ? (
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedMemberImgIds((prev) => ({ ...prev, [member.id]: true }))
                        }
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2 text-[#16958E]/70 dark:text-[#BCEBFF]/60">
                        <User className="w-12 h-12" />
                        <span className="text-[11px] font-bold">صورة العضو</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-center text-right space-y-1">
                    <h3 className="text-base sm:text-lg font-extrabold font-tajawal text-[#071A3D] dark:text-white leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#16958E] dark:text-[#BCEBFF]">
                      {member.position}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* SECTION 4: Articles & Events ("المقالات والفعاليات") */}
      <section aria-labelledby="innova-content-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/70 dark:border-[#16958E]/25 pb-4">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#16958E]" />
            <div>
              <h2
                id="innova-content-heading"
                className="text-xl sm:text-2xl font-extrabold font-tajawal text-[#071A3D] dark:text-white"
              >
                المقالات والفعاليات
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                إصدارات الجمعية المعرفية والأنشطة والفعاليات الجامعية
              </p>
            </div>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="تصفية محتوى جمعية إنوفا"
            className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-[#09204a] p-1 rounded-2xl border border-slate-200 dark:border-[#16958E]/30 self-start sm:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#071A3D] dark:bg-[#16958E] text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-white/5'
              }`}
            >
              الكل ({counts.all})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'articles'}
              onClick={() => setActiveFilter('articles')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'articles'
                  ? 'bg-[#071A3D] dark:bg-[#16958E] text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-white/5'
              }`}
            >
              المقالات ({counts.articles})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'events'}
              onClick={() => setActiveFilter('events')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'events'
                  ? 'bg-[#071A3D] dark:bg-[#16958E] text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-white/5'
              }`}
            >
              الفعاليات ({counts.events})
            </button>
          </div>
        </div>

        {filteredContents.length === 0 ? (
          <div className="rounded-3xl bg-white dark:bg-[#071A3D] border border-dashed border-[#BCEBFF] dark:border-[#16958E]/40 p-10 text-center space-y-2">
            <Layers className="w-9 h-9 text-[#16958E]/60 mx-auto" />
            <h3 className="text-sm font-bold text-[#071A3D] dark:text-white font-tajawal">
              {activeFilter === 'articles'
                ? 'لا توجد مقالات منشورة لجمعية إنوفا حالياً'
                : activeFilter === 'events'
                ? 'لا توجد فعاليات منشورة لجمعية إنوفا حالياً'
                : 'لا توجد مقالات أو فعاليات منشورة حالياً'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              عند نشر مقالات أو فعاليات جديدة من لوحة التحكم، ستظهر هنا مباشرة بصيغة قابلة للتصفح والقراءة.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContents.map((item) => {
              const showImage = Boolean(item.imageUrl) && !failedContentImgIds[item.id];
              const categoryLabel = item.category === 'events' ? 'الفعاليات' : 'المقالات';
              const displayDate = formatDisplayDate(item.eventDate || item.createdAt);

              return (
                <article
                  key={item.id}
                  onClick={() => openContentDetail(item)}
                  className="group rounded-3xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/35 overflow-hidden shadow-sm hover:border-[#16958E] transition-colors flex flex-col cursor-pointer"
                >
                  <div className="aspect-[16/10] w-full bg-slate-100 dark:bg-[#0a234f] overflow-hidden flex items-center justify-center">
                    {showImage ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedContentImgIds((prev) => ({ ...prev, [item.id]: true }))
                        }
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1.5 text-[#16958E]/70 dark:text-[#BCEBFF]/60">
                        {item.category === 'events' ? (
                          <Calendar className="w-10 h-10" />
                        ) : (
                          <FileText className="w-10 h-10" />
                        )}
                        <span className="text-[11px] font-bold">{categoryLabel}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between gap-4 text-right">
                    <div className="space-y-2">
                      {/* Zero-Pill static metadata line */}
                      <div className="text-[11px] font-bold text-[#16958E] dark:text-[#BCEBFF] flex items-center gap-1.5">
                        <span>{categoryLabel}</span>
                        {displayDate && (
                          <>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-500 dark:text-slate-400 font-medium">
                              {displayDate}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-extrabold font-tajawal text-[#071A3D] dark:text-white leading-snug line-clamp-2 group-hover:text-[#16958E] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-[#16958E]/20 flex items-center justify-between text-xs font-bold text-[#071A3D] dark:text-[#BCEBFF]">
                      <span>عرض التفاصيل</span>
                      <ArrowRight className="w-4 h-4 rotate-180 text-[#16958E] group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Detail Reader Modal */}
      {activeModalItem && (
        <Modal
          isOpen={Boolean(activeModalItem)}
          onClose={closeContentDetail}
          maxWidth="2xl"
          title={activeModalItem.title}
          subtitle={`${activeModalItem.category === 'events' ? 'فعالية إنوفا' : 'مقال إنوفا'}${
            activeModalItem.eventDate || activeModalItem.createdAt
              ? ` · ${formatDisplayDate(activeModalItem.eventDate || activeModalItem.createdAt)}`
              : ''
          }`}
          icon={
            activeModalItem.category === 'events' ? (
              <Calendar className="w-5 h-5 text-[#16958E]" />
            ) : (
              <FileText className="w-5 h-5 text-[#16958E]" />
            )
          }
          footer={
            <button
              type="button"
              onClick={closeContentDetail}
              className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white text-xs font-bold hover:bg-slate-300 dark:hover:bg-white/20 cursor-pointer"
            >
              إغلاق
            </button>
          }
        >
          <div className="space-y-4 text-right">
            {activeModalItem.imageUrl && !failedContentImgIds[activeModalItem.id] && (
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0a234f]">
                <img
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-80 object-cover"
                />
              </div>
            )}

            <div className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
              {activeModalItem.description}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
