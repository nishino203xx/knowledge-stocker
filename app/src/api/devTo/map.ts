import type { Article } from "../../features/articles/types/article";
import type { ArticleDetail } from "../../features/articles/types/articleDetail";

type DevToUser = {
  name: string;
  user_id: number;
};
type DevToItem = {
  id: number;
  title: string;
  body_markdown: string;
  url: string;
  positive_reactions_count: number;
  published_at: string;
  edited_at: string | null;
  tags: string[] | string;
  tag_list: string[] | string;
  user: DevToUser;
};

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
