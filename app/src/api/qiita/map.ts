import type { Article } from "../../features/articles/types/article";
import type { ArticleDetail } from "../../features/articles/types/articleDetail";
import type { QiitaItem, QiitaTag } from "./schema";

export const mapQiitaToArticle = (item: QiitaItem): Article => {
  return {
    id: `qiita-${item.id}`,
    title: item.title,
    url: item.url,
    tags: item.tags.map((tag: QiitaTag) => tag.name),
    likesCount: item.likes_count,
    authorName: item.user?.name ?? "",
    source: "qiita",
    remoteId: item.id,
    memo: "",
    createAt: item.created_at,
    updateAt: item.updated_at,
  };
};

export const mapQiitaToArticleDetail = (item: QiitaItem): ArticleDetail => {
  return {
    ...mapQiitaToArticle(item),
    body: item.body,
  };
};
