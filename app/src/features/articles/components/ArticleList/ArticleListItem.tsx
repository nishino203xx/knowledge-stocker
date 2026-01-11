import { ARTICLE_SOURCE_META } from "../../constants/articleSourceMeta";
import type { Article } from "../../types/article";
import { ArticleTagChip } from "../ArticleTagChip/ArticleTagChip";
import style from "./ArticleList.module.scss";
import { Link } from "react-router-dom";

export const ArticleListItem = ({ article }: { article: Article }) => {
  const meta = ARTICLE_SOURCE_META[article.source];
  const formattedCreatedAtJst = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(article.createAt));

  return (
    <Link
      to={`/articles/${article.remoteId}`}
      key={article.id}
      className={style.articleCard}
    >
      <div className={style.articleCard__header}>
        <div className={`${style.articleSource} ${meta.className}`}>
          {meta.label}
        </div>
        <div>投稿日：{formattedCreatedAtJst}</div>
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
