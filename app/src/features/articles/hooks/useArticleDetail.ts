import { useEffect, useState } from "react";
import type { ArticleSource } from "../types/article";
import axios from "axios";

export function useArticleDetail(
  source: ArticleSource | undefined,
  itemId: string | undefined
) {
  const [body, setBody] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
            setBody("");
            break;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticleDetail();
  }, [source, itemId]);

  return { body, isLoading };
}
