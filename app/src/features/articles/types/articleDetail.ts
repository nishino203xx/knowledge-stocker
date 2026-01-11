import type { Article } from "./article";

export type ArticleDetail = Article & {
  /** 記事内容 */
  body: string;
};
