import { ArticleList } from "../components/ArticleList";
import { mockArticles } from "../mocks/mockArticles";

function ArticlesPage() {
  return (
    <>
      <h1>記事一覧</h1>
      <ArticleList articles={mockArticles} />
    </>
  );
}

export default ArticlesPage;
