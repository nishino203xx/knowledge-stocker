import { useEffect, useState } from "react";
import type { ArticleSource } from "../types/article";
import axios from "axios";
import type { ArticleDetail } from "../types/articleDetail";
import { mapQiitaToArticleDetail } from "../../../api/qiita/map";
import { mapDevToToArticleDetail } from "../../../api/devTo/map";

export function useArticleDetail(
  source: ArticleSource | undefined,
  itemId: string | undefined
) {
  const [articleDetail, setArticleDetail] = useState<ArticleDetail>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    if (!source || !itemId) return;

    const fetchArticleDetail = async (): Promise<void> => {
      try {
        setIsLoading(true);
        switch (source) {
          case "qiita":
            const qiitaRes = await axios.get(
              `https://qiita.com/api/v2/items/${itemId}`
            );
            setArticleDetail(mapQiitaToArticleDetail(qiitaRes.data));
            break;
          case "devto":
            const devToRes = await axios.get(
              `https://dev.to/api/articles/${itemId}`
            );
            setArticleDetail(mapDevToToArticleDetail(devToRes.data));
            break;
          default:
            setError("記事の取得元が不正です。");
            break;
        }
      } catch (error) {
        setError("記事が見つかりませんでした。");
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticleDetail();
  }, [source, itemId]);

  return { articleDetail, isLoading, error };
}
