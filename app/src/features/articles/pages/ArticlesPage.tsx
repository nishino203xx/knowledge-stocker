import { ArticleList } from "../components/ArticleList";
import ArticleSearch from "../components/ArticleSearch/ArticleSearch";
import { useArticles } from "../hooks/useArticles";

function ArticlesPage() {
  const { articles, searchArticles } = useArticles();

  return (
    <>
      <ArticleSearch searchArticles={searchArticles}></ArticleSearch>
      <ArticleList articles={articles} />
    </>
  );
}

export default ArticlesPage;
