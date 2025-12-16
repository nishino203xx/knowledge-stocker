import { useParams } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";

function ArticleDetailPage() {
  const { articles } = useArticles();
  const { itemId } = useParams();
  const article = articles.find((article) => {
    return article.remoteId === itemId;
  });
  return (
    <>
      <h1>記事詳細</h1>
      {/* todo: markdown形式なので、HTMLに変換して表示する */}
      {article?.body}
    </>
  );
}

export default ArticleDetailPage;
