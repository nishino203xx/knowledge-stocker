import type { Article } from "../../types/article";
import { ArticleTagChip } from "../ArticleTagChip/ArticleTagChip";
import style from "./ArticleList.module.scss";

export const ArticleListItem = ({ article }: { article: Article }) => {
  return (
    <li key={article.id} className={style.articleCard}>
      <div>投稿日：{article.createAt}</div>
      <div className={style.articleCard__tags}>
        {article.tags.map((tag) => {
          return <ArticleTagChip key={tag} tag={tag} />;
        })}
      </div>
      <div className={style.articleCard__title}>{article.title}</div>
      <div>{article.memo}</div>
    </li>
  );
};
