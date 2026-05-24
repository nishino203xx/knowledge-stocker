import type { StoredArticleSummary } from "../types/storedArticleSummary";

const STORAGE_KEY = "knowledge-stocker:stored-article-summary:v1";

export type StoredArticleSummaryMap = Record<string, StoredArticleSummary>;

/**
 * 理解度ステータス更新時の記事基本情報をLocalStorageに保存・取得する
 */
export const StoredArticleSummaryStorage = {
  load() {
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
      return parsed as StoredArticleSummaryMap;
    } catch {
      return {};
    }
  },
  save(map: StoredArticleSummaryMap) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  },
  upsert(article: StoredArticleSummary) {
    const map = this.load();
    map[article.id] = article;
    this.save(map);
  },
  remove(id: string) {
    const map = this.load();
    delete map[id];
    this.save(map);
  },
};
