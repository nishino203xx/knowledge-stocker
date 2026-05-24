import type { Article } from "@/features/articles/types/article";

export type StoredArticleSummary = {
  /** アプリ内で一意のID(source + remoteId) */
  id: Article["id"];

  /** 記事タイトル */
  title: Article["title"];

  /** 記事の取得元サービス */
  source: Article["source"];

  /** 取得元サービスの記事ID */
  remoteId: Article["remoteId"];

  /** 理解度更新時に最後に保存した日時 */
  lastLearnedAt: string | null;
};
