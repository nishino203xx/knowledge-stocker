import type { UnderstandingStatus } from "../../articles/constants/understandingStatusMeta";

const STORAGE_KEY = "knowledge-stocker:understanding-status:v1";

export type UnderstandingStatusMap = Record<string, UnderstandingStatus>;

export const UnderstandingStatusStorage = {
  load(): UnderstandingStatusMap {
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
      return parsed as UnderstandingStatusMap;
    } catch {
      return {};
    }
  },
  save(map: UnderstandingStatusMap) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  },
};
