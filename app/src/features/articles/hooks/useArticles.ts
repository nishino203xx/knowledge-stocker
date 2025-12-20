import { useEffect, useState } from "react";
import axios from "axios";
import type { Article } from "../types/article";
import { mapQiitaToArticle } from "../../../api/mapQiitaToArticle";

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      try {
        const response = await axios.get("https://qiita.com/api/v2/items");
        const articles = response.data.map(mapQiitaToArticle);
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return { articles };
}
