import type { FirstTimeUnderstoodMap } from "../types/StudyLog";

const STORAGE_KEY = "knowledge-stocker:first-time-understood:v1";

export const FirstTimeUnderstoodStorage = {
  load(): FirstTimeUnderstoodMap {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw);
      if (
        typeof parsed !== "object" ||
        parsed === null ||
        Array.isArray(parsed)
      ) {
        return {};
      }
      // TODO: Zodによる型検証
      return parsed as FirstTimeUnderstoodMap;
    } catch {
      return {};
    }
  },

  save(map: FirstTimeUnderstoodMap) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  },

  has(id: string) {
    const map = this.load();
    return map[id] != null;
  },

  mark(id: string, date: string) {
    const map = this.load();
    map[id] = date;
    this.save(map);
  },
};
