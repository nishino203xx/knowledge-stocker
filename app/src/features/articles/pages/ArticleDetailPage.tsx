import { useParams } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useArticleDetail } from "../hooks/useArticleDetail";
import style from "./ArticleDetailPage.module.scss";

function ArticleDetailPage() {
  const { visibleArticles } = useArticles();
  const { itemId } = useParams();
  const article = visibleArticles.find((article) => {
    return article.remoteId === itemId;
  });
  const { body, isLoading } = useArticleDetail(article);
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
