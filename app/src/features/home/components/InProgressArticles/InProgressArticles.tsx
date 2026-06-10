import { useStoredArticleSummaries } from "@/features/understandingStatus/hooks/useStoredArticleSummaries";
import { Link } from "react-router-dom";
import style from "./InProgressArticles.module.scss";
import { ArticleSourceBadge } from "@/features/articles/components/ArticleSourceBadge/ArticleSourceBadge";
import { UnderstandingStatusBadge } from "@/features/articles/components/UnderstandingStatusBadge/UnderstandingStatusBadge";
import { useUnderstandingStatus } from "@/features/understandingStatus/hooks/useUnderstandingStatus";

export function InProgressArticles() {
  const { summaries } = useStoredArticleSummaries();
  const { getStatus } = useUnderstandingStatus();

  return (
    <div>
      <h2 className={style.inProgressArticles__title}>学習途中の記事</h2>
      <div className={style.inProgressArticles__list}>
        {Object.values(summaries).map((summary) => {
          return (
            <div className={style.inProgressArticles__item}>
              <div className={style.inProgressArticles__source}>
                <ArticleSourceBadge
                  source={summary.source}
                ></ArticleSourceBadge>
              </div>
              <Link
                to={`/articles/${summary.source}/${summary.remoteId}`}
                key={summary.id}
                className={style.inProgressArticles__link}
              >
                {summary.title}
              </Link>
              <div className={style.inProgressArticles__status}>
                <UnderstandingStatusBadge
                  status={getStatus(summary.id)}
                ></UnderstandingStatusBadge>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
