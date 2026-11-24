import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck, LayoutDashboard, FileText, ToggleLeft, Link, Image,
  Megaphone, Palette, Search, Save, LogOut, CheckCircle2, RefreshCw,
  Plus, Trash2, Eye, EyeOff, Download, Upload, Clock, Layers, Sparkles,
  BookOpen, Calendar, HelpCircle, ExternalLink, Globe, Phone, Mail, MapPin,
  Video, Play, MoveUp, MoveDown, Heading, Bold, Italic, List, ListOrdered,
  Quote, ImageIcon, FileCode, Check, X, ArrowRight, Edit3, Film, AlertTriangle, Radio, Cloud, Stethoscope, Database, HardDrive, Wifi, WifiOff, Activity, RotateCcw, Building2
} from 'lucide-react';
import {
  FirebaseService, SiteConfig, DEFAULT_SITE_CONFIG, SectionVisibility,
  AnnouncementItem, MediaItem, AdminLogItem, ButtonConfig
} from '../../services/firebase';
import { AdminAuthService } from '../../services/adminAuth';
import { ArticleItem, VideoItem, CollegeInfoData, Subject, TickerItem, StudyResource, InnovaMemberItem, InnovaContentItem } from '../../types';
import { COLLEGE_INFO, SUBJECTS_DATA } from '../../data/academicContent';
import { Modal } from '../common/Modal';
import { GoogleDriveStorageManager } from './GoogleDriveStorageManager';
import { StudyResourcesManager } from './StudyResourcesManager';
import { MedicalTermsManager } from './MedicalTermsManager';
import { InnovaAdminManager } from './InnovaAdminManager';
import { MedicalTermsService } from '../../services/medicalTermsService';
import { MEDICAL_TERMS_SEED } from '../../data/medicalTermsSeed';
import { CacheDiagnosticsSnapshot, DataSyncService } from '../../services/dataSyncService';
import { FirestoreAuditMetrics, SmartCache } from '../../services/smartCache';
import {
  buildRepeatedTickerItems,
  computeTickerDuration,
  getTickerBadgeStyle
} from '../NewsTickerBar';

interface AdminDashboardLayoutProps {
  onCloseAdmin: () => void;
  adminEmail?: string | null;
}

type AdminTab =
  | 'overview'
  | 'ticker'
  | 'innova'
  | 'medical_dictionary'
  | 'study_resources'
  | 'articles'
  | 'college_sections'
  | 'videos'
  | 'drive_storage'
  | 'content'
  | 'sections'
  | 'buttons'
  | 'media'
  | 'announcements'
  | 'design'
  | 'seo'
  | 'cache_manager'
  | 'backup_logs';

export const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  onCloseAdmin,
  adminEmail,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([]);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [adminLogs, setAdminLogs] = useState<AdminLogItem[]>([]);
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [collegeInfo, setCollegeInfo] = useState<CollegeInfoData>({
    title: COLLEGE_INFO.title,
    tagline: COLLEGE_INFO.tagline,
    image: COLLEGE_INFO.image,
    overview: COLLEGE_INFO.overview,
    creditSystem: COLLEGE_INFO.creditSystem,
    survivalTips: COLLEGE_INFO.survivalTips.map((t, idx) => ({ id: 'tip-' + idx, ...t })),
    customSections: []
  });
  const [subjects, setSubjects] = useState<Subject[]>(SUBJECTS_DATA);
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([]);
  const [studyResourcesCount, setStudyResourcesCount] = useState<number>(0);
  const [medicalTermsCount, setMedicalTermsCount] = useState<number>(MEDICAL_TERMS_SEED.length);
  const [medicalTermsNeedsReviewCount, setMedicalTermsNeedsReviewCount] = useState<number>(0);
  const [medicalTermsFirestoreActive, setMedicalTermsFirestoreActive] = useState<boolean>(false);
  const [innovaMembersCount, setInnovaMembersCount] = useState<number>(0);
  const [innovaContentsCount, setInnovaContentsCount] = useState<number>(0);

  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // --- Ticker Editor Modal States ---
  const [isTickerModalOpen, setIsTickerModalOpen] = useState(false);
  const [editingTickerItem, setEditingTickerItem] = useState<Partial<TickerItem> | null>(null);
  const [isSavingTicker, setIsSavingTicker] = useState(false);
  const [tickerFormError, setTickerFormError] = useState<string | null>(null);
  const [confirmDeleteTickerId, setConfirmDeleteTickerId] = useState<string | null>(null);
  const [confirmResetTicker, setConfirmResetTicker] = useState(false);

  // --- Article Editor Modal States ---
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Partial<ArticleItem> | null>(null);
  const [articlePreviewModal, setArticlePreviewModal] = useState<ArticleItem | null>(null);
  const articleTextAreaRef = useRef<HTMLTextAreaElement>(null);

  // --- Video Editor Modal States ---
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Partial<VideoItem> | null>(null);
  const [videoFileError, setVideoFileError] = useState<string | null>(null);

  // --- College Info Editor States ---
  const [newTipTitle, setNewTipTitle] = useState('');
  const [newTipDesc, setNewTipDesc] = useState('');
  const [newCustomSecTitle, setNewCustomSecTitle] = useState('');
  const [newCustomSecContent, setNewCustomSecContent] = useState('');
  const [newCustomSecImage, setNewCustomSecImage] = useState('');

  // --- Subject Editor Modal States ---
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState<Partial<Subject> | null>(null);

  // --- Other Form States ---
  const [newAnnTitle, setNewAnnTitle] = useState('');
  const [newAnnContent, setNewAnnContent] = useState('');
  const [newAnnBadge, setNewAnnBadge] = useState('إعلان');
  const [newAnnLink, setNewAnnLink] = useState('');

  const [newMediaName, setNewMediaName] = useState('');
  const [newMediaUrl, setNewMediaUrl] = useState('');
  const [newMediaType, setNewMediaType] = useState<'image' | 'pdf' | 'video' | 'logo'>('image');

  const [importJsonText, setImportJsonText] = useState('');
  const [importMode, setImportMode] = useState<'merge' | 'replace'>('merge');
  const [isExportingBackup, setIsExportingBackup] = useState(false);
  const [isImportingBackup, setIsImportingBackup] = useState(false);
  const [importResult, setImportResult] = useState<{
    success: boolean;
    stats: Record<string, number>;
    errors: string[];
  } | null>(null);
  const [confirmActionModal, setConfirmActionModal] = useState<{
    title: string;
    message: string;
    confirmLabel: string;
    tone?: 'danger' | 'primary';
    onConfirm: () => Promise<void>;
  } | null>(null);
  const [isConfirmActionRunning, setIsConfirmActionRunning] = useState(false);

  // --- Smart Cache & Sync Manager States ---
  const [cacheDiagnostics, setCacheDiagnostics] = useState<CacheDiagnosticsSnapshot | null>(null);
  const [isSyncingCache, setIsSyncingCache] = useState(false);
  const [confirmClearPublicCache, setConfirmClearPublicCache] = useState(false);
  const [syncResultBanner, setSyncResultBanner] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const refreshCacheDiagnostics = async () => {
    try {
      const snap = await DataSyncService.getCacheDiagnostics();
      setCacheDiagnostics(snap);
    } catch {
      // ignore diagnostics error
    }
  };

  // 1. Lightweight Mount Effect: Subscribe ONLY to site_config + hydrate overview counters from IndexedDB (0 extra Firestore reads!)
  useEffect(() => {
    const unsubscribeConfig = FirebaseService.subscribeSiteConfig((data) => setConfig(data));
    const unsubscribeDiag = DataSyncService.subscribeDiagnostics(() => {
      void refreshCacheDiagnostics();
    });
    const unsubscribeMetrics = FirestoreAuditMetrics.subscribe(() => {
      void refreshCacheDiagnostics();
    });

    void DataSyncService.getOrFetchManifest(true).then(() => refreshCacheDiagnostics());

    // Hydrate overview counters from IndexedDB cache without triggering Firestore reads
    void (async () => {
      const [artRec, vidRec, annRec, tickRec, subjRec, resRec, medSummary, innovaMemRec, innovaContRec] = await Promise.all([
        SmartCache.getCollection<ArticleItem[]>('articles'),
        SmartCache.getCollection<VideoItem[]>('videos'),
        SmartCache.getCollection<AnnouncementItem[]>('announcements'),
        SmartCache.getCollection<TickerItem[]>('ticker_items'),
        SmartCache.getCollection<Subject[]>('subjects_data'),
        SmartCache.getCollection<StudyResource[]>('study_resources'),
        MedicalTermsService.getCachedAdminTermsSummary(),
        SmartCache.getCollection<InnovaMemberItem[]>('innova_members'),
        SmartCache.getCollection<InnovaContentItem[]>('innova_contents'),
      ]);

      if (Array.isArray(artRec?.data)) setArticles(artRec!.data);
      if (Array.isArray(vidRec?.data)) setVideos(vidRec!.data);
      if (Array.isArray(annRec?.data)) setAnnouncements(annRec!.data);
      if (Array.isArray(tickRec?.data)) setTickerItems(tickRec!.data);
      if (Array.isArray(subjRec?.data) && subjRec!.data.length > 0) setSubjects(subjRec!.data);
      if (Array.isArray(resRec?.data)) setStudyResourcesCount(resRec!.data.length);
      if (Array.isArray(innovaMemRec?.data)) setInnovaMembersCount(innovaMemRec!.data.length);
      if (Array.isArray(innovaContRec?.data)) setInnovaContentsCount(innovaContRec!.data.length);

      setMedicalTermsCount(medSummary.total);
      setMedicalTermsNeedsReviewCount(medSummary.needsReview);
      setMedicalTermsFirestoreActive(medSummary.hasDeltaCache);
    })();

    return () => {
      unsubscribeConfig();
      unsubscribeDiag();
      unsubscribeMetrics();
    };
  }, []);

  // 2. Lazy Tab Loading: Subscribe & check manifest freshness when Admin tab opens
  useEffect(() => {
    if (activeTab === 'ticker') {
      void DataSyncService.loadCollection('ticker_items', { forceManifestCheck: true });
      return FirebaseService.subscribeTicker((data) => setTickerItems(data));
    }
    if (activeTab === 'articles') {
      void DataSyncService.loadCollection('articles', { forceManifestCheck: true });
      return FirebaseService.subscribeArticles((data) => setArticles(data));
    }
    if (activeTab === 'videos') {
      void DataSyncService.loadCollection('videos', { forceManifestCheck: true });
      return FirebaseService.subscribeVideos((data) => setVideos(data));
    }
    if (activeTab === 'college_sections') {
      void DataSyncService.loadCollection('college_info', { forceManifestCheck: true });
      void DataSyncService.loadCollection('subjects_data', { forceManifestCheck: true });
      const unsubCollege = FirebaseService.subscribeCollegeInfo((data) => setCollegeInfo(data));
      const unsubSubj = FirebaseService.subscribeSubjects((data) => setSubjects(data));
      return () => {
        unsubCollege();
        unsubSubj();
      };
    }
    if (activeTab === 'study_resources') {
      void DataSyncService.loadCollection('study_resources', { forceManifestCheck: true });
      const unsubSubj = FirebaseService.subscribeSubjects((data) => setSubjects(data));
      const unsubRes = FirebaseService.subscribeStudyResources((data) =>
        setStudyResourcesCount(data.length)
      );
      return () => {
        unsubSubj();
        unsubRes();
      };
    }
    if (activeTab === 'announcements') {
      void DataSyncService.loadCollection('announcements', { forceManifestCheck: true });
      return FirebaseService.subscribeAnnouncements((data) => setAnnouncements(data));
    }
    if (activeTab === 'media') {
      void DataSyncService.loadCollection('media', { forceManifestCheck: true });
      return FirebaseService.subscribeMedia((data) => setMediaList(data));
    }
    if (activeTab === 'backup_logs') {
      return FirebaseService.subscribeAdminLogs((data) => setAdminLogs(data));
    }
    if (activeTab === 'cache_manager') {
      void refreshCacheDiagnostics();
    }
  }, [activeTab]);

  const handleManualSmartSync = async (forceFull: boolean) => {
    setIsSyncingCache(true);
    setSyncResultBanner(null);
    try {
      const res = await DataSyncService.manualSmartSyncAll({ forceFull });
      await refreshCacheDiagnostics();
      if (res.success) {
        const msg = forceFull
          ? `تمت المزامنة الكاملة الإجبارية لـ ${res.updatedCollections.length} مجموعة بنجاح.`
          : `اكتملت المزامنة الذكية: تحديث ${res.updatedCollections.length} مجموعة وتخطي ${res.skippedCollections.length} مجموعة مطابقة (توفير للقراءات).`;
        setSyncResultBanner({ type: 'success', message: msg });
        showToast(msg);
      } else {
        const msg = res.error || 'تعذر إتمام المزامنة السحابية.';
        setSyncResultBanner({ type: 'error', message: msg });
        showToast(msg);
      }
    } finally {
      setIsSyncingCache(false);
    }
  };

  const handleClearPublicCacheAdmin = async () => {
    setIsSyncingCache(true);
    try {
      await DataSyncService.clearPublicCacheAdminOnly();
      setConfirmClearPublicCache(false);
      await refreshCacheDiagnostics();
      const msg = 'تم مسح كاش المحتوى العام بنجاح مع الحفاظ الكامل على بيانات الطلاب الشخصية.';
      setSyncResultBanner({ type: 'success', message: msg });
      showToast(msg);
    } finally {
      setIsSyncingCache(false);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSaveConfig = async () => {
    setIsSaving(true);
    try {
      await FirebaseService.updateSiteConfig(config);
      showToast('تم حفظ التغييرات وتحديث الموقع الحقيقي بنجاح 🚀');
    } catch (err) {
      showToast('حدث خطأ أثناء حفظ التغييرات');
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleSection = async (key: keyof SectionVisibility, val: boolean) => {
    try {
      await FirebaseService.toggleSectionVisibility(key, val);
      showToast(`تم ${val ? 'تفعيل ON' : 'إخفاء OFF'} القسم بنجاح`);
    } catch (err) {
      showToast('حدث خطأ أثناء تحديث حالة القسم');
    }
  };

  const handleLogoutAdmin = async () => {
    await AdminAuthService.logout();
    onCloseAdmin();
  };

  // Helper to convert Image / File to Base64
  const handleFileUpload = (file: File, callback: (base64Url: string) => void) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        callback(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  // --- Article Formatting Helpers ---
  const insertFormatting = (prefix: string, suffix: string = '') => {
    if (!articleTextAreaRef.current || !editingArticle) return;
    const textarea = articleTextAreaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = editingArticle.content || '';
    const selectedText = text.substring(start, end);
    const replacement = prefix + (selectedText || 'النص هنا') + suffix;
    const newContent = text.substring(0, start) + replacement + text.substring(end);
    
    setEditingArticle({ ...editingArticle, content: newContent });
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selectedText.length || 7));
    }, 50);
  };

  // Save or Update Article
  const handleSaveArticle = async () => {
    if (!editingArticle?.title || !editingArticle?.content) {
      showToast('يرجى كتابة عنوان المقال والمحتوى الرئيسي');
      return;
    }

    try {
      if (editingArticle.id) {
        await FirebaseService.updateArticle(editingArticle.id, editingArticle);
        showToast('تم تحديث المقال بنجاح!');
      } else {
        await FirebaseService.addArticle({
          title: editingArticle.title,
          subtitle: editingArticle.subtitle || '',
          content: editingArticle.content,
          coverImage: editingArticle.coverImage || '',
          category: editingArticle.category || 'عام',
          author: editingArticle.author || 'إدارة الموقع',
          status: editingArticle.status || 'published'
        });
        showToast('تم نشر المقال الجديد على الموقع!');
      }
      setIsArticleModalOpen(false);
      setEditingArticle(null);
    } catch (e) {
      showToast('حدث خطأ أثناء حفظ المقال');
    }
  };

  // --- Video Management Helpers ---
  const validateAndHandleVideoFile = (file: File) => {
    setVideoFileError(null);
    const validExtensions = ['.mp4', '.webm', '.mov'];
    const fileName = file.name.toLowerCase();
    const isValidExt = validExtensions.some(ext => fileName.endsWith(ext));
    const isValidMime = file.type.startsWith('video/') || file.type === 'video/mp4' || file.type === 'video/webm' || file.type === 'video/quicktime';

    if (!isValidExt && !isValidMime) {
      setVideoFileError('عذراً! صيغة الفيديو غير مدعومة. يرجى اختيار ملف بصيغة MP4, WebM, أو MOV.');
      return;
    }

    if (file.size > 850 * 1024) {
      setVideoFileError(
        `حجم الملف (${(file.size / (1024 * 1024)).toFixed(1)} ميجابايت) يتجاوز حد التخزين المباشر في Firestore (850 كيلوبايت). لحفظ الفيديو للطلاب، ارفعه من تبويب "سحابة Google Drive (15GB)" أو أدخل رابط يوتيوب/درايف مباشرة.`
      );
      return;
    }

    // Small file: convert to Base64 Data URL so it is permanently saved into Firestore
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setEditingVideo(prev => ({ ...prev, videoUrl: e.target!.result as string, fileType: file.type || 'video/mp4' }));
      }
    };
    reader.readAsDataURL(file);

    // Generate Auto Thumbnail Canvas Poster and clean up temporary object URL
    const previewUrl = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.src = previewUrl;
    video.currentTime = 1;
    video.onloadeddata = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 360;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const posterUrl = canvas.toDataURL('image/jpeg');
        setEditingVideo(prev => ({ ...prev, thumbnailUrl: prev?.thumbnailUrl || posterUrl }));
      }
      URL.revokeObjectURL(previewUrl);
    };
    video.onerror = () => {
      URL.revokeObjectURL(previewUrl);
    };
  };

  const handleSaveVideo = async () => {
    if (!editingVideo?.title || !editingVideo?.videoUrl) {
      showToast('يرجى كتابة عنوان الفيديو ورابط أو ملف الفيديو');
      return;
    }

    if (editingVideo.videoUrl.trim().toLowerCase().startsWith('blob:')) {
      setVideoFileError('لا يمكن حفظ روابط المتصفح المؤقتة (blob:). يرجى استخدام تبويب "سحابة Google Drive (15GB)" أو رابط مباشر.');
      showToast('رابط الفيديو المؤقت غير صالح للنشر السحابي');
      return;
    }

    try {
      if (editingVideo.id) {
        await FirebaseService.updateVideo(editingVideo.id, editingVideo);
        showToast('تم تحديث الفيديو بنجاح!');
      } else {
        await FirebaseService.addVideo({
          title: editingVideo.title,
          description: editingVideo.description || '',
          videoUrl: editingVideo.videoUrl,
          thumbnailUrl: editingVideo.thumbnailUrl || '',
          duration: editingVideo.duration || '00:00',
          order: videos.length + 1,
          visible: editingVideo.visible !== undefined ? editingVideo.visible : true,
          fileType: editingVideo.fileType || 'video/mp4'
        });
        showToast('تمت إضافة الفيديو إلى المكتبة المرئية!');
      }
      setIsVideoModalOpen(false);
      setEditingVideo(null);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'حدث خطأ أثناء حفظ الفيديو';
      showToast(msg);
    }
  };

  const handleMoveVideoOrder = async (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === videos.length - 1)) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const currentVid = videos[index];
    const targetVid = videos[targetIndex];

    try {
      await FirebaseService.updateVideo(currentVid.id, { order: targetVid.order });
      await FirebaseService.updateVideo(targetVid.id, { order: currentVid.order });
      showToast('تم تغيير ترتيب الفيديو بنجاح');
    } catch {
      showToast('تعذر تحديث ترتيب الفيديو في قاعدة البيانات');
    }
  };

  // --- Save College Section ---
  const handleSaveCollegeInfo = async () => {
    try {
      await FirebaseService.updateCollegeInfo(collegeInfo);
      showToast('تم تحديث قسم الكلية والمواد الأكاديمية بنجاح!');
    } catch (e) {
      showToast('حدث خطأ أثناء حفظ بيانات الكلية');
    }
  };

  // --- Save Subject Item ---
  const handleSaveSubject = async () => {
    if (!editingSubject?.id || !editingSubject?.nameAr) {
      showToast('يرجى إدخال اسم المادة ومعرف المادة');
      return;
    }
    try {
      const fullSub: Subject = {
        id: editingSubject.id,
        nameAr: editingSubject.nameAr,
        nameEn: editingSubject.nameEn || '',
        code: editingSubject.code || 'SUB101',
        icon: editingSubject.icon || 'BookOpen',
        color: editingSubject.color || 'from-blue-500 to-indigo-600',
        image: editingSubject.image || 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
        description: editingSubject.description || '',
        credits: editingSubject.credits || 3,
        overview: editingSubject.overview || '',
        keyTopics: editingSubject.keyTopics || [],
        studyTips: editingSubject.studyTips || [],
        recommendedBooks: editingSubject.recommendedBooks || [],
        lectureTopics: editingSubject.lectureTopics || []
      };
      await FirebaseService.addSubject(fullSub);
      showToast('تم حفظ المادة الأكاديمية بنجاح!');
      setIsSubjectModalOpen(false);
      setEditingSubject(null);
    } catch (e) {
      showToast('حدث خطأ أثناء حفظ المادة');
    }
  };

  // --- Save / Update Ticker Item ---
  const handleSaveTickerItem = async () => {
    const cleanText = (editingTickerItem?.text || '').trim();
    if (!cleanText) {
      setTickerFormError('يرجى كتابة نص الخبر أو التنبيه');
      return;
    }
    if (cleanText.length > 1000) {
      setTickerFormError('نص الخبر طويل جداً (الحد الأقصى 1000 حرف)');
      return;
    }

    setTickerFormError(null);
    setIsSavingTicker(true);
    try {
      const sanitizedBadge = (editingTickerItem?.badge || '').trim().slice(0, 40);
      const sanitizedLink = (editingTickerItem?.link || '').trim().slice(0, 500);
      const isVisible = editingTickerItem?.visible !== false;
      const orderNum =
        typeof editingTickerItem?.order === 'number' && Number.isFinite(editingTickerItem.order)
          ? editingTickerItem.order
          : tickerItems.length + 1;

      if (editingTickerItem?.id) {
        await FirebaseService.updateTickerItem(editingTickerItem.id, {
          text: cleanText,
          badge: sanitizedBadge,
          link: sanitizedLink,
          visible: isVisible,
          order: orderNum
        });
        showToast('تم تحديث الخبر بنجاح ويظهر الآن لجميع الزوار!');
      } else {
        await FirebaseService.addTickerItem({
          text: cleanText,
          badge: sanitizedBadge,
          link: sanitizedLink,
          visible: isVisible,
          order: orderNum
        });
        showToast('تمت إضافة الخبر إلى شريط الأخبار المتحرك فوراً!');
      }
      setIsTickerModalOpen(false);
      setEditingTickerItem(null);
    } catch (e) {
      console.error('Error saving ticker item:', e);
      setTickerFormError('حدث خطأ أثناء حفظ الخبر في قاعدة البيانات، يرجى المحاولة مرة أخرى');
      showToast('حدث خطأ أثناء حفظ الخبر');
    } finally {
      setIsSavingTicker(false);
    }
  };

  const handleToggleTickerItem = async (id: string, currentVisible: boolean) => {
    try {
      await FirebaseService.updateTickerItem(id, { visible: !currentVisible });
      showToast(`تم ${!currentVisible ? 'إظهار' : 'إخفاء'} الخبر في الشريط`);
    } catch (e) {
      showToast('حدث خطأ أثناء تغيير حالة الخبر');
    }
  };

  const handleDeleteTickerItem = async (id: string) => {
    try {
      await FirebaseService.deleteTickerItem(id);
      setConfirmDeleteTickerId(null);
      showToast('تم حذف الخبر من الشريط نهائياً');
    } catch (e) {
      showToast('حدث خطأ أثناء حذف الخبر');
    }
  };

  const handleMoveTickerOrder = async (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === tickerItems.length - 1)) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const reordered = [...tickerItems];
    const [moved] = reordered.splice(index, 1);
    reordered.splice(targetIndex, 0, moved);

    try {
      await FirebaseService.reorderTickerItems(reordered);
      showToast('تم تحديث ترتيب الأخبار بنجاح');
    } catch (e) {
      showToast('حدث خطأ في تغيير الترتيب');
    }
  };

  const handleResetDefaultTicker = async () => {
    try {
      await FirebaseService.seedDefaultTickerItems();
      setConfirmResetTicker(false);
      showToast('تمت استعادة الأخبار الافتراضية بنجاح!');
    } catch (e) {
      showToast('حدث خطأ أثناء استعادة الأخبار');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-cairo flex flex-col" dir="rtl">
      
      {/* Toast Notification Popup */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 text-sm font-bold font-tajawal"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Top Navigation Header */}
      <header className="bg-[#071A3D] text-white border-b border-[#16958E]/30 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#071A3D] to-[#16958E] flex items-center justify-center text-white shadow-md border border-[#16958E]/30">
              <ShieldCheck className="w-6 h-6 text-[#BCEBFF]" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-base font-extrabold font-tajawal text-white">لوحة تحكم المشرف الكاملة</h1>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                    cacheDiagnostics?.isOnline === false
                      ? 'bg-slate-700/80 text-slate-200 border-slate-500/40'
                      : cacheDiagnostics?.isQuotaExceeded
                      ? 'bg-amber-500/20 text-amber-200 border-amber-400/40'
                      : cacheDiagnostics?.syncStatus === 'error'
                      ? 'bg-rose-500/20 text-rose-200 border-rose-400/40'
                      : 'bg-[#16958E]/20 text-[#BCEBFF] border-[#16958E]/40'
                  }`}
                >
                  {cacheDiagnostics?.isOnline === false
                    ? 'غير متصل (كاش محلي)'
                    : cacheDiagnostics?.isQuotaExceeded
                    ? 'حصة Firestore مكتملة'
                    : cacheDiagnostics?.syncStatus === 'error'
                    ? 'تحذير مزامنة'
                    : 'جلسة مشرف موثّقة'}
                </span>
                {adminEmail && (
                  <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-white/10 text-slate-200 text-[10px] font-mono">
                    {adminEmail}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-300">إدارة الموقع، المقالات، الفيديوهات ونصوص الكلية بدون كود</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveConfig}
              disabled={isSaving}
              className="px-4 py-2 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow-md flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
            >
              {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>حفظ الإعدادات العامة</span>
            </button>

            <button
              onClick={handleLogoutAdmin}
              className="px-3.5 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 text-rose-300 text-xs font-bold border border-rose-800/80 flex items-center gap-1.5 transition-all"
              title="تسجيل الخروج من لوحة التحكم"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">خروج</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Dashboard Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-1">
          <div className="bg-white rounded-3xl p-3 border border-[#BCEBFF]/80 shadow-sm space-y-1">
            <div className="text-[11px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
              المحتوى والتنظيم
            </div>

            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>نظرة عامة والملخص</span>
            </button>

            <button
              onClick={() => setActiveTab('ticker')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                activeTab === 'ticker'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
                <span>شريط الأخبار المتحرك ✦</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                config.sectionVisibility?.newsTicker !== false
                  ? 'bg-rose-100 text-rose-800'
                  : 'bg-slate-200 text-slate-500'
              }`}>
                {tickerItems.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('medical_dictionary')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                activeTab === 'medical_dictionary'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Stethoscope className="w-4 h-4 text-[#16958E]" />
                <span>فهرس المصطلحات الطبية</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'medical_dictionary'
                  ? 'bg-white/20 text-white'
                  : 'bg-[#16958E]/15 text-[#16958E]'
              }`}>
                {medicalTermsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('study_resources')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                activeTab === 'study_resources'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#16958E]" />
                <span>مصادر الدراسة والمكتبة 📖</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'study_resources'
                  ? 'bg-white/20 text-white'
                  : 'bg-[#16958E]/15 text-[#16958E]'
              }`}>
                {studyResourcesCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('innova')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                activeTab === 'innova'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#16958E]" />
                <span>إدارة جمعية إنوفا</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'innova'
                  ? 'bg-white/20 text-white'
                  : 'bg-[#16958E]/15 text-[#16958E]'
              }`}>
                {innovaMembersCount + innovaContentsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('articles')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                activeTab === 'articles'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4" />
                <span>إدارة المقالات والأبحاث</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px]">{articles.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('college_sections')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all ${
                activeTab === 'college_sections'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>أقسام الكلية والمواد</span>
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                activeTab === 'videos'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Video className="w-4 h-4" />
                <span>المكتبة المرئية (فيديوهات)</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px]">{videos.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('drive_storage')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                activeTab === 'drive_storage'
                  ? 'bg-gradient-to-r from-[#071A3D] to-[#16958E] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Cloud className="w-4 h-4 text-emerald-500" />
                <span>سحابة Google Drive (15GB)</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">مجاني</span>
            </button>

            <div className="text-[11px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider pt-3">
              إعدادات الموقع
            </div>

            <button
              onClick={() => setActiveTab('content')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all ${
                activeTab === 'content'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Edit3 className="w-4 h-4" />
              <span>النصوص والبيانات الرئيسية</span>
            </button>

            <button
              onClick={() => setActiveTab('sections')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all ${
                activeTab === 'sections'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ToggleLeft className="w-4 h-4" />
              <span>التحكم بظهور الأقسام (ON/OFF)</span>
            </button>

            <button
              onClick={() => setActiveTab('media')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all ${
                activeTab === 'media'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>الميديا وإدارة الصور</span>
            </button>

            <button
              onClick={() => setActiveTab('announcements')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all ${
                activeTab === 'announcements'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Megaphone className="w-4 h-4" />
              <span>الشريط الإعلاني والتنبيهات</span>
            </button>

            <button
              onClick={() => setActiveTab('cache_manager')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                activeTab === 'cache_manager'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Database className="w-4 h-4 text-[#16958E]" />
                <span>التخزين المؤقت والمزامنة</span>
              </div>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  activeTab === 'cache_manager'
                    ? 'bg-white/20 text-white'
                    : cacheDiagnostics?.isQuotaExceeded
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {cacheDiagnostics?.metrics.totalDocsRead ?? 0} قراءة
              </span>
            </button>

            <button
              onClick={() => setActiveTab('backup_logs')}
              className={`w-full text-right px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all ${
                activeTab === 'backup_logs'
                  ? 'bg-[#071A3D] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>النسخ الاحتياطي وسجل العمليات</span>
            </button>
          </div>
        </aside>

        {/* Tab Content Display Area */}
        <main className="lg:col-span-9 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm min-h-[600px]">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold font-tajawal text-slate-900">ملخص حالة لوحة التحكم</h2>
                  <p className="text-xs text-slate-500 mt-1">مرحباً بك! يمكنك التعديل المباشر على كافة عناصر الموقع ومتابعته فوراً</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    cacheDiagnostics?.isOnline === false
                      ? 'bg-slate-200 text-slate-700'
                      : cacheDiagnostics?.isQuotaExceeded
                      ? 'bg-amber-100 text-amber-800'
                      : cacheDiagnostics?.syncStatus === 'error'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {cacheDiagnostics?.isOnline === false
                    ? 'Offline Cache Mode'
                    : cacheDiagnostics?.isQuotaExceeded
                    ? 'Quota Guard Active'
                    : cacheDiagnostics?.syncStatus === 'error'
                    ? 'Sync Error Detected'
                    : 'Verified Firebase Admin'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-blue-900">
                  <p className="text-xs font-bold text-blue-600">إجمالي المقالات</p>
                  <p className="text-2xl font-black font-mono mt-1">{articles.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-teal-900 cursor-pointer hover:bg-teal-100/70 transition-colors" onClick={() => setActiveTab('study_resources')}>
                  <p className="text-xs font-bold text-[#16958E]">مصادر الدراسة والمكتبة 📖</p>
                  <p className="text-2xl font-black font-mono mt-1">{studyResourcesCount}</p>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-900">
                  <p className="text-xs font-bold text-indigo-600">الفيديوهات المرئية</p>
                  <p className="text-2xl font-black font-mono mt-1">{videos.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 text-purple-900">
                  <p className="text-xs font-bold text-purple-600">المواد الأكاديمية</p>
                  <p className="text-2xl font-black font-mono mt-1">{subjects.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 text-amber-900">
                  <p className="text-xs font-bold text-amber-600">الإعلانات والتنبيهات</p>
                  <p className="text-2xl font-black font-mono mt-1">{announcements.length}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-800 font-tajawal mb-2">اختصارات الإدارة السريعة:</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab('study_resources')}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#071A3D] to-[#16958E] hover:from-[#0a2558] hover:to-[#1ba8a0] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4 text-[#BCEBFF]" />
                    <span>إدارة مصادر الدراسة والمكتبة الرقمية ✦</span>
                  </button>

                  <button
                    onClick={() => {
                      setEditingArticle({ title: '', content: '', category: 'عام', status: 'published' });
                      setIsArticleModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-all flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>إضافة مقال جديد</span>
                  </button>

                  <button
                    onClick={() => {
                      setEditingVideo({ title: '', videoUrl: '', visible: true });
                      setIsVideoModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>إضافة فيديو إلى المكتبة</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('college_sections')}
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition-all flex items-center gap-1.5"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>تعديل نصوص الكلية</span>
                  </button>
                </div>
              </div>

              {/* Coordinated Bento Grid Card for Medical Terminology Index */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#071A3D] to-[#0f355c] text-white border border-[#16958E]/40 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#16958E]/25 border border-[#BCEBFF]/30 text-[#BCEBFF] flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-extrabold font-tajawal text-white">
                        فهرس المصطلحات الطبية | Medical Terminology Index
                      </h3>
                      <span className="text-[11px] font-mono text-[#BCEBFF]">
                        · {medicalTermsFirestoreActive ? 'Firestore متصل' : 'مزامنة القاعدة مطلوبة'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                      قاعدة معرفية طبية ثنائية اللغة مع محرك بحث ذكي، نطق صوتي، ومراجع موثوقة، ودعم كامل للاستيراد والمراجعة العلمية.
                    </p>
                    <div className="text-xs font-bold text-[#BCEBFF] pt-1">
                      إجمالي المصطلحات: {medicalTermsCount} · قيد المراجعة: {medicalTermsNeedsReviewCount}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('medical_dictionary')}
                  className="px-4 py-2.5 rounded-xl bg-[#16958E] hover:bg-[#13807a] text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all flex-shrink-0 cursor-pointer self-start sm:self-center"
                >
                  <span>إدارة فهرس المصطلحات</span>
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
              </div>

              {/* Coordinated Bento Grid Card for INNOVA Association */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#071A3D]/5 border border-[#16958E]/25 flex items-center justify-center flex-shrink-0 p-2">
                    <img
                      src="/assets/innova-logo.svg"
                      alt="INNOVA Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-extrabold font-tajawal text-[#071A3D]">
                        جمعية إنوفا INNOVA
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#16958E]/15 text-[#16958E] text-[10px] font-bold">
                        إدارة ديناميكية كاملة
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                      تحكم كامل في التعريف والهوية، وأعضاء المجلس التنفيذي، والمقالات والفعاليات عبر Firestore وFirebase Storage.
                    </p>
                    <div className="text-xs font-bold text-[#071A3D] pt-1">
                      الأعضاء: <span className="font-mono text-[#16958E]">{innovaMembersCount}</span> · المقالات والفعاليات: <span className="font-mono text-[#16958E]">{innovaContentsCount}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('innova')}
                  className="px-4 py-2.5 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all flex-shrink-0 cursor-pointer self-start sm:self-center"
                >
                  <span>إدارة جمعية إنوفا</span>
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
              </div>

              {/* Smart Cache & Firestore Read Optimization Summary Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#16958E]/15 border border-[#16958E]/30 text-[#16958E] flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-extrabold font-tajawal text-slate-900">
                        نظام التخزين المؤقت الذكي (IndexedDB + Delta Sync)
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          cacheDiagnostics?.isQuotaExceeded
                            ? 'bg-amber-100 text-amber-800'
                            : cacheDiagnostics?.isOnline === false
                            ? 'bg-slate-200 text-slate-700'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {cacheDiagnostics?.isQuotaExceeded
                          ? 'وضع الحماية (تجاوز الحصة)'
                          : cacheDiagnostics?.isOnline === false
                          ? 'غير متصل'
                          : 'نشط ومُحسّن'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      قراءات الجلسة: <strong className="font-mono text-[#071A3D]">{cacheDiagnostics?.metrics.totalDocsRead ?? 0}</strong> ·
                      نجاح الكاش: <strong className="font-mono text-emerald-700">{cacheDiagnostics?.metrics.cacheHits ?? 0}</strong> ·
                      مجموعات تم تخطي تحميلها: <strong className="font-mono text-blue-700">{cacheDiagnostics?.metrics.skippedCollectionFetches ?? 0}</strong> ·
                      الحجم المحلي: <strong className="font-mono">{((cacheDiagnostics?.totalCachedBytes ?? 0) / 1024).toFixed(1)} KB</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => handleManualSmartSync(false)}
                    disabled={isSyncingCache}
                    className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-60"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-[#16958E] ${isSyncingCache ? 'animate-spin' : ''}`} />
                    <span>مزامنة ذكية</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('cache_manager')}
                    className="px-4 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>التفاصيل والإدارة</span>
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: NEWS TICKER BAR MANAGEMENT (شريط الأخبار المتحرك) */}
          {activeTab === 'ticker' && (
            <div className="space-y-6">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Radio className="w-5 h-5 text-rose-500 animate-pulse" />
                    <h2 className="text-xl font-extrabold font-tajawal text-slate-900">إدارة شريط الأخبار المتحرك ✦</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    إضافة وتعديل وحذف الأخبار المتحركة بشكل مستمر أسفل الشريط العلوي مع فاصل ✦ التلقائي
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  {confirmResetTicker ? (
                    <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-xl">
                      <span className="text-[11px] font-bold text-amber-800">تأكيد استعادة الأخبار؟</span>
                      <button
                        onClick={handleResetDefaultTicker}
                        className="px-2.5 py-1 rounded-lg bg-amber-600 text-white text-[11px] font-bold hover:bg-amber-700 cursor-pointer"
                      >
                        نعم
                      </button>
                      <button
                        onClick={() => setConfirmResetTicker(false)}
                        className="px-2 py-1 rounded-lg bg-white text-slate-600 border border-slate-200 text-[11px] font-bold hover:bg-slate-100 cursor-pointer"
                      >
                        إلغاء
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmResetTicker(true)}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                      title="استعادة الأخبار النموذجية"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>استعادة الافتراضي</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setTickerFormError(null);
                      setEditingTickerItem({
                        text: '',
                        badge: 'إعلان',
                        link: '',
                        visible: true,
                        order: tickerItems.length + 1
                      });
                      setIsTickerModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>إضافة خبر جديد</span>
                  </button>
                </div>
              </div>

              {/* Ticker Settings & Master Switch */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-800">حالة ظهور الشريط في الموقع:</span>
                    <button
                      onClick={() => handleToggleSection('newsTicker', !(config.sectionVisibility?.newsTicker !== false))}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        config.sectionVisibility?.newsTicker !== false
                          ? 'bg-emerald-600 text-white shadow'
                          : 'bg-slate-300 text-slate-600'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${config.sectionVisibility?.newsTicker !== false ? 'bg-white animate-pulse' : 'bg-slate-500'}`}></span>
                      <span>{config.sectionVisibility?.newsTicker !== false ? 'مفعل ON (ظاهر للجميع)' : 'معطل OFF (مخفي)'}</span>
                    </button>
                  </div>

                  {/* Ticker Speed Selector */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">سرعة الحركة:</span>
                    <div className="inline-flex rounded-xl bg-slate-200 p-0.5">
                      {(['slow', 'normal', 'fast'] as const).map((spd) => (
                        <button
                          key={spd}
                          onClick={async () => {
                            const prevSpeed = config.tickerSpeed;
                            const newCfg = { ...config, tickerSpeed: spd };
                            setConfig(newCfg);
                            try {
                              await FirebaseService.updateSiteConfig({ tickerSpeed: spd });
                              showToast(`تم ضبط سرعة الشريط: ${spd === 'slow' ? 'بطيء' : spd === 'fast' ? 'سريع' : 'عادي'}`);
                            } catch {
                              setConfig({ ...config, tickerSpeed: prevSpeed });
                              showToast('تعذر حفظ سرعة شريط الأخبار');
                            }
                          }}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            (config.tickerSpeed || 'fast') === spd
                              ? 'bg-white text-slate-900 shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {spd === 'slow' ? 'بطيء' : spd === 'fast' ? 'سريع' : 'عادي'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ticker Title Input */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <label className="text-xs font-bold text-slate-700 whitespace-nowrap">
                    عنوان الشارة (اليمين):
                  </label>
                  <div className="flex-1 flex gap-2">
                    <input
                      type="text"
                      value={config.tickerTitle ?? ''}
                      onChange={(e) => setConfig({ ...config, tickerTitle: e.target.value })}
                      placeholder="مثال: شريط الأخبار والتنبيهات"
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold flex-1"
                    />
                    <button
                      onClick={handleSaveConfig}
                      disabled={isSaving}
                      className="px-3.5 py-1.5 bg-[#071A3D] text-white rounded-xl text-xs font-bold hover:bg-[#0E2F5A] transition-colors disabled:opacity-60 cursor-pointer"
                    >
                      حفظ العنوان
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Preview Box */}
              {(() => {
                const visiblePreviewItems = tickerItems.filter((i) => i.visible !== false && Boolean(i.text?.trim()));
                const previewRepeated = buildRepeatedTickerItems(visiblePreviewItems);
                const previewDuration = computeTickerDuration(previewRepeated, config.tickerSpeed || 'fast');

                return (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>معاينة حية لشريط الأخبار كما يظهر للزوار (حركة مستمرة لانهائية):</span>
                      </span>
                      <span className="text-[11px] text-slate-400">مرر الفأرة فوق الشريط لإيقافه مؤقتاً</span>
                    </div>

                    <div
                      dir="rtl"
                      className="rounded-2xl bg-[#071A3D] border border-[#16958E]/40 text-white shadow-md overflow-hidden select-none"
                      style={{ background: 'linear-gradient(90deg, #051430 0%, #071A3D 50%, #0E2F5A 100%)' }}
                    >
                      <div className="flex items-stretch h-10">
                        <div className="flex-shrink-0 z-10 flex items-center gap-1.5 px-3 bg-gradient-to-l from-[#16958E] to-[#0E2F5A] border-l border-[#BCEBFF]/20 shadow-md">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                          </span>
                          <Radio className="w-3 h-3 text-[#BCEBFF]" />
                          <span className="text-xs font-black font-tajawal text-white whitespace-nowrap">
                            {config.tickerTitle?.trim() || 'شريط الأخبار والتنبيهات'}
                          </span>
                        </div>

                        {previewRepeated.length === 0 ? (
                          <div className="flex-1 flex items-center justify-center text-xs text-slate-400 px-4">
                            لا توجد أخبار مفعّلة للعرض حالياً
                          </div>
                        ) : (
                          <div dir="ltr" className="ticker-hover-pause relative flex-1 flex items-center overflow-hidden min-w-0">
                            <div
                              className="animate-ticker flex items-center shrink-0"
                              style={{ animationDuration: `${previewDuration}s` }}
                            >
                              <div dir="rtl" className="flex items-center gap-6 pl-6 shrink-0">
                                {previewRepeated.map((item, idx) => (
                                  <div key={`prev1-${item.id}-${idx}`} dir="rtl" className="inline-flex items-center gap-2 shrink-0 whitespace-nowrap">
                                    {item.badge && (
                                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border leading-none shrink-0 whitespace-nowrap ${getTickerBadgeStyle(item.badge)}`}>
                                        {item.badge}
                                      </span>
                                    )}
                                    <span className="text-xs font-medium text-slate-100 whitespace-nowrap shrink-0">{item.text}</span>
                                    <span className="text-amber-400 font-extrabold text-sm mr-2.5 shrink-0 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">
                                      ✦
                                    </span>
                                  </div>
                                ))}
                              </div>
                              <div dir="rtl" className="flex items-center gap-6 pl-6 shrink-0" aria-hidden="true">
                                {previewRepeated.map((item, idx) => (
                                  <div key={`prev2-${item.id}-${idx}`} dir="rtl" className="inline-flex items-center gap-2 shrink-0 whitespace-nowrap">
                                    {item.badge && (
                                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border leading-none shrink-0 whitespace-nowrap ${getTickerBadgeStyle(item.badge)}`}>
                                        {item.badge}
                                      </span>
                                    )}
                                    <span className="text-xs font-medium text-slate-100 whitespace-nowrap shrink-0">{item.text}</span>
                                    <span className="text-amber-400 font-extrabold text-sm mr-2.5 shrink-0 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">
                                      ✦
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Ticker Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-800 font-tajawal">
                    قائمة الأخبار والنصوص المدخلة ({tickerItems.length}):
                  </h3>
                  <span className="text-xs text-slate-500">
                    يفصل بين كل خبر وآخر رمز ✦ تلقائياً
                  </span>
                </div>

                {tickerItems.length === 0 ? (
                  <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                    <Radio className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-xs font-bold text-slate-500">لا توجد أخبار في الشريط حالياً</p>
                    <button
                      onClick={handleResetDefaultTicker}
                      className="mt-3 px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold cursor-pointer"
                    >
                      استعادة الأخبار النموذجية
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {tickerItems.map((item, idx) => (
                      <div
                        key={item.id}
                        className={`p-3 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                          item.visible !== false
                            ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                            : 'bg-slate-100/60 border-slate-200 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {/* Order Badges & Direction Controls */}
                          <div className="flex items-center gap-1">
                            <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <div className="flex flex-col gap-0.5">
                              <button
                                onClick={() => handleMoveTickerOrder(idx, 'up')}
                                disabled={idx === 0}
                                className="p-0.5 rounded hover:bg-slate-200 disabled:opacity-20 text-slate-600 cursor-pointer"
                                title="تحريك لأعلى"
                              >
                                <MoveUp className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => handleMoveTickerOrder(idx, 'down')}
                                disabled={idx === tickerItems.length - 1}
                                className="p-0.5 rounded hover:bg-slate-200 disabled:opacity-20 text-slate-600 cursor-pointer"
                                title="تحريك لأسفل"
                              >
                                <MoveDown className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          {/* Badge Tag */}
                          {item.badge && (
                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200 whitespace-nowrap">
                              {item.badge}
                            </span>
                          )}

                          {/* News Item Text & Link */}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-bold text-slate-800 break-words leading-relaxed">
                              {item.text}
                            </p>
                            {item.link && (
                              <span className="text-[11px] text-blue-600 flex items-center gap-1 mt-0.5 font-mono">
                                <ExternalLink className="w-3 h-3" />
                                <span>{item.link}</span>
                              </span>
                            )}
                          </div>

                          {/* Golden Star indicator */}
                          <span className="text-amber-500 font-bold text-base hidden sm:inline" title="رمز الفاصل بين الأخبار">
                            ✦
                          </span>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2 self-end sm:self-center">
                          {/* Toggle Visibility */}
                          <button
                            onClick={() => handleToggleTickerItem(item.id, item.visible !== false)}
                            className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                              item.visible !== false
                                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                            }`}
                            title={item.visible !== false ? 'إخفاء من الشريط' : 'إظهار في الشريط'}
                          >
                            {item.visible !== false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>

                          {/* Edit Item */}
                          <button
                            onClick={() => {
                              setTickerFormError(null);
                              setEditingTickerItem({ ...item });
                              setIsTickerModalOpen(true);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>تعديل</span>
                          </button>

                          {/* Delete Item with Inline Confirmation */}
                          {confirmDeleteTickerId === item.id ? (
                            <div className="flex items-center gap-1 bg-rose-50 border border-rose-200 px-2 py-1 rounded-xl">
                              <button
                                onClick={() => handleDeleteTickerItem(item.id)}
                                className="px-2 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-bold hover:bg-rose-700 cursor-pointer"
                              >
                                حذف
                              </button>
                              <button
                                onClick={() => setConfirmDeleteTickerId(null)}
                                className="px-2 py-1 rounded-lg bg-white text-slate-600 border border-slate-200 text-[11px] font-bold hover:bg-slate-100 cursor-pointer"
                              >
                                إلغاء
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setConfirmDeleteTickerId(item.id)}
                              className="p-2 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors cursor-pointer"
                              title="حذف الخبر"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: MEDICAL TERMINOLOGY INDEX */}
          {activeTab === 'medical_dictionary' && (
            <MedicalTermsManager
              onNotify={(msg) => {
                showToast(msg);
              }}
            />
          )}

          {/* TAB: STUDY RESOURCES & DIGITAL LIBRARY (مصادر الدراسة والمكتبة الرقمية) */}
          {activeTab === 'study_resources' && (
            <StudyResourcesManager
              subjectsList={subjects}
              onNotify={(msg) => {
                showToast(msg);
              }}
            />
          )}

          {/* TAB: INNOVA ASSOCIATION MANAGEMENT (إدارة جمعية إنوفا) */}
          {activeTab === 'innova' && (
            <InnovaAdminManager
              onNotify={(msg) => {
                showToast(msg);
              }}
            />
          )}

          {/* TAB 2: ARTICLES MANAGEMENT */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold font-tajawal text-slate-900">إدارة المقالات والأبحاث</h2>
                  <p className="text-xs text-slate-500 mt-1">أنشئ، عدل، واحفظ المسودات وانشر المقالات الطبية والأكاديمية</p>
                </div>

                <button
                  onClick={() => {
                    setEditingArticle({ title: '', subtitle: '', content: '', category: 'عام', status: 'published', author: 'إدارة الموقع' });
                    setIsArticleModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>مقال جديد</span>
                </button>
              </div>

              {articles.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                  <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-500">لا توجد مقالات حالياً</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {articles.map((art) => (
                    <div key={art.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {art.coverImage ? (
                          <img src={art.coverImage} alt={art.title} className="w-16 h-12 rounded-xl object-cover border border-slate-200 flex-shrink-0" />
                        ) : (
                          <div className="w-16 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold font-tajawal text-slate-900 text-sm">{art.title}</h3>
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              art.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {art.status === 'published' ? 'منشور' : 'مسودة'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{art.category} • {new Date(art.createdAt).toLocaleDateString('ar-EG')}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={() => setArticlePreviewModal(art)}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold flex items-center gap-1"
                          title="معاينة المقال"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>معاينة</span>
                        </button>

                        <button
                          onClick={() => {
                            setEditingArticle(art);
                            setIsArticleModalOpen(true);
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs font-bold flex items-center gap-1"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>تعديل</span>
                        </button>

                        <button
                          onClick={() => {
                            setConfirmActionModal({
                              title: 'تأكيد حذف المقال',
                              message: `هل أنت متأكد من حذف المقال "${art.title}" نهائياً من قاعدة البيانات؟`,
                              confirmLabel: 'حذف المقال',
                              tone: 'danger',
                              onConfirm: async () => {
                                await FirebaseService.deleteArticle(art.id);
                                showToast('تم حذف المقال بنجاح');
                              },
                            });
                          }}
                          className="p-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 cursor-pointer"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: EDITABLE COLLEGE SECTIONS */}
          {activeTab === 'college_sections' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold font-tajawal text-slate-900">تعديل نصوص أقسام الكلية والمواد الأكاديمية</h2>
                  <p className="text-xs text-slate-500 mt-1">تعديل نصوص عن الكلية والنصائح وإمكانية إضافة أقسام جديدة والمواد الأكاديمية</p>
                </div>

                <button
                  onClick={handleSaveCollegeInfo}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>حفظ نصوص الكلية</span>
                </button>
              </div>

              {/* General About College Text Fields */}
              <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h3 className="font-extrabold font-tajawal text-slate-800 text-sm">قسم: عن الكلية والنظام الأكاديمي</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">عنوان الكلية الرئيسية:</label>
                    <input
                      type="text"
                      value={collegeInfo.title}
                      onChange={(e) => setCollegeInfo({ ...collegeInfo, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">الشعار الفرعي (Tagline):</label>
                    <input
                      type="text"
                      value={collegeInfo.tagline}
                      onChange={(e) => setCollegeInfo({ ...collegeInfo, tagline: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">صورة البانر الرئيسي للكلية:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={collegeInfo.image}
                      onChange={(e) => setCollegeInfo({ ...collegeInfo, image: e.target.value })}
                      placeholder="رابط الصورة أو اختر ملف..."
                      className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <label className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1">
                      <Upload className="w-3.5 h-3.5" />
                      <span>رفع</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleFileUpload(e.target.files[0], (url) => setCollegeInfo({ ...collegeInfo, image: url }));
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">نظرة عامة عن الكلية والدراسة:</label>
                  <textarea
                    rows={4}
                    value={collegeInfo.overview}
                    onChange={(e) => setCollegeInfo({ ...collegeInfo, overview: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">شرح نظام الساعات المعتمدة والتقييم:</label>
                  <textarea
                    rows={3}
                    value={collegeInfo.creditSystem}
                    onChange={(e) => setCollegeInfo({ ...collegeInfo, creditSystem: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Survival Tips List Manager */}
              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h3 className="font-extrabold font-tajawal text-slate-800 text-sm">نصائح توجيهية للطلاب المستجدين</h3>
                
                <div className="space-y-2">
                  {collegeInfo.survivalTips.map((tip, idx) => (
                    <div key={tip.id || idx} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start justify-between gap-3">
                      <div className="flex-1 space-y-1">
                        <input
                          type="text"
                          value={tip.title}
                          onChange={(e) => {
                            const updated = [...collegeInfo.survivalTips];
                            updated[idx].title = e.target.value;
                            setCollegeInfo({ ...collegeInfo, survivalTips: updated });
                          }}
                          className="w-full font-bold text-xs bg-transparent outline-none border-b border-slate-100 focus:border-blue-500"
                        />
                        <textarea
                          rows={2}
                          value={tip.description}
                          onChange={(e) => {
                            const updated = [...collegeInfo.survivalTips];
                            updated[idx].description = e.target.value;
                            setCollegeInfo({ ...collegeInfo, survivalTips: updated });
                          }}
                          className="w-full text-xs text-slate-600 bg-transparent outline-none border-b border-slate-100 focus:border-blue-500"
                        />
                      </div>

                      <button
                        onClick={() => {
                          const updated = collegeInfo.survivalTips.filter((_, i) => i !== idx);
                          setCollegeInfo({ ...collegeInfo, survivalTips: updated });
                        }}
                        className="p-1 text-rose-600 hover:bg-rose-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add New Tip */}
                <div className="p-3 bg-white rounded-xl border border-dashed border-slate-300 space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-700">إضافة نصيحة جديدة:</span>
                  <input
                    type="text"
                    placeholder="عنوان النصيحة (مثال: تنزيل الساعات الحقيقية)"
                    value={newTipTitle}
                    onChange={(e) => setNewTipTitle(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                  />
                  <textarea
                    rows={2}
                    placeholder="التفاصيل..."
                    value={newTipDesc}
                    onChange={(e) => setNewTipDesc(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                  />
                  <button
                    onClick={() => {
                      if (!newTipTitle) return;
                      const updated = [
                        ...collegeInfo.survivalTips,
                        { id: 'tip-' + Date.now(), title: newTipTitle, description: newTipDesc }
                      ];
                      setCollegeInfo({ ...collegeInfo, survivalTips: updated });
                      setNewTipTitle('');
                      setNewTipDesc('');
                    }}
                    className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إضافة النصيحة</span>
                  </button>
                </div>
              </div>

              {/* Subjects List Management */}
              <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-tajawal text-slate-800 text-sm">إدارة المواد الأكاديمية (الاسم، الشعار، الشرح)</h3>
                  <button
                    onClick={() => {
                      setEditingSubject({ id: 'sub-' + Date.now(), nameAr: '', nameEn: '', code: 'MED101', credits: 3 });
                      setIsSubjectModalOpen(true);
                    }}
                    className="px-3 py-1.5 bg-purple-600 text-white text-xs font-bold rounded-xl flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إضافة مادة جديدة</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subjects.map((sub) => (
                    <div key={sub.id} className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={sub.image} alt={sub.nameAr} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <p className="font-bold text-xs text-slate-900">{sub.nameAr} ({sub.nameEn})</p>
                          <p className="text-[10px] text-slate-500">{sub.code} • {sub.credits} ساعات</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setEditingSubject(sub);
                            setIsSubjectModalOpen(true);
                          }}
                          className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-xs font-bold"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setConfirmActionModal({
                              title: 'تأكيد حذف المادة الأكاديمية',
                              message: `هل أنت متأكد من حذف مادة "${sub.nameAr}" من النظام؟`,
                              confirmLabel: 'حذف المادة',
                              tone: 'danger',
                              onConfirm: async () => {
                                await FirebaseService.deleteSubject(sub.id);
                                showToast('تم حذف المادة بنجاح');
                              },
                            });
                          }}
                          className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: VIDEO MANAGEMENT */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold font-tajawal text-slate-900">إدارة المكتبة المرئية (الفيديوهات)</h2>
                  <p className="text-xs text-slate-500 mt-1">رفع الفيديوهات، التبديل، الترتيب، الصورة المصغرة، والنشر الإلغاء</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setConfirmActionModal({
                        title: 'استيراد المحتوى النموذجي',
                        message: 'هل ترغب في استيراد الفيديوهات والمقالات النموذجية إلى قاعدة البيانات؟ (لن يتم مسح المحتوى الحالي)',
                        confirmLabel: 'استيراد النماذج',
                        tone: 'primary',
                        onConfirm: async () => {
                          await FirebaseService.seedDefaultArticlesAndVideos();
                          showToast('تم استيراد المحتوى النموذجي بنجاح!');
                        },
                      });
                    }}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 flex items-center gap-1.5 cursor-pointer"
                    title="استيراد فيديوهات ومقالات طبية وأكاديمية نموذجية"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>استيراد نماذج جاهزة</span>
                  </button>

                  <button
                    onClick={() => {
                      setEditingVideo({ title: '', description: '', videoUrl: '', visible: true });
                      setVideoFileError(null);
                      setIsVideoModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>رفع/إضافة فيديو</span>
                  </button>
                </div>
              </div>

              {videos.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                  <Film className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-500">لا توجد فيديوهات في المكتبة حالياً</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {videos.map((vid, idx) => (
                    <div key={vid.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-12 bg-slate-900 rounded-xl overflow-hidden relative flex-shrink-0 flex items-center justify-center text-white">
                          {vid.thumbnailUrl ? (
                            <img src={vid.thumbnailUrl} alt={vid.title} className="w-full h-full object-cover" />
                          ) : (
                            <Film className="w-6 h-6 text-slate-500" />
                          )}
                          <Play className="w-4 h-4 fill-white absolute" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold font-tajawal text-slate-900 text-sm">{vid.title}</h3>
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              vid.visible ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                            }`}>
                              {vid.visible ? 'منشور' : 'مخفي'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{vid.description || 'بدون وصف'}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={() => handleMoveVideoOrder(idx, 'up')}
                          disabled={idx === 0}
                          className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 disabled:opacity-30"
                          title="تحريك لأعلى"
                        >
                          <MoveUp className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleMoveVideoOrder(idx, 'down')}
                          disabled={idx === videos.length - 1}
                          className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 disabled:opacity-30"
                          title="تحريك لأسفل"
                        >
                          <MoveDown className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            setEditingVideo(vid);
                            setVideoFileError(null);
                            setIsVideoModalOpen(true);
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-700 text-xs font-bold flex items-center gap-1"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>تعديل</span>
                        </button>

                        <button
                          onClick={() => {
                            setConfirmActionModal({
                              title: 'تأكيد حذف الفيديو',
                              message: `هل أنت متأكد من حذف الفيديو "${vid.title}" نهائياً؟`,
                              confirmLabel: 'حذف الفيديو',
                              tone: 'danger',
                              onConfirm: async () => {
                                await FirebaseService.deleteVideo(vid.id);
                                showToast('تم حذف الفيديو بنجاح');
                              },
                            });
                          }}
                          className="p-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: CONTENT & MAIN SITE TEXTS */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold font-tajawal text-slate-900">تعديل نصوص الموقع الرئيسية</h2>
                  <p className="text-xs text-slate-500 mt-1">تعديل العناوين، نصوص الهيرو، ومعلومات الاتصال بالكلية</p>
                </div>
                <button
                  onClick={handleSaveConfig}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>حفظ النصوص</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">اسم الموقع الهيدر:</label>
                  <input
                    type="text"
                    value={config.siteTitle}
                    onChange={(e) => setConfig({ ...config, siteTitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">الشعار الفرعي:</label>
                  <input
                    type="text"
                    value={config.siteSubtitle}
                    onChange={(e) => setConfig({ ...config, siteSubtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">العنوان الرئيسي للبانر (Hero Title):</label>
                  <input
                    type="text"
                    value={config.heroTitle}
                    onChange={(e) => setConfig({ ...config, heroTitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">الوصف التوضيحي للبانر (Hero Subtitle):</label>
                  <textarea
                    rows={3}
                    value={config.heroSubtitle}
                    onChange={(e) => setConfig({ ...config, heroSubtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">معرف بوت التلجرام الرسمي:</label>
                  <input
                    type="text"
                    value={config.telegramBotName}
                    onChange={(e) => setConfig({ ...config, telegramBotName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">رابط بوت التلجرام:</label>
                  <input
                    type="text"
                    value={config.telegramBotLink}
                    onChange={(e) => setConfig({ ...config, telegramBotLink: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SECTION VISIBILITY SWITCHES */}
          {activeTab === 'sections' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-extrabold font-tajawal text-slate-900">مفاتيح تفعيل/إخفاء أقسام الموقع (ON/OFF)</h2>
                <p className="text-xs text-slate-500 mt-1">اختر الأقسام المطلوبة للظهور على الموقع الزائر المباشر</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(config.sectionVisibility).map(([key, isVisible]) => (
                  <div key={key} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">{key}</span>
                    <button
                      onClick={() => handleToggleSection(key as keyof SectionVisibility, !isVisible)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        isVisible ? 'bg-emerald-500 text-white shadow' : 'bg-slate-300 text-slate-600'
                      }`}
                    >
                      {isVisible ? 'تفعيل ON' : 'إخفاء OFF'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: MEDIA & IMAGES */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-extrabold font-tajawal text-slate-900">إدارة الصور والوسائط</h2>
                <p className="text-xs text-slate-500 mt-1">رفع الصور وتخزينها، استبدال الصور وركوب الروابط المباشرة</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold text-slate-800">رفع/إضافة صورة جديدة:</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="اسم الصورة (مثال: شعار الكلية)"
                    value={newMediaName}
                    onChange={(e) => setNewMediaName(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs flex-1"
                  />
                  <input
                    type="text"
                    placeholder="رابط الصورة المباشر أو اختر ملف"
                    value={newMediaUrl}
                    onChange={(e) => setNewMediaUrl(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs flex-1"
                  />
                  <label className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold cursor-pointer flex items-center justify-center gap-1">
                    <Upload className="w-3.5 h-3.5" />
                    <span>اختر ملف</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleFileUpload(e.target.files[0], (url) => setNewMediaUrl(url));
                        }
                      }}
                    />
                  </label>
                  <button
                    onClick={async () => {
                      if (!newMediaName.trim() || !newMediaUrl.trim()) {
                        showToast('يرجى إدخال اسم الصورة ورابطها');
                        return;
                      }
                      try {
                        await FirebaseService.addMedia({
                          name: newMediaName.trim(),
                          url: newMediaUrl.trim(),
                          type: newMediaType,
                          visible: true
                        });
                        setNewMediaName('');
                        setNewMediaUrl('');
                        showToast('تمت إضافة الصورة بنجاح!');
                      } catch {
                        showToast('فشل حفظ الصورة في قاعدة البيانات');
                      }
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    حفظ
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {mediaList.map((m) => (
                  <div key={m.id} className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 group relative">
                    <img src={m.url} alt={m.name} className="w-full h-28 object-cover rounded-xl border border-slate-200" />
                    <p className="text-[11px] font-bold text-slate-800 truncate">{m.name}</p>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(m.url);
                          showToast('تم نسخ رابط الصورة إلى الحافظة!');
                        }}
                        className="text-[10px] text-blue-600 font-bold hover:underline cursor-pointer"
                      >
                        نسخ الرابط
                      </button>
                      <button
                        onClick={async () => {
                          try {
                            await FirebaseService.deleteMedia(m.id);
                            showToast('تم حذف الصورة');
                          } catch {
                            showToast('تعذر حذف الصورة من قاعدة البيانات');
                          }
                        }}
                        className="text-rose-600 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: ANNOUNCEMENTS */}
          {activeTab === 'announcements' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-extrabold font-tajawal text-slate-900">إدارة الشريط الإعلاني والتنبيهات العامة</h2>
                <p className="text-xs text-slate-500 mt-1">تنبيهات هامة يراها الطلاب أعلى الصفحة المباشرة</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold text-slate-800">إضافة تنبيه/إعلان جديد:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="العنوان الرئيسية (مثال: بدء امتحانات الفاينل)"
                    value={newAnnTitle}
                    onChange={(e) => setNewAnnTitle(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="الشارة (مثال: هَام عاجل)"
                    value={newAnnBadge}
                    onChange={(e) => setNewAnnBadge(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs"
                  />
                  <textarea
                    rows={2}
                    placeholder="محتوى التنبيه..."
                    value={newAnnContent}
                    onChange={(e) => setNewAnnContent(e.target.value)}
                    className="sm:col-span-2 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs"
                  />
                </div>
                <button
                  onClick={async () => {
                    if (!newAnnTitle.trim()) {
                      showToast('يرجى كتابة عنوان التنبيه');
                      return;
                    }
                    try {
                      await FirebaseService.addAnnouncement({
                        title: newAnnTitle.trim(),
                        badge: newAnnBadge.trim() || 'إعلان',
                        content: newAnnContent.trim(),
                        visible: true
                      });
                      setNewAnnTitle('');
                      setNewAnnContent('');
                      showToast('تمت إضافة التنبيه بنجاح!');
                    } catch {
                      showToast('فشل نشر التنبيه في قاعدة البيانات');
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  نشر التنبيه
                </button>
              </div>

              <div className="space-y-3">
                {announcements.map((a) => (
                  <div key={a.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold ml-2">{a.badge}</span>
                      <strong className="text-xs text-slate-900">{a.title}</strong>
                      <p className="text-[11px] text-slate-500">{a.content}</p>
                    </div>
                    <button
                      onClick={async () => {
                        try {
                          await FirebaseService.deleteAnnouncement(a.id);
                          showToast('تم حذف التنبيه');
                        } catch {
                          showToast('تعذر حذف التنبيه من قاعدة البيانات');
                        }
                      }}
                      className="text-rose-600 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: BACKUP & LOGS */}
          {activeTab === 'backup_logs' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-extrabold font-tajawal text-slate-900">النسخ الاحتياطي وسجل العمليات (Audit Logs)</h2>
                <p className="text-xs text-slate-500 mt-1">تصدير واستعادة النسخة الاحتياطية الكاملة لجميع المجموعات (14 قسماً) ومراقبة العمليات</p>
              </div>

              {/* Export Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xs font-bold text-slate-800">تصدير نسخة احتياطية كاملة (JSON • Schema v2)</h3>
                  <p className="text-[11px] text-slate-500">يشمل الإعدادات، الكلية، المواد، المصادر، المقالات، الفيديوهات، الشريط، الإعلانات، الميديا، ملفات Drive، إنوفا، والمصطلحات المخصصة</p>
                </div>
                <button
                  type="button"
                  disabled={isExportingBackup}
                  onClick={async () => {
                    setIsExportingBackup(true);
                    try {
                      const json = await FirebaseService.exportFullData();
                      const blob = new Blob([json], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `daleelak_backup_${new Date().toISOString().split('T')[0]}.json`;
                      a.click();
                      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
                      showToast('تم تصدير النسخة الاحتياطية الكاملة بنجاح!');
                    } catch {
                      showToast('فشل تصدير النسخة الاحتياطية');
                    } finally {
                      setIsExportingBackup(false);
                    }
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  <Download className="w-4 h-4" />
                  <span>{isExportingBackup ? 'جاري التصدير...' : 'تحميل النسخة الاحتياطية'}</span>
                </button>
              </div>

              {/* Import / Restore Card */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900">استيراد واستعادة نسخة احتياطية (JSON)</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">اختر ملف JSON مصدّراً أو الصق محتواه للمعاينة ثم الاستعادة مع التحقق الكامل من السجلات</p>
                  </div>

                  <label className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-[#16958E]" />
                    <span>اختيار ملف JSON</span>
                    <input
                      type="file"
                      accept=".json,application/json"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          if (typeof ev.target?.result === 'string') {
                            setImportJsonText(ev.target.result);
                            setImportResult(null);
                          }
                        };
                        reader.readAsText(file);
                      }}
                    />
                  </label>
                </div>

                <textarea
                  rows={5}
                  value={importJsonText}
                  onChange={(e) => {
                    setImportJsonText(e.target.value);
                    setImportResult(null);
                  }}
                  placeholder="الصق هنا محتوى ملف النسخة الاحتياطية بصيغة JSON أو اختر ملفاً من الأعلى..."
                  className="w-full p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono text-left outline-none focus:ring-2 focus:ring-[#16958E]"
                  dir="ltr"
                />

                {/* Preview Summary */}
                {(() => {
                  if (!importJsonText.trim()) return null;
                  try {
                    const obj = JSON.parse(importJsonText) as Record<string, unknown>;
                    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;
                    const countOf = (k: string) => (Array.isArray(obj[k]) ? (obj[k] as unknown[]).length : obj[k] ? 1 : 0);
                    return (
                      <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-2">
                        <p className="font-extrabold">معاينة محتوى النسخة قبل الاستعادة:</p>
                        <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                          <span>إعدادات: {countOf('siteConfig')}</span>
                          <span>• كلية: {countOf('collegeInfo')}</span>
                          <span>• مواد: {countOf('subjectsData')}</span>
                          <span>• مصادر: {countOf('studyResources')}</span>
                          <span>• مقالات: {countOf('articles')}</span>
                          <span>• فيديوهات: {countOf('videos')}</span>
                          <span>• أخبار: {countOf('tickerItems')}</span>
                          <span>• إعلانات: {countOf('announcements')}</span>
                          <span>• ميديا: {countOf('media')}</span>
                          <span>• Drive: {countOf('driveFiles')}</span>
                          <span>• إنوفا: {countOf('innovaMembers') + countOf('innovaContents') + countOf('innovaInfo')}</span>
                          <span>• مصطلحات: {countOf('medicalTermsCustom')}</span>
                        </div>
                      </div>
                    );
                  } catch {
                    return (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-bold">
                        النص المدخل ليس بصيغة JSON صالحة بعد.
                      </div>
                    );
                  }
                })()}

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="backup_import_mode"
                        checked={importMode === 'merge'}
                        onChange={() => setImportMode('merge')}
                      />
                      <span>دمج وتحديث (Merge — آمن)</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer text-rose-700">
                      <input
                        type="radio"
                        name="backup_import_mode"
                        checked={importMode === 'replace'}
                        onChange={() => setImportMode('replace')}
                      />
                      <span>استبدال كامل (Replace)</span>
                    </label>
                  </div>

                  <button
                    type="button"
                    disabled={!importJsonText.trim() || isImportingBackup}
                    onClick={() => {
                      setConfirmActionModal({
                        title: importMode === 'replace' ? 'تأكيد الاستبدال الكامل بالنسخة الاحتياطية' : 'تأكيد استيراد ودمج النسخة الاحتياطية',
                        message:
                          importMode === 'replace'
                            ? 'تحذير: وضع الاستبدال الكامل سيحذف السجلات غير الموجودة في النسخة من المجموعات المستوردة. هل تريد المتابعة؟'
                            : 'سيتم التحقق من صحة جميع السجلات ودمجها مع قاعدة البيانات الحالية وتحديث الكاش للمستخدمين.',
                        confirmLabel: isImportingBackup ? 'جاري الاستعادة...' : 'تنفيذ الاستعادة الآن',
                        tone: importMode === 'replace' ? 'danger' : 'primary',
                        onConfirm: async () => {
                          setIsImportingBackup(true);
                          try {
                            const res = await FirebaseService.importFullData(importJsonText, { mode: importMode });
                            setImportResult(res);
                            showToast(res.success ? 'تمت استعادة النسخة الاحتياطية بنجاح!' : 'تمت الاستعادة مع بعض الملاحظات');
                          } finally {
                            setIsImportingBackup(false);
                          }
                        },
                      });
                    }}
                    className="px-5 py-2 rounded-xl bg-[#071A3D] hover:bg-[#16958E] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{isImportingBackup ? 'جاري الاستعادة...' : 'استعادة النسخة الاحتياطية'}</span>
                  </button>
                </div>

                {importResult && (
                  <div
                    className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                      importResult.success
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-amber-50 border-amber-200 text-amber-900'
                    }`}
                  >
                    <p className="font-extrabold">
                      {importResult.success ? 'اكتملت الاستعادة والتحقق بنجاح:' : 'اكتملت الاستعادة مع تحذيرات:'}
                    </p>
                    <p className="font-mono text-[11px]">
                      {Object.entries(importResult.stats)
                        .filter(([, count]) => Number(count) > 0)
                        .map(([k, count]) => `${k}: ${String(count)}`)
                        .join(' | ') || 'لم يتم تعديل أي سجلات.'}
                    </p>
                    {importResult.errors.length > 0 && (
                      <ul className="list-disc mr-4 text-[11px] text-rose-700 space-y-0.5">
                        {importResult.errors.slice(0, 8).map((errMsg, idx) => (
                          <li key={idx}>{errMsg}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Audit Logs List */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-800">سجل الإجراءات والتعديلات الأخيرة:</h3>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {adminLogs.map((log) => (
                    <div key={log.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                      <div>
                        <span className="font-bold text-blue-600 ml-2">{log.action}</span>
                        <span className="text-slate-700">{log.details}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">{new Date(log.timestamp).toLocaleTimeString('ar-EG')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: SMART CACHE & SYNC MANAGER */}
          {activeTab === 'cache_manager' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#16958E]" />
                    <h2 className="text-xl font-extrabold font-tajawal text-slate-900">
                      إدارة التخزين المؤقت والمزامنة الذكية
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    مراقبة كاش IndexedDB، قياس استهلاك قراءات Firestore، وتشغيل المزامنة الانتقائية بأقل تكلفة ممكنة
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleManualSmartSync(false)}
                    disabled={isSyncingCache}
                    className="px-3.5 py-2 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold shadow flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-60"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncingCache ? 'animate-spin' : ''}`} />
                    <span>مزامنة ذكية الآن</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleManualSmartSync(true)}
                    disabled={isSyncingCache}
                    className="px-3.5 py-2 rounded-xl bg-[#071A3D] hover:bg-[#0e2f5a] text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-60"
                    title="إعادة تحميل المجموعات العامة قسرياً من Firestore"
                  >
                    <Cloud className="w-3.5 h-3.5 text-[#BCEBFF]" />
                    <span>مزامنة كاملة إجبارية</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConfirmClearPublicCache(true)}
                    disabled={isSyncingCache}
                    className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-60"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>مسح كاش المحتوى العام</span>
                  </button>
                </div>
              </div>

              {/* Sync Feedback Banner */}
              {syncResultBanner && (
                <div
                  className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between gap-3 ${
                    syncResultBanner.type === 'success'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  <span>{syncResultBanner.message}</span>
                  <button
                    type="button"
                    onClick={() => setSyncResultBanner(null)}
                    className="p-1 rounded-lg hover:bg-black/5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Inline Confirmation for Clearing Public Cache (Preserves Student Data) */}
              {confirmClearPublicCache && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-extrabold text-rose-900">
                        تأكيد مسح ذاكرة التخزين المؤقت للمحتوى العام؟
                      </p>
                      <p className="text-[11px] text-rose-800 mt-0.5 leading-relaxed">
                        سيتم حذف نسخ IndexedDB للمحتوى العام فقط (المقالات، الأخبار، الإعدادات، المصادر) وإعادة جلبها عند الحاجة. لن يتم المساس نهائياً ببيانات الطلاب الشخصية (الجدول الدراسي، المعدل التراكمي، المصادر الخاصة، أو الإعدادات).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleClearPublicCacheAdmin}
                      disabled={isSyncingCache}
                      className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer disabled:opacity-60"
                    >
                      تأكيد المسح الآمن
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmClearPublicCache(false)}
                      className="px-4 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 text-xs font-bold hover:bg-slate-100 cursor-pointer"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              )}

              {/* Status & Telemetry KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>حالة الاتصال والحصة</span>
                    {cacheDiagnostics?.isOnline === false ? (
                      <WifiOff className="w-4 h-4 text-slate-500" />
                    ) : (
                      <Wifi className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-sm font-extrabold text-slate-900 mt-1.5">
                    {cacheDiagnostics?.isQuotaExceeded
                      ? 'تجاوز الحصة المجانية (وضع الكاش)'
                      : cacheDiagnostics?.isOnline === false
                      ? 'غير متصل بالإنترنت (محلي)'
                      : 'متصل بالسحابة بشكل طبيعي'}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    آخر مزامنة ناجحة:{' '}
                    {cacheDiagnostics?.lastSuccessSyncAt
                      ? new Date(cacheDiagnostics.lastSuccessSyncAt).toLocaleString('ar-EG')
                      : 'لم تتم مزامنة سحابية بعد'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-700">
                    <span>محرك IndexedDB</span>
                    <HardDrive className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm font-extrabold text-blue-950 mt-1.5">
                    {cacheDiagnostics?.indexedDbSupported ? 'مدعوم ومفعّل' : 'وضع الذاكرة الاحتياطي'}
                  </p>
                  <p className="text-[11px] text-blue-700 mt-1 font-mono">
                    {((cacheDiagnostics?.totalCachedBytes ?? 0) / 1024).toFixed(1)} KB •{' '}
                    {cacheDiagnostics?.totalCachedItems ?? 0} عنصر
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span>كفاءة التخزين المؤقت</span>
                    <Activity className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-black font-mono text-emerald-900 mt-1">
                    {cacheDiagnostics?.metrics.cacheHits ?? 0}
                  </p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">
                    نجاح كاش • تخطي {cacheDiagnostics?.metrics.skippedCollectionFetches ?? 0} مجموعة
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-700">
                    <span>إجمالي قراءات Firestore بالجلسة</span>
                    <button
                      type="button"
                      onClick={() => {
                        FirestoreAuditMetrics.reset();
                        void refreshCacheDiagnostics();
                        showToast('تم تصفير عداد قراءات الجلسة.');
                      }}
                      title="تصفير العداد"
                      className="p-1 rounded-lg hover:bg-indigo-100 text-indigo-700 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-2xl font-black font-mono text-indigo-950 mt-1">
                    {cacheDiagnostics?.metrics.totalDocsRead ?? 0}
                  </p>
                  <p className="text-[11px] text-indigo-700 mt-0.5 font-mono">
                    getDoc:{cacheDiagnostics?.metrics.getDocCalls ?? 0} · getDocs:
                    {cacheDiagnostics?.metrics.getDocsCalls ?? 0} · manifest:
                    {cacheDiagnostics?.metrics.manifestChecks ?? 0}
                  </p>
                </div>
              </div>

              {/* Per-collection IndexedDB diagnostics table */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-xs font-extrabold text-slate-800">
                    حالة المجموعات المخزنة محلياً (Public Collections Cache)
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    يتم حفظ بيانات الطلاب الشخصية بشكل منفصل ومحمي
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-slate-100/70 text-slate-600 font-bold">
                      <tr>
                        <th className="py-2.5 px-3">القسم / المجموعة</th>
                        <th className="py-2.5 px-3">الحالة</th>
                        <th className="py-2.5 px-3">العناصر</th>
                        <th className="py-2.5 px-3">الإصدار</th>
                        <th className="py-2.5 px-3">المصدر</th>
                        <th className="py-2.5 px-3">الصلاحية (TTL)</th>
                        <th className="py-2.5 px-3">الحجم</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(cacheDiagnostics?.collections || []).map((col) => (
                        <tr key={col.key} className="hover:bg-slate-50/70">
                          <td className="py-2.5 px-3 font-bold text-slate-800">
                            <div>{col.labelAr}</div>
                            <div className="text-[10px] font-mono text-slate-400">{col.key}</div>
                          </td>
                          <td className="py-2.5 px-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                col.cached
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {col.cached ? 'مخزن محلياً' : 'غير محمّل بعد'}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-mono font-bold text-slate-700">
                            {col.itemCount}
                          </td>
                          <td className="py-2.5 px-3 font-mono text-slate-600">
                            v{col.version}
                            {col.cloudVersion !== null ? ` / سحابي v${col.cloudVersion}` : ''}
                          </td>
                          <td className="py-2.5 px-3">
                            <span className="text-[11px] font-bold text-slate-600">
                              {col.source === 'cloud'
                                ? 'سحابي'
                                : col.source === 'cache'
                                ? 'كاش محلي'
                                : col.source === 'fallback'
                                ? 'احتياطي'
                                : '—'}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-[11px] text-slate-600">
                            {!col.cached ? (
                              '—'
                            ) : col.isExpired ? (
                              <span className="text-amber-700 font-bold">منتهي (سيتم التحقق)</span>
                            ) : (
                              <span className="text-emerald-700 font-bold">ساري</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 font-mono text-[11px] text-slate-500">
                            {(col.byteSizeApprox / 1024).toFixed(1)} KB
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: GOOGLE DRIVE STORAGE */}
          {activeTab === 'drive_storage' && (
            <GoogleDriveStorageManager
              onNotify={(msg, type) => {
                setToastMessage(msg);
                setTimeout(() => setToastMessage(null), 3000);
              }}
            />
          )}

        </main>
      </div>

      {/* ARTICLE EDITOR MODAL */}
      {isArticleModalOpen && editingArticle && (
        <Modal
          isOpen={isArticleModalOpen && Boolean(editingArticle)}
          onClose={() => setIsArticleModalOpen(false)}
          maxWidth="3xl"
          title={editingArticle.id ? 'تعديل المقال' : 'إنشاء مقال جديد'}
          subtitle="تحرير المقال ومحتواه ونشره للطلاب"
          icon={<FileText className="w-5 h-5 text-blue-600" />}
          footer={
            <>
              <button
                onClick={() => setIsArticleModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveArticle}
                className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md cursor-pointer"
              >
                حفظ المقال
              </button>
            </>
          }
        >
          <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">عنوان المقال الرئيسي:*</label>
                    <input
                      type="text"
                      value={editingArticle.title || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                      placeholder="عنوان المقال..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">التصنيف (Category):</label>
                    <input
                      type="text"
                      value={editingArticle.category || 'عام'}
                      onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                      placeholder="طب، إرشادات، تشريح..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">العنوان الفرعي/الموجز:</label>
                  <input
                    type="text"
                    value={editingArticle.subtitle || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, subtitle: e.target.value })}
                    placeholder="موجز سريع يظهر تحت العنوان..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Cover Image Upload & URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">صورة الغلاف (Cover Image):</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editingArticle.coverImage || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, coverImage: e.target.value })}
                      placeholder="رابط الصورة أو اختر ملف من جهازك..."
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <label className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1">
                      <Upload className="w-3.5 h-3.5" />
                      <span>رفع صورة</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleFileUpload(e.target.files[0], (url) => setEditingArticle({ ...editingArticle, coverImage: url }));
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                {/* Rich Text Toolbar */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">شريط التنسيق وإدراج الصور/العناوين:*</label>
                  <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-100 rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => insertFormatting('## ')}
                      className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-xs font-bold flex items-center gap-1"
                      title="عنوان رئيسي H2"
                    >
                      <Heading className="w-3.5 h-3.5" /> H2
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('### ')}
                      className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-xs font-bold flex items-center gap-1"
                      title="عنوان فرعي H3"
                    >
                      <Heading className="w-3.5 h-3.5 text-slate-500" /> H3
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('**', '**')}
                      className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-xs font-bold"
                      title="عريض Bold"
                    >
                      <Bold className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('*', '*')}
                      className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-xs font-bold"
                      title="مائل Italic"
                    >
                      <Italic className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('- ')}
                      className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-xs font-bold"
                      title="قائمة نقطية"
                    >
                      <List className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('1. ')}
                      className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-xs font-bold"
                      title="قائمة رقمية"
                    >
                      <ListOrdered className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('> ')}
                      className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-xs font-bold"
                      title="اقتباس Quote"
                    >
                      <Quote className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('![توضيح الصورة](', ')')}
                      className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-xs font-bold flex items-center gap-1"
                      title="إدراج صورة داخل النص"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-blue-600" /> صورة
                    </button>
                  </div>

                  <textarea
                    ref={articleTextAreaRef}
                    rows={10}
                    value={editingArticle.content || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                    placeholder="اكتب المحتوى الكامل هنا..."
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed focus:ring-2 focus:ring-blue-500 outline-none font-cairo"
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                    <input
                      type="radio"
                      name="status"
                      checked={editingArticle.status === 'published'}
                      onChange={() => setEditingArticle({ ...editingArticle, status: 'published' })}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>نشر فوري (Published)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                    <input
                      type="radio"
                      name="status"
                      checked={editingArticle.status === 'draft'}
                      onChange={() => setEditingArticle({ ...editingArticle, status: 'draft' })}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <span>حفظ كمسودة (Draft)</span>
                  </label>
                </div>
          </div>
        </Modal>
      )}

      {/* VIDEO EDITOR MODAL */}
      {isVideoModalOpen && editingVideo && (
        <Modal
          isOpen={isVideoModalOpen && Boolean(editingVideo)}
          onClose={() => setIsVideoModalOpen(false)}
          maxWidth="2xl"
          title={editingVideo.id ? 'تعديل معلومات الفيديو' : 'رفع/إضافة فيديو جديد'}
          subtitle="إضافة وتعديل شروحات ومحاضرات الفيديو"
          icon={<Film className="w-5 h-5 text-indigo-600" />}
          footer={
            <>
              <button onClick={() => setIsVideoModalOpen(false)} className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer">إلغاء</button>
              <button onClick={handleSaveVideo} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer">حفظ الفيديو</button>
            </>
          }
        >
          <div className="space-y-4">
                {videoFileError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>{videoFileError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">عنوان الفيديو:*</label>
                  <input
                    type="text"
                    value={editingVideo.title || ''}
                    onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
                    placeholder="عنوان الشرح..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">رابط الفيديو أو اختيار ملف فيديو (MP4, WebM, MOV):*</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editingVideo.videoUrl || ''}
                      onChange={(e) => setEditingVideo({ ...editingVideo, videoUrl: e.target.value })}
                      placeholder="رابط مباشر / YouTube / Vimeo أو ارفع ملف..."
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none"
                    />
                    <label className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1">
                      <Upload className="w-3.5 h-3.5" />
                      <span>رفع فيديو</span>
                      <input
                        type="file"
                        accept="video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            validateAndHandleVideoFile(e.target.files[0]);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">صورة مصغرة غلاف الفيديو (Thumbnail):</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editingVideo.thumbnailUrl || ''}
                      onChange={(e) => setEditingVideo({ ...editingVideo, thumbnailUrl: e.target.value })}
                      placeholder="رابط الصورة أو ارفع صورة غلاف..."
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none"
                    />
                    <label className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1">
                      <Upload className="w-3.5 h-3.5" />
                      <span>صورة</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleFileUpload(e.target.files[0], (url) => setEditingVideo({ ...editingVideo, thumbnailUrl: url }));
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">وصف الشرح والتفاصيل:</label>
                  <textarea
                    rows={3}
                    value={editingVideo.description || ''}
                    onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                    placeholder="نبذة عن الفيديو والأفكار المشروحة فيه..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={editingVideo.visible !== false}
                      onChange={(e) => setEditingVideo({ ...editingVideo, visible: e.target.checked })}
                      className="text-indigo-600 rounded"
                    />
                    <span>إظهار الفيديو للطلاب (نشر)</span>
                  </label>
                </div>
          </div>
        </Modal>
      )}

      {/* SUBJECT EDITOR MODAL */}
      {isSubjectModalOpen && editingSubject && (
        <Modal
          isOpen={isSubjectModalOpen && Boolean(editingSubject)}
          onClose={() => setIsSubjectModalOpen(false)}
          maxWidth="xl"
          title="تعديل المادة الأكاديمية"
          subtitle="تعديل اسم وبيانات المادة والمقررات الدراسية"
          icon={<BookOpen className="w-5 h-5 text-purple-600" />}
          footer={
            <>
              <button onClick={() => setIsSubjectModalOpen(false)} className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer">إلغاء</button>
              <button onClick={handleSaveSubject} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer">حفظ المادة</button>
            </>
          }
        >
          <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">اسم المادة بالعربي:*</label>
                  <input
                    type="text"
                    value={editingSubject.nameAr || ''}
                    onChange={(e) => setEditingSubject({ ...editingSubject, nameAr: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">اسم المادة بالإنجليزية (مثال: Anatomy):*</label>
                  <input
                    type="text"
                    value={editingSubject.nameEn || ''}
                    onChange={(e) => setEditingSubject({ ...editingSubject, nameEn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">كود المادة (مثال: ANAT101):</label>
                  <input
                    type="text"
                    value={editingSubject.code || ''}
                    onChange={(e) => setEditingSubject({ ...editingSubject, code: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">صورة المادة:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editingSubject.image || ''}
                      onChange={(e) => setEditingSubject({ ...editingSubject, image: e.target.value })}
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                    />
                    <label className="px-3 py-2 bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer">
                      <span>رفع</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleFileUpload(e.target.files[0], (url) => setEditingSubject({ ...editingSubject, image: url }));
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">الوصف الشامل للمادة:</label>
                  <textarea
                    rows={3}
                    value={editingSubject.description || ''}
                    onChange={(e) => setEditingSubject({ ...editingSubject, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  />
                </div>
          </div>
        </Modal>
      )}

      {/* TICKER ITEM EDITOR MODAL */}
      {isTickerModalOpen && editingTickerItem && (
        <Modal
          isOpen={isTickerModalOpen && Boolean(editingTickerItem)}
          onClose={() => {
            if (!isSavingTicker) {
              setIsTickerModalOpen(false);
              setTickerFormError(null);
            }
          }}
          maxWidth="lg"
          title={editingTickerItem.id ? 'تعديل خبر في الشريط المتحرك' : 'إضافة خبر جديد للشريط المتحرك'}
          subtitle="يظهر التنبيه أو الخبر بشكل فوري ومستمر في الشريط المتحرك"
          icon={<Radio className="w-5 h-5 text-rose-500 animate-pulse" />}
          footer={
            <>
              <button
                onClick={() => {
                  setIsTickerModalOpen(false);
                  setTickerFormError(null);
                }}
                disabled={isSavingTicker}
                className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-300 transition-colors cursor-pointer disabled:opacity-50"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveTickerItem}
                disabled={isSavingTicker}
                className="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-60"
              >
                <Check className="w-4 h-4" />
                <span>{isSavingTicker ? 'جاري الحفظ...' : editingTickerItem.id ? 'حفظ التعديلات' : 'إضافة للشريط'}</span>
              </button>
            </>
          }
        >
          <div className="space-y-4">
                {tickerFormError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{tickerFormError}</span>
                  </div>
                )}

                {/* News Text */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-700">
                      نص الخبر أو التنبيه:*
                    </label>
                    <span className="text-[11px] text-amber-600 font-bold">
                      {(editingTickerItem.text || '').trim().length} / 1000 • سيظهر فاصل ✦ بعده تلقائياً
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    maxLength={1000}
                    value={editingTickerItem.text || ''}
                    onChange={(e) => {
                      setTickerFormError(null);
                      setEditingTickerItem({ ...editingTickerItem, text: e.target.value });
                    }}
                    placeholder="اكتب نص الخبر هنا... مثال: تم إطلاق ميزة التقويم الشهري التفاعلي الجديد في قسم الجدول الدراسي"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 outline-none focus:border-rose-500 focus:bg-white transition-all leading-relaxed"
                  />
                </div>

                {/* Badge Tag Presets */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الشارة / التصنيف (اختياري):
                  </label>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {['عاجل', 'تنبيه', 'هام', 'جديد', 'إعلان', 'ترحيب'].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setEditingTickerItem({ ...editingTickerItem, badge: preset })}
                        className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                          editingTickerItem.badge === preset
                            ? 'bg-rose-600 text-white shadow-sm'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setEditingTickerItem({ ...editingTickerItem, badge: '' })}
                      className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-500 hover:bg-slate-200"
                    >
                      بدون شارة
                    </button>
                  </div>
                  <input
                    type="text"
                    value={editingTickerItem.badge || ''}
                    onChange={(e) => setEditingTickerItem({ ...editingTickerItem, badge: e.target.value })}
                    placeholder="أو اكتب تصنيف مخصص..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  />
                </div>

                {/* Optional Action Link */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    رابط عند النقر (اختياري):
                  </label>
                  <input
                    type="text"
                    value={editingTickerItem.link || ''}
                    onChange={(e) => setEditingTickerItem({ ...editingTickerItem, link: e.target.value })}
                    placeholder="رابط خارجي: https://... أو قسم داخلي: schedule أو telegram"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    إذا تركت الرابط فارغاً، سيكون الخبر للعرض فقط دون قابلية النقر.
                  </p>
                </div>

                {/* Visible Switch */}
                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={editingTickerItem.visible !== false}
                      onChange={(e) => setEditingTickerItem({ ...editingTickerItem, visible: e.target.checked })}
                      className="w-4 h-4 text-rose-600 rounded"
                    />
                    <span>إظهار في شريط الأخبار المتحرك على الفور</span>
                  </label>
                </div>
          </div>
        </Modal>
      )}

      {/* ARTICLE PREVIEW MODAL */}
      {articlePreviewModal && (
        <Modal
          isOpen={Boolean(articlePreviewModal)}
          onClose={() => setArticlePreviewModal(null)}
          maxWidth="2xl"
          title={articlePreviewModal.title}
          subtitle={`التصنيف: ${articlePreviewModal.category || 'عام'} • بقلم: ${articlePreviewModal.author || 'إدارة الكلية'}`}
          icon={<FileText className="w-5 h-5 text-blue-600" />}
          footer={
            <button
              onClick={() => setArticlePreviewModal(null)}
              className="px-5 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 cursor-pointer"
            >
              إغلاق المعاينة
            </button>
          }
        >
          <div className="space-y-4 text-right">
            {articlePreviewModal.coverImage && (
              <img
                src={articlePreviewModal.coverImage}
                alt={articlePreviewModal.title}
                className="w-full h-48 object-cover rounded-2xl border border-slate-200 dark:border-white/10"
              />
            )}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>{articlePreviewModal.createdAt ? new Date(articlePreviewModal.createdAt).toLocaleDateString('ar-EG') : 'اليوم'}</span>
              <span>•</span>
              <span>{articlePreviewModal.status === 'published' ? 'منشور' : 'مسودة'}</span>
            </div>
            {articlePreviewModal.subtitle && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {articlePreviewModal.subtitle}
              </div>
            )}
            <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
              {articlePreviewModal.content}
            </div>
          </div>
        </Modal>
      )}

      {/* UNIFIED ADMIN ACTION CONFIRMATION MODAL */}
      {confirmActionModal && (
        <Modal
          isOpen={Boolean(confirmActionModal)}
          onClose={() => !isConfirmActionRunning && setConfirmActionModal(null)}
          maxWidth="md"
          title={confirmActionModal.title}
          subtitle="يرجى التأكيد قبل تنفيذ الإجراء"
          icon={<AlertTriangle className={`w-5 h-5 ${confirmActionModal.tone === 'danger' ? 'text-rose-600' : 'text-[#16958E]'}`} />}
          footer={
            <>
              <button
                type="button"
                disabled={isConfirmActionRunning}
                onClick={() => setConfirmActionModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 cursor-pointer disabled:opacity-50"
              >
                إلغاء
              </button>
              <button
                type="button"
                disabled={isConfirmActionRunning}
                onClick={async () => {
                  setIsConfirmActionRunning(true);
                  try {
                    await confirmActionModal.onConfirm();
                    setConfirmActionModal(null);
                  } catch (err: unknown) {
                    const msg = err instanceof Error ? err.message : 'حدث خطأ أثناء تنفيذ العملية';
                    showToast(msg);
                  } finally {
                    setIsConfirmActionRunning(false);
                  }
                }}
                className={`px-5 py-2 rounded-xl text-white text-xs font-bold cursor-pointer disabled:opacity-50 ${
                  confirmActionModal.tone === 'danger'
                    ? 'bg-rose-600 hover:bg-rose-700'
                    : 'bg-[#16958E] hover:bg-[#127771]'
                }`}
              >
                {isConfirmActionRunning ? 'جاري التنفيذ...' : confirmActionModal.confirmLabel}
              </button>
            </>
          }
        >
          <p className="text-xs text-slate-700 leading-relaxed text-right">
            {confirmActionModal.message}
          </p>
        </Modal>
      )}

    </div>
  );
};
