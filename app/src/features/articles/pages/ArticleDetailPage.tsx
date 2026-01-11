import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useArticleDetail } from "../hooks/useArticleDetail";
import style from "./ArticleDetailPage.module.scss";
import type { ArticleSource } from "../types/article";

type ArticleDetailRouteParams = {
  source: ArticleSource;
  itemId: string;
};

function ArticleDetailPage() {
  const { source, itemId } = useParams<ArticleDetailRouteParams>();
  const { body, isLoading } = useArticleDetail(source, itemId);
  return (
    <>
      <h1>記事詳細</h1>
      {isLoading ? (
        <div className={style.loadingWrapper}>
          <div className={style.loading}></div>
        </div>
      ) : (
        <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {body}
        </Markdown>
      )}
    </>
  );
}

export default ArticleDetailPage;
