import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import type { Article } from "../types/article";
import { mapQiitaToArticle } from "../../../api/qiita/map";
import { mapDevToToArticle } from "../../../api/devTo/map";

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [sort, setSort] = useState<"createAt">("createAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const [qiitaRes, devToRes] = await Promise.all([
          axios.get("https://qiita.com/api/v2/items"),
          axios.get("https://dev.to/api/articles"),
        ]);

        const qiitaArticles: Article[] = qiitaRes.data.map(mapQiitaToArticle);
        const devToArticles: Article[] = devToRes.data.map(mapDevToToArticle);

        const marged = [...qiitaArticles, ...devToArticles];

        setArticles(marged);
      } catch (error) {
        setError("記事取得時に問題が発生しました。");
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const visibleArticles = useMemo(() => {
    const sorted = [...articles].sort((a, b) => {
      const aTime = new Date(a.createAt).getTime();
      const bTime = new Date(b.createAt).getTime();
      return sortOrder === "asc" ? aTime - bTime : bTime - aTime;
    });
    return sorted;
  }, [articles, sort, sortOrder]);

  const searchArticles = async (keyword: string): Promise<void> => {
    try {
      const [qiitaRes, devToRes] = await Promise.all([
        axios.get("https://qiita.com/api/v2/items", {
          params: { query: `tag:${keyword}` },
        }),
        axios.get("https://dev.to/api/articles", {
          params: { tag: keyword },
        }),
      ]);
      const qiitaArticles: Article[] = qiitaRes.data.map(mapQiitaToArticle);
      const devToArticles: Article[] = devToRes.data.map(mapDevToToArticle);

      const marged = [...qiitaArticles, ...devToArticles];

      setArticles(marged);
    } catch (error) {
      setError("記事取得時に問題が発生しました。");
    }
  };

  return {
    visibleArticles,
    isLoading,
    error,
    searchArticles,
    setSort,
    setSortOrder,
  };
}
