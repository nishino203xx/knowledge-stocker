import type { DailyCountMap } from "../types/StudyLog";
import { getTodayKey } from "../utils/getTodayKey";

const STORAGE_KEY = "knowledge-stocker:study-log:v1";

export const StudyLogStorage = {
  load(): DailyCountMap {
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
      return parsed as DailyCountMap;
    } catch {
      return {};
    }
  },

  save(map: DailyCountMap) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  },

  incrementToday() {
    const map = this.load();
    const today = getTodayKey();
    map[today] = (map[today] ?? 0) + 1;
    this.save(map);
  },
};
