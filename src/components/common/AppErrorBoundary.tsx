import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class AppErrorBoundary extends Component<Props, State> {
  declare state: State;
  declare props: Readonly<Props>;
  declare setState: (
    state: State | Partial<State> | ((prevState: Readonly<State>) => State | Partial<State>)
  ) => void;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error?.message || 'حدث خطأ غير متوقع أثناء عرض الصفحة.',
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('AppErrorBoundary caught runtime error:', error, info);
  }

  private handleReload = () => {
    window.location.href = '/';
  };

  private handleResetView = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div
          dir="rtl"
          className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-[#071A3D] text-[#071A3D] dark:text-white font-cairo"
        >
          <div className="max-w-md w-full rounded-3xl bg-white dark:bg-[#0b234d] border border-[#BCEBFF] dark:border-[#16958E]/40 p-7 shadow-xl text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl font-extrabold font-tajawal mb-2">
                تعذر عرض هذه الواجهة مؤقتاً
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                حرصنا على عدم ظهور صفحة فارغة. يمكنك استعادة العرض مباشرة أو العودة إلى الصفحة الرئيسية.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={this.handleResetView}
                className="flex-1 py-3 px-4 rounded-xl bg-[#16958E] hover:bg-[#127d77] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>المحاولة مجدداً</span>
              </button>
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 py-3 px-4 rounded-xl bg-[#071A3D] hover:bg-[#0c295e] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>الصفحة الرئيسية</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
