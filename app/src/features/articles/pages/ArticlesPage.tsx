import { ArticleList } from "../components/ArticleList";
import { useArticles } from "../hooks/useArticles";

function ArticlesPage() {
  const { articles } = useArticles();
  return (
    <>
      <h1>記事一覧</h1>
      <ArticleList articles={articles} />
    </>
  );
}

export default ArticlesPage;
