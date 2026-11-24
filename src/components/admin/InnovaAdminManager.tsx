import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  Building2,
  Calendar,
  CheckCircle2,
  Edit3,
  Eye,
  FileText,
  ImageIcon,
  Layers,
  Plus,
  RefreshCw,
  Save,
  ShieldCheck,
  Trash2,
  Upload,
  User,
  Users,
  X,
} from 'lucide-react';
import {
  InnovaContentCategory,
  InnovaContentItem,
  InnovaInfoData,
  InnovaMemberItem,
} from '../../types';
import {
  DEFAULT_INNOVA_INFO,
  InnovaService,
  sanitizeAndValidateInnovaContent,
  sanitizeAndValidateInnovaInfo,
  sanitizeAndValidateInnovaMember,
} from '../../services/innovaService';
import { Modal } from '../common/Modal';

interface InnovaAdminManagerProps {
  onNotify?: (msg: string, type?: 'success' | 'error') => void;
}

type AdminSubTab = 'identity' | 'members' | 'content';

export const InnovaAdminManager: React.FC<InnovaAdminManagerProps> = ({ onNotify }) => {
  const [subTab, setSubTab] = useState<AdminSubTab>('identity');
  const [isVerifiedAdmin, setIsVerifiedAdmin] = useState<boolean | null>(null);
  const [isVerifyingGoogle, setIsVerifyingGoogle] = useState(false);

  // Feedback banner
  const [banner, setBanner] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Module 1: Identity & About
  const [info, setInfo] = useState<InnovaInfoData>(DEFAULT_INNOVA_INFO);
  const [aboutTitleDraft, setAboutTitleDraft] = useState(DEFAULT_INNOVA_INFO.aboutTitle);
  const [aboutDescriptionDraft, setAboutDescriptionDraft] = useState(
    DEFAULT_INNOVA_INFO.aboutDescription
  );
  const [showAboutPreview, setShowAboutPreview] = useState(false);
  const [isSavingInfo, setIsSavingInfo] = useState(false);

  // Module 2: Executive Board Members
  const [members, setMembers] = useState<InnovaMemberItem[]>([]);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null);
  const [editingMemberCreatedAt, setEditingMemberCreatedAt] = useState<string | undefined>(
    undefined
  );
  const [memberName, setMemberName] = useState('');
  const [memberPosition, setMemberPosition] = useState('');
  const [memberPhotoUrl, setMemberPhotoUrl] = useState('');
  const [memberPhotoStoragePath, setMemberPhotoStoragePath] = useState('');
  const [memberOrder, setMemberOrder] = useState<number>(1);
  const [memberFormError, setMemberFormError] = useState<string | null>(null);
  const [isUploadingMemberPhoto, setIsUploadingMemberPhoto] = useState(false);
  const [isSavingMember, setIsSavingMember] = useState(false);
  const [confirmDeleteMemberId, setConfirmDeleteMemberId] = useState<string | null>(null);
  const [isDeletingMemberId, setIsDeletingMemberId] = useState<string | null>(null);

  // Module 3: Articles & Events
  const [contents, setContents] = useState<InnovaContentItem[]>([]);
  const [contentFilter, setContentFilter] = useState<'all' | InnovaContentCategory>('all');
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [editingContentId, setEditingContentId] = useState<string | null>(null);
  const [editingContentCreatedAt, setEditingContentCreatedAt] = useState<string | undefined>(
    undefined
  );
  const [contentCategory, setContentCategory] = useState<InnovaContentCategory>('articles');
  const [contentTitle, setContentTitle] = useState('');
  const [contentDescription, setContentDescription] = useState('');
  const [contentImageUrl, setContentImageUrl] = useState('');
  const [contentImageStoragePath, setContentImageStoragePath] = useState('');
  const [contentEventDate, setContentEventDate] = useState('');
  const [contentPublished, setContentPublished] = useState(true);
  const [contentFormError, setContentFormError] = useState<string | null>(null);
  const [isUploadingContentImg, setIsUploadingContentImg] = useState(false);
  const [isSavingContent, setIsSavingContent] = useState(false);
  const [previewContentItem, setPreviewContentItem] = useState<InnovaContentItem | null>(null);
  const [confirmDeleteContentId, setConfirmDeleteContentId] = useState<string | null>(null);
  const [isDeletingContentId, setIsDeletingContentId] = useState<string | null>(null);

  const reportSuccess = (msg: string) => {
    setBanner({ type: 'success', message: msg });
    onNotify?.(msg, 'success');
  };

  const reportError = (msg: string) => {
    setBanner({ type: 'error', message: msg });
    onNotify?.(msg, 'error');
  };

  useEffect(() => {
    InnovaService.isVerifiedAdminSession().then((verified) => {
      setIsVerifiedAdmin(verified);
      if (verified) {
        InnovaService.fetchAdminContents().then((allItems) => {
          if (allItems.length > 0) setContents(allItems);
        });
      }
    });

    const unsubInfo = InnovaService.subscribeInnovaInfo((data) => {
      setInfo(data);
      setAboutTitleDraft(data.aboutTitle);
      setAboutDescriptionDraft(data.aboutDescription);
    });

    const unsubMembers = InnovaService.subscribeInnovaMembers((items) => {
      setMembers(items);
    });

    const unsubContents = InnovaService.subscribeInnovaContents((items) => {
      setContents((prev) => {
        // Merge in case admin also fetched unpublished items
        const map = new Map<string, InnovaContentItem>();
        prev.forEach((p) => {
          if (!p.published) map.set(p.id, p);
        });
        items.forEach((it) => map.set(it.id, it));
        return Array.from(map.values()).sort((a, b) =>
          (b.createdAt || '').localeCompare(a.createdAt || '')
        );
      });
    });

    return () => {
      unsubInfo();
      unsubMembers();
      unsubContents();
    };
  }, []);

  const handleVerifyGoogleAdmin = async () => {
    setIsVerifyingGoogle(true);
    try {
      const res = await InnovaService.signInAdminWithGoogle();
      if (res.authorized) {
        setIsVerifiedAdmin(true);
        const allItems = await InnovaService.fetchAdminContents();
        if (allItems.length > 0) setContents(allItems);
        reportSuccess(`تم توثيق جلسة المشرف (${res.email}) بنجاح، الحفظ السحابي مفعّل الآن.`);
      } else {
        setIsVerifiedAdmin(false);
        reportError(res.error || 'هذا الحساب غير مصرح له بصلاحيات المشرف.');
      }
    } catch (err: unknown) {
      reportError(err instanceof Error ? err.message : 'فشل توثيق جلسة Google للمشرف.');
    } finally {
      setIsVerifyingGoogle(false);
    }
  };

  // --- Module 1 Handlers: Identity & About ---
  const handleSaveAboutInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSavingInfo) return;

    const check = sanitizeAndValidateInnovaInfo(
      { aboutTitle: aboutTitleDraft, aboutDescription: aboutDescriptionDraft },
      info.createdAt
    );
    if (!check.valid) {
      reportError((check as { valid: false; error: string }).error);
      return;
    }

    setIsSavingInfo(true);
    try {
      const saved = await InnovaService.updateInnovaInfo({
        aboutTitle: aboutTitleDraft,
        aboutDescription: aboutDescriptionDraft,
      });
      setInfo(saved);
      reportSuccess('تم حفظ عنوان ونص التعريف بجمعية إنوفا بنجاح.');
    } catch (err: unknown) {
      reportError(
        err instanceof Error
          ? err.message
          : 'تعذر حفظ التعريف في Firestore. تأكد من توثيق حساب المشرف.'
      );
    } finally {
      setIsSavingInfo(false);
    }
  };

  // --- Module 2 Handlers: Executive Board Members ---
  const openAddMemberModal = () => {
    setEditingMemberId(null);
    setEditingMemberCreatedAt(undefined);
    setMemberName('');
    setMemberPosition('');
    setMemberPhotoUrl('');
    setMemberPhotoStoragePath('');
    setMemberOrder(members.length + 1);
    setMemberFormError(null);
    setIsMemberModalOpen(true);
  };

  const openEditMemberModal = (member: InnovaMemberItem) => {
    setEditingMemberId(member.id);
    setEditingMemberCreatedAt(member.createdAt);
    setMemberName(member.name);
    setMemberPosition(member.position);
    setMemberPhotoUrl(member.photoUrl || '');
    setMemberPhotoStoragePath(member.photoStoragePath || '');
    setMemberOrder(member.order ?? 1);
    setMemberFormError(null);
    setIsMemberModalOpen(true);
  };

  const handleUploadMemberPhoto = async (file: File) => {
    setMemberFormError(null);
    setIsUploadingMemberPhoto(true);
    try {
      const oldStoragePath = memberPhotoStoragePath;
      const uploaded = await InnovaService.uploadInnovaImage(
        file,
        'members',
        editingMemberId || undefined
      );
      setMemberPhotoUrl(uploaded.url);
      setMemberPhotoStoragePath(uploaded.storagePath);
      if (oldStoragePath && oldStoragePath !== uploaded.storagePath) {
        void InnovaService.deleteInnovaStorageFile(oldStoragePath);
      }
      reportSuccess('تم رفع صورة العضو إلى Firebase Storage بنجاح.');
    } catch (err: unknown) {
      setMemberFormError(
        err instanceof Error ? err.message : 'تعذر رفع الصورة. تحقق من الاتصال وصلاحيات المشرف.'
      );
    } finally {
      setIsUploadingMemberPhoto(false);
    }
  };

  const handleSaveMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSavingMember || isUploadingMemberPhoto) return;

    const check = sanitizeAndValidateInnovaMember(
      {
        id: editingMemberId || undefined,
        name: memberName,
        position: memberPosition,
        photoUrl: memberPhotoUrl,
        photoStoragePath: memberPhotoStoragePath,
        order: memberOrder,
      },
      editingMemberCreatedAt
    );
    if (!check.valid) {
      setMemberFormError((check as { valid: false; error: string }).error);
      return;
    }

    setMemberFormError(null);
    setIsSavingMember(true);
    try {
      if (editingMemberId) {
        const updated = await InnovaService.updateInnovaMember(
          editingMemberId,
          {
            name: memberName,
            position: memberPosition,
            photoUrl: memberPhotoUrl,
            photoStoragePath: memberPhotoStoragePath,
            order: memberOrder,
          },
          editingMemberCreatedAt
        );
        setMembers((prev) =>
          prev
            .map((m) => (m.id === updated.id ? updated : m))
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        );
        reportSuccess('تم تحديث بيانات عضو المجلس التنفيذي بنجاح.');
      } else {
        const created = await InnovaService.addInnovaMember({
          name: memberName,
          position: memberPosition,
          photoUrl: memberPhotoUrl,
          photoStoragePath: memberPhotoStoragePath,
          order: memberOrder,
        });
        setMembers((prev) =>
          [...prev, created].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        );
        reportSuccess('تمت إضافة العضو الجديد إلى قائمة أعضاء إنوفا.');
      }
      setIsMemberModalOpen(false);
    } catch (err: unknown) {
      setMemberFormError(
        err instanceof Error
          ? err.message
          : 'تعذر حفظ بيانات العضو في Firestore. تأكد من توثيق حساب المشرف.'
      );
    } finally {
      setIsSavingMember(false);
    }
  };

  const handleDeleteMember = async (member: InnovaMemberItem) => {
    if (isDeletingMemberId) return;
    setIsDeletingMemberId(member.id);
    try {
      await InnovaService.deleteInnovaMember(member.id, member.photoStoragePath);
      setMembers((prev) => prev.filter((m) => m.id !== member.id));
      setConfirmDeleteMemberId(null);
      reportSuccess(`تم حذف العضو "${member.name}" بنجاح.`);
    } catch (err: unknown) {
      reportError(
        err instanceof Error ? err.message : 'تعذر حذف العضو من قاعدة البيانات.'
      );
    } finally {
      setIsDeletingMemberId(null);
    }
  };

  // --- Module 3 Handlers: Articles & Events ---
  const openAddContentModal = () => {
    setEditingContentId(null);
    setEditingContentCreatedAt(undefined);
    setContentCategory('articles');
    setContentTitle('');
    setContentDescription('');
    setContentImageUrl('');
    setContentImageStoragePath('');
    setContentEventDate(new Date().toISOString().split('T')[0]);
    setContentPublished(true);
    setContentFormError(null);
    setIsContentModalOpen(true);
  };

  const openEditContentModal = (item: InnovaContentItem) => {
    setEditingContentId(item.id);
    setEditingContentCreatedAt(item.createdAt);
    setContentCategory(item.category);
    setContentTitle(item.title);
    setContentDescription(item.description);
    setContentImageUrl(item.imageUrl || '');
    setContentImageStoragePath(item.imageStoragePath || '');
    setContentEventDate(item.eventDate || '');
    setContentPublished(item.published !== false);
    setContentFormError(null);
    setIsContentModalOpen(true);
  };

  const handleUploadContentImage = async (file: File) => {
    setContentFormError(null);
    setIsUploadingContentImg(true);
    try {
      const oldStoragePath = contentImageStoragePath;
      const uploaded = await InnovaService.uploadInnovaImage(
        file,
        'content',
        editingContentId || undefined
      );
      setContentImageUrl(uploaded.url);
      setContentImageStoragePath(uploaded.storagePath);
      if (oldStoragePath && oldStoragePath !== uploaded.storagePath) {
        void InnovaService.deleteInnovaStorageFile(oldStoragePath);
      }
      reportSuccess('تم رفع صورة البطاقة إلى Firebase Storage بنجاح.');
    } catch (err: unknown) {
      setContentFormError(
        err instanceof Error ? err.message : 'تعذر رفع الصورة. تحقق من الاتصال وصلاحيات المشرف.'
      );
    } finally {
      setIsUploadingContentImg(false);
    }
  };

  const handlePreviewDraftContent = () => {
    const check = sanitizeAndValidateInnovaContent(
      {
        id: editingContentId || 'preview_item',
        category: contentCategory,
        title: contentTitle,
        description: contentDescription,
        imageUrl: contentImageUrl,
        imageStoragePath: contentImageStoragePath,
        published: contentPublished,
        eventDate: contentEventDate,
      },
      editingContentCreatedAt
    );
    if (!check.valid) {
      setContentFormError((check as { valid: false; error: string }).error);
      return;
    }
    setContentFormError(null);
    setPreviewContentItem(check.data);
  };

  const handleSaveContent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSavingContent || isUploadingContentImg) return;

    const check = sanitizeAndValidateInnovaContent(
      {
        id: editingContentId || undefined,
        category: contentCategory,
        title: contentTitle,
        description: contentDescription,
        imageUrl: contentImageUrl,
        imageStoragePath: contentImageStoragePath,
        published: contentPublished,
        eventDate: contentEventDate,
      },
      editingContentCreatedAt
    );
    if (!check.valid) {
      setContentFormError((check as { valid: false; error: string }).error);
      return;
    }

    setContentFormError(null);
    setIsSavingContent(true);
    try {
      if (editingContentId) {
        const updated = await InnovaService.updateInnovaContent(
          editingContentId,
          {
            category: contentCategory,
            title: contentTitle,
            description: contentDescription,
            imageUrl: contentImageUrl,
            imageStoragePath: contentImageStoragePath,
            published: contentPublished,
            eventDate: contentEventDate,
          },
          editingContentCreatedAt
        );
        setContents((prev) =>
          prev
            .map((c) => (c.id === updated.id ? updated : c))
            .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
        );
        reportSuccess('تم تحديث البطاقة بنجاح.');
      } else {
        const created = await InnovaService.addInnovaContent({
          category: contentCategory,
          title: contentTitle,
          description: contentDescription,
          imageUrl: contentImageUrl,
          imageStoragePath: contentImageStoragePath,
          published: contentPublished,
          eventDate: contentEventDate,
        });
        setContents((prev) =>
          [created, ...prev].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
        );
        reportSuccess(
          contentCategory === 'events'
            ? 'تم نشر الفعالية الجديدة في صفحة جمعية إنوفا.'
            : 'تم نشر المقال الجديد في صفحة جمعية إنوفا.'
        );
      }
      setIsContentModalOpen(false);
    } catch (err: unknown) {
      setContentFormError(
        err instanceof Error
          ? err.message
          : 'تعذر حفظ المحتوى في Firestore. تأكد من توثيق حساب المشرف.'
      );
    } finally {
      setIsSavingContent(false);
    }
  };

  const handleDeleteContent = async (item: InnovaContentItem) => {
    if (isDeletingContentId) return;
    setIsDeletingContentId(item.id);
    try {
      await InnovaService.deleteInnovaContent(item.id, item.imageStoragePath);
      setContents((prev) => prev.filter((c) => c.id !== item.id));
      setConfirmDeleteContentId(null);
      reportSuccess(`تم حذف "${item.title}" بنجاح.`);
    } catch (err: unknown) {
      reportError(
        err instanceof Error ? err.message : 'تعذر حذف المحتوى من قاعدة البيانات.'
      );
    } finally {
      setIsDeletingContentId(null);
    }
  };

  const filteredContents = useMemo(() => {
    if (contentFilter === 'all') return contents;
    return contents.filter((c) => c.category === contentFilter);
  }, [contents, contentFilter]);

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-10 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center flex-shrink-0">
            <img
              src="/assets/innova-logo.svg"
              alt="INNOVA"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-xl font-extrabold font-tajawal text-slate-900">
              إدارة جمعية إنوفا (INNOVA)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              إدارة التعريف، أعضاء المجلس التنفيذي، المقالات والفعاليات ديناميكياً عبر Firestore
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
          <span>الأعضاء: {members.length}</span>
          <span className="text-slate-300">·</span>
          <span>المقالات والفعاليات: {contents.length}</span>
        </div>
      </div>

      {/* Verified Google Admin Session Warning */}
      {isVerifiedAdmin === false && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-extrabold text-amber-900">
                مطلوب توثيق حساب المشرف عبر Google لتفعيل الحفظ ورفع الصور
              </p>
              <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
                قواعد أمان Firestore و Storage تقبل التعديلات فقط من حساب المشرف الموثّق (mohmabdo1995@gmail.com).
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleVerifyGoogleAdmin}
            disabled={isVerifyingGoogle}
            className="px-4 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold flex items-center gap-2 flex-shrink-0 cursor-pointer disabled:opacity-60"
          >
            {isVerifyingGoogle ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <ShieldCheck className="w-3.5 h-3.5 text-[#BCEBFF]" />
            )}
            <span>توثيق جلسة المشرف عبر Google</span>
          </button>
        </div>
      )}

      {/* Feedback Banner */}
      {banner && (
        <div
          className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between gap-3 ${
            banner.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          <div className="flex items-center gap-2">
            {banner.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            )}
            <span>{banner.message}</span>
          </div>
          <button
            type="button"
            onClick={() => setBanner(null)}
            className="p-1 rounded-lg hover:bg-black/5 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Sub-Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
        <button
          type="button"
          onClick={() => setSubTab('identity')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
            subTab === 'identity'
              ? 'bg-[#071A3D] text-white shadow-sm'
              : 'text-slate-700 hover:bg-white'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>إدارة الهوية والتعريف</span>
        </button>

        <button
          type="button"
          onClick={() => setSubTab('members')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
            subTab === 'members'
              ? 'bg-[#071A3D] text-white shadow-sm'
              : 'text-slate-700 hover:bg-white'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>إدارة أعضاء المجلس التنفيذي ({members.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setSubTab('content')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
            subTab === 'content'
              ? 'bg-[#071A3D] text-white shadow-sm'
              : 'text-slate-700 hover:bg-white'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>إدارة المقالات والفعاليات ({contents.length})</span>
        </button>
      </div>

      {/* MODULE 1: IDENTITY & ABOUT MANAGEMENT */}
      {subTab === 'identity' && (
        <form onSubmit={handleSaveAboutInfo} className="space-y-5">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-extrabold font-tajawal text-slate-900">
                  قسم التعريف: من نحن إنوفا
                </h3>
                <p className="text-[11px] text-slate-500">
                  يظهر هذا العنوان والوصف في البطاقة التعريفية الرئيسية داخل صفحة جمعية إنوفا
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAboutPreview((prev) => !prev)}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#16958E]" />
                <span>{showAboutPreview ? 'إخفاء المعاينة' : 'معاينة قبل الحفظ'}</span>
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                عنوان قسم التعريف:*
              </label>
              <input
                type="text"
                required
                maxLength={200}
                value={aboutTitleDraft}
                onChange={(e) => setAboutTitleDraft(e.target.value)}
                placeholder="مثال: من نحن إنوفا"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 outline-none focus:border-[#16958E]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-700">
                  النص التعريفي الكامل (يدعم تعدد الأسطر):
                </label>
                <span className="text-[11px] font-mono text-slate-400">
                  {aboutDescriptionDraft.length} / 5000
                </span>
              </div>
              <textarea
                rows={7}
                maxLength={5000}
                value={aboutDescriptionDraft}
                onChange={(e) => setAboutDescriptionDraft(e.target.value)}
                placeholder="اكتب نبذة شاملة عن جمعية إنوفا، رؤيتها، رسالتها، وأهدافها للطلبة..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 leading-relaxed outline-none focus:border-[#16958E]"
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                disabled={isSavingInfo}
                className="px-5 py-2.5 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-sm flex items-center gap-2 transition-all cursor-pointer disabled:opacity-60"
              >
                {isSavingInfo ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>{isSavingInfo ? 'جاري الحفظ...' : 'حفظ الهوية والتعريف'}</span>
              </button>
            </div>
          </div>

          {showAboutPreview && (
            <div className="p-6 rounded-3xl bg-white border border-[#BCEBFF] shadow-sm space-y-4">
              <div className="text-[11px] font-bold text-[#16958E]">
                معاينة حية قبل الحفظ · كما تظهر للزائر
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-5 pb-4 border-b border-slate-100">
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 flex-shrink-0">
                  <img
                    src="/assets/innova-logo.svg"
                    alt="شعار جمعية إنوفا"
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold font-tajawal text-[#071A3D]">
                    {aboutTitleDraft.trim() || 'من نحن إنوفا'}
                  </h4>
                  <p className="text-xs text-slate-500">الشعار محفوظ بألوانه ونسبه الأصلية</p>
                </div>
              </div>
              <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {aboutDescriptionDraft.trim() || 'لم يتم إدخال وصف تعريفي بعد.'}
              </div>
            </div>
          )}
        </form>
      )}

      {/* MODULE 2: EXECUTIVE BOARD MEMBERS */}
      {subTab === 'members' && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-extrabold font-tajawal text-slate-900">
                أعضاء المجلس التنفيذي لجمعية إنوفا
              </h3>
              <p className="text-[11px] text-slate-500">
                إضافة وتعديل وحذف الأعضاء مع رفع الصور مباشرة إلى Firebase Storage
              </p>
            </div>

            <button
              type="button"
              onClick={openAddMemberModal}
              className="px-4 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة عضو جديد</span>
            </button>
          </div>

          {members.length === 0 ? (
            <div className="p-10 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-2">
              <Users className="w-9 h-9 text-slate-400 mx-auto" />
              <p className="text-xs font-bold text-slate-700">لا يوجد أعضاء مسجلون حالياً</p>
              <p className="text-[11px] text-slate-500">
                اضغط على &quot;إضافة عضو جديد&quot; لإضافة أول عضو في المجلس التنفيذي.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] bg-slate-200/70 flex items-center justify-center overflow-hidden">
                      {member.photoUrl ? (
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-slate-400" />
                      )}
                    </div>
                    <div className="p-4 space-y-1">
                      <div className="text-[11px] font-mono text-slate-400">
                        ترتيب العرض: #{member.order}
                      </div>
                      <h4 className="text-sm font-extrabold font-tajawal text-slate-900">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#16958E]">{member.position}</p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-2 border-t border-slate-200/80">
                    {confirmDeleteMemberId === member.id ? (
                      <div className="flex items-center justify-between gap-2 bg-rose-50 border border-rose-200 rounded-xl p-2">
                        <span className="text-[11px] font-bold text-rose-800">تأكيد الحذف؟</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            disabled={isDeletingMemberId === member.id}
                            onClick={() => handleDeleteMember(member)}
                            className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-bold hover:bg-rose-700 cursor-pointer disabled:opacity-60"
                          >
                            {isDeletingMemberId === member.id ? 'جاري...' : 'حذف'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteMemberId(null)}
                            className="px-2 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-[11px] font-bold hover:bg-slate-100 cursor-pointer"
                          >
                            إلغاء
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => openEditMemberModal(member)}
                          className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-[#16958E]" />
                          <span>تعديل</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteMemberId(member.id)}
                          className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>حذف</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MODULE 3: ARTICLES & EVENTS */}
      {subTab === 'content' && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {(['all', 'articles', 'events'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setContentFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    contentFilter === cat
                      ? 'bg-[#16958E] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'الكل' : cat === 'articles' ? 'المقالات' : 'الفعاليات'}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={openAddContentModal}
              className="px-4 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة مقال أو فعالية</span>
            </button>
          </div>

          {filteredContents.length === 0 ? (
            <div className="p-10 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-2">
              <Layers className="w-9 h-9 text-slate-400 mx-auto" />
              <p className="text-xs font-bold text-slate-700">
                لا توجد مقالات أو فعاليات مطابقة حالياً
              </p>
              <p className="text-[11px] text-slate-500">
                اضغط على &quot;إضافة مقال أو فعالية&quot; لإنشاء ونشر بطاقة جديدة.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredContents.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-20 h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-20 h-16 rounded-xl bg-[#BCEBFF]/40 text-[#071A3D] flex items-center justify-center flex-shrink-0">
                        {item.category === 'events' ? (
                          <Calendar className="w-6 h-6 text-[#16958E]" />
                        ) : (
                          <FileText className="w-6 h-6 text-[#16958E]" />
                        )}
                      </div>
                    )}

                    <div className="min-w-0 space-y-1">
                      <div className="text-[11px] font-bold text-[#16958E] flex flex-wrap items-center gap-1.5">
                        <span>{item.category === 'events' ? 'الفعاليات' : 'المقالات'}</span>
                        <span className="text-slate-300">·</span>
                        <span className={item.published ? 'text-emerald-700' : 'text-amber-700'}>
                          {item.published ? 'منشور للعامة' : 'مسودة مخفية'}
                        </span>
                        {(item.eventDate || item.createdAt) && (
                          <>
                            <span className="text-slate-300">·</span>
                            <span className="text-slate-500 font-mono">
                              {item.eventDate || item.createdAt.split('T')[0]}
                            </span>
                          </>
                        )}
                      </div>
                      <h4 className="text-sm font-extrabold font-tajawal text-slate-900 truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                    {confirmDeleteContentId === item.id ? (
                      <div className="flex items-center gap-1.5 bg-rose-50 border border-rose-200 rounded-xl p-1.5">
                        <span className="text-[11px] font-bold text-rose-800 px-1">
                          تأكيد الحذف؟
                        </span>
                        <button
                          type="button"
                          disabled={isDeletingContentId === item.id}
                          onClick={() => handleDeleteContent(item)}
                          className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-bold hover:bg-rose-700 cursor-pointer disabled:opacity-60"
                        >
                          {isDeletingContentId === item.id ? 'جاري...' : 'حذف'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteContentId(null)}
                          className="px-2 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-[11px] font-bold hover:bg-slate-100 cursor-pointer"
                        >
                          إلغاء
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => setPreviewContentItem(item)}
                          className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#16958E]" />
                          <span>معاينة</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => openEditContentModal(item)}
                          className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-[#16958E]" />
                          <span>تعديل</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteContentId(item.id)}
                          className="px-2.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>حذف</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MEMBER ADD / EDIT MODAL */}
      {isMemberModalOpen && (
        <Modal
          isOpen={isMemberModalOpen}
          onClose={() => setIsMemberModalOpen(false)}
          maxWidth="lg"
          title={editingMemberId ? 'تعديل عضو المجلس التنفيذي' : 'إضافة عضو جديد لجمعية إنوفا'}
          subtitle="إدخال الاسم الكامل والمسمى التنفيذي ورفع صورة العضو"
          icon={<Users className="w-5 h-5 text-[#16958E]" />}
          footer={
            <>
              <button
                type="button"
                onClick={() => setIsMemberModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 cursor-pointer"
              >
                إلغاء
              </button>
              <button
                type="submit"
                form="innova-member-form"
                disabled={isSavingMember || isUploadingMemberPhoto}
                className="px-5 py-2 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSavingMember && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                <span>{isSavingMember ? 'جاري الحفظ...' : 'حفظ العضو'}</span>
              </button>
            </>
          }
        >
          <form id="innova-member-form" onSubmit={handleSaveMember} className="space-y-4">
            {memberFormError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{memberFormError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الاسم الكامل:*
                </label>
                <input
                  type="text"
                  required
                  maxLength={150}
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                  placeholder="الاسم الثلاثي أو الكامل..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 outline-none focus:border-[#16958E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  المسؤولية / المنصب التنفيذي:*
                </label>
                <input
                  type="text"
                  required
                  maxLength={150}
                  value={memberPosition}
                  onChange={(e) => setMemberPosition(e.target.value)}
                  placeholder="مثال: رئيس الجمعية / نائب الرئيس / مسؤول اللجنة العلمية"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 outline-none focus:border-[#16958E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                ترتيب العرض (رقم):
              </label>
              <input
                type="number"
                min={0}
                max={10000}
                value={memberOrder}
                onChange={(e) => setMemberOrder(Number(e.target.value) || 0)}
                className="w-32 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-900 outline-none focus:border-[#16958E]"
              />
            </div>

            {/* Member Photo Upload + Replace / Remove */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                صورة العضو (رفع إلى Firebase Storage أو رابط مباشر):
              </label>
              <div className="flex flex-wrap gap-2">
                <input
                  type="text"
                  value={memberPhotoUrl}
                  onChange={(e) => setMemberPhotoUrl(e.target.value)}
                  placeholder="https://... أو ارفع صورة من جهازك"
                  className="flex-1 min-w-[200px] px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono outline-none focus:border-[#16958E]"
                />

                <label className="px-3.5 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold cursor-pointer flex items-center gap-1.5 transition-colors">
                  {isUploadingMemberPhoto ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Upload className="w-3.5 h-3.5" />
                  )}
                  <span>
                    {isUploadingMemberPhoto
                      ? 'جاري الرفع...'
                      : memberPhotoUrl
                      ? 'استبدال الصورة'
                      : 'رفع صورة'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    disabled={isUploadingMemberPhoto}
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) void handleUploadMemberPhoto(file);
                      e.target.value = '';
                    }}
                  />
                </label>

                {memberPhotoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setMemberPhotoUrl('');
                      setMemberPhotoStoragePath('');
                    }}
                    className="px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold cursor-pointer"
                  >
                    إزالة
                  </button>
                )}
              </div>

              {memberPhotoUrl && (
                <div className="w-32 aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mt-2">
                  <img
                    src={memberPhotoUrl}
                    alt="معاينة صورة العضو"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </form>
        </Modal>
      )}

      {/* ARTICLE / EVENT ADD / EDIT MODAL */}
      {isContentModalOpen && (
        <Modal
          isOpen={isContentModalOpen}
          onClose={() => setIsContentModalOpen(false)}
          maxWidth="2xl"
          title={editingContentId ? 'تعديل المقال أو الفعالية' : 'إنشاء مقال أو فعالية لجمعية إنوفا'}
          subtitle="تصنيف المحتوى بين المقالات والفعاليات مع دعم رفع الصور والمعاينة قبل النشر"
          icon={<Layers className="w-5 h-5 text-[#16958E]" />}
          footer={
            <div className="flex flex-wrap items-center justify-between w-full gap-2">
              <button
                type="button"
                onClick={handlePreviewDraftContent}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#16958E]" />
                <span>معاينة البطاقة قبل النشر</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsContentModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  form="innova-content-form"
                  disabled={isSavingContent || isUploadingContentImg}
                  className="px-5 py-2 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSavingContent && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                  <span>
                    {isSavingContent
                      ? 'جاري الحفظ...'
                      : editingContentId
                      ? 'حفظ التعديلات'
                      : 'نشر البطاقة'}
                  </span>
                </button>
              </div>
            </div>
          }
        >
          <form id="innova-content-form" onSubmit={handleSaveContent} className="space-y-4">
            {contentFormError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{contentFormError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  التصنيف:*
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setContentCategory('articles')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      contentCategory === 'articles'
                        ? 'bg-[#071A3D] text-white border-[#071A3D]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    المقالات
                  </button>
                  <button
                    type="button"
                    onClick={() => setContentCategory('events')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      contentCategory === 'events'
                        ? 'bg-[#071A3D] text-white border-[#071A3D]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    الفعاليات
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  التاريخ (اختياري):
                </label>
                <input
                  type="date"
                  value={contentEventDate}
                  onChange={(e) => setContentEventDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 outline-none focus:border-[#16958E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">العنوان:*</label>
              <input
                type="text"
                required
                maxLength={250}
                value={contentTitle}
                onChange={(e) => setContentTitle(e.target.value)}
                placeholder="أدخل عنوان المقال أو الفعالية..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 outline-none focus:border-[#16958E]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-700">الوصف والتفاصيل:*</label>
                <span className="text-[11px] font-mono text-slate-400">
                  {contentDescription.length} / 8000
                </span>
              </div>
              <textarea
                rows={6}
                required
                maxLength={8000}
                value={contentDescription}
                onChange={(e) => setContentDescription(e.target.value)}
                placeholder="اكتب نص المقال أو تفاصيل الفعالية ومكانها وأهدافها..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 leading-relaxed outline-none focus:border-[#16958E]"
              />
            </div>

            {/* Image upload / replace / remove */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                صورة البطاقة (رفع إلى Firebase Storage أو رابط مباشر):
              </label>
              <div className="flex flex-wrap gap-2">
                <input
                  type="text"
                  value={contentImageUrl}
                  onChange={(e) => setContentImageUrl(e.target.value)}
                  placeholder="https://... أو ارفع صورة من جهازك"
                  className="flex-1 min-w-[200px] px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono outline-none focus:border-[#16958E]"
                />
                <label className="px-3.5 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold cursor-pointer flex items-center gap-1.5 transition-colors">
                  {isUploadingContentImg ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <ImageIcon className="w-3.5 h-3.5" />
                  )}
                  <span>
                    {isUploadingContentImg
                      ? 'جاري الرفع...'
                      : contentImageUrl
                      ? 'استبدال الصورة'
                      : 'رفع صورة'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    disabled={isUploadingContentImg}
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) void handleUploadContentImage(file);
                      e.target.value = '';
                    }}
                  />
                </label>

                {contentImageUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setContentImageUrl('');
                      setContentImageStoragePath('');
                    }}
                    className="px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold cursor-pointer"
                  >
                    إزالة الصورة
                  </button>
                )}
              </div>

              {contentImageUrl && (
                <div className="w-48 aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mt-2">
                  <img
                    src={contentImageUrl}
                    alt="معاينة صورة البطاقة"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700 pt-1">
              <input
                type="checkbox"
                checked={contentPublished}
                onChange={(e) => setContentPublished(e.target.checked)}
                className="w-4 h-4 text-[#16958E] rounded"
              />
              <span>نشر البطاقة مباشرة في صفحة جمعية إنوفا للزوار</span>
            </label>
          </form>
        </Modal>
      )}

      {/* PREVIEW MODAL BEFORE PUBLISHING */}
      {previewContentItem && (
        <Modal
          isOpen={Boolean(previewContentItem)}
          onClose={() => setPreviewContentItem(null)}
          maxWidth="lg"
          title="معاينة البطاقة قبل النشر"
          subtitle="هكذا ستظهر البطاقة داخل قسم المقالات والفعاليات في صفحة جمعية إنوفا"
          icon={<Eye className="w-5 h-5 text-[#16958E]" />}
          footer={
            <button
              type="button"
              onClick={() => setPreviewContentItem(null)}
              className="px-5 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 cursor-pointer"
            >
              إغلاق المعاينة
            </button>
          }
        >
          <div className="rounded-3xl bg-white border border-[#BCEBFF] overflow-hidden shadow-sm">
            <div className="aspect-[16/10] bg-slate-100 flex items-center justify-center overflow-hidden">
              {previewContentItem.imageUrl ? (
                <img
                  src={previewContentItem.imageUrl}
                  alt={previewContentItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-1.5 text-[#16958E]/70">
                  {previewContentItem.category === 'events' ? (
                    <Calendar className="w-10 h-10" />
                  ) : (
                    <FileText className="w-10 h-10" />
                  )}
                  <span className="text-xs font-bold">
                    {previewContentItem.category === 'events' ? 'الفعاليات' : 'المقالات'}
                  </span>
                </div>
              )}
            </div>
            <div className="p-5 space-y-2 text-right">
              <div className="text-[11px] font-bold text-[#16958E]">
                {previewContentItem.category === 'events' ? 'الفعاليات' : 'المقالات'}
                {previewContentItem.eventDate ? ` · ${previewContentItem.eventDate}` : ''}
              </div>
              <h4 className="text-lg font-extrabold font-tajawal text-[#071A3D]">
                {previewContentItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {previewContentItem.description}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
