import type { Article } from "../../types/article";
import { ArticleTagChip } from "../ArticleTagChip/ArticleTagChip";
import style from "./ArticleList.module.scss";
import { Link } from "react-router-dom";

export const ArticleListItem = ({ article }: { article: Article }) => {
  return (
    <Link
      to={`/article/${article.remoteId}`}
      key={article.id}
      className={style.articleCard}
    >
      <div>投稿日：{article.createAt}</div>
      <div className={style.articleCard__tags}>
        {article.tags.map((tag) => {
          return <ArticleTagChip key={tag} tag={tag} />;
        })}
      </div>
      <div className={style.articleCard__title}>{article.title}</div>
      <div>{article.memo}</div>
    </Link>
  );
};
