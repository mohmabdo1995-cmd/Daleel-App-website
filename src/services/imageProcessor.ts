export const MAX_INPUT_IMAGE_BYTES = 20 * 1024 * 1024; // 20 MB raw camera/gallery limit
export const TARGET_MAX_DATA_URL_LENGTH = 240_000; // ~175 KB binary, well inside 1 MiB Firestore doc limit
export const MAX_FIRESTORE_COVER_IMAGE_LENGTH = 350_000; // Matches firestore.rules isValidCollegeInfo limit

const ALLOWED_IMAGE_EXTENSIONS = new Set([
  'jpg',
  'jpeg',
  'png',
  'webp',
  'gif',
  'bmp',
  'avif',
  'heic',
  'heif',
]);

const ALLOWED_MIME_PREFIXES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/bmp',
  'image/avif',
  'image/heic',
  'image/heif',
]);

const SAFE_RASTER_DATA_URL_REGEX =
  /^data:image\/(jpeg|jpg|png|webp|gif);base64,[A-Za-z0-9+/=]+$/;

export interface ImageFileMeta {
  name: string;
  type: string;
  size: number;
}

export interface ProcessedCoverImageResult {
  dataUrl: string;
  width: number;
  height: number;
  originalSize: number;
  compressedLength: number;
  mimeType: string;
}

export function formatBytesLabel(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 بايت';
  if (bytes < 1024) return `${bytes} بايت`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} كيلوبايت`;
  return `${(kb / 1024).toFixed(2)} ميجابايت`;
}

export function validateImageFileCandidate(
  file: ImageFileMeta
): { valid: true } | { valid: false; error: string } {
  if (!file || typeof file.size !== 'number' || file.size <= 0) {
    return {
      valid: false,
      error: 'الملف المختار فارغ أو تالف. يرجى اختيار صورة صالحة.',
    };
  }

  if (file.size > MAX_INPUT_IMAGE_BYTES) {
    return {
      valid: false,
      error: `حجم الصورة (${formatBytesLabel(file.size)}) يتجاوز الحد الأقصى المسموح (20 ميجابايت). يرجى اختيار صورة أصغر.`,
    };
  }

  const normalizedType = (file.type || '').trim().toLowerCase();
  const ext = (file.name.split('.').pop() || '').trim().toLowerCase();

  if (normalizedType === 'image/svg+xml' || ext === 'svg') {
    return {
      valid: false,
      error: 'ملفات SVG غير مدعومة لصورة الغلاف لأسباب أمنية. يرجى اختيار صورة JPG أو PNG أو WebP.',
    };
  }

  const hasValidMime =
    normalizedType !== '' &&
    (ALLOWED_MIME_PREFIXES.has(normalizedType) || normalizedType.startsWith('image/'));
  const hasValidExt = ALLOWED_IMAGE_EXTENSIONS.has(ext);

  if (!hasValidMime && !hasValidExt) {
    return {
      valid: false,
      error: 'صيغة الملف غير مدعومة كصورة. الصيغ المدعومة هي: JPG, PNG, WebP, GIF.',
    };
  }

  if (normalizedType && !normalizedType.startsWith('image/')) {
    return {
      valid: false,
      error: 'الملف المختار ليس صورة صالحة. يرجى اختيار ملف صورة من الجهاز.',
    };
  }

  return { valid: true };
}

export function validateCollegeImageUrlValue(
  value: string
): { valid: true; normalized: string } | { valid: false; error: string } {
  const trimmed = (value || '').trim();
  if (trimmed.length === 0) {
    return { valid: true, normalized: '' };
  }

  if (/^blob:/i.test(trimmed)) {
    return {
      valid: false,
      error: 'روابط المتصفح المؤقتة (blob:) لا يمكن حفظها سحابياً. يرجى رفع الصورة عبر زر الرفع أو إدخال رابط https:// مباشر.',
    };
  }

  if (trimmed.length > MAX_FIRESTORE_COVER_IMAGE_LENGTH) {
    return {
      valid: false,
      error: 'حجم بيانات الصورة أكبر من الحد المسموح للحفظ في قاعدة البيانات. يرجى إعادة رفع الصورة ليتم ضغطها تلقائياً.',
    };
  }

  if (/^https?:\/\/.+/i.test(trimmed)) {
    return { valid: true, normalized: trimmed };
  }

  if (SAFE_RASTER_DATA_URL_REGEX.test(trimmed)) {
    return { valid: true, normalized: trimmed };
  }

  if (/^data:/i.test(trimmed)) {
    return {
      valid: false,
      error: 'صيغة رابط البيانات للصورة غير صالحة أو غير مدعومة. استخدم JPG أو PNG أو WebP أو رابط https://.',
    };
  }

  return {
    valid: false,
    error: 'رابط صورة الغلاف غير صالح. يجب أن يبدأ بـ https:// أو يكون صورة مرفوعة صالحة.',
  };
}

export function calculateConstrainedDimensions(
  srcWidth: number,
  srcHeight: number,
  maxWidth: number,
  maxHeight: number
): { width: number; height: number } {
  const safeW = Math.max(1, Math.round(srcWidth));
  const safeH = Math.max(1, Math.round(srcHeight));
  const ratio = Math.min(1, maxWidth / safeW, maxHeight / safeH);
  return {
    width: Math.max(1, Math.round(safeW * ratio)),
    height: Math.max(1, Math.round(safeH * ratio)),
  };
}

async function decodeImageSource(
  file: File
): Promise<{
  width: number;
  height: number;
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void;
  cleanup: () => void;
}> {
  if (typeof createImageBitmap === 'function') {
    try {
      const bitmap = await createImageBitmap(file);
      return {
        width: bitmap.width,
        height: bitmap.height,
        draw: (ctx, w, h) => ctx.drawImage(bitmap, 0, 0, w, h),
        cleanup: () => {
          try {
            bitmap.close();
          } catch {
            // ignore
          }
        },
      };
    } catch {
      // Fallback below for browsers/codecs that reject createImageBitmap
    }
  }

  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const imageEl = new Image();
      imageEl.onload = () => resolve(imageEl);
      imageEl.onerror = () => reject(new Error('image_load_failed'));
      imageEl.src = objectUrl;
    });

    if (typeof img.decode === 'function') {
      await img.decode().catch(() => {});
    }

    const width = img.naturalWidth || img.width;
    const height = img.naturalHeight || img.height;
    if (!width || !height) {
      throw new Error('image_zero_dimensions');
    }

    return {
      width,
      height,
      draw: (ctx, w, h) => ctx.drawImage(img, 0, 0, w, h),
      cleanup: () => URL.revokeObjectURL(objectUrl),
    };
  } catch (err) {
    URL.revokeObjectURL(objectUrl);

    // Final fallback via FileReader (useful on some restricted WebViews)
    const rawDataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('filereader_empty'));
        }
      };
      reader.onerror = () => reject(new Error('filereader_failed'));
      reader.readAsDataURL(file);
    });

    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const imageEl = new Image();
      imageEl.onload = () => resolve(imageEl);
      imageEl.onerror = () => reject(err instanceof Error ? err : new Error('image_decode_failed'));
      imageEl.src = rawDataUrl;
    });

    const width = img.naturalWidth || img.width;
    const height = img.naturalHeight || img.height;
    if (!width || !height) {
      throw new Error('image_zero_dimensions');
    }

    return {
      width,
      height,
      draw: (ctx, w, h) => ctx.drawImage(img, 0, 0, w, h),
      cleanup: () => {},
    };
  }
}

export async function processCoverImageFile(file: File): Promise<ProcessedCoverImageResult> {
  const preCheck = validateImageFileCandidate(file);
  if (preCheck.valid === false) {
    throw new Error(preCheck.error);
  }

  let decoded: Awaited<ReturnType<typeof decodeImageSource>>;
  try {
    decoded = await decodeImageSource(file);
  } catch {
    throw new Error(
      'تعذر قراءة أو معالجة الصورة المختارة. تأكد من أن الملف غير تالف وبصيغة قياسية مثل JPG أو PNG أو WebP.'
    );
  }

  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('تعذر تهيئة معالج الصور في المتصفح.');
    }

    const baseBounds = calculateConstrainedDimensions(decoded.width, decoded.height, 1280, 720);
    const scaleSteps = [1, 0.85, 0.7, 0.55];
    const qualitySteps = [0.84, 0.74, 0.64, 0.52, 0.42];

    // Check whether browser actually supports WebP encoding
    canvas.width = 2;
    canvas.height = 2;
    const supportsWebp = canvas.toDataURL('image/webp', 0.8).startsWith('data:image/webp;base64,');
    const preferredMime = supportsWebp ? 'image/webp' : 'image/jpeg';

    let bestDataUrl = '';
    let bestWidth = baseBounds.width;
    let bestHeight = baseBounds.height;

    for (const scale of scaleSteps) {
      const targetW = Math.max(320, Math.round(baseBounds.width * scale));
      const targetH = Math.max(180, Math.round(baseBounds.height * scale));
      canvas.width = targetW;
      canvas.height = targetH;

      // Paint solid navy backdrop so transparent PNGs remain crisp
      ctx.fillStyle = '#071A3D';
      ctx.fillRect(0, 0, targetW, targetH);
      decoded.draw(ctx, targetW, targetH);

      for (const quality of qualitySteps) {
        const candidate = canvas.toDataURL(preferredMime, quality);
        if (
          SAFE_RASTER_DATA_URL_REGEX.test(candidate) &&
          candidate.length <= TARGET_MAX_DATA_URL_LENGTH
        ) {
          return {
            dataUrl: candidate,
            width: targetW,
            height: targetH,
            originalSize: file.size,
            compressedLength: candidate.length,
            mimeType: preferredMime,
          };
        }
        if (!bestDataUrl || candidate.length < bestDataUrl.length) {
          bestDataUrl = candidate;
          bestWidth = targetW;
          bestHeight = targetH;
        }
      }
    }

    if (
      bestDataUrl &&
      SAFE_RASTER_DATA_URL_REGEX.test(bestDataUrl) &&
      bestDataUrl.length <= MAX_FIRESTORE_COVER_IMAGE_LENGTH
    ) {
      return {
        dataUrl: bestDataUrl,
        width: bestWidth,
        height: bestHeight,
        originalSize: file.size,
        compressedLength: bestDataUrl.length,
        mimeType: preferredMime,
      };
    }

    throw new Error(
      'تعذر ضغط الصورة إلى الحجم المناسب للتخزين السحابي. يرجى اختيار صورة أبعادها أصغر أو استخدام رابط صورة مباشر.'
    );
  } finally {
    decoded.cleanup();
  }
}
