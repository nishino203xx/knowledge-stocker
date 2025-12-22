import { ARTICLE_SOURCE_META } from "../../constants/articleSourceMeta";
import type { Article } from "../../types/article";
import { ArticleTagChip } from "../ArticleTagChip/ArticleTagChip";
import style from "./ArticleList.module.scss";
import { Link } from "react-router-dom";

export const ArticleListItem = ({ article }: { article: Article }) => {
  const meta = ARTICLE_SOURCE_META[article.source];
  return (
    <Link
      to={`/article/${article.remoteId}`}
      key={article.id}
      className={style.articleCard}
    >
      <div className={style.articleCard__header}>
        <div className={`${style.articleSource} ${meta.className}`}>
          {meta.label}
        </div>
        <div>投稿日：{article.createAt}</div>
      </div>
      <div className={style.articleCard__title}>{article.title}</div>
      <div className={style.articleCard__tags}>
        {article.tags.map((tag) => {
          return <ArticleTagChip key={tag} tag={tag} />;
        })}
      </div>
      <div>{article.memo}</div>
    </Link>
  );
};
