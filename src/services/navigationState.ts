import { ActivePage, SubjectId } from '../types';

export type NavModalType =
  | null
  | 'gpa'
  | 'pomodoro'
  | 'auth'
  | 'profile';

export interface NavRouteState {
  __daleelakNav: true;
  entryId: string;
  index: number;
  page: ActivePage;
  subjectId?: SubjectId;
  articleId?: string;
  videoId?: string;
  termId?: string;
  modal?: NavModalType;
  isAdmin?: boolean;
  scrollY: number;
  timestamp: number;
}

const SESSION_ACTIVE_NAV_KEY = 'daleelak_active_nav_v1';
const SESSION_SCROLL_MAP_KEY = 'daleelak_nav_scroll_map_v1';
const SESSION_DRAFTS_KEY = 'daleelak_view_drafts_v1';

const VALID_PAGES: ActivePage[] = [
  'landing',
  'main',
  'college',
  'subjects',
  'subject-detail',
  'schedule',
  'resources',
  'articles',
  'videos',
  'dictionary',
  'gpa',
  'pomodoro',
];

const memoryScrollMap = new Map<string, number>();
const memoryDraftMap = new Map<string, unknown>();
let draftsLoadedFromSession = false;
let scrollsLoadedFromSession = false;

function ensureScrollMapLoaded(): void {
  if (scrollsLoadedFromSession || typeof window === 'undefined') return;
  scrollsLoadedFromSession = true;
  try {
    const raw = sessionStorage.getItem(SESSION_SCROLL_MAP_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, number>;
      if (parsed && typeof parsed === 'object') {
        for (const [k, v] of Object.entries(parsed)) {
          if (typeof v === 'number' && Number.isFinite(v) && v >= 0) {
            memoryScrollMap.set(k, v);
          }
        }
      }
    }
  } catch {
    // ignore storage quota / restricted mode
  }
}

function flushScrollMapToSession(): void {
  if (typeof window === 'undefined') return;
  try {
    const obj: Record<string, number> = {};
    const entries = Array.from(memoryScrollMap.entries()).slice(-60);
    for (const [k, v] of entries) {
      obj[k] = Math.round(v);
    }
    sessionStorage.setItem(SESSION_SCROLL_MAP_KEY, JSON.stringify(obj));
  } catch {
    // ignore
  }
}

function ensureDraftsLoaded(): void {
  if (draftsLoadedFromSession || typeof window === 'undefined') return;
  draftsLoadedFromSession = true;
  try {
    const raw = sessionStorage.getItem(SESSION_DRAFTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, unknown>;
      if (parsed && typeof parsed === 'object') {
        for (const [k, v] of Object.entries(parsed)) {
          memoryDraftMap.set(k, v);
        }
      }
    }
  } catch {
    // ignore
  }
}

function flushDraftsToSession(): void {
  if (typeof window === 'undefined') return;
  try {
    const obj: Record<string, unknown> = {};
    const entries = Array.from(memoryDraftMap.entries()).slice(-80);
    for (const [k, v] of entries) {
      obj[k] = v;
    }
    sessionStorage.setItem(SESSION_DRAFTS_KEY, JSON.stringify(obj));
  } catch {
    // ignore
  }
}

export function getDraftState<T>(key: string, fallback: T): T {
  ensureDraftsLoaded();
  if (memoryDraftMap.has(key)) {
    return memoryDraftMap.get(key) as T;
  }
  return fallback;
}

export function setDraftState<T>(key: string, value: T): void {
  ensureDraftsLoaded();
  memoryDraftMap.set(key, value);
  flushDraftsToSession();
}

export function clearDraftState(key: string): void {
  ensureDraftsLoaded();
  memoryDraftMap.delete(key);
  flushDraftsToSession();
}

export function createNavEntryId(): string {
  return `nav_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}

export function buildRouteKey(state: Partial<NavRouteState>): string {
  if (state.isAdmin) return 'admin';
  const parts = [
    state.page || 'landing',
    state.subjectId ? `sub:${state.subjectId}` : '',
    state.articleId ? `art:${state.articleId}` : '',
    state.videoId ? `vid:${state.videoId}` : '',
    state.termId ? `term:${state.termId}` : '',
  ].filter(Boolean);
  return parts.join('|');
}

export function saveScrollPosition(state: NavRouteState, scrollY: number): void {
  ensureScrollMapLoaded();
  const safeY = Math.max(0, Math.round(scrollY));
  memoryScrollMap.set(state.entryId, safeY);
  memoryScrollMap.set(buildRouteKey(state), safeY);
  flushScrollMapToSession();
}

export function getSavedScrollPosition(state?: Partial<NavRouteState> | null): number {
  if (!state) return 0;
  ensureScrollMapLoaded();
  if (typeof state.scrollY === 'number' && Number.isFinite(state.scrollY) && state.scrollY > 0) {
    return state.scrollY;
  }
  if (state.entryId && memoryScrollMap.has(state.entryId)) {
    return memoryScrollMap.get(state.entryId) || 0;
  }
  const routeKey = buildRouteKey(state);
  if (memoryScrollMap.has(routeKey)) {
    return memoryScrollMap.get(routeKey) || 0;
  }
  return 0;
}

export function persistActiveSessionSnapshot(state: NavRouteState): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(SESSION_ACTIVE_NAV_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function isSameNavDestination(
  a: Pick<NavRouteState, 'page' | 'subjectId' | 'articleId' | 'videoId' | 'termId' | 'modal' | 'isAdmin'>,
  b: Pick<NavRouteState, 'page' | 'subjectId' | 'articleId' | 'videoId' | 'termId' | 'modal' | 'isAdmin'>
): boolean {
  return (
    Boolean(a.isAdmin) === Boolean(b.isAdmin) &&
    a.page === b.page &&
    (a.subjectId || undefined) === (b.subjectId || undefined) &&
    (a.articleId || undefined) === (b.articleId || undefined) &&
    (a.videoId || undefined) === (b.videoId || undefined) &&
    (a.termId || undefined) === (b.termId || undefined) &&
    (a.modal || null) === (b.modal || null)
  );
}

export function isValidNavRouteState(raw: unknown): raw is NavRouteState {
  if (!raw || typeof raw !== 'object') return false;
  const candidate = raw as Partial<NavRouteState>;
  return (
    candidate.__daleelakNav === true &&
    typeof candidate.entryId === 'string' &&
    typeof candidate.page === 'string' &&
    VALID_PAGES.includes(candidate.page as ActivePage)
  );
}

export function buildUrlFromRoute(state: Partial<NavRouteState>): string {
  if (typeof window === 'undefined') return '/';

  if (state.isAdmin) {
    if (window.location.hash === '#admin') {
      return `${window.location.pathname}${window.location.search}#admin`;
    }
    return '/admin';
  }

  const params = new URLSearchParams(window.location.search);
  params.delete('view');
  params.delete('subject');
  params.delete('article');
  params.delete('video');
  params.delete('term');

  const page = state.page || 'landing';
  if (page !== 'landing') {
    params.set('view', page);
  }
  if (state.subjectId && (page === 'subject-detail' || page === 'subjects')) {
    params.set('subject', state.subjectId);
  }
  if (state.articleId && page === 'articles') {
    params.set('article', state.articleId);
  }
  if (state.videoId && page === 'videos') {
    params.set('video', state.videoId);
  }
  if (state.termId && page === 'dictionary') {
    params.set('term', state.termId);
  }

  const queryStr = params.toString();
  // Strip #admin hash when leaving admin view
  const rawHash = window.location.hash === '#admin' ? '' : window.location.hash;
  return `/${queryStr ? `?${queryStr}` : ''}${rawHash}`;
}

export function parseRouteFromLocation(): NavRouteState {
  if (typeof window === 'undefined') {
    return {
      __daleelakNav: true,
      entryId: 'nav_ssr',
      index: 0,
      page: 'landing',
      modal: null,
      scrollY: 0,
      timestamp: Date.now(),
    };
  }

  const pathname = window.location.pathname;
  const hash = window.location.hash;
  const isAdmin = pathname === '/admin' || hash === '#admin';

  // 1. Prefer rich browser history state when present (e.g. Back/Forward/Reload restoration)
  if (isValidNavRouteState(window.history.state)) {
    const histState = window.history.state;
    // Sync admin flag with actual URL path/hash
    if (isAdmin && !histState.isAdmin) {
      return { ...histState, isAdmin: true };
    }
    if (!isAdmin && histState.isAdmin) {
      return { ...histState, isAdmin: false };
    }
    return histState;
  }

  // 2. Parse URL search params
  const params = new URLSearchParams(window.location.search);
  const rawView = params.get('view') as ActivePage | null;
  const rawSubject = params.get('subject') || undefined;
  const rawArticle = params.get('article') || undefined;
  const rawVideo = params.get('video') || undefined;
  const rawTerm = params.get('term') || undefined;

  let page: ActivePage = rawView && VALID_PAGES.includes(rawView) ? rawView : 'landing';
  if (page === 'subjects' && rawSubject) {
    page = 'subject-detail';
  }
  if (!rawView && rawTerm) {
    page = 'dictionary';
  }

  // 3. Check if browser reloaded or recovered a killed background WebView process
  //    at bare "/" while an active session snapshot exists in sessionStorage.
  let savedSessionSnapshot: NavRouteState | null = null;
  try {
    const rawSaved = sessionStorage.getItem(SESSION_ACTIVE_NAV_KEY);
    if (rawSaved) {
      const parsed = JSON.parse(rawSaved);
      if (isValidNavRouteState(parsed)) {
        savedSessionSnapshot = parsed;
      }
    }
  } catch {
    // ignore
  }

  const navEntries =
    typeof performance !== 'undefined' && typeof performance.getEntriesByType === 'function'
      ? (performance.getEntriesByType('navigation') as PerformanceNavigationTiming[])
      : [];
  const navType = navEntries[0]?.type;

  const isBareRoot = !isAdmin && !rawView && !rawSubject && !rawArticle && !rawVideo && !rawTerm;
  if (
    isBareRoot &&
    savedSessionSnapshot &&
    (navType === 'reload' || navType === 'back_forward')
  ) {
    const restored: NavRouteState = {
      ...savedSessionSnapshot,
      modal: savedSessionSnapshot.modal || null,
      scrollY: getSavedScrollPosition(savedSessionSnapshot),
    };
    return restored;
  }

  const baseState: NavRouteState = {
    __daleelakNav: true,
    entryId: createNavEntryId(),
    index: 0,
    page,
    subjectId: rawSubject,
    articleId: rawArticle,
    videoId: rawVideo,
    termId: rawTerm,
    modal: null,
    isAdmin,
    scrollY: 0,
    timestamp: Date.now(),
  };

  // Restore scroll position if matching a saved route in the same session (e.g., reload on /?view=schedule)
  baseState.scrollY = getSavedScrollPosition(baseState);
  return baseState;
}

/**
 * Restore window scroll offset reliably after React commits the restored view,
 * tolerating asynchronous list height settling without jarring animation.
 */
export function restoreScrollOffset(targetY: number): () => void {
  if (typeof window === 'undefined') return () => {};
  const cleanY = Math.max(0, Math.round(targetY));
  if (cleanY === 0) {
    window.scrollTo({ top: 0, behavior: 'auto' });
    return () => {};
  }

  let cancelled = false;
  let attempts = 0;
  const maxAttempts = 12;

  const tryScroll = () => {
    if (cancelled) return;
    window.scrollTo({ top: cleanY, behavior: 'auto' });
    attempts++;
    const maxScrollable = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
    if (
      attempts < maxAttempts &&
      (Math.abs(window.scrollY - cleanY) > 6 || maxScrollable < cleanY)
    ) {
      window.setTimeout(() => {
        if (!cancelled) requestAnimationFrame(tryScroll);
      }, 45);
    }
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(tryScroll);
  });

  return () => {
    cancelled = true;
  };
}
