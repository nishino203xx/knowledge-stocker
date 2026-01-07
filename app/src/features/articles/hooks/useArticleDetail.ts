import { useEffect, useState } from "react";
import type { Article } from "../types/article";
import axios from "axios";

export function useArticleDetail(article: Article | undefined) {
  const [body, setBody] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!article) return;

    // すでに本文がある場合は、記事詳細取得APIは呼び出不要
    if (article.body && article.body.trim().length > 0) {
      setBody(article.body);
    }

    const fetchArticleDetail = async (): Promise<void> => {
      try {
        setIsLoading(true);
        switch (article.source) {
          case "qiita":
            // 一覧取得時にbodyも取得しているため不要
            break;
          case "dev.to":
            const res = await axios.get(
              `https://dev.to/api/articles/${article.remoteId}`
            );

            const body: string = res.data.body_markdown ?? "";
            setBody(body);
            break;
          default:
            setBody(article.body ?? "");
            break;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticleDetail();
  }, [article]);

  return { body, isLoading };
}
