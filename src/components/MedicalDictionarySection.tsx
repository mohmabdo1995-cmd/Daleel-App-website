import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Search,
  Stethoscope,
  ArrowRight,
  X,
  Volume2,
  BookOpen,
  Sparkles,
  Filter,
  Loader2,
  AlertCircle,
  ExternalLink,
  ChevronLeft,
} from 'lucide-react';
import { MedicalTerm } from '../types';
import {
  BUILT_IN_MEDICAL_SPECIALTIES,
  MEDICAL_SPECIALTY_AR_LABELS,
  MEDICAL_TERMS_SEED,
} from '../data/medicalTermsSeed';
import {
  getHighlightSegments,
  SearchHighlightSegment,
  searchMedicalTerms,
} from '../services/medicalSearch';
import { MedicalTermsService } from '../services/medicalTermsService';
import { PronunciationService } from '../services/pronunciation';
import { MedicalTermDetailModal } from './MedicalTermDetailModal';

interface MedicalDictionarySectionProps {
  onBack: () => void;
  selectedTermId?: string;
  onSelectTerm: (termId: string) => void;
  onCloseTerm: () => void;
}

const CLIENT_VISIBLE_INCREMENT = 24;

function HighlightedText({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  const segments: SearchHighlightSegment[] = getHighlightSegments(text, query);
  return (
    <>
      {segments.map((seg, idx) =>
        seg.matched ? (
          <mark
            key={idx}
            className="bg-[#BCEBFF]/80 dark:bg-[#16958E]/50 text-[#071A3D] dark:text-white rounded px-0.5 font-extrabold"
          >
            {seg.text}
          </mark>
        ) : (
          <React.Fragment key={idx}>{seg.text}</React.Fragment>
        )
      )}
    </>
  );
}

export const MedicalDictionarySection: React.FC<MedicalDictionarySectionProps> = ({
  onBack,
  selectedTermId,
  onSelectTerm,
  onCloseTerm,
}) => {
  const [rawInput, setRawInput] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');

  const [termsCatalog, setTermsCatalog] = useState<MedicalTerm[]>(MEDICAL_TERMS_SEED);
  const [remoteMatches, setRemoteMatches] = useState<MedicalTerm[]>([]);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isSearchingRemote, setIsSearchingRemote] = useState(false);
  const [dataSourceKind, setDataSourceKind] = useState<'firestore' | 'curated'>('curated');
  const [visibleLimit, setVisibleLimit] = useState(CLIENT_VISIBLE_INCREMENT);
  const [resolvedRouteTerm, setResolvedRouteTerm] = useState<MedicalTerm | null>(null);
  const [speakingCardId, setSpeakingCardId] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // 1. IndexedDB-first merged catalog subscription (0 redundant Firestore reads!)
  useEffect(() => {
    let active = true;
    const unsub = MedicalTermsService.subscribeMergedVerifiedCatalog((mergedItems, source) => {
      if (!active) return;
      if (mergedItems.length > 0) {
        setTermsCatalog(mergedItems);
        setDataSourceKind(source === 'cloud' ? 'firestore' : 'curated');
      }
      setIsInitialLoading(false);
    });

    return () => {
      active = false;
      unsub();
      PronunciationService.stop();
    };
  }, []);

  // 2. Debounced search query (local-first over 3,950+ terms; remote token lookup ONLY if 0 local matches)
  useEffect(() => {
    const trimmed = rawInput.trim();
    if (!trimmed) {
      setDebouncedQuery('');
      setRemoteMatches([]);
      setIsSearchingRemote(false);
      setVisibleLimit(CLIENT_VISIBLE_INCREMENT);
      return;
    }

    const timer = window.setTimeout(async () => {
      setDebouncedQuery(trimmed);
      setVisibleLimit(CLIENT_VISIBLE_INCREMENT);

      const localCheck = searchMedicalTerms(termsCatalog, trimmed, { specialty: 'all' });
      if (localCheck.results.length === 0 && trimmed.length >= 3) {
        setIsSearchingRemote(true);
        try {
          const hits = await MedicalTermsService.queryPublicTermsByTokenRemote(trimmed);
          setRemoteMatches(hits);
        } catch {
          setRemoteMatches([]);
        } finally {
          setIsSearchingRemote(false);
        }
      } else {
        setRemoteMatches([]);
        setIsSearchingRemote(false);
      }
    }, 150);

    return () => window.clearTimeout(timer);
  }, [rawInput, termsCatalog]);

  // 3. Resolve deep-linked term (?view=dictionary&term=myocardium) if outside loaded catalog
  useEffect(() => {
    if (!selectedTermId) {
      setResolvedRouteTerm(null);
      return;
    }

    const fromLocal =
      termsCatalog.find((t) => t.id === selectedTermId) ||
      remoteMatches.find((t) => t.id === selectedTermId) ||
      MEDICAL_TERMS_SEED.find((t) => t.id === selectedTermId);

    if (fromLocal) {
      setResolvedRouteTerm(fromLocal);
      return;
    }

    let cancelled = false;
    MedicalTermsService.getPublicTermById(selectedTermId).then((fetched) => {
      if (!cancelled) {
        setResolvedRouteTerm(fetched);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [selectedTermId, termsCatalog, remoteMatches]);

  // 4. Merge catalog + remote token hits without duplicates
  const mergedVerifiedTerms = useMemo(() => {
    const map = new Map<string, MedicalTerm>();
    for (const t of termsCatalog) {
      if (t.verification_status === 'verified') map.set(t.id, t);
    }
    for (const t of remoteMatches) {
      if (t.verification_status === 'verified') map.set(t.id, t);
    }
    return Array.from(map.values());
  }, [termsCatalog, remoteMatches]);

  // Dynamic specialty list (supports built-in + any future admin-added custom specialties)
  const availableSpecialties = useMemo(() => {
    const counts = new Map<string, number>();
    for (const term of mergedVerifiedTerms) {
      counts.set(term.specialty, (counts.get(term.specialty) || 0) + 1);
    }
    const ordered: { name: string; count: number; arLabel?: string }[] = [];
    for (const builtIn of BUILT_IN_MEDICAL_SPECIALTIES) {
      const count = counts.get(builtIn) || 0;
      if (count > 0) {
        ordered.push({
          name: builtIn,
          count,
          arLabel: MEDICAL_SPECIALTY_AR_LABELS[builtIn],
        });
        counts.delete(builtIn);
      }
    }
    for (const [customName, count] of counts.entries()) {
      ordered.push({ name: customName, count });
    }
    return ordered;
  }, [mergedVerifiedTerms]);

  // 5. Ranked Bilingual & Fuzzy Search Output
  const searchOutput = useMemo(() => {
    return searchMedicalTerms(mergedVerifiedTerms, debouncedQuery, {
      specialty: selectedSpecialty,
    });
  }, [mergedVerifiedTerms, debouncedQuery, selectedSpecialty]);

  const visibleResults = useMemo(() => {
    return searchOutput.results.slice(0, visibleLimit);
  }, [searchOutput.results, visibleLimit]);

  const hasMoreClientItems = visibleResults.length < searchOutput.results.length;

  const handleLoadMore = () => {
    if (hasMoreClientItems) {
      setVisibleLimit((prev) => prev + CLIENT_VISIBLE_INCREMENT);
    }
  };

  const handleQuickPronounce = (e: React.MouseEvent, term: MedicalTerm) => {
    e.stopPropagation();
    if (speakingCardId === term.id) {
      PronunciationService.stop();
      setSpeakingCardId(null);
      return;
    }
    PronunciationService.speakTerm(term.term_en, {
      audioUrl: term.audio_url,
      rate: 0.9,
      onStart: () => setSpeakingCardId(term.id),
      onEnd: () => setSpeakingCardId(null),
      onError: () => setSpeakingCardId(null),
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6">
      {/* Top Breadcrumb / Back Action */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[#071A3D] dark:text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للوحة الرئيسية</span>
        </button>

        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
          {mergedVerifiedTerms.length} مصطلح طبي موثق · {dataSourceKind === 'firestore' ? 'متصل بالسحابة' : 'فهرس موثق'}
        </span>
      </div>

      {/* Hero Header & Bilingual Search Panel */}
      <section className="rounded-[2rem] bg-gradient-to-br from-[#071A3D] via-[#0c2757] to-[#114266] text-white p-6 sm:p-8 shadow-lg border border-[#16958E]/30 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#16958E]/25 border border-[#BCEBFF]/30 flex items-center justify-center flex-shrink-0 text-[#BCEBFF] shadow-inner">
              <Stethoscope className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-tajawal text-white leading-tight">
                فهرس المصطلحات الطبية
              </h1>
              <p dir="ltr" className="text-xs sm:text-sm font-bold text-[#BCEBFF] font-montserrat mt-0.5 text-left md:text-right">
                Medical Terminology Index
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                أداة تعليمية وبحثية متكاملة باللغتين الإنجليزية والعربية؛ ابحث عن أي مصطلح طبي لمعرفة شرحه العلمي الموثق، المقابل العربي الدقيق، النطق الصوتي، والمراجع العلمية المعتمدة.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <label htmlFor="medical-dictionary-search" className="sr-only">
            ابحث عن مصطلح طبي بالإنجليزية أو العربية
          </label>
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#16958E] absolute right-4 pointer-events-none" />
            <input
              id="medical-dictionary-search"
              ref={searchInputRef}
              type="text"
              dir="auto"
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value)}
              placeholder="ابحث بالإنجليزية أو العربية... مثال: Myocardium، التهاب الرئة، Pneumona"
              className="w-full pr-12 pl-12 py-4 rounded-2xl bg-white dark:bg-[#071A3D] text-[#071A3D] dark:text-white placeholder:text-slate-400 text-sm sm:text-base font-bold border-2 border-transparent focus:border-[#BCEBFF] shadow-xl outline-none transition-all"
            />
            {isSearchingRemote ? (
              <Loader2 className="w-5 h-5 text-[#16958E] animate-spin absolute left-4" />
            ) : rawInput ? (
              <button
                type="button"
                onClick={() => {
                  setRawInput('');
                  searchInputRef.current?.focus();
                }}
                aria-label="مسح البحث"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-600 dark:text-slate-200 flex items-center justify-center absolute left-3 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}
          </div>

          {/* Quick Sample Queries */}
          {!rawInput && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-300 font-bold">جرّب البحث عن:</span>
              {['Myocardium', 'Pneumonia', 'Nephritis', 'Hepatitis', 'التهاب الكبد'].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => setRawInput(sample)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#BCEBFF] font-bold transition-colors cursor-pointer"
                >
                  {sample}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Specialty Filter Bar */}
      <section aria-label="تصفية حسب التخصص الطبي" className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-extrabold text-[#071A3D] dark:text-white">
            <Filter className="w-4 h-4 text-[#16958E]" />
            <span>التخصصات الطبية</span>
          </div>
          {selectedSpecialty !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedSpecialty('all')}
              className="text-xs font-bold text-[#16958E] hover:underline cursor-pointer"
            >
              عرض كل التخصصات
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            type="button"
            onClick={() => {
              setSelectedSpecialty('all');
              setVisibleLimit(CLIENT_VISIBLE_INCREMENT);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
              selectedSpecialty === 'all'
                ? 'bg-[#071A3D] text-white border-[#071A3D] dark:bg-[#16958E] dark:border-[#16958E] shadow-sm'
                : 'bg-white dark:bg-[#071A3D]/60 text-[#071A3D] dark:text-slate-200 border-[#BCEBFF] dark:border-[#16958E]/30 hover:bg-[#BCEBFF]/30'
            }`}
          >
            الكل ({mergedVerifiedTerms.length})
          </button>

          {availableSpecialties.map((spec) => {
            const active = selectedSpecialty === spec.name;
            return (
              <button
                key={spec.name}
                type="button"
                onClick={() => {
                  setSelectedSpecialty(spec.name);
                  setVisibleLimit(CLIENT_VISIBLE_INCREMENT);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  active
                    ? 'bg-[#071A3D] text-white border-[#071A3D] dark:bg-[#16958E] dark:border-[#16958E] shadow-sm'
                    : 'bg-white dark:bg-[#071A3D]/60 text-[#071A3D] dark:text-slate-200 border-[#BCEBFF] dark:border-[#16958E]/30 hover:bg-[#BCEBFF]/30'
                }`}
              >
                {spec.arLabel ? `${spec.arLabel} · ${spec.name}` : spec.name} ({spec.count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Spelling Correction Suggestion ("Did You Mean?") */}
      {searchOutput.didYouMean && debouncedQuery && (
        <div
          role="status"
          className="p-4 rounded-2xl bg-[#BCEBFF]/30 dark:bg-[#16958E]/15 border border-[#16958E]/40 flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2.5 text-sm">
            <Sparkles className="w-4 h-4 text-[#16958E] flex-shrink-0" />
            <span className="font-bold text-[#071A3D] dark:text-slate-200">هل تقصد:</span>
            <button
              type="button"
              onClick={() => setRawInput(searchOutput.didYouMean!.term_en)}
              className="font-extrabold font-montserrat text-[#16958E] dark:text-[#BCEBFF] underline underline-offset-4 hover:opacity-80 cursor-pointer"
            >
              {searchOutput.didYouMean.term_en}
            </button>
            <span className="text-xs text-slate-600 dark:text-slate-300">
              ({searchOutput.didYouMean.term_ar})
            </span>
          </div>

          <button
            type="button"
            onClick={() => onSelectTerm(searchOutput.didYouMean!.id)}
            className="px-3.5 py-1.5 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            فتح البطاقة العلمية
          </button>
        </div>
      )}

      {/* Results Status Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          {isInitialLoading
            ? 'جاري تحميل فهرس المصطلحات الطبية...'
            : debouncedQuery
            ? `تم العثور على ${searchOutput.results.length} نتيجة مطابقة`
            : `عرض ${visibleResults.length} من أصل ${searchOutput.results.length} مصطلح موثق`}
        </span>
        {debouncedQuery && isSearchingRemote && (
          <span className="flex items-center gap-1.5 text-[#16958E] font-bold">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>جاري البحث المعمق...</span>
          </span>
        )}
      </div>

      {/* Results Grid / Empty State */}
      {isInitialLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="h-44 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 animate-pulse"
            />
          ))}
        </div>
      ) : visibleResults.length === 0 ? (
        <div className="p-10 rounded-[2rem] bg-slate-50 dark:bg-[#071A3D]/60 border border-slate-200 dark:border-[#16958E]/30 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-200/80 dark:bg-white/10 text-slate-500 dark:text-[#BCEBFF] flex items-center justify-center mx-auto">
            <AlertCircle className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 max-w-md mx-auto">
            <h3 className="text-lg font-extrabold font-tajawal text-[#071A3D] dark:text-white">
              لم يتم العثور على مصطلحات مطابقة
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              تأكد من كتابة المصطلح بالإنجليزية أو العربية، أو جرّب البحث بمصطلح أكثر عمومية أو تغيير تصفية التخصص.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {rawInput && (
              <button
                type="button"
                onClick={() => setRawInput('')}
                className="px-4 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                مسح نص البحث
              </button>
            )}
            {selectedSpecialty !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedSpecialty('all')}
                className="px-4 py-2 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-[#071A3D] dark:text-white text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer"
              >
                عرض جميع التخصصات
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleResults.map(({ term, matchReason }) => {
            const specialtyAr = MEDICAL_SPECIALTY_AR_LABELS[term.specialty];
            const isCardSpeaking = speakingCardId === term.id;

            return (
              <article
                key={term.id}
                onClick={() => onSelectTerm(term.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectTerm(term.id);
                  }
                }}
                className="group cursor-pointer rounded-3xl bg-white dark:bg-[#071A3D] border border-[#BCEBFF]/80 dark:border-[#16958E]/30 hover:border-[#16958E] dark:hover:border-[#BCEBFF] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4 text-right"
              >
                <div className="space-y-3">
                  {/* Card Top: Static unboxed metadata + Quick Audio button */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-[11px] font-bold text-[#16958E] dark:text-[#BCEBFF] leading-snug">
                      {term.specialty}
                      {specialtyAr ? ` · ${specialtyAr}` : ''}
                      {matchReason === 'fuzzy' && debouncedQuery ? ' · تطابق تقريبي' : ''}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleQuickPronounce(e, term)}
                      aria-label={`نطق ${term.term_en}`}
                      title={`استماع لنطق ${term.term_en}`}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer ${
                        isCardSpeaking
                          ? 'bg-rose-600 text-white'
                          : 'bg-[#BCEBFF]/40 hover:bg-[#16958E] text-[#071A3D] hover:text-white dark:bg-[#16958E]/20 dark:text-[#BCEBFF]'
                      }`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* English & Arabic Names with Highlight */}
                  <div>
                    <h2
                      dir="ltr"
                      className="text-lg sm:text-xl font-extrabold font-montserrat text-[#071A3D] dark:text-white text-left leading-snug group-hover:text-[#16958E] dark:group-hover:text-[#BCEBFF] transition-colors"
                    >
                      <HighlightedText text={term.term_en} query={debouncedQuery} />
                    </h2>
                    <p className="text-sm sm:text-base font-bold font-tajawal text-slate-700 dark:text-slate-200 mt-1">
                      <HighlightedText text={term.term_ar} query={debouncedQuery} />
                    </p>
                    {(term.pronunciation || term.ipa) && (
                      <p dir="ltr" className="text-[11px] font-mono text-slate-500 dark:text-slate-400 text-left mt-1 truncate">
                        {term.pronunciation} {term.ipa ? `· ${term.ipa}` : ''}
                      </p>
                    )}
                  </div>

                  {/* Brief Bilingual Preview */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {term.arabic_definition}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 flex items-center gap-1 truncate">
                    <BookOpen className="w-3.5 h-3.5 text-[#16958E] flex-shrink-0" />
                    <span className="truncate">{term.sources[0]?.name || 'مصدر طبي موثق'}</span>
                  </span>
                  <span className="font-bold text-[#16958E] dark:text-[#BCEBFF] flex items-center gap-1 flex-shrink-0">
                    <span>التفاصيل</span>
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Load More Pagination */}
      {hasMoreClientItems && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={handleLoadMore}
            className="px-6 py-3 rounded-2xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>
              عرض المزيد ({searchOutput.results.length - visibleResults.length} متبقي)
            </span>
          </button>
        </div>
      )}

      {/* Citations Integrity Footer Banner */}
      <footer className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span>
          جميع التعريفات الطبية في الفهرس موثقة بمراجع علمية معتمدة (MedlinePlus، NIH/NCI، NCBI، WHO) وخاضعة للمراجعة الأكاديمية.
        </span>
        <span className="flex items-center gap-1 font-mono text-[#16958E] dark:text-[#BCEBFF] flex-shrink-0">
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Evidence-Linked Terminology</span>
        </span>
      </footer>

      {/* Detail Modal synchronized with History State (?term=...) */}
      <MedicalTermDetailModal
        term={resolvedRouteTerm}
        isOpen={Boolean(selectedTermId && resolvedRouteTerm)}
        onClose={onCloseTerm}
        onSelectSynonym={(synQuery) => setRawInput(synQuery)}
      />
    </div>
  );
};
