import { MedicalTerm } from '../types';

export interface SearchHighlightSegment {
  text: string;
  matched: boolean;
}

export interface MedicalSearchMatch {
  term: MedicalTerm;
  score: number;
  matchReason: 'exact' | 'prefix' | 'synonym' | 'substring' | 'fuzzy' | 'definition';
}

export interface MedicalSearchOutput {
  results: MedicalSearchMatch[];
  didYouMean: MedicalTerm | null;
  totalBeforeLimit: number;
}

const ARABIC_CHAR_REGEX = /[\u0600-\u06FF]/;
const ARABIC_DIACRITICS_REGEX = /[\u064B-\u065F\u0670\u0640]/g;

export function containsArabic(text: string): boolean {
  return ARABIC_CHAR_REGEX.test(text);
}

export function normalizeEnglish(raw: string): string {
  return (raw || '')
    .toLowerCase()
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function normalizeArabic(raw: string): string {
  return (raw || '')
    .replace(ARABIC_DIACRITICS_REGEX, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[^\u0600-\u06FFa-zA-Z0-9\s]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function normalizeQueryGeneric(raw: string): string {
  if (!raw) return '';
  return containsArabic(raw) ? normalizeArabic(raw) : normalizeEnglish(raw);
}

export function slugifyMedicalTermId(termEn: string): string {
  const cleaned = (termEn || '')
    .toLowerCase()
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
  if (cleaned.length >= 1) return cleaned;
  return `term-${Date.now().toString(36)}`;
}

/**
 * Generates normalized word & prefix tokens (max 60) for scalable Firestore
 * `array-contains` queries without loading the full collection on every search.
 */
export function buildMedicalSearchTokens(input: {
  term_en: string;
  term_ar: string;
  synonyms?: string[];
  specialty?: string;
}): string[] {
  const tokenSet = new Set<string>();

  const addWordWithPrefixes = (word: string, isArabic: boolean) => {
    const clean = word.trim();
    if (!clean || clean.length < 2) return;
    tokenSet.add(clean);
    const minPrefix = isArabic ? 2 : 3;
    const maxPrefix = Math.min(clean.length, 10);
    for (let len = minPrefix; len <= maxPrefix; len++) {
      tokenSet.add(clean.slice(0, len));
    }
  };

  const enNorm = normalizeEnglish(input.term_en);
  if (enNorm) {
    tokenSet.add(enNorm);
    for (const w of enNorm.split(/\s+/)) {
      addWordWithPrefixes(w, false);
    }
  }

  const arNorm = normalizeArabic(input.term_ar);
  if (arNorm) {
    tokenSet.add(arNorm);
    for (const w of arNorm.split(/\s+/)) {
      addWordWithPrefixes(w, true);
    }
  }

  for (const syn of input.synonyms || []) {
    const isAr = containsArabic(syn);
    const norm = isAr ? normalizeArabic(syn) : normalizeEnglish(syn);
    if (!norm) continue;
    tokenSet.add(norm);
    for (const w of norm.split(/\s+/)) {
      addWordWithPrefixes(w, isAr);
    }
  }

  if (input.specialty) {
    const specNorm = normalizeEnglish(input.specialty);
    if (specNorm) tokenSet.add(specNorm);
  }

  return Array.from(tokenSet).slice(0, 60);
}

/**
 * Optimal String Alignment / Damerau-Levenshtein distance
 * Treats adjacent character transpositions (e.g. "pnuemonia") as cost 1.
 */
export function damerauLevenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let val = Math.min(
        dp[i - 1][j] + 1,      // deletion
        dp[i][j - 1] + 1,      // insertion
        dp[i - 1][j - 1] + cost // substitution
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        val = Math.min(val, dp[i - 2][j - 2] + 1); // transposition
      }
      dp[i][j] = val;
    }
  }
  return dp[m][n];
}

function computeFuzzySimilarity(queryNorm: string, candidateNorm: string): { similarity: number; distance: number } {
  if (!queryNorm || !candidateNorm) return { similarity: 0, distance: 999 };
  const maxLen = Math.max(queryNorm.length, candidateNorm.length);
  const dist = damerauLevenshtein(queryNorm, candidateNorm);
  const similarity = 1 - dist / maxLen;
  return { similarity, distance: dist };
}

function isFuzzyAcceptable(queryNorm: string, candidateNorm: string): { ok: boolean; similarity: number } {
  const len = Math.max(queryNorm.length, candidateNorm.length);
  if (queryNorm.length < 3 || candidateNorm.length < 3) {
    return { ok: false, similarity: 0 };
  }
  const { similarity, distance } = computeFuzzySimilarity(queryNorm, candidateNorm);
  if (len <= 5) {
    return { ok: distance <= 1 && similarity >= 0.65, similarity };
  }
  if (len <= 8) {
    return { ok: distance <= 2 && similarity >= 0.62, similarity };
  }
  const maxAllowed = Math.min(3, Math.floor(len * 0.34));
  return { ok: distance <= maxAllowed && similarity >= 0.6, similarity };
}

/**
 * Evaluates a single MedicalTerm against a normalized query, returning score + match reason.
 */
export function evaluateTermMatch(
  term: MedicalTerm,
  rawQuery: string
): MedicalSearchMatch | null {
  const trimmed = (rawQuery || '').trim();
  if (!trimmed) {
    return { term, score: 100, matchReason: 'exact' };
  }

  const queryIsArabic = containsArabic(trimmed);
  const qNorm = queryIsArabic ? normalizeArabic(trimmed) : normalizeEnglish(trimmed);
  if (!qNorm) return null;

  const enNorm = normalizeEnglish(term.term_en);
  const arNorm = normalizeArabic(term.term_ar);
  const primaryCandidate = queryIsArabic ? arNorm : enNorm;

  // 1. Exact Match
  if (enNorm === qNorm || arNorm === qNorm) {
    return { term, score: 1000, matchReason: 'exact' };
  }

  // 2. Prefix Match on main term
  if (enNorm.startsWith(qNorm) || arNorm.startsWith(qNorm)) {
    const lengthBonus = Math.round((qNorm.length / Math.max(1, primaryCandidate.length)) * 80);
    return { term, score: 850 + lengthBonus, matchReason: 'prefix' };
  }

  // 3. Synonym Exact or Prefix
  for (const syn of term.synonyms || []) {
    const synNorm = containsArabic(syn) ? normalizeArabic(syn) : normalizeEnglish(syn);
    if (!synNorm) continue;
    if (synNorm === qNorm) {
      return { term, score: 810, matchReason: 'synonym' };
    }
    if (synNorm.startsWith(qNorm)) {
      return { term, score: 740, matchReason: 'synonym' };
    }
  }

  // 4. Word-start or Substring Match on primary terms & synonyms
  const enWords = enNorm.split(/\s+/).filter(Boolean);
  const arWords = arNorm.split(/\s+/).filter(Boolean);

  if (enWords.some((w) => w.startsWith(qNorm)) || arWords.some((w) => w.startsWith(qNorm))) {
    return { term, score: 680, matchReason: 'substring' };
  }

  if (qNorm.length >= 2 && (enNorm.includes(qNorm) || arNorm.includes(qNorm))) {
    return { term, score: 620, matchReason: 'substring' };
  }

  for (const syn of term.synonyms || []) {
    const synNorm = containsArabic(syn) ? normalizeArabic(syn) : normalizeEnglish(syn);
    if (synNorm && qNorm.length >= 2 && synNorm.includes(qNorm)) {
      return { term, score: 560, matchReason: 'synonym' };
    }
  }

  // 5. Fuzzy Match (handles typos like Myocardia, Pneumona, Nephrits, Hepatits)
  let bestFuzzyScore = 0;
  const checkFuzzyAgainst = (candidate: string, weight: number) => {
    const res = isFuzzyAcceptable(qNorm, candidate);
    if (res.ok) {
      const s = Math.round(weight * res.similarity);
      if (s > bestFuzzyScore) bestFuzzyScore = s;
    }
  };

  checkFuzzyAgainst(enNorm, 520);
  checkFuzzyAgainst(arNorm, 520);

  for (const w of enWords) {
    checkFuzzyAgainst(w, 490);
  }
  for (const w of arWords) {
    checkFuzzyAgainst(w, 490);
  }
  for (const syn of term.synonyms || []) {
    const synNorm = containsArabic(syn) ? normalizeArabic(syn) : normalizeEnglish(syn);
    if (synNorm) {
      checkFuzzyAgainst(synNorm, 460);
    }
  }

  if (bestFuzzyScore > 0) {
    return { term, score: bestFuzzyScore, matchReason: 'fuzzy' };
  }

  // 6. Definition / Specialty fallback match (requires >= 3 chars to avoid noise)
  if (qNorm.length >= 3) {
    const enDefNorm = normalizeEnglish(term.english_definition);
    const arDefNorm = normalizeArabic(term.arabic_definition);
    const specNorm = normalizeEnglish(term.specialty);

    if (specNorm.includes(qNorm) || enDefNorm.includes(qNorm) || arDefNorm.includes(qNorm)) {
      return { term, score: 260, matchReason: 'definition' };
    }
  }

  return null;
}

/**
 * Searches terms with intelligent ranking and computes spelling suggestion ("didYouMean").
 */
export function searchMedicalTerms(
  terms: MedicalTerm[],
  rawQuery: string,
  options?: {
    specialty?: string;
    limit?: number;
  }
): MedicalSearchOutput {
  const specialtyFilter = options?.specialty && options.specialty !== 'all' ? options.specialty : null;
  const scoped = specialtyFilter
    ? terms.filter((t) => t.specialty.toLowerCase() === specialtyFilter.toLowerCase())
    : terms;

  const trimmed = (rawQuery || '').trim();
  if (!trimmed) {
    const sorted = [...scoped]
      .sort((a, b) => a.term_en.localeCompare(b.term_en))
      .map((term): MedicalSearchMatch => ({ term, score: 100, matchReason: 'exact' }));
    const limited = options?.limit ? sorted.slice(0, options.limit) : sorted;
    return {
      results: limited,
      didYouMean: null,
      totalBeforeLimit: sorted.length,
    };
  }

  const matches: MedicalSearchMatch[] = [];
  for (const term of scoped) {
    const m = evaluateTermMatch(term, trimmed);
    if (m) matches.push(m);
  }

  matches.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.term.term_en.localeCompare(b.term.term_en);
  });

  // Compute "Did You Mean?" when no exact/prefix/substring match exists, or top match is fuzzy
  let didYouMean: MedicalTerm | null = null;
  const queryIsArabic = containsArabic(trimmed);
  const qNorm = queryIsArabic ? normalizeArabic(trimmed) : normalizeEnglish(trimmed);
  const hasStrongDirectMatch = matches.some(
    (m) => m.matchReason === 'exact' || m.matchReason === 'prefix' || m.matchReason === 'substring'
  );

  if (!hasStrongDirectMatch && qNorm.length >= 3) {
    if (matches.length > 0 && matches[0].matchReason === 'fuzzy') {
      didYouMean = matches[0].term;
    } else {
      let bestSim = 0;
      let bestCandidate: MedicalTerm | null = null;
      for (const term of scoped) {
        const cand = queryIsArabic ? normalizeArabic(term.term_ar) : normalizeEnglish(term.term_en);
        const { similarity } = computeFuzzySimilarity(qNorm, cand);
        if (similarity > bestSim && similarity >= 0.54) {
          bestSim = similarity;
          bestCandidate = term;
        }
      }
      didYouMean = bestCandidate;
    }
  }

  const limited = options?.limit ? matches.slice(0, options.limit) : matches;
  return {
    results: limited,
    didYouMean,
    totalBeforeLimit: matches.length,
  };
}

/**
 * Safely splits text into matched/unmatched segments for visual highlighting without HTML injection.
 */
export function getHighlightSegments(text: string, rawQuery: string): SearchHighlightSegment[] {
  const source = text || '';
  const q = (rawQuery || '').trim();
  if (!q || !source) return [{ text: source, matched: false }];

  // Direct case-insensitive index match first
  const lowerSrc = source.toLowerCase();
  const lowerQ = q.toLowerCase();
  const directIdx = lowerSrc.indexOf(lowerQ);
  if (directIdx !== -1) {
    const segments: SearchHighlightSegment[] = [];
    if (directIdx > 0) segments.push({ text: source.slice(0, directIdx), matched: false });
    segments.push({ text: source.slice(directIdx, directIdx + q.length), matched: true });
    if (directIdx + q.length < source.length) {
      segments.push({ text: source.slice(directIdx + q.length), matched: false });
    }
    return segments;
  }

  // Arabic normalization span mapping (handles ة/ه and أ/ا differences cleanly)
  if (containsArabic(q) && containsArabic(source)) {
    const qNorm = normalizeArabic(q);
    if (qNorm.length >= 2) {
      // Build character-by-character index map from normalized chars back to original string indices
      const charMap: number[] = [];
      let normBuilt = '';
      for (let i = 0; i < source.length; i++) {
        const ch = source[i];
        if (ARABIC_DIACRITICS_REGEX.test(ch)) {
          ARABIC_DIACRITICS_REGEX.lastIndex = 0;
          continue;
        }
        ARABIC_DIACRITICS_REGEX.lastIndex = 0;
        const mapped = normalizeArabic(ch);
        if (!mapped) continue;
        for (let k = 0; k < mapped.length; k++) {
          normBuilt += mapped[k];
          charMap.push(i);
        }
      }

      const normIdx = normBuilt.indexOf(qNorm);
      if (normIdx !== -1 && charMap.length > normIdx) {
        const startOrig = charMap[normIdx];
        const endNormIdx = normIdx + qNorm.length - 1;
        const endOrig = (charMap[endNormIdx] ?? startOrig) + 1;
        const segments: SearchHighlightSegment[] = [];
        if (startOrig > 0) segments.push({ text: source.slice(0, startOrig), matched: false });
        segments.push({ text: source.slice(startOrig, endOrig), matched: true });
        if (endOrig < source.length) {
          segments.push({ text: source.slice(endOrig), matched: false });
        }
        return segments;
      }
    }
  }

  return [{ text: source, matched: false }];
}
