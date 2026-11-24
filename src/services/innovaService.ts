import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import {
  app,
  db,
  FirebaseService,
  handleFirestoreError,
  isFirestoreQuotaError,
  isFirestoreQuotaExceeded,
  markFirestoreQuotaExceeded,
  OperationType,
} from './firebase';
import {
  InnovaContentCategory,
  InnovaContentItem,
  InnovaInfoData,
  InnovaMemberItem,
} from '../types';
import { DataSyncService } from './dataSyncService';
import { FirestoreAuditMetrics } from './smartCache';
import { MedicalTermsService } from './medicalTermsService';
import {
  createInnovaDocId,
  DEFAULT_INNOVA_INFO,
  ensureInnovaCollectionsRegistered,
  INNOVA_CONTENTS_COLLECTION,
  INNOVA_INFO_COLLECTION,
  INNOVA_INFO_DOC_ID,
  INNOVA_MEMBERS_COLLECTION,
  isValidInnovaId,
  isValidOptionalHttpUrl,
  MAX_INNOVA_IMAGE_BYTES,
  sanitizeAndValidateInnovaContent,
  sanitizeAndValidateInnovaInfo,
  sanitizeAndValidateInnovaMember,
} from './innovaValidation';

export {
  createInnovaDocId,
  DEFAULT_INNOVA_INFO,
  ensureInnovaCollectionsRegistered,
  INNOVA_CONTENTS_COLLECTION,
  INNOVA_INFO_COLLECTION,
  INNOVA_INFO_DOC_ID,
  INNOVA_MEMBERS_COLLECTION,
  isValidInnovaId,
  isValidOptionalHttpUrl,
  MAX_INNOVA_IMAGE_BYTES,
  sanitizeAndValidateInnovaContent,
  sanitizeAndValidateInnovaInfo,
  sanitizeAndValidateInnovaMember,
};

const ALLOWED_IMAGE_MIME_TYPES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
]);

// Register immediately on module load so DataSyncService knows about all INNOVA keys
ensureInnovaCollectionsRegistered();

export class InnovaService {
  static async isVerifiedAdminSession(): Promise<boolean> {
    return MedicalTermsService.isVerifiedAdminFirebaseSession();
  }

  static async signInAdminWithGoogle(): Promise<{
    authorized: boolean;
    email: string | null;
    error?: string;
  }> {
    const res = await MedicalTermsService.signInAdminWithGoogle();
    return {
      authorized: res.authorized,
      email: res.email ?? null,
      error: res.error,
    };
  }

  static subscribeInnovaInfo(callback: (info: InnovaInfoData) => void): () => void {
    ensureInnovaCollectionsRegistered();
    return DataSyncService.subscribeCollection<InnovaInfoData>('innova_info', callback);
  }

  static subscribeInnovaMembers(callback: (members: InnovaMemberItem[]) => void): () => void {
    ensureInnovaCollectionsRegistered();
    return DataSyncService.subscribeCollection<InnovaMemberItem[]>('innova_members', callback);
  }

  static subscribeInnovaContents(callback: (contents: InnovaContentItem[]) => void): () => void {
    ensureInnovaCollectionsRegistered();
    return DataSyncService.subscribeCollection<InnovaContentItem[]>('innova_contents', (items) => {
      callback(items.filter((item) => item.published !== false));
    });
  }

  /**
   * Fetches all INNOVA content items for the Admin Dashboard (including unpublished items when verified admin).
   */
  static async fetchAdminContents(): Promise<InnovaContentItem[]> {
    ensureInnovaCollectionsRegistered();
    const isAdmin = await this.isVerifiedAdminSession();
    if (!isAdmin || isFirestoreQuotaExceeded()) {
      const cached = await DataSyncService.loadCollection<InnovaContentItem[]>('innova_contents');
      return cached.data || [];
    }

    try {
      const snap = await getDocs(collection(db, INNOVA_CONTENTS_COLLECTION));
      FirestoreAuditMetrics.recordGetDocs(INNOVA_CONTENTS_COLLECTION, snap.size);
      const items: InnovaContentItem[] = snap.docs
        .map((d) => {
          const raw = d.data() as Record<string, unknown>;
          return {
            id: typeof raw.id === 'string' && raw.id ? raw.id : d.id,
            category: (raw.category === 'events' ? 'events' : 'articles') as InnovaContentCategory,
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
          };
        })
        .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
      return items;
    } catch (err) {
      if (isFirestoreQuotaError(err)) {
        markFirestoreQuotaExceeded();
      }
      const cached = await DataSyncService.loadCollection<InnovaContentItem[]>('innova_contents');
      return cached.data || [];
    }
  }

  static async uploadInnovaImage(
    file: File,
    folder: 'members' | 'content',
    itemId?: string
  ): Promise<{ url: string; storagePath: string }> {
    const isAdmin = await this.isVerifiedAdminSession();
    if (!isAdmin) {
      throw new Error('يجب توثيق جلسة المشرف عبر Google أولاً قبل رفع الصور إلى Firebase Storage.');
    }

    if (!ALLOWED_IMAGE_MIME_TYPES.has(file.type.toLowerCase())) {
      throw new Error('صيغة الصورة غير مدعومة. الصيغ المسموحة: JPG, PNG, WEBP, GIF, SVG.');
    }
    if (file.size > MAX_INNOVA_IMAGE_BYTES) {
      throw new Error('حجم الصورة يتجاوز الحد الأقصى المسموح (5 ميجابايت).');
    }

    const storage = getStorage(app);
    const safePrefix = (itemId || createInnovaDocId(folder)).replace(/[^a-zA-Z0-9_\-]/g, '');
    const ext = (file.name.split('.').pop() || 'png').replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'png';
    const storagePath = `innova/${folder}/${safePrefix}_${Date.now()}.${ext}`;
    const storageRef = ref(storage, storagePath);

    try {
      await uploadBytes(storageRef, file, { contentType: file.type || 'image/png' });
      const url = await getDownloadURL(storageRef);
      return { url, storagePath };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      throw new Error(
        `تعذر رفع الصورة إلى Firebase Storage (${message}). يمكنك أيضاً إدخال رابط صورة مباشر (https://).`
      );
    }
  }

  static async deleteInnovaStorageFile(storagePath?: string): Promise<void> {
    if (!storagePath || !storagePath.startsWith('innova/')) return;
    try {
      const storage = getStorage(app);
      await deleteObject(ref(storage, storagePath));
    } catch {
      // Non-fatal: file may already be deleted or storage bucket not configured
    }
  }

  static async updateInnovaInfo(input: {
    aboutTitle: string;
    aboutDescription: string;
  }): Promise<InnovaInfoData> {
    ensureInnovaCollectionsRegistered();
    const docRef = doc(db, INNOVA_INFO_COLLECTION, INNOVA_INFO_DOC_ID);
    const path = `${INNOVA_INFO_COLLECTION}/${INNOVA_INFO_DOC_ID}`;

    try {
      const existingSnap = await getDoc(docRef);
      FirestoreAuditMetrics.recordGetDoc(INNOVA_INFO_COLLECTION, 1, false);
      const existingCreatedAt = existingSnap.exists()
        ? String((existingSnap.data() as Record<string, unknown>).createdAt || '')
        : undefined;

      const validated = sanitizeAndValidateInnovaInfo(input, existingCreatedAt || undefined);
      if (!validated.valid) {
        throw new Error((validated as { valid: false; error: string }).error);
      }

      if (existingSnap.exists()) {
        await updateDoc(docRef, {
          aboutTitle: validated.data.aboutTitle,
          aboutDescription: validated.data.aboutDescription,
          updatedAt: validated.data.updatedAt,
        });
      } else {
        await setDoc(docRef, validated.data);
      }

      await DataSyncService.recordConfirmedMutation('innova_info', {
        type: 'replace',
        data: validated.data,
      });

      FirebaseService.addAdminLog(
        'تحديث تعريف جمعية إنوفا',
        `العنوان: ${validated.data.aboutTitle}`
      ).catch(() => {});

      return validated.data;
    } catch (err) {
      if (err instanceof Error && err.message.startsWith('يرجى')) {
        throw err;
      }
      handleFirestoreError(err, OperationType.WRITE, path);
    }
  }

  static async addInnovaMember(input: {
    name: string;
    position: string;
    photoUrl?: string;
    photoStoragePath?: string;
    order?: number;
  }): Promise<InnovaMemberItem> {
    ensureInnovaCollectionsRegistered();
    const validated = sanitizeAndValidateInnovaMember(input);
    if (!validated.valid) {
      throw new Error((validated as { valid: false; error: string }).error);
    }

    const member = validated.data;
    const docRef = doc(db, INNOVA_MEMBERS_COLLECTION, member.id);
    const path = `${INNOVA_MEMBERS_COLLECTION}/${member.id}`;

    try {
      await setDoc(docRef, member);
      await DataSyncService.recordConfirmedMutation('innova_members', {
        type: 'upsert',
        item: member,
      });
      FirebaseService.addAdminLog(
        'إضافة عضو لجمعية إنوفا',
        `${member.name} — ${member.position}`
      ).catch(() => {});
      return member;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, path);
    }
  }

  static async updateInnovaMember(
    memberId: string,
    input: {
      name: string;
      position: string;
      photoUrl?: string;
      photoStoragePath?: string;
      order?: number;
    },
    existingCreatedAt?: string
  ): Promise<InnovaMemberItem> {
    ensureInnovaCollectionsRegistered();
    const docRef = doc(db, INNOVA_MEMBERS_COLLECTION, memberId);
    const path = `${INNOVA_MEMBERS_COLLECTION}/${memberId}`;

    try {
      const snap = await getDoc(docRef);
      FirestoreAuditMetrics.recordGetDoc(INNOVA_MEMBERS_COLLECTION, 1, false);
      const preservedCreatedAt = snap.exists()
        ? String((snap.data() as Record<string, unknown>).createdAt || existingCreatedAt || '')
        : existingCreatedAt;

      const validated = sanitizeAndValidateInnovaMember(
        { ...input, id: memberId },
        preservedCreatedAt || undefined
      );
      if (!validated.valid) {
        throw new Error((validated as { valid: false; error: string }).error);
      }

      const member = validated.data;
      if (snap.exists()) {
        const updatePayload: Record<string, unknown> = {
          name: member.name,
          position: member.position,
          photoUrl: member.photoUrl,
          order: member.order,
          updatedAt: member.updatedAt,
          photoStoragePath: member.photoStoragePath || '',
        };
        await updateDoc(docRef, updatePayload);
      } else {
        await setDoc(docRef, member);
      }

      await DataSyncService.recordConfirmedMutation('innova_members', {
        type: 'upsert',
        item: member,
      });
      FirebaseService.addAdminLog(
        'تحديث عضو جمعية إنوفا',
        `${member.name} — ${member.position}`
      ).catch(() => {});
      return member;
    } catch (err) {
      if (err instanceof Error && err.message.startsWith('يرجى')) {
        throw err;
      }
      handleFirestoreError(err, OperationType.UPDATE, path);
    }
  }

  static async deleteInnovaMember(memberId: string, photoStoragePath?: string): Promise<void> {
    ensureInnovaCollectionsRegistered();
    const docRef = doc(db, INNOVA_MEMBERS_COLLECTION, memberId);
    const path = `${INNOVA_MEMBERS_COLLECTION}/${memberId}`;

    try {
      await deleteDoc(docRef);
      await this.deleteInnovaStorageFile(photoStoragePath);
      await DataSyncService.recordConfirmedMutation('innova_members', {
        type: 'delete',
        id: memberId,
      });
      FirebaseService.addAdminLog('حذف عضو من جمعية إنوفا', `معرف العضو: ${memberId}`).catch(
        () => {}
      );
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, path);
    }
  }

  static async addInnovaContent(input: {
    category: InnovaContentCategory;
    title: string;
    description: string;
    imageUrl?: string;
    imageStoragePath?: string;
    published?: boolean;
    eventDate?: string;
  }): Promise<InnovaContentItem> {
    ensureInnovaCollectionsRegistered();
    const validated = sanitizeAndValidateInnovaContent(input);
    if (!validated.valid) {
      throw new Error((validated as { valid: false; error: string }).error);
    }

    const item = validated.data;
    const docRef = doc(db, INNOVA_CONTENTS_COLLECTION, item.id);
    const path = `${INNOVA_CONTENTS_COLLECTION}/${item.id}`;

    try {
      await setDoc(docRef, item);
      await DataSyncService.recordConfirmedMutation('innova_contents',
        item.published !== false
          ? { type: 'upsert', item }
          : { type: 'delete', id: item.id }
      );
      FirebaseService.addAdminLog(
        item.category === 'events' ? 'إضافة فعالية إنوفا' : 'إضافة مقال إنوفا',
        item.title
      ).catch(() => {});
      return item;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, path);
    }
  }

  static async updateInnovaContent(
    contentId: string,
    input: {
      category: InnovaContentCategory;
      title: string;
      description: string;
      imageUrl?: string;
      imageStoragePath?: string;
      published?: boolean;
      eventDate?: string;
    },
    existingCreatedAt?: string
  ): Promise<InnovaContentItem> {
    ensureInnovaCollectionsRegistered();
    const docRef = doc(db, INNOVA_CONTENTS_COLLECTION, contentId);
    const path = `${INNOVA_CONTENTS_COLLECTION}/${contentId}`;

    try {
      const snap = await getDoc(docRef);
      FirestoreAuditMetrics.recordGetDoc(INNOVA_CONTENTS_COLLECTION, 1, false);
      const preservedCreatedAt = snap.exists()
        ? String((snap.data() as Record<string, unknown>).createdAt || existingCreatedAt || '')
        : existingCreatedAt;

      const validated = sanitizeAndValidateInnovaContent(
        { ...input, id: contentId },
        preservedCreatedAt || undefined
      );
      if (!validated.valid) {
        throw new Error((validated as { valid: false; error: string }).error);
      }

      const item = validated.data;
      if (snap.exists()) {
        await updateDoc(docRef, {
          category: item.category,
          title: item.title,
          description: item.description,
          imageUrl: item.imageUrl,
          imageStoragePath: item.imageStoragePath || '',
          published: item.published,
          eventDate: item.eventDate || '',
          updatedAt: item.updatedAt,
        });
      } else {
        await setDoc(docRef, item);
      }

      await DataSyncService.recordConfirmedMutation(
        'innova_contents',
        item.published !== false
          ? { type: 'upsert', item }
          : { type: 'delete', id: item.id }
      );
      FirebaseService.addAdminLog(
        'تحديث محتوى جمعية إنوفا',
        `${item.title} (${item.category})`
      ).catch(() => {});
      return item;
    } catch (err) {
      if (err instanceof Error && err.message.startsWith('يرجى')) {
        throw err;
      }
      handleFirestoreError(err, OperationType.UPDATE, path);
    }
  }

  static async deleteInnovaContent(contentId: string, imageStoragePath?: string): Promise<void> {
    ensureInnovaCollectionsRegistered();
    const docRef = doc(db, INNOVA_CONTENTS_COLLECTION, contentId);
    const path = `${INNOVA_CONTENTS_COLLECTION}/${contentId}`;

    try {
      await deleteDoc(docRef);
      await this.deleteInnovaStorageFile(imageStoragePath);
      await DataSyncService.recordConfirmedMutation('innova_contents', {
        type: 'delete',
        id: contentId,
      });
      FirebaseService.addAdminLog('حذف محتوى جمعية إنوفا', `المعرف: ${contentId}`).catch(() => {});
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, path);
    }
  }
}
