import { useState } from "react";

function ArticleSearch({
  searchArticles,
}: {
  searchArticles: (keyword: string) => void;
}) {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <>
      <input
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          searchArticles(keyword);
        }}
      >
        検索
      </button>
    </>
  );
}

export default ArticleSearch;
