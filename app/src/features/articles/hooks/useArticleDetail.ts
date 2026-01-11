import { useEffect, useState } from "react";
import type { ArticleSource } from "../types/article";
import axios from "axios";

export function useArticleDetail(
  source: ArticleSource | undefined,
  itemId: string | undefined
) {
  const [body, setBody] = useState<string>("");
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
            const qiitaBody: string = qiitaRes.data.body ?? "";
            setBody(qiitaBody);
            break;
          case "devto":
            const devToRes = await axios.get(
              `https://dev.to/api/articles/${itemId}`
            );
            const devToBody: string = devToRes.data.body_markdown ?? "";
            setBody(devToBody);
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

  return { body, isLoading, error };
}
