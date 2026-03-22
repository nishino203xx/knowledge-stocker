import type { Article } from "../../types/article";
import style from "./ArticleList.module.scss";
import { ArticleListItem } from "./ArticleListItem";

export const ArticleList = ({
  articles,
  isLoading,
}: {
  articles: Article[];
  isLoading: boolean;
}) => {
  return (
    <ul className={style.articleList}>
      {isLoading ? (
        <li className={style.loadingItem}>
          <div className={style.loading}></div>
        </li>
      ) : (
        articles.map((article) => {
          return <ArticleListItem key={article.id} article={article} />;
        })
      )}
    </ul>
  );
};
