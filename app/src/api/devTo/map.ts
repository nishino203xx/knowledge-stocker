import type { Article } from "../../features/articles/types/article";
import type { ArticleDetail } from "../../features/articles/types/articleDetail";

type DevToUser = {
  name: string;
  username: string;
};
type DevToItem = {
  id: number;
  title: string;
  body_markdown: string;
  url: string;
  positive_reactions_count: number;
  published_at: string;
  edited_at: string | null;
  tag_list: string[];
  user: DevToUser;
};

export const mapDevToToArticle = (item: DevToItem): Article => {
  return {
    id: `devto-${item.id}`,
    title: item.title,
    url: item.url,
    tags: item.tag_list,
    likesCount: item.positive_reactions_count,
    authorName: item.user?.name ?? item.user?.username ?? "",
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
