import React, { useEffect, useState } from 'react';
import {
  Volume2,
  Square,
  ExternalLink,
  CheckCircle2,
  Calendar,
  BookOpen,
  Info,
  Stethoscope,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';
import { MedicalTerm } from '../types';
import { Modal } from './common/Modal';
import { PronunciationService } from '../services/pronunciation';
import { MEDICAL_SPECIALTY_AR_LABELS } from '../data/medicalTermsSeed';

interface MedicalTermDetailModalProps {
  term: MedicalTerm | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectSynonym?: (queryText: string) => void;
}

export const MedicalTermDetailModal: React.FC<MedicalTermDetailModalProps> = ({
  term,
  isOpen,
  onClose,
  onSelectSynonym,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [pronunciationNote, setPronunciationNote] = useState<string | null>(null);
  const [pronunciationMode, setPronunciationMode] = useState<'audio' | 'tts' | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    setIsSpeaking(false);
    setPronunciationNote(null);
    setPronunciationMode(null);
    return () => {
      PronunciationService.stop();
    };
  }, [term?.id, isOpen]);

  if (!term) return null;

  const specialtyAr = MEDICAL_SPECIALTY_AR_LABELS[term.specialty] || '';
  const hasAudioFile = Boolean(term.audio_url && /^https?:\/\//i.test(term.audio_url));
  const ttsSupported = PronunciationService.isSpeechSynthesisSupported();

  const handlePlayPronunciation = async () => {
    if (isSpeaking) {
      PronunciationService.stop();
      setIsSpeaking(false);
      return;
    }

    setPronunciationNote(null);
    const result = await PronunciationService.speakTerm(term.term_en, {
      audioUrl: term.audio_url,
      rate: 0.88,
      onStart: (mode) => {
        setIsSpeaking(true);
        setPronunciationMode(mode);
      },
      onEnd: () => {
        setIsSpeaking(false);
      },
      onError: (msg) => {
        setIsSpeaking(false);
        setPronunciationNote(msg);
      },
    });

    if (!result.started && result.message) {
      setPronunciationNote(result.message);
    }
  };

  const handleCopyTerm = async () => {
    try {
      await navigator.clipboard.writeText(`${term.term_en} — ${term.term_ar}`);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 1800);
    } catch {
      // ignore clipboard restriction
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        PronunciationService.stop();
        onClose();
      }}
      maxWidth="3xl"
      title={term.term_en}
      subtitle={`${term.term_ar} · ${term.specialty}${specialtyAr ? ` (${specialtyAr})` : ''}`}
      icon={<Stethoscope className="w-5 h-5 text-[#16958E]" />}
      headerActions={
        <button
          type="button"
          onClick={handleCopyTerm}
          title="نسخ المصطلح"
          className="h-9 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-600 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{copiedId ? 'تم النسخ' : 'نسخ'}</span>
        </button>
      }
      footer={
        <div className="w-full flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>
              حالة التحقق: {term.verification_status === 'verified' ? 'موثق علمياً' : term.verification_status === 'needs_review' ? 'قيد المراجعة' : 'مسودة'}
            </span>
          </span>
          <button
            type="button"
            onClick={() => {
              PronunciationService.stop();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            إغلاق البطاقة
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* SECTION A: Term Identity & Bilingual Equivalents */}
        <section className="p-5 rounded-2xl bg-gradient-to-br from-[#071A3D] to-[#0d2d66] text-white border border-[#16958E]/40 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div dir="ltr" className="text-left space-y-1.5">
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#BCEBFF]/90">
                {term.specialty} {specialtyAr ? `· ${specialtyAr}` : ''}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-montserrat tracking-tight text-white">
                {term.term_en}
              </h3>
            </div>

            <div dir="rtl" className="text-right sm:text-left">
              <div className="text-[11px] font-bold text-[#BCEBFF]/80 mb-1">المقابل الطبي بالعربية</div>
              <p className="text-lg sm:text-xl font-extrabold font-tajawal text-[#BCEBFF]">
                {term.term_ar}
              </p>
            </div>
          </div>

          {term.synonyms && term.synonyms.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-300 font-bold ml-1">مرادفات ومصطلحات مرتبطة:</span>
              {term.synonyms.map((syn, idx) =>
                onSelectSynonym ? (
                  <button
                    key={`${syn}-${idx}`}
                    type="button"
                    onClick={() => {
                      PronunciationService.stop();
                      onSelectSynonym(syn);
                      onClose();
                    }}
                    className="text-[#BCEBFF] hover:text-white underline underline-offset-4 decoration-[#16958E] font-medium cursor-pointer"
                  >
                    {syn}
                  </button>
                ) : (
                  <span key={`${syn}-${idx}`} className="text-slate-100 font-medium">
                    {syn}
                    {idx < term.synonyms.length - 1 ? ' · ' : ''}
                  </span>
                )
              )}
            </div>
          )}
        </section>

        {/* SECTION B: Pronunciation & Phonetics */}
        <section className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-[#16958E]/30 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold font-tajawal text-[#071A3D] dark:text-white flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#16958E]" />
                <span>النطق الصوتي والكتابة الصوتية</span>
              </h4>
              <div dir="ltr" className="text-left flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                {term.pronunciation && (
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    Phonetic: <span className="font-mono text-[#16958E] dark:text-[#BCEBFF]">{term.pronunciation}</span>
                  </span>
                )}
                {term.ipa && (
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    IPA: <span className="font-mono text-[#071A3D] dark:text-white">{term.ipa}</span>
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handlePlayPronunciation}
              disabled={!hasAudioFile && !ttsSupported}
              aria-label={isSpeaking ? 'إيقاف النطق الصوتي' : `استماع إلى نطق ${term.term_en}`}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                isSpeaking
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : 'bg-[#16958E] hover:bg-[#127d77] text-white'
              }`}
            >
              {isSpeaking ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>إيقاف النطق</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>استماع للنطق بالإنجليزية</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
            <Info className="w-3.5 h-3.5 text-[#16958E] flex-shrink-0 mt-0.5" />
            <span>
              {hasAudioFile
                ? 'يتوفر ملف نطق صوتي مسجل لهذا المصطلح، مع إمكانية التراجع التلقائي إلى نطق المتصفح عند الحاجة.'
                : ttsSupported
                ? 'يعتمد النطق الصوتي هنا على محرك النطق الآلي في المتصفح (Web Speech API - SpeechSynthesis) باللهجة الإنجليزية القياسية.'
                : 'المتصفح الحالي لا يدعم محرك النطق الصوتي الآلي (Web Speech API)؛ يمكنك استخدام الدليل الصوتي والرموز الدولية (IPA) أعلاه.'}
              {pronunciationMode === 'tts' && isSpeaking && ' — جاري القراءة الآلية الآن...'}
            </span>
          </div>

          {pronunciationNote && (
            <p className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 px-3 py-2 rounded-xl">
              {pronunciationNote}
            </p>
          )}
        </section>

        {/* SECTION C: Scientific Explanation in English */}
        <section
          dir="ltr"
          className="p-5 rounded-2xl bg-white dark:bg-[#071A3D]/80 border border-slate-200 dark:border-[#16958E]/30 space-y-2 text-left"
        >
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#16958E] dark:text-[#BCEBFF]">
            <BookOpen className="w-4 h-4" />
            <span>English Scientific Definition</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100 font-medium">
            {term.english_definition}
          </p>
        </section>

        {/* SECTION D: Scientific Explanation in Arabic */}
        <section
          dir="rtl"
          className="p-5 rounded-2xl bg-[#BCEBFF]/15 dark:bg-[#16958E]/10 border border-[#16958E]/30 space-y-2 text-right"
        >
          <div className="flex items-center gap-2 text-xs font-extrabold font-tajawal text-[#071A3D] dark:text-[#BCEBFF]">
            <Sparkles className="w-4 h-4 text-[#16958E]" />
            <span>الشرح العلمي المبسط والدقيق بالعربية</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-[#071A3D] dark:text-slate-100 font-medium">
            {term.arabic_definition}
          </p>
        </section>

        {/* SECTION E: Verified Medical Citations & Verification Date */}
        <section className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-xs font-extrabold font-tajawal text-[#071A3D] dark:text-white">
              المصادر الطبية الموثوقة والمراجع العلمية
            </h4>
            {term.last_verified && (
              <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#16958E]" />
                <span>آخر توثيق: {term.last_verified}</span>
              </span>
            )}
          </div>

          <ul className="space-y-2">
            {term.sources.map((src, idx) => (
              <li key={`${src.url}-${idx}`}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-[#071A3D] border border-slate-200 dark:border-[#16958E]/30 hover:border-[#16958E] flex items-center justify-between gap-3 transition-colors group"
                >
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#071A3D] dark:text-white block truncate group-hover:text-[#16958E] transition-colors">
                      {src.name}
                    </span>
                    <span dir="ltr" className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block truncate text-left">
                      {src.url}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#16958E] flex-shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Modal>
  );
};
