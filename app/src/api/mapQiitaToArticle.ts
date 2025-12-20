import type { Article } from "../features/articles/types/article";

type QiitaTag = { name: string; versions: string[] };
type QiitaUser = { id: string; name: string };
type QiitaItem = {
  id: string;
  title: string;
  body: string;
  url: string;
  tags: QiitaTag[];
  likes_count: number;
  user: QiitaUser;
  created_at: string;
  updated_at: string;
};

export const mapQiitaToArticle = (item: QiitaItem): Article => {
  return {
    id: `qiita-${item.id}`,
    title: item.title,
    body: item.body,
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
