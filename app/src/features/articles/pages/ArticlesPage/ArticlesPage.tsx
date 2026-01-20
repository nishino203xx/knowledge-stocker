import { useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleSearch } from "../../components/ArticleSearch";
import { useArticles } from "../../hooks/useArticles";
import { ArticleTagChip } from "../../components/ArticleTagChip";
import style from "./ArticlesPage.module.scss";

export function ArticlesPage() {
  const {
    visibleArticles,
    isLoading,
    error,
    searchArticles,
    setSort,
    setSortOrder,
  } = useArticles();

  const [inputKeyword, setInputKeyword] = useState<string>("");
  const [appliedKeyword, setAppliedKeyword] = useState<string[]>([]);

  /**
   * 入力されたキーワード文字列を空白で分割し、
   * 重複を除いたキーワード配列として検索処理を呼び出す
   */
  const onSearch = () => {
    const keywords = inputKeyword.trim().split(/\s+/);
    const uniqueKeywords = Array.from(new Set(keywords));
    setAppliedKeyword(uniqueKeywords);
    searchArticles(uniqueKeywords);
  };

  return (
    <>
      <ArticleSearch
        keyword={inputKeyword}
        onSearch={onSearch}
        onChangeKeyword={setInputKeyword}
      ></ArticleSearch>
      <div className={style.articlesPage__tags}>
        {appliedKeyword.map((tag) => {
          return <ArticleTagChip key={tag} tag={tag} />;
        })}
      </div>
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
