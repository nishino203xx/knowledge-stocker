import type { Article } from "../features/articles/types/article";

type DevToUser = {
  name: string;
  username: string;
};
type DevToItem = {
  id: number;
  title: string;
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
    body: undefined,
    url: item.url,
    tags: item.tag_list,
    likesCount: item.positive_reactions_count,
    authorName: item.user?.name ?? item.user?.username ?? "",
    source: "dev.to",
    remoteId: String(item.id),
    memo: "",
    createAt: item.published_at,
    updateAt: item.edited_at,
  };
};
