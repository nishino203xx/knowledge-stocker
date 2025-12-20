import { useParams } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ArticleDetailPage() {
  const { articles } = useArticles();
  const { itemId } = useParams();
  const article = articles.find((article) => {
    return article.remoteId === itemId;
  });
  return (
    <>
      <h1>記事詳細</h1>
      <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        {article?.body}
      </Markdown>
    </>
  );
}

export default ArticleDetailPage;
