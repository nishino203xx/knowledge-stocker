import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useArticleDetail } from "../../hooks/useArticleDetail";
import style from "./ArticleDetailPage.module.scss";
import type { ArticleSource } from "../../types/article";

type ArticleDetailRouteParams = {
  source: ArticleSource;
  itemId: string;
};

export function ArticleDetailPage() {
  const { source, itemId } = useParams<ArticleDetailRouteParams>();
  const { articleDetail, isLoading, error } = useArticleDetail(source, itemId);
  return (
    <>
      <h1>{articleDetail?.title}</h1>
      {isLoading ? (
        <div className={style.loadingWrapper}>
          <div className={style.loading}></div>
        </div>
      ) : (
        <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {articleDetail?.body}
        </Markdown>
      )}
      <p>{error}</p>
    </>
  );
}
