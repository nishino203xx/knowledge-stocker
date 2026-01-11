import { ArticleList } from "../../components/ArticleList";
import { ArticleSearch } from "../../components/ArticleSearch";
import { useArticles } from "../../hooks/useArticles";

export function ArticlesPage() {
  const {
    visibleArticles,
    isLoading,
    error,
    searchArticles,
    setSort,
    setSortOrder,
  } = useArticles();

  return (
    <>
      <ArticleSearch searchArticles={searchArticles}></ArticleSearch>
      <select onChange={(e) => setSort(e.target.value as "createAt")}>
        <option value="createAt">投稿日時</option>
      </select>
      <select onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}>
        <option value="asc">昇順</option>
        <option value="desc">降順</option>
      </select>
      <ArticleList articles={visibleArticles} isLoading={isLoading} />
      <p>{error}</p>
    </>
  );
}
