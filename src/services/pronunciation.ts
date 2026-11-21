export type PronunciationStatus = 'idle' | 'speaking' | 'unsupported' | 'error';

export interface PronunciationResult {
  started: boolean;
  mode: 'audio' | 'tts' | 'unsupported';
  message?: string;
}

class MedicalPronunciationService {
  private activeAudio: HTMLAudioElement | null = null;

  isSpeechSynthesisSupported(): boolean {
    return (
      typeof window !== 'undefined' &&
      'speechSynthesis' in window &&
      typeof SpeechSynthesisUtterance !== 'undefined'
    );
  }

  stop(): void {
    if (this.activeAudio) {
      try {
        this.activeAudio.pause();
        this.activeAudio.currentTime = 0;
      } catch {
        // ignore audio cleanup error
      }
      this.activeAudio = null;
    }

    if (this.isSpeechSynthesisSupported()) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore speech synthesis cancel error
      }
    }
  }

  private pickBestEnglishVoice(): SpeechSynthesisVoice | null {
    if (!this.isSpeechSynthesisSupported()) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const preferredLangs = ['en-US', 'en-GB', 'en-AU', 'en-CA'];
    for (const lang of preferredLangs) {
      const exact = voices.find((v) => v.lang.toLowerCase() === lang.toLowerCase());
      if (exact) return exact;
    }
    return voices.find((v) => v.lang.toLowerCase().startsWith('en')) || null;
  }

  /**
   * Plays a human audio file if `audioUrl` is supplied; otherwise uses browser
   * Web Speech API (`speechSynthesis`) for English medical term pronunciation.
   */
  async speakTerm(
    text: string,
    options?: {
      audioUrl?: string;
      rate?: number;
      onStart?: (mode: 'audio' | 'tts') => void;
      onEnd?: () => void;
      onError?: (reason: string) => void;
    }
  ): Promise<PronunciationResult> {
    this.stop();

    const cleanText = (text || '').trim();
    if (!cleanText) {
      return { started: false, mode: 'unsupported', message: 'لا يوجد نص للنطق' };
    }

    // 1. Prefer verified audio URL if attached to the term record
    if (options?.audioUrl && /^https?:\/\//i.test(options.audioUrl)) {
      try {
        const audio = new Audio(options.audioUrl);
        this.activeAudio = audio;
        audio.onended = () => {
          this.activeAudio = null;
          options?.onEnd?.();
        };
        audio.onerror = () => {
          this.activeAudio = null;
          // Fallback cleanly to TTS if external audio file fails
          this.speakViaWebSpeech(cleanText, options);
        };
        await audio.play();
        options?.onStart?.('audio');
        return { started: true, mode: 'audio' };
      } catch {
        this.activeAudio = null;
      }
    }

    // 2. Use browser Web Speech API
    return this.speakViaWebSpeech(cleanText, options);
  }

  private speakViaWebSpeech(
    cleanText: string,
    options?: {
      rate?: number;
      onStart?: (mode: 'audio' | 'tts') => void;
      onEnd?: () => void;
      onError?: (reason: string) => void;
    }
  ): PronunciationResult {
    if (!this.isSpeechSynthesisSupported()) {
      const msg = 'المتصفح الحالي لا يدعم النطق الصوتي الآلي (Web Speech API). يمكنك الاعتماد على دليل النطق والأبجدية الصوتية IPA.';
      options?.onError?.(msg);
      return { started: false, mode: 'unsupported', message: msg };
    }

    try {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = options?.rate ?? 0.9;
      utterance.pitch = 1.0;

      const selectedVoice = this.pickBestEnglishVoice();
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      let finished = false;
      const finishOnce = () => {
        if (finished) return;
        finished = true;
        options?.onEnd?.();
      };

      utterance.onstart = () => {
        options?.onStart?.('tts');
      };
      utterance.onend = () => {
        finishOnce();
      };
      utterance.onerror = (ev) => {
        if (ev.error === 'interrupted' || ev.error === 'canceled') {
          finishOnce();
          return;
        }
        finished = true;
        const msg = 'تعذر تشغيل النطق الصوتي على هذا الجهاز حالياً.';
        options?.onError?.(msg);
      };

      options?.onStart?.('tts');
      window.speechSynthesis.speak(utterance);

      // Safety timeout fallback in headless / muted environments where onend might stall
      if (typeof window !== 'undefined') {
        window.setTimeout(() => {
          if (!finished && !window.speechSynthesis.speaking) {
            finishOnce();
          }
        }, 4500);
      }

      return { started: true, mode: 'tts' };
    } catch {
      const msg = 'تعذر تشغيل محرك النطق الصوتي في المتصفح.';
      options?.onError?.(msg);
      return { started: false, mode: 'unsupported', message: msg };
    }
  }
}

export const PronunciationService = new MedicalPronunciationService();
