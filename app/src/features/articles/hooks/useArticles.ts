import { useEffect, useState } from "react";
import axios from "axios";
import type { Article } from "../types/article";
import { mapQiitaToArticle } from "../../../api/mapQiitaToArticle";

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
