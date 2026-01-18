import { ARTICLE_SOURCE_META } from "../../constants/articleSourceMeta";
import type { ArticleSource } from "../../types/article";
import style from "./ArticleSourceBadge.module.scss";

export const ArticleSourceBadge = ({ source }: { source: ArticleSource }) => {
  const meta = ARTICLE_SOURCE_META[source];
  return (
    <div className={`${style.articleSource} ${style[meta.className]}`}>
      {meta.iconLabel}
    </div>
  );
};
