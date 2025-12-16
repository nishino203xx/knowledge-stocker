import { useEffect, useState } from "react";
import axios from "axios";
import type { Article } from "../types/article";

export const mapQiitaToArticle = (item: any): Article => {
  return {
    id: `qiita-${item.id}`,
    title: item.title,
    body: item.body,
    url: item.url,
    tags: item.tags.map((tag: any) => tag.name),
    likesCount: item.likes_count,
    authorName: item.user?.name ?? "",
    source: "qiita",
    remoteId: item.id,
    memo: "",
    createAt: item.created_at,
    updateAt: item.updated_at,
  };
};

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://qiita.com/api/v2/items")
      .then(function (response) {
        const articles = response.data.map(mapQiitaToArticle);
        setArticles(articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return { articles };
}
