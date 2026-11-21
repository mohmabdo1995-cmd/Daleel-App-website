import React, { useEffect, useMemo, useState } from 'react';
import {
  Stethoscope,
  Plus,
  Search,
  Edit3,
  Trash2,
  Eye,
  Upload,
  Download,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  FileJson,
  FileSpreadsheet,
  X,
} from 'lucide-react';
import {
  MedicalTerm,
  MedicalTermSource,
  MedicalTermVerificationStatus,
} from '../../types';
import {
  BUILT_IN_MEDICAL_SPECIALTIES,
  MEDICAL_SPECIALTY_AR_LABELS,
  MEDICAL_TERMS_SEED,
} from '../../data/medicalTermsSeed';
import {
  BulkImportPreviewRow,
  MedicalTermDraftInput,
  MedicalTermsService,
  sanitizeAndValidateMedicalTerm,
} from '../../services/medicalTermsService';
import { slugifyMedicalTermId } from '../../services/medicalSearch';
import { Modal } from '../common/Modal';
import { MedicalTermDetailModal } from '../MedicalTermDetailModal';

interface MedicalTermsManagerProps {
  onNotify?: (msg: string, type?: 'success' | 'error') => void;
}

const EMPTY_SOURCE = (): MedicalTermSource => ({
  name: '',
  url: 'https://',
  accessedAt: new Date().toISOString().split('T')[0],
});

export const MedicalTermsManager: React.FC<MedicalTermsManagerProps> = ({ onNotify }) => {
  const [terms, setTerms] = useState<MedicalTerm[]>([]);
  const [isFromFirestore, setIsFromFirestore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVerifiedAdmin, setIsVerifiedAdmin] = useState<boolean | null>(null);
  const [isVerifyingGoogle, setIsVerifyingGoogle] = useState(false);

  // Filter & search state
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | MedicalTermVerificationStatus>('all');
  const [specialtyFilter, setSpecialtyFilter] = useState<string>('all');

  // Add / Edit Modal state
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingOriginalTerm, setEditingOriginalTerm] = useState<MedicalTerm | null>(null);
  const [draft, setDraft] = useState<MedicalTermDraftInput>({
    term_en: '',
    term_ar: '',
    synonyms: [],
    pronunciation: '',
    ipa: '',
    audio_url: '',
    english_definition: '',
    arabic_definition: '',
    specialty: 'Anatomy',
    sources: [EMPTY_SOURCE()],
    verification_status: 'verified',
    last_verified: new Date().toISOString().split('T')[0],
  });
  const [synonymsInput, setSynonymsInput] = useState('');
  const [isCustomSpecialty, setIsCustomSpecialty] = useState(false);
  const [customSpecialtyText, setCustomSpecialtyText] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Delete Confirmation Modal
  const [deletingTerm, setDeletingTerm] = useState<MedicalTerm | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Detail Preview Modal
  const [previewTerm, setPreviewTerm] = useState<MedicalTerm | null>(null);

  // Seed state
  const [isSeeding, setIsSeeding] = useState(false);

  // Bulk Import Modal
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [importFormat, setImportFormat] = useState<'json' | 'csv'>('json');
  const [importText, setImportText] = useState('');
  const [preserveVerified, setPreserveVerified] = useState(true);
  const [importPreviewRows, setImportPreviewRows] = useState<BulkImportPreviewRow[] | null>(null);
  const [importParseError, setImportParseError] = useState<string | null>(null);
  const [isCommittingImport, setIsCommittingImport] = useState(false);

  const notify = (msg: string, type: 'success' | 'error' = 'success') => {
    onNotify?.(msg, type);
  };

  useEffect(() => {
    MedicalTermsService.isVerifiedAdminFirebaseSession().then(setIsVerifiedAdmin);

    const unsub = MedicalTermsService.subscribeAdminMedicalTerms(
      (items, remote) => {
        setTerms(items);
        setIsFromFirestore(remote);
        setIsLoading(false);
      },
      (err) => {
        setIsLoading(false);
        console.warn('Admin terms stream error:', err);
      }
    );
    return () => unsub();
  }, []);

  const handleVerifyGoogleAdmin = async () => {
    setIsVerifyingGoogle(true);
    try {
      const res = await MedicalTermsService.signInAdminWithGoogle();
      if (res.authorized) {
        setIsVerifiedAdmin(true);
        notify(`تم توثيق جلسة المشرف (${res.email}) بنجاح، الكتابة إلى Firestore مفعلة الآن.`);
      } else {
        setIsVerifiedAdmin(false);
        notify(res.error || 'هذا الحساب لا يملك صلاحية المشرف.', 'error');
      }
    } catch (err: any) {
      notify(err?.message || 'فشل توثيق حساب Google للمشرف.', 'error');
    } finally {
      setIsVerifyingGoogle(false);
    }
  };

  const handleSeedBaseline = async () => {
    setIsSeeding(true);
    try {
      const existingMap = new Map<string, MedicalTerm>(terms.map((t) => [t.id, t]));
      const res = await MedicalTermsService.seedBaselineMedicalTerms(existingMap);
      notify(`تمت مزامنة القاعدة: إضافة ${res.inserted} مصطلحاً جديداً (تخطي ${res.skipped} موجود مسبقاً).`);
    } catch (err: any) {
      notify(
        'تعذرت المزامنة: تأكد من توثيق حساب المشرف عبر Google لتفعيل صلاحيات الكتابة في Firestore.',
        'error'
      );
    } finally {
      setIsSeeding(false);
    }
  };

  // Dynamic specialty list (built-in + any custom specialties stored in Firestore)
  const allSpecialties = useMemo(() => {
    const set = new Set<string>(BUILT_IN_MEDICAL_SPECIALTIES);
    for (const t of terms) {
      if (t.specialty) set.add(t.specialty);
    }
    return Array.from(set);
  }, [terms]);

  // Status counters
  const stats = useMemo(() => {
    let verified = 0;
    let needsReview = 0;
    let draftCount = 0;
    for (const t of terms) {
      if (t.verification_status === 'verified') verified++;
      else if (t.verification_status === 'needs_review') needsReview++;
      else draftCount++;
    }
    return { total: terms.length, verified, needsReview, draft: draftCount };
  }, [terms]);

  // Filtered list for Admin table/cards
  const filteredTerms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return terms.filter((t) => {
      if (statusFilter !== 'all' && t.verification_status !== statusFilter) return false;
      if (specialtyFilter !== 'all' && t.specialty !== specialtyFilter) return false;
      if (!q) return true;
      return (
        t.term_en.toLowerCase().includes(q) ||
        t.term_ar.toLowerCase().includes(q) ||
        t.specialty.toLowerCase().includes(q) ||
        t.synonyms.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [terms, searchQuery, statusFilter, specialtyFilter]);

  const openAddModal = () => {
    setEditingOriginalTerm(null);
    setFormErrors({});
    setSubmitError(null);
    setIsCustomSpecialty(false);
    setCustomSpecialtyText('');
    setSynonymsInput('');
    setDraft({
      term_en: '',
      term_ar: '',
      synonyms: [],
      pronunciation: '',
      ipa: '',
      audio_url: '',
      english_definition: '',
      arabic_definition: '',
      specialty: 'Anatomy',
      sources: [EMPTY_SOURCE()],
      verification_status: 'verified',
      last_verified: new Date().toISOString().split('T')[0],
    });
    setIsEditorOpen(true);
  };

  const openEditModal = (term: MedicalTerm) => {
    setEditingOriginalTerm(term);
    setFormErrors({});
    setSubmitError(null);
    const known = BUILT_IN_MEDICAL_SPECIALTIES.includes(term.specialty);
    setIsCustomSpecialty(!known);
    setCustomSpecialtyText(known ? '' : term.specialty);
    setSynonymsInput((term.synonyms || []).join('، '));
    setDraft({
      id: term.id,
      term_en: term.term_en,
      term_ar: term.term_ar,
      synonyms: term.synonyms || [],
      pronunciation: term.pronunciation || '',
      ipa: term.ipa || '',
      audio_url: term.audio_url || '',
      english_definition: term.english_definition,
      arabic_definition: term.arabic_definition,
      specialty: term.specialty,
      sources: term.sources.length > 0 ? term.sources.map((s) => ({ ...s })) : [EMPTY_SOURCE()],
      verification_status: term.verification_status,
      last_verified: term.last_verified || new Date().toISOString().split('T')[0],
      created_at: term.created_at,
    });
    setIsEditorOpen(true);
  };

  const handleSaveTerm = async () => {
    setSubmitError(null);
    const resolvedSpecialty = isCustomSpecialty ? customSpecialtyText.trim() : draft.specialty;
    const parsedSynonyms = synonymsInput
      .split(/[،,;|]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    const payload: MedicalTermDraftInput = {
      ...draft,
      specialty: resolvedSpecialty,
      synonyms: parsedSynonyms,
    };

    const validation = sanitizeAndValidateMedicalTerm(payload, editingOriginalTerm?.created_at);
    if (!validation.valid) {
      setFormErrors('errors' in validation ? validation.errors : {});
      return;
    }
    setFormErrors({});

    setIsSaving(true);
    try {
      if (editingOriginalTerm) {
        await MedicalTermsService.updateMedicalTerm(
          editingOriginalTerm.id,
          payload,
          editingOriginalTerm.created_at
        );
        notify(`تم تحديث المصطلح "${validation.term.term_en}" بنجاح.`);
      } else {
        await MedicalTermsService.addMedicalTerm(payload);
        notify(`تمت إضافة المصطلح "${validation.term.term_en}" وحفظه في Firestore.`);
      }
      setIsEditorOpen(false);
    } catch (err: any) {
      const msg = err instanceof Error ? err.message : 'تعذر حفظ المصطلح';
      if (msg.includes('permission-denied') || msg.includes('Missing or insufficient permissions')) {
        setSubmitError('تم رفض الكتابة: يجب توثيق جلسة المشرف عبر Google (mohmabdo1995@gmail.com) أولاً.');
      } else {
        setSubmitError(msg);
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!deletingTerm) return;
    setIsDeleting(true);
    try {
      await MedicalTermsService.deleteMedicalTerm(deletingTerm.id, deletingTerm.term_en);
      notify(`تم حذف المصطلح "${deletingTerm.term_en}" نهائياً.`);
      setDeletingTerm(null);
    } catch (err: any) {
      notify('فشل الحذف: تأكد من توثيق حساب المشرف عبر Google.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handlePreviewBulkImport = () => {
    setImportParseError(null);
    try {
      const rows = MedicalTermsService.parseBulkImportPayload(
        importText,
        importFormat,
        terms,
        preserveVerified
      );
      setImportPreviewRows(rows);
    } catch (err: any) {
      setImportPreviewRows(null);
      setImportParseError(err?.message || 'تعذر قراءة البيانات المدخلة.');
    }
  };

  const handleCommitBulkImport = async () => {
    if (!importPreviewRows) return;
    setIsCommittingImport(true);
    try {
      const result = await MedicalTermsService.commitBulkImportRows(importPreviewRows);
      notify(
        `اكتمل الاستيراد: إضافة ${result.created}، تحديث ${result.updated}، تخطي مكرر ${result.skipped}.`
      );
      setIsImportOpen(false);
      setImportPreviewRows(null);
      setImportText('');
    } catch {
      notify('فشل تنفيذ الاستيراد الجماعي: تحقق من صلاحيات المشرف.', 'error');
    } finally {
      setIsCommittingImport(false);
    }
  };

  const handleExportJson = () => {
    const payload = terms.length > 0 ? terms : MEDICAL_TERMS_SEED;
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `medical_terms_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    notify('تم تصدير قاعدة المصطلحات الطبية بصيغة JSON.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-[#16958E]" />
            <h2 className="text-xl font-extrabold font-tajawal text-slate-900">
              إدارة فهرس المصطلحات الطبية
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            إضافة وتعديل وتدقيق المصطلحات العلمية الإنجليزية والعربية مع روابط المراجع الموثوقة والاستيراد الجماعي
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleSeedBaseline}
            disabled={isSeeding}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60"
            title="مزامنة المصطلحات الافتراضية الموثقة إلى Firestore دون استبدال أي تعديل سابق"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#16958E] ${isSeeding ? 'animate-spin' : ''}`} />
            <span>مزامنة الأساس ({MEDICAL_TERMS_SEED.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setImportParseError(null);
              setImportPreviewRows(null);
              setIsImportOpen(true);
            }}
            className="px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>استيراد JSON/CSV</span>
          </button>

          <button
            type="button"
            onClick={handleExportJson}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>تصدير</span>
          </button>

          <button
            type="button"
            onClick={openAddModal}
            className="px-4 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>إضافة مصطلح طبي</span>
          </button>
        </div>
      </div>

      {/* Firebase Admin Verification Banner */}
      {isVerifiedAdmin === false && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-extrabold text-amber-900">
                جلسة الإدارة الحالية محلية فقط (كلمة مرور)
              </p>
              <p className="text-[11px] text-amber-800 mt-0.5">
                قواعد أمان Firestore تمنع تعديل أو حذف المصطلحات الطبية إلا عبر حساب المشرف الموثّق في Google. اضغط لتوثيق جلستك وتفعيل الحفظ السحابي.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleVerifyGoogleAdmin}
            disabled={isVerifyingGoogle}
            className="px-4 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold flex items-center gap-1.5 transition-colors flex-shrink-0 cursor-pointer disabled:opacity-60"
          >
            <ShieldCheck className="w-4 h-4 text-[#BCEBFF]" />
            <span>{isVerifyingGoogle ? 'جاري التحقق...' : 'توثيق حساب المشرف عبر Google'}</span>
          </button>
        </div>
      )}

      {isVerifiedAdmin === true && (
        <div className="px-4 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>جلسة المشرف موثّقة عبر Google — الصلاحية الكاملة للكتابة والمزامنة في Firestore مفعّلة.</span>
        </div>
      )}

      {/* KPI Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          type="button"
          onClick={() => setStatusFilter('all')}
          className={`p-4 rounded-2xl border text-right transition-all cursor-pointer ${
            statusFilter === 'all'
              ? 'bg-[#071A3D] text-white border-[#071A3D]'
              : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100'
          }`}
        >
          <p className={`text-[11px] font-bold ${statusFilter === 'all' ? 'text-[#BCEBFF]' : 'text-slate-500'}`}>
            إجمالي في Firestore
          </p>
          <p className="text-2xl font-black font-mono mt-1">{stats.total}</p>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('verified')}
          className={`p-4 rounded-2xl border text-right transition-all cursor-pointer ${
            statusFilter === 'verified'
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-emerald-50/70 border-emerald-200 text-emerald-950 hover:bg-emerald-100/70'
          }`}
        >
          <p className={`text-[11px] font-bold ${statusFilter === 'verified' ? 'text-emerald-100' : 'text-emerald-700'}`}>
            موثّق ومنشور (Verified)
          </p>
          <p className="text-2xl font-black font-mono mt-1">{stats.verified}</p>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('needs_review')}
          className={`p-4 rounded-2xl border text-right transition-all cursor-pointer ${
            statusFilter === 'needs_review'
              ? 'bg-amber-600 text-white border-amber-600'
              : 'bg-amber-50/70 border-amber-200 text-amber-950 hover:bg-amber-100/70'
          }`}
        >
          <p className={`text-[11px] font-bold ${statusFilter === 'needs_review' ? 'text-amber-100' : 'text-amber-700'}`}>
            قائمة مراجعة (Needs Review)
          </p>
          <p className="text-2xl font-black font-mono mt-1">{stats.needsReview}</p>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('draft')}
          className={`p-4 rounded-2xl border text-right transition-all cursor-pointer ${
            statusFilter === 'draft'
              ? 'bg-slate-700 text-white border-slate-700'
              : 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200'
          }`}
        >
          <p className={`text-[11px] font-bold ${statusFilter === 'draft' ? 'text-slate-200' : 'text-slate-500'}`}>
            مسودة (Draft)
          </p>
          <p className="text-2xl font-black font-mono mt-1">{stats.draft}</p>
        </button>
      </div>

      {/* Search & Specialty Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بحث في قائمة الإدارة (إنجليزي، عربي، مرادفات)..."
            className="w-full pr-9 pl-8 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold outline-none focus:border-[#16958E]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute left-2.5 top-2 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <select
          value={specialtyFilter}
          onChange={(e) => setSpecialtyFilter(e.target.value)}
          className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 outline-none focus:border-[#16958E]"
        >
          <option value="all">كل التخصصات ({allSpecialties.length})</option>
          {allSpecialties.map((spec) => (
            <option key={spec} value={spec}>
              {MEDICAL_SPECIALTY_AR_LABELS[spec] ? `${MEDICAL_SPECIALTY_AR_LABELS[spec]} (${spec})` : spec}
            </option>
          ))}
        </select>
      </div>

      {/* Terms List */}
      {isLoading ? (
        <div className="py-12 text-center text-xs font-bold text-slate-500">
          جاري تحميل المصطلحات من قاعدة البيانات...
        </div>
      ) : terms.length === 0 ? (
        <div className="p-8 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-3">
          <BookOpen className="w-9 h-9 text-[#16958E] mx-auto" />
          <div className="space-y-1">
            <h3 className="text-sm font-extrabold text-slate-900">
              مجموعة medical_terms في Firestore فارغة حالياً
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              يعرض الموقع للزوار حالياً القائمة الموثقة المدمجة ({MEDICAL_TERMS_SEED.length} مصطلحاً). يمكنك مزامنتها بضغطة زر إلى Firestore لبدء التعديل والإضافة السحابية.
            </p>
          </div>
          <button
            type="button"
            onClick={handleSeedBaseline}
            disabled={isSeeding}
            className="px-5 py-2.5 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isSeeding ? 'animate-spin' : ''}`} />
            <span>مزامنة {MEDICAL_TERMS_SEED.length} مصطلحاً إلى Firestore الآن</span>
          </button>
        </div>
      ) : filteredTerms.length === 0 ? (
        <div className="py-10 text-center bg-slate-50 rounded-2xl border border-slate-200 text-xs font-bold text-slate-500">
          لا توجد مصطلحات مطابقة للفلاتر المختارة ({isFromFirestore ? 'Firestore' : 'المحلي'}).
        </div>
      ) : (
        <div className="space-y-2.5">
          {filteredTerms.map((term) => (
            <div
              key={term.id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 dir="ltr" className="font-extrabold font-montserrat text-sm text-[#071A3D]">
                    {term.term_en}
                  </h3>
                  <span className="text-slate-400">·</span>
                  <span className="font-bold text-sm text-slate-800 font-tajawal">{term.term_ar}</span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      term.verification_status === 'verified'
                        ? 'bg-emerald-100 text-emerald-800'
                        : term.verification_status === 'needs_review'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {term.verification_status === 'verified'
                      ? 'موثق'
                      : term.verification_status === 'needs_review'
                      ? 'يحتاج مراجعة'
                      : 'مسودة'}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 flex flex-wrap items-center gap-x-2">
                  <span>{term.specialty}</span>
                  <span>·</span>
                  <span className="font-mono">{term.sources.length} مصدر</span>
                  {term.last_verified && (
                    <>
                      <span>·</span>
                      <span className="font-mono">{term.last_verified}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => setPreviewTerm(term)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>معاينة</span>
                </button>
                <button
                  type="button"
                  onClick={() => openEditModal(term)}
                  className="px-2.5 py-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>تعديل</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeletingTerm(term)}
                  className="p-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 cursor-pointer"
                  title="حذف المصطلح"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD / EDIT MEDICAL TERM MODAL */}
      {isEditorOpen && (
        <Modal
          isOpen={isEditorOpen}
          onClose={() => !isSaving && setIsEditorOpen(false)}
          maxWidth="3xl"
          title={editingOriginalTerm ? `تعديل: ${editingOriginalTerm.term_en}` : 'إضافة مصطلح طبي جديد'}
          subtitle="يرجى التحقق من صحة الشرح العلمي وإرفاق مصدر موثوق واحد على الأقل (https://)"
          icon={<Stethoscope className="w-5 h-5 text-[#16958E]" />}
          footer={
            <>
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                disabled={isSaving}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold cursor-pointer disabled:opacity-50"
              >
                إلغاء
              </button>
              <button
                type="button"
                onClick={handleSaveTerm}
                disabled={isSaving}
                className="px-6 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSaving ? 'جاري الحفظ...' : editingOriginalTerm ? 'حفظ التعديلات' : 'إضافة للفهرس'}
              </button>
            </>
          }
        >
          <div className="space-y-4">
            {submitError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  المصطلح بالإنجليزية (term_en)*
                </label>
                <input
                  type="text"
                  dir="ltr"
                  value={draft.term_en}
                  onChange={(e) => setDraft({ ...draft, term_en: e.target.value })}
                  placeholder="Myocardium"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-left"
                />
                {draft.term_en.trim() && !editingOriginalTerm && (
                  <p dir="ltr" className="text-[10px] font-mono text-slate-400 mt-1 text-left">
                    Slug ID: {slugifyMedicalTermId(draft.term_en)}
                  </p>
                )}
                {formErrors.term_en && <p className="text-[11px] text-rose-600 mt-1">{formErrors.term_en}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  المقابل بالعربية (term_ar)*
                </label>
                <input
                  type="text"
                  value={draft.term_ar}
                  onChange={(e) => setDraft({ ...draft, term_ar: e.target.value })}
                  placeholder="عضلة القلب"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                />
                {formErrors.term_ar && <p className="text-[11px] text-rose-600 mt-1">{formErrors.term_ar}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">النطق الصوتي (Pronunciation)</label>
                <input
                  type="text"
                  dir="ltr"
                  value={draft.pronunciation}
                  onChange={(e) => setDraft({ ...draft, pronunciation: e.target.value })}
                  placeholder="my-oh-KAR-dee-um"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-left"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الأبجدية الصوتية (IPA)</label>
                <input
                  type="text"
                  dir="ltr"
                  value={draft.ipa}
                  onChange={(e) => setDraft({ ...draft, ipa: e.target.value })}
                  placeholder="/ˌmaɪ.əˈkɑːr.di.əm/"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-left"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">رابط صوتي مسجل (اختياري https)</label>
                <input
                  type="url"
                  dir="ltr"
                  value={draft.audio_url || ''}
                  onChange={(e) => setDraft({ ...draft, audio_url: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-left"
                />
                {formErrors.audio_url && <p className="text-[11px] text-rose-600 mt-1">{formErrors.audio_url}</p>}
              </div>
            </div>

            {/* Extensible Specialty Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">التخصص الطبي*</label>
                <select
                  value={isCustomSpecialty ? '__custom__' : draft.specialty}
                  onChange={(e) => {
                    if (e.target.value === '__custom__') {
                      setIsCustomSpecialty(true);
                    } else {
                      setIsCustomSpecialty(false);
                      setDraft({ ...draft, specialty: e.target.value });
                    }
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                >
                  {allSpecialties.map((s) => (
                    <option key={s} value={s}>
                      {MEDICAL_SPECIALTY_AR_LABELS[s] ? `${MEDICAL_SPECIALTY_AR_LABELS[s]} (${s})` : s}
                    </option>
                  ))}
                  <option value="__custom__">+ إضافة تخصص جديد مخصص...</option>
                </select>

                {isCustomSpecialty && (
                  <input
                    type="text"
                    value={customSpecialtyText}
                    onChange={(e) => setCustomSpecialtyText(e.target.value)}
                    placeholder="اكتب اسم التخصص الجديد بالإنجليزية أو العربية..."
                    className="mt-2 w-full px-3 py-2 rounded-xl bg-white border border-[#16958E] text-xs font-bold"
                  />
                )}
                {formErrors.specialty && <p className="text-[11px] text-rose-600 mt-1">{formErrors.specialty}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  المرادفات (مفصولة بفاصلة)
                </label>
                <input
                  type="text"
                  value={synonymsInput}
                  onChange={(e) => setSynonymsInput(e.target.value)}
                  placeholder="Cardiac muscle, Heart muscle, العضلة القلبية"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                التعريف العلمي بالإنجليزية (english_definition)*
              </label>
              <textarea
                rows={3}
                dir="ltr"
                value={draft.english_definition}
                onChange={(e) => setDraft({ ...draft, english_definition: e.target.value })}
                placeholder="Verified concise scientific explanation in English..."
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left"
              />
              {formErrors.english_definition && (
                <p className="text-[11px] text-rose-600 mt-1">{formErrors.english_definition}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                الشرح العلمي الدقيق بالعربية (arabic_definition)*
              </label>
              <textarea
                rows={3}
                value={draft.arabic_definition}
                onChange={(e) => setDraft({ ...draft, arabic_definition: e.target.value })}
                placeholder="شرح علمي مبسط ودقيق يحافظ على المصطلح الإنجليزي بين قوسين..."
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
              {formErrors.arabic_definition && (
                <p className="text-[11px] text-rose-600 mt-1">{formErrors.arabic_definition}</p>
              )}
            </div>

            {/* Sources List */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-extrabold text-slate-800">
                  المراجع والمصادر الطبية الموثوقة (https://)*
                </label>
                <button
                  type="button"
                  onClick={() => setDraft({ ...draft, sources: [...draft.sources, EMPTY_SOURCE()] })}
                  className="text-xs font-bold text-[#16958E] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>إضافة مصدر</span>
                </button>
              </div>

              {draft.sources.map((src, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                  <input
                    type="text"
                    value={src.name}
                    onChange={(e) => {
                      const next = [...draft.sources];
                      next[idx] = { ...next[idx], name: e.target.value };
                      setDraft({ ...draft, sources: next });
                    }}
                    placeholder="اسم المصدر (MedlinePlus / NCI)"
                    className="sm:col-span-5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />
                  <input
                    type="url"
                    dir="ltr"
                    value={src.url}
                    onChange={(e) => {
                      const next = [...draft.sources];
                      next[idx] = { ...next[idx], url: e.target.value };
                      setDraft({ ...draft, sources: next });
                    }}
                    placeholder="https://medlineplus.gov/..."
                    className="sm:col-span-6 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-left"
                  />
                  <button
                    type="button"
                    disabled={draft.sources.length <= 1}
                    onClick={() => {
                      const next = draft.sources.filter((_, i) => i !== idx);
                      setDraft({ ...draft, sources: next });
                    }}
                    className="sm:col-span-1 p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 disabled:opacity-30 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              {formErrors.sources && <p className="text-[11px] text-rose-600">{formErrors.sources}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">حالة التوثيق</label>
                <select
                  value={draft.verification_status}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      verification_status: e.target.value as MedicalTermVerificationStatus,
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                >
                  <option value="verified">موثق ومنشور للطلاب (verified)</option>
                  <option value="needs_review">يحتاج مراجعة علمية (needs_review)</option>
                  <option value="draft">مسودة غير منشورة (draft)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">تاريخ آخر تدقيق</label>
                <input
                  type="date"
                  value={draft.last_verified}
                  onChange={(e) => setDraft({ ...draft, last_verified: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deletingTerm && (
        <Modal
          isOpen={Boolean(deletingTerm)}
          onClose={() => !isDeleting && setDeletingTerm(null)}
          maxWidth="md"
          title="تأكيد حذف المصطلح"
          icon={<AlertTriangle className="w-5 h-5 text-rose-600" />}
          footer={
            <>
              <button
                type="button"
                onClick={() => setDeletingTerm(null)}
                disabled={isDeleting}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
              >
                إلغاء
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer disabled:opacity-60"
              >
                {isDeleting ? 'جاري الحذف...' : 'حذف نهائي'}
              </button>
            </>
          }
        >
          <p className="text-sm text-slate-700 leading-relaxed">
            هل أنت متأكد من حذف المصطلح الطبي{' '}
            <strong className="font-montserrat text-[#071A3D]">{deletingTerm.term_en}</strong> ({deletingTerm.term_ar}) نهائياً من قاعدة البيانات؟
          </p>
        </Modal>
      )}

      {/* BULK IMPORT JSON / CSV MODAL */}
      {isImportOpen && (
        <Modal
          isOpen={isImportOpen}
          onClose={() => !isCommittingImport && setIsImportOpen(false)}
          maxWidth="3xl"
          title="استيراد جماعي للمصطلحات الطبية (JSON / CSV)"
          subtitle="يدعم فحص المخطط ومنع التكرار وحماية المصطلحات الموثقة مسبقاً"
          icon={importFormat === 'json' ? <FileJson className="w-5 h-5 text-indigo-600" /> : <FileSpreadsheet className="w-5 h-5 text-emerald-600" />}
          footer={
            <>
              <button
                type="button"
                onClick={() => setIsImportOpen(false)}
                disabled={isCommittingImport}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
              >
                إغلاق
              </button>
              {importPreviewRows && importPreviewRows.some((r) => r.valid && r.action !== 'skip_duplicate') && (
                <button
                  type="button"
                  onClick={handleCommitBulkImport}
                  disabled={isCommittingImport}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer disabled:opacity-60"
                >
                  {isCommittingImport ? 'جاري التنفيذ...' : 'اعتماد وحفظ في Firestore'}
                </button>
              )}
            </>
          }
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex rounded-xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => {
                    setImportFormat('json');
                    setImportPreviewRows(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                    importFormat === 'json' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                  }`}
                >
                  JSON Array
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setImportFormat('csv');
                    setImportPreviewRows(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                    importFormat === 'csv' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                  }`}
                >
                  CSV Table
                </button>
              </div>

              <label className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold cursor-pointer flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5" />
                <span>اختيار ملف ({importFormat.toUpperCase()})</span>
                <input
                  type="file"
                  accept={importFormat === 'json' ? '.json,application/json' : '.csv,text/csv'}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                      setImportText(String(ev.target?.result || ''));
                      setImportPreviewRows(null);
                    };
                    reader.readAsText(file);
                  }}
                />
              </label>
            </div>

            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={preserveVerified}
                onChange={(e) => {
                  setPreserveVerified(e.target.checked);
                  setImportPreviewRows(null);
                }}
              />
              <span>عدم الكتابة فوق المصطلحات التي حالتها "موثق" مسبقاً في قاعدة البيانات</span>
            </label>

            <textarea
              rows={7}
              dir="ltr"
              value={importText}
              onChange={(e) => {
                setImportText(e.target.value);
                setImportPreviewRows(null);
              }}
              placeholder={
                importFormat === 'json'
                  ? '[{"term_en":"Tachycardia","term_ar":"تسرّع القلب","english_definition":"...","arabic_definition":"...","specialty":"Cardiology","sources":[{"name":"MedlinePlus","url":"https://medlineplus.gov/"}]}]'
                  : 'term_en,term_ar,synonyms,pronunciation,ipa,specialty,english_definition,arabic_definition,source_name,source_url'
              }
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-left"
            />

            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] text-slate-500">
                سيتم التحقق من صحة الروابط والمخطط العلمي قبل أي كتابة.
              </span>
              <button
                type="button"
                onClick={handlePreviewBulkImport}
                disabled={!importText.trim()}
                className="px-4 py-2 rounded-xl bg-[#071A3D] text-white text-xs font-bold cursor-pointer disabled:opacity-50"
              >
                فحص ومعاينة الصفوف
              </button>
            </div>

            {importParseError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                {importParseError}
              </div>
            )}

            {importPreviewRows && (
              <div className="space-y-2 max-h-56 overflow-y-auto border border-slate-200 rounded-2xl p-3 bg-slate-50">
                <div className="text-xs font-extrabold text-slate-800 mb-2">
                  نتيجة الفحص: جديد ({importPreviewRows.filter((r) => r.action === 'create').length}) ·
                  تحديث ({importPreviewRows.filter((r) => r.action === 'update').length}) ·
                  تخطي مكرر ({importPreviewRows.filter((r) => r.action === 'skip_duplicate').length}) ·
                  غير صالح ({importPreviewRows.filter((r) => !r.valid).length})
                </div>
                {importPreviewRows.map((row) => (
                  <div
                    key={row.rowNumber}
                    className={`p-2 rounded-xl text-[11px] border flex items-center justify-between gap-2 ${
                      !row.valid
                        ? 'bg-rose-50 border-rose-200 text-rose-800'
                        : row.action === 'skip_duplicate'
                        ? 'bg-amber-50 border-amber-200 text-amber-800'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    }`}
                  >
                    <span className="font-bold">
                      صف {row.rowNumber}: {row.term?.term_en || 'غير صالح'}
                    </span>
                    <span className="truncate">
                      {!row.valid
                        ? row.error
                        : row.action === 'skip_duplicate'
                        ? 'تم تخطيه (موثق مسبقاً)'
                        : row.action === 'update'
                        ? 'سيتم تحديثه'
                        : 'إضافة جديدة'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      )}

      {/* PREVIEW DETAIL MODAL */}
      <MedicalTermDetailModal
        term={previewTerm}
        isOpen={Boolean(previewTerm)}
        onClose={() => setPreviewTerm(null)}
      />
    </div>
  );
};
