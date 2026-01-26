import type { Article } from "../../features/articles/types/article";
import type { ArticleDetail } from "../../features/articles/types/articleDetail";
import type { DevToItem } from "./schema";

export const mapDevToToArticle = (item: DevToItem): Article => {
  return {
    id: `devto-${item.id}`,
    title: item.title,
    url: item.url,
    tags: normalizeTags(item),
    likesCount: item.positive_reactions_count,
    authorName: item.user.name,
    source: "devto",
    remoteId: String(item.id),
    memo: "",
    createAt: item.published_at,
    updateAt: item.edited_at,
  };
};

export const mapDevToToArticleDetail = (item: DevToItem): ArticleDetail => {
  return {
    ...mapDevToToArticle(item),
    body: item.body_markdown,
  };
};

/**
 * タグの正規化
 *
 * tag_list / tags がエンドポイントにより
 * ["a", "b", "c"]
 * "a, b, c"
 * のどちらでも来る可能性がある
 */
function normalizeTags(item: DevToItem): string[] {
  const src = item.tag_list ?? item.tags ?? [];
  if (Array.isArray(src)) {
    return src;
  }
  if (typeof src === "string") {
    return src.split(",");
  }
  return [];
}
