import style from "./ArticleSearch.module.scss";

export function ArticleSearch({
  keyword,
  onSearch,
  onChangeKeyword,
}: {
  keyword: string;
  onSearch: () => void;
  onChangeKeyword: (keyword: string) => void;
}) {
  // TODO:検索の制約（タグの複数検索は OR 検索であることなど）を明記
  return (
    <div className={style.articleSearch}>
      <input
        className={style.articleSearch__input}
        value={keyword}
        onChange={(e) => {
          onChangeKeyword(e.target.value);
        }}
      />
      <button
        className={`${style.articleSearch__button} ${style["articleSearch__button--search"]}`}
        onClick={() => {
          onSearch();
        }}
      >
        検索
      </button>
      {keyword && (
        <button
          className={`${style.articleSearch__button} ${style["articleSearch__button--clear"]}`}
          onClick={() => {
            onChangeKeyword("");
          }}
        >
          ✖︎
        </button>
      )}
    </div>
  );
}
