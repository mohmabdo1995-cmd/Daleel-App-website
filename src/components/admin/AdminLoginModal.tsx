import React, { useState } from 'react';
import { ShieldCheck, Lock, X, LogOut, RefreshCw, CheckCircle2 } from 'lucide-react';
import { AdminAuthService } from '../../services/adminAuth';
import { Modal } from '../common/Modal';

interface AdminLoginModalProps {
  currentSignedInEmail?: string | null;
  authErrorMessage?: string | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  currentSignedInEmail,
  authErrorMessage,
  onSuccess,
  onCancel,
}) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  const displayedError = errorMsg || authErrorMessage || null;

  const handleGoogleAdminLogin = async () => {
    if (isGoogleSubmitting) return;
    setIsGoogleSubmitting(true);
    setErrorMsg(null);
    try {
      const res = await AdminAuthService.loginWithGoogleAdmin();
      if (res.success) {
        onSuccess();
      } else {
        setErrorMsg(res.error || 'هذا الحساب غير مصرح له بصلاحيات المشرف.');
      }
    } finally {
      setIsGoogleSubmitting(false);
    }
  };

  const handleSwitchAccount = async () => {
    setErrorMsg(null);
    await handleGoogleAdminLogin();
  };

  const handleSignOutCurrent = async () => {
    await AdminAuthService.logout();
    setErrorMsg(null);
  };

  return (
    <Modal
      isOpen={true}
      onClose={onCancel}
      maxWidth="md"
      showHeader={false}
      bodyClassName="p-6 sm:p-8"
    >
      <div className="relative text-right">
        {/* Close Button top-left */}
        <button
          type="button"
          onClick={onCancel}
          className="absolute top-0 left-0 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-500 dark:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 pt-2">
          <div className="w-14 h-14 rounded-2xl bg-[#16958E]/15 text-[#16958E] flex items-center justify-center mx-auto mb-3 shadow-md border border-[#16958E]/30">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-extrabold font-tajawal text-[#071A3D] dark:text-white">
            تسجيل الدخول للوحة التحكم
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
            التحقق الموثّق عبر حساب Google المصرح له لضمان استمرار الجلسة وحماية قاعدة البيانات
          </p>
        </div>

        {/* Active non-admin account notice */}
        {currentSignedInEmail && (
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs mb-4 space-y-2">
            <div className="font-bold flex items-center justify-between gap-2">
              <span>الحساب النشط حالياً:</span>
              <span className="font-mono text-[11px] bg-white/80 dark:bg-black/30 px-2 py-0.5 rounded-lg truncate max-w-[200px]">
                {currentSignedInEmail}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed">
              هذا الحساب غير مصرح له بصلاحيات المشرف. يمكنك التبديل مباشرة إلى حساب المشرف المعتمد.
            </p>
          </div>
        )}

        {/* Error Message */}
        {displayedError && (
          <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs mb-5 font-bold flex items-start gap-2">
            <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{displayedError}</span>
          </div>
        )}

        {/* Primary Verified Google Auth CTA */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={currentSignedInEmail ? handleSwitchAccount : handleGoogleAdminLogin}
            disabled={isGoogleSubmitting}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#071A3D] hover:bg-[#16958E] text-white font-bold text-xs shadow-lg shadow-[#071A3D]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60"
          >
            {isGoogleSubmitting ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            )}
            <span>
              {isGoogleSubmitting
                ? 'جاري التحقق من صلاحية المشرف...'
                : currentSignedInEmail
                ? 'تبديل الحساب والدخول بحساب المشرف'
                : 'تسجيل دخول المشرف الموثّق عبر Google'}
            </span>
          </button>

          <div className="flex items-center gap-2">
            {currentSignedInEmail && (
              <button
                type="button"
                onClick={handleSignOutCurrent}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50 text-rose-700 dark:text-rose-300 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>خروج من الحساب</span>
              </button>
            )}
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[#071A3D] dark:text-white font-bold text-xs transition-all cursor-pointer"
            >
              العودة للموقع
            </button>
          </div>
        </div>

        <div className="mt-5 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-[11px] text-slate-500 dark:text-slate-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#16958E] flex-shrink-0" />
          <span>تُحفظ جلسة المشرف تلقائياً عبر Firebase Persistent Auth وتبقى نشطة عند التحديث أو إعادة الفتح.</span>
        </div>
      </div>
    </Modal>
  );
};
