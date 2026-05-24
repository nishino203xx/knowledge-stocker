import { useStoredArticleSummaries } from "@/features/understandingStatus/hooks/useStoredArticleSummaries";
import { Link } from "react-router-dom";
import style from "./InProgressArticles.module.scss";

export function InProgressArticles() {
  const { summaries } = useStoredArticleSummaries();

  return (
    <div>
      <h2 className={style.inProgressArticles__title}>学習途中の記事</h2>
      <div className={style.inProgressArticles__list}>
        {Object.values(summaries).map((summary) => {
          return (
            <Link
              to={`/articles/${summary.source}/${summary.remoteId}`}
              key={summary.id}
              className={style.inProgressArticles__item}
            >
              {summary.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
