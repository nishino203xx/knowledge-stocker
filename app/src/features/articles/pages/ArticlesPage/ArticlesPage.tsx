import { useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleSearch } from "../../components/ArticleSearch";
import { useArticles } from "../../hooks/useArticles";
import { ArticleTagChip } from "../../components/ArticleTagChip";
import style from "./ArticlesPage.module.scss";
import { ArticleSort } from "../../components/ArticleSort";

export function ArticlesPage() {
  const {
    visibleArticles,
    isLoading,
    error,
    searchArticles,
    sort,
    sortOrder,
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
    const keywords = inputKeyword.trim().split(/\s+/).filter(Boolean);
    const uniqueKeywords = Array.from(new Set(keywords));
    setAppliedKeyword(uniqueKeywords);
    searchArticles(uniqueKeywords);
  };

  return (
    <>
      <div className={style.searchArea}>
        <ArticleSearch
          keyword={inputKeyword}
          onSearch={onSearch}
          onChangeKeyword={setInputKeyword}
        ></ArticleSearch>
        <div className={style.filterControls}>
          <div className={style.articlesPage__tags}>
            {appliedKeyword.map((tag) => {
              return <ArticleTagChip key={tag} tag={tag} />;
            })}
          </div>
          <ArticleSort
            sort={sort}
            sortOrder={sortOrder}
            onChangeSort={setSort}
            onChangeSortOrder={setSortOrder}
          ></ArticleSort>
        </div>
      </div>
      <ArticleList articles={visibleArticles} isLoading={isLoading} />
      <p>{error}</p>
    </>
  );
}
