import {
  InnovaContentCategory,
  InnovaContentItem,
  InnovaInfoData,
  InnovaMemberItem,
} from '../types';
import { DataSyncService } from './dataSyncService';

export const INNOVA_INFO_COLLECTION = 'innova_info';
export const INNOVA_INFO_DOC_ID = 'profile';
export const INNOVA_MEMBERS_COLLECTION = 'innova_members';
export const INNOVA_CONTENTS_COLLECTION = 'innova_contents';

export const MAX_INNOVA_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB

export const DEFAULT_INNOVA_INFO: InnovaInfoData = {
  id: INNOVA_INFO_DOC_ID,
  aboutTitle: 'من نحن إنوفا',
  aboutDescription:
    'جمعية إنوفا (INNOVA) مبادرة طلابية أكاديمية رائدة تسعى إلى تمكين الطلبة في التخصصات الطبية والصحية، وتعزيز ثقافة البحث العلمي، والابتكار، والعمل المؤسسي المنظم داخل الحرم الجامعي.',
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
};

const ID_REGEX = /^[a-zA-Z0-9_\-]+$/;
const HTTP_URL_REGEX = /^https?:\/\/.+/;

export function isValidInnovaId(id: string): boolean {
  return typeof id === 'string' && id.length >= 1 && id.length <= 128 && ID_REGEX.test(id);
}

export function isValidOptionalHttpUrl(url: string, maxLen = 2000): boolean {
  const trimmed = (url || '').trim();
  if (trimmed.length === 0) return true;
  if (trimmed.length > maxLen) return false;
  if (!HTTP_URL_REGEX.test(trimmed)) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export function createInnovaDocId(prefix: string): string {
  const random = Math.random().toString(36).slice(2, 8);
  const raw = `${prefix}_${Date.now().toString(36)}_${random}`.replace(/[^a-zA-Z0-9_\-]/g, '');
  return raw.slice(0, 128);
}

export function sanitizeAndValidateInnovaInfo(
  input: { aboutTitle: string; aboutDescription: string },
  existingCreatedAt?: string
): { valid: true; data: InnovaInfoData } | { valid: false; error: string } {
  const aboutTitle = (input.aboutTitle || '').trim();
  const aboutDescription = (input.aboutDescription || '').trim();

  if (aboutTitle.length < 1 || aboutTitle.length > 200) {
    return { valid: false, error: 'يرجى إدخال عنوان قسم التعريف (من 1 إلى 200 حرف).' };
  }
  if (aboutDescription.length > 5000) {
    return { valid: false, error: 'وصف التعريف يجب ألا يتجاوز 5000 حرف.' };
  }

  const nowIso = new Date().toISOString();
  return {
    valid: true,
    data: {
      id: INNOVA_INFO_DOC_ID,
      aboutTitle,
      aboutDescription,
      createdAt: existingCreatedAt || nowIso,
      updatedAt: nowIso,
    },
  };
}

export function sanitizeAndValidateInnovaMember(
  input: {
    id?: string;
    name: string;
    position: string;
    photoUrl?: string;
    photoStoragePath?: string;
    order?: number;
  },
  existingCreatedAt?: string
): { valid: true; data: InnovaMemberItem } | { valid: false; error: string } {
  const name = (input.name || '').trim();
  const position = (input.position || '').trim();
  const photoUrl = (input.photoUrl || '').trim();
  const photoStoragePath = (input.photoStoragePath || '').trim().slice(0, 500);

  if (name.length < 2 || name.length > 150) {
    return { valid: false, error: 'يرجى إدخال اسم العضو الكامل (من 2 إلى 150 حرفاً).' };
  }
  if (position.length < 2 || position.length > 150) {
    return { valid: false, error: 'يرجى إدخال المسمى أو المسؤولية التنفيذية (من 2 إلى 150 حرفاً).' };
  }
  if (!isValidOptionalHttpUrl(photoUrl, 2000)) {
    return {
      valid: false,
      error: 'رابط صورة العضو يجب أن يبدأ بـ https:// أو http:// (بحد أقصى 2000 حرف).',
    };
  }

  const orderRaw =
    typeof input.order === 'number' && Number.isFinite(input.order) ? Math.round(input.order) : 0;
  const order = Math.max(0, Math.min(10000, orderRaw));
  const id = input.id && isValidInnovaId(input.id) ? input.id : createInnovaDocId('member');
  const nowIso = new Date().toISOString();

  const item: InnovaMemberItem = {
    id,
    name,
    position,
    photoUrl,
    order,
    createdAt: existingCreatedAt || nowIso,
    updatedAt: nowIso,
    ...(photoStoragePath ? { photoStoragePath } : {}),
  };

  return { valid: true, data: item };
}

export function sanitizeAndValidateInnovaContent(
  input: {
    id?: string;
    category: InnovaContentCategory;
    title: string;
    description: string;
    imageUrl?: string;
    imageStoragePath?: string;
    published?: boolean;
    eventDate?: string;
  },
  existingCreatedAt?: string
): { valid: true; data: InnovaContentItem } | { valid: false; error: string } {
  const category: InnovaContentCategory = input.category === 'events' ? 'events' : 'articles';
  const title = (input.title || '').trim();
  const description = (input.description || '').trim();
  const imageUrl = (input.imageUrl || '').trim();
  const imageStoragePath = (input.imageStoragePath || '').trim().slice(0, 500);
  const eventDate = (input.eventDate || '').trim().slice(0, 40);
  const published = input.published !== false;

  if (title.length < 2 || title.length > 250) {
    return { valid: false, error: 'يرجى إدخال العنوان (من 2 إلى 250 حرفاً).' };
  }
  if (description.length < 2 || description.length > 8000) {
    return { valid: false, error: 'يرجى إدخال الوصف الكامل (من 2 إلى 8000 حرف).' };
  }
  if (!isValidOptionalHttpUrl(imageUrl, 2000)) {
    return {
      valid: false,
      error: 'رابط صورة البطاقة يجب أن يبدأ بـ https:// أو http:// (بحد أقصى 2000 حرف).',
    };
  }

  const id = input.id && isValidInnovaId(input.id) ? input.id : createInnovaDocId('innova');
  const nowIso = new Date().toISOString();

  const item: InnovaContentItem = {
    id,
    category,
    title,
    description,
    imageUrl,
    published,
    createdAt: existingCreatedAt || nowIso,
    updatedAt: nowIso,
    ...(imageStoragePath ? { imageStoragePath } : {}),
    ...(eventDate ? { eventDate } : {}),
  };

  return { valid: true, data: item };
}

let collectionsRegistered = false;

export function ensureInnovaCollectionsRegistered(force = false): void {
  if (collectionsRegistered && !force) return;
  collectionsRegistered = true;

  DataSyncService.registerCollection<InnovaInfoData>({
    key: 'innova_info',
    firestoreCollection: INNOVA_INFO_COLLECTION,
    docId: INNOVA_INFO_DOC_ID,
    defaultValue: DEFAULT_INNOVA_INFO,
    isArray: false,
    normalizeItem: (_id, raw) => ({
      id: INNOVA_INFO_DOC_ID,
      aboutTitle:
        typeof raw.aboutTitle === 'string' && raw.aboutTitle.trim()
          ? raw.aboutTitle
          : DEFAULT_INNOVA_INFO.aboutTitle,
      aboutDescription:
        typeof raw.aboutDescription === 'string'
          ? raw.aboutDescription
          : DEFAULT_INNOVA_INFO.aboutDescription,
      createdAt:
        typeof raw.createdAt === 'string' && raw.createdAt
          ? raw.createdAt
          : DEFAULT_INNOVA_INFO.createdAt,
      updatedAt:
        typeof raw.updatedAt === 'string' && raw.updatedAt
          ? raw.updatedAt
          : DEFAULT_INNOVA_INFO.updatedAt,
    }),
  });

  DataSyncService.registerCollection<InnovaMemberItem[]>({
    key: 'innova_members',
    firestoreCollection: INNOVA_MEMBERS_COLLECTION,
    defaultValue: [],
    isArray: true,
    updatedAtField: 'updatedAt',
    normalizeItem: (id, raw) => ({
      id: typeof raw.id === 'string' && raw.id ? raw.id : id,
      name: String(raw.name || ''),
      position: String(raw.position || ''),
      photoUrl: String(raw.photoUrl || ''),
      ...(typeof raw.photoStoragePath === 'string' && raw.photoStoragePath
        ? { photoStoragePath: raw.photoStoragePath }
        : {}),
      order: typeof raw.order === 'number' && Number.isFinite(raw.order) ? raw.order : 0,
      createdAt: String(raw.createdAt || ''),
      updatedAt: String(raw.updatedAt || ''),
    }),
    sortItems: (items) =>
      [...(items as InnovaMemberItem[])].sort((a, b) => {
        const orderDiff = (a.order ?? 0) - (b.order ?? 0);
        if (orderDiff !== 0) return orderDiff;
        return (a.createdAt || '').localeCompare(b.createdAt || '');
      }),
  });

  DataSyncService.registerCollection<InnovaContentItem[]>({
    key: 'innova_contents',
    firestoreCollection: INNOVA_CONTENTS_COLLECTION,
    defaultValue: [],
    isArray: true,
    updatedAtField: 'updatedAt',
    publishedOnly: true,
    normalizeItem: (id, raw) => ({
      id: typeof raw.id === 'string' && raw.id ? raw.id : id,
      category: raw.category === 'events' ? 'events' : 'articles',
      title: String(raw.title || ''),
      description: String(raw.description || ''),
      imageUrl: String(raw.imageUrl || ''),
      ...(typeof raw.imageStoragePath === 'string' && raw.imageStoragePath
        ? { imageStoragePath: raw.imageStoragePath }
        : {}),
      published: raw.published !== false,
      ...(typeof raw.eventDate === 'string' && raw.eventDate
        ? { eventDate: raw.eventDate }
        : {}),
      createdAt: String(raw.createdAt || ''),
      updatedAt: String(raw.updatedAt || ''),
    }),
    sortItems: (items) =>
      [...(items as InnovaContentItem[])].sort((a, b) =>
        (b.createdAt || '').localeCompare(a.createdAt || '')
      ),
  });
}
