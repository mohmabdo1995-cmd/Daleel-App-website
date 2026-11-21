import {
  Lecture,
  GpaCourse,
  UserSettings,
  PersonalStudyResource,
  SubjectStudyProgress,
} from '../types';

const STORAGE_KEYS = {
  LECTURES: 'daleelak_lectures_v2',
  GPA_COURSES: 'daleelak_gpa_v1',
  SETTINGS: 'daleelak_settings_v1',
  TASKS: 'daleelak_tasks_v1',
  PERSONAL_RESOURCES: 'daleelak_personal_resources_v1',
  SUBJECT_PROGRESS: 'daleelak_subject_progress_v1',
};

export class StorageService {
  // --- Lectures ---
  static getLectures(): Lecture[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LECTURES);
      if (!data) {
        return [];
      }
      const parsed: Lecture[] = JSON.parse(data);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(l => l && l.id && !l.id.startsWith('demo-'));
    } catch (e) {
      console.error('Error reading lectures from storage:', e);
      return [];
    }
  }

  static saveLectures(lectures: Lecture[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.LECTURES, JSON.stringify(lectures));
    } catch (e) {
      console.error('Error saving lectures to storage:', e);
    }
  }

  static addLecture(lecture: Omit<Lecture, 'id' | 'createdAt'>): Lecture {
    const lectures = this.getLectures();
    const newLecture: Lecture = {
      ...lecture,
      id: 'lec-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      createdAt: Date.now(),
    };
    const updated = [newLecture, ...lectures];
    this.saveLectures(updated);
    return newLecture;
  }

  static updateLecture(updatedLecture: Lecture): void {
    const lectures = this.getLectures();
    const index = lectures.findIndex(l => l.id === updatedLecture.id);
    if (index !== -1) {
      lectures[index] = updatedLecture;
      this.saveLectures(lectures);
    }
  }

  static deleteLecture(id: string): void {
    const lectures = this.getLectures();
    const filtered = lectures.filter(l => l.id !== id);
    this.saveLectures(filtered);
  }

  static toggleLectureCompleted(id: string): void {
    const lectures = this.getLectures();
    const updated = lectures.map(l => (l.id === id ? { ...l, completed: !l.completed } : l));
    this.saveLectures(updated);
  }

  // --- GPA Courses (never seed fake/hardcoded courses into user accounts) ---
  static getGpaCourses(): GpaCourse[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GPA_COURSES);
      if (!data) return [];
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  static saveGpaCourses(courses: GpaCourse[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.GPA_COURSES, JSON.stringify(courses));
    } catch (e) {
      console.error('Error saving GPA courses:', e);
    }
  }

  // --- Guest Personal Study Resources ---
  static getPersonalResources(): PersonalStudyResource[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PERSONAL_RESOURCES);
      if (!data) return [];
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  static savePersonalResources(items: PersonalStudyResource[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PERSONAL_RESOURCES, JSON.stringify(items));
    } catch (e) {
      console.error('Error saving personal resources:', e);
    }
  }

  // --- Guest Subject Study Progress ---
  static getSubjectProgressMap(): Record<string, SubjectStudyProgress> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SUBJECT_PROGRESS);
      if (!data) return {};
      const parsed = JSON.parse(data);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  }

  static saveSubjectProgressMap(map: Record<string, SubjectStudyProgress>): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SUBJECT_PROGRESS, JSON.stringify(map));
    } catch (e) {
      console.error('Error saving subject progress:', e);
    }
  }

  // --- User Settings ---
  static getSettings(): UserSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (data) return JSON.parse(data);
    } catch {
      // ignore
    }
    return {
      theme: 'light',
      notificationsEnabled: true,
      soundEnabled: true,
      activeView: 'landing',
    };
  }

  static saveSettings(settings: Partial<UserSettings>): UserSettings {
    const current = this.getSettings();
    const updated = { ...current, ...settings };
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
    } catch {
      // ignore
    }
    return updated;
  }

  // --- Clean up user-scoped local caches after migration or logout ---
  static clearMigratedUserDrafts(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.LECTURES);
      localStorage.removeItem(STORAGE_KEYS.GPA_COURSES);
      localStorage.removeItem(STORAGE_KEYS.PERSONAL_RESOURCES);
      localStorage.removeItem(STORAGE_KEYS.SUBJECT_PROGRESS);
    } catch {
      // ignore
    }
  }
}
