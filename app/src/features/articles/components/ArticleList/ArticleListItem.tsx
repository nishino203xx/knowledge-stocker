import { formattedJstDatetime } from "../../../../utils/formatDate";
import type { Article } from "../../types/article";
import { ArticleSourceBadge } from "../ArticleSourceBadge/ArticleSourceBadge";
import { UnderstandingStatusBadge } from "../UnderstandingStatusBadge/UnderstandingStatusBadge";
import { ArticleTagChip } from "../ArticleTagChip/ArticleTagChip";
import style from "./ArticleList.module.scss";
import { Link } from "react-router-dom";
import { useUnderstandingStatus } from "../../../understandingStatus/hooks/useUnderstandingStatus";

export const ArticleListItem = ({ article }: { article: Article }) => {
  const { getStatus } = useUnderstandingStatus();
  return (
    <Link
      to={`/articles/${article.source}/${article.remoteId}`}
      key={article.id}
      className={style.articleCard}
    >
      <div className={style.articleCard__header}>
        <ArticleSourceBadge source={article.source}></ArticleSourceBadge>
        <div>投稿日：{formattedJstDatetime(article.createAt)}</div>
      </div>
      <div className={style.articleCard__title}>
        {article.title}
        {/* TODO: statusに記事毎の理解度ステータスを渡す */}
        <UnderstandingStatusBadge
          status={getStatus(article.id)}
        ></UnderstandingStatusBadge>
      </div>
      <div className={style.articleCard__tags}>
        {article.tags.map((tag) => {
          return <ArticleTagChip key={tag} tag={tag} />;
        })}
      </div>
      <div>{article.memo}</div>
    </Link>
  );
};
