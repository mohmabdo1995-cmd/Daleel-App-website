import React, { useState, useEffect, useMemo } from 'react';
import { Radio, ExternalLink, Pause, Play } from 'lucide-react';
import { TickerItem, ActivePage } from '../types';
import { FirebaseService, SiteConfig } from '../services/firebase';

interface NewsTickerBarProps {
  siteConfig: SiteConfig;
  onNavigate?: (page: ActivePage) => void;
}

export function getTickerBadgeStyle(badge?: string): string {
  const b = (badge || '').trim();
  if (b.includes('عاجل')) return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
  if (b.includes('تنبيه') || b.includes('هام')) return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
  if (b.includes('جديد')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
  if (b.includes('إعلان')) return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
  return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
}

export function buildRepeatedTickerItems(items: TickerItem[]): TickerItem[] {
  if (!items || items.length === 0) return [];
  const out: TickerItem[] = [];
  let totalChars = 0;
  let loops = 0;
  while ((out.length < 8 || totalChars < 280) && loops < 40) {
    for (const item of items) {
      out.push(item);
      totalChars += (item.text?.length || 0) + (item.badge?.length || 0) + 12;
    }
    loops++;
  }
  return out;
}

export function computeTickerDuration(
  repeatedItems: TickerItem[],
  speed: 'slow' | 'normal' | 'fast' = 'fast'
): number {
  if (!repeatedItems || repeatedItems.length === 0) return 20;
  const charsPerSecond = speed === 'slow' ? 10 : speed === 'normal' ? 15 : 22;
  const totalUnits = repeatedItems.reduce(
    (sum, item) => sum + (item.text?.length || 0) + (item.badge?.length || 0) + 16,
    0
  );
  return Math.max(12, Math.min(180, Math.round(totalUnits / charsPerSecond)));
}

export const NewsTickerBar: React.FC<NewsTickerBarProps> = ({ siteConfig, onNavigate }) => {
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const unsubscribe = FirebaseService.subscribeTicker((items) => {
      setTickerItems(items.filter((item) => item.visible !== false && Boolean(item.text?.trim())));
    });
    return () => unsubscribe();
  }, []);

  const repeatedItems = useMemo(() => buildRepeatedTickerItems(tickerItems), [tickerItems]);
  const speed = siteConfig.tickerSpeed || 'fast';
  const adjustedDuration = useMemo(
    () => computeTickerDuration(repeatedItems, speed),
    [repeatedItems, speed]
  );

  // Check if ticker is enabled in siteConfig
  const isVisible = siteConfig.sectionVisibility?.newsTicker !== false;
  if (!isVisible || repeatedItems.length === 0) {
    return null;
  }

  const handleItemClick = (item: TickerItem) => {
    if (!item.link) return;
    const link = item.link.trim();
    if (!link) return;

    if (link.startsWith('http://') || link.startsWith('https://')) {
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }

    const normalized = link.replace(/^[/#]+/, '').toLowerCase();
    if (normalized === 'telegram') {
      const telegramUrl = siteConfig.telegramBotLink || 'http://t.me/Daleelak_AlJamaei_bot';
      window.open(telegramUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    if (onNavigate) {
      const validPages: ActivePage[] = [
        'landing',
        'main',
        'college',
        'subjects',
        'schedule',
        'resources',
        'articles',
        'videos',
        'gpa',
        'pomodoro'
      ];
      const targetPage = normalized as ActivePage;
      if (validPages.includes(targetPage)) {
        onNavigate(targetPage);
      }
    }
  };

  const renderTrackItems = (trackKey: string) =>
    repeatedItems.map((item, idx) => (
      <div
        key={`${trackKey}-${item.id}-${idx}`}
        dir="rtl"
        onClick={() => handleItemClick(item)}
        className={`inline-flex items-center gap-2 shrink-0 whitespace-nowrap px-1.5 py-0.5 rounded transition-colors ${
          item.link ? 'cursor-pointer hover:bg-white/10 active:scale-[0.98]' : ''
        }`}
        title={item.link ? 'انقر للانتقال للرابط' : undefined}
      >
        {item.badge && (
          <span
            className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full border leading-none shrink-0 whitespace-nowrap ${getTickerBadgeStyle(
              item.badge
            )}`}
          >
            {item.badge}
          </span>
        )}

        <span className="text-[11px] sm:text-xs font-medium text-slate-100 hover:text-white transition-colors whitespace-nowrap shrink-0">
          {item.text}
        </span>

        {item.link && <ExternalLink className="w-2.5 h-2.5 text-[#38BDF8] opacity-80 shrink-0" />}

        <span
          className="text-amber-400 font-extrabold text-xs sm:text-sm mr-2.5 shrink-0 drop-shadow-[0_0_5px_rgba(245,158,11,0.6)] select-none"
          aria-hidden="true"
        >
          ✦
        </span>
      </div>
    ));

  return (
    <div
      dir="rtl"
      className="sticky top-16 sm:top-20 z-30 w-full bg-[#071A3D] border-b border-[#16958E]/40 text-white shadow-sm overflow-hidden select-none"
      style={{
        background: 'linear-gradient(90deg, #051430 0%, #071A3D 50%, #0E2F5A 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-stretch h-9 sm:h-10">
        {/* Live Label Badge (Right side in RTL) */}
        <div className="flex-shrink-0 z-10 flex items-center gap-1.5 px-2.5 sm:px-3.5 bg-gradient-to-l from-[#16958E] to-[#0E2F5A] border-l border-[#BCEBFF]/20 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>

          <Radio className="w-3 h-3 text-[#BCEBFF] hidden sm:inline" />

          <span className="text-[11px] sm:text-xs font-bold font-tajawal text-white tracking-wide whitespace-nowrap">
            {siteConfig.tickerTitle?.trim() || 'شريط الأخبار والتنبيهات'}
          </span>
        </div>

        {/* Scrolling Marquee Container (LTR origin for seamless infinite GPU translation) */}
        <div
          dir="ltr"
          className="ticker-hover-pause relative flex-1 flex items-center overflow-hidden min-w-0 cursor-default"
        >
          {/* Edge fades */}
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0E2F5A] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#051430] to-transparent z-10 pointer-events-none"></div>

          {/* Continuous Infinite Seamless Loop Track */}
          <div
            className="animate-ticker flex items-center shrink-0"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: `${adjustedDuration}s`
            }}
          >
            {/* Track 1 */}
            <div dir="rtl" className="flex items-center gap-6 pl-6 shrink-0">
              {renderTrackItems('t1')}
            </div>

            {/* Track 2 (Identical twin for 100% seamless infinite loop) */}
            <div dir="rtl" className="flex items-center gap-6 pl-6 shrink-0" aria-hidden="true">
              {renderTrackItems('t2')}
            </div>
          </div>
        </div>

        {/* Pause/Play Toggle Button (Left side in RTL) */}
        <div className="flex-shrink-0 z-10 flex items-center px-1.5 sm:px-2 bg-[#071A3D]/90 border-r border-white/10">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            title={isPaused ? 'استئناف الحركة' : 'إيقاف الحركة مؤقتاً'}
            aria-label={isPaused ? 'استئناف شريط الأخبار' : 'إيقاف شريط الأخبار مؤقتاً'}
            className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
