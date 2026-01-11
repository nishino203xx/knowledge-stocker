import { useEffect, useState } from "react";
import style from "./ArticleSearch.module.scss";

export function ArticleSearch({
  searchArticles,
}: {
  searchArticles: (keyword: string) => void;
}) {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <div className={style.articleSearch}>
      <input
        className={style.articleSearch__input}
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button
        className={`${style.articleSearch__button} ${style["articleSearch__button--search"]}`}
        onClick={() => {
          searchArticles(keyword);
        }}
      >
        検索
      </button>
      {keyword && (
        <button
          className={`${style.articleSearch__button} ${style["articleSearch__button--clear"]}`}
          onClick={() => {
            setKeyword("");
          }}
        >
          ✖︎
        </button>
      )}
    </div>
  );
}
