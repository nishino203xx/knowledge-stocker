export type ArticleSource = "qiita" | "zenn";

export type Article = {
  /** アプリ内で一意のID(source + remoteId) */
  id: string;

  /** 記事タイトル */
  title: string;

  /** 記事のURL */
  url: string;

  /** 記事のタグ名 */
  tags: string[];

  /** 記事の人気度を表す数値(いいね数、ストック数など) */
  likesCount: number;

  /** 著者名 */
  authorName: string;

  /** 記事の取得元サービス */
  source: ArticleSource;

  /** 取得元サービスの記事ID */
  remoteId: string;

  /** 記事に対する自分用のメモ */
  memo: string;

  /** 投稿日時 */
  createAt: string;

  /** 更新日時 */
  updateAt: string;
};
