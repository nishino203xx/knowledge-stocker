import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useArticleDetail } from "../../hooks/useArticleDetail";
import style from "./ArticleDetailPage.module.scss";
import type { ArticleSource } from "../../types/article";
import { formattedJstDatetime } from "../../../../utils/formatDate";
import { ARTICLE_SOURCE_META } from "../../constants/articleSourceMeta";
import { ArticleTagChip } from "../../components/ArticleTagChip";
import { ArticleSourceBadge } from "../../components/ArticleSourceBadge/ArticleSourceBadge";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
  UNDERSTANDING_STATUS_META,
  type UnderstandingStatus,
} from "../../constants/understandingStatusMeta";

type ArticleDetailRouteParams = {
  source: ArticleSource;
  itemId: string;
};

export function ArticleDetailPage() {
  const { source, itemId } = useParams<ArticleDetailRouteParams>();
  const { articleDetail, isLoading, error } = useArticleDetail(source, itemId);
  if (isLoading)
    return (
      <div className={style.loadingWrapper}>
        <div className={style.loading}></div>
      </div>
    );

  if (!articleDetail) return <p>記事が見つかりませんでした。</p>;

  const meta = ARTICLE_SOURCE_META[articleDetail.source];
  return (
    <div className={style.articleDetail}>
      <div className={style.articleDetail__header}>
        <ArticleSourceBadge source={articleDetail.source}></ArticleSourceBadge>
        <h1 className={style.articleDetail__title}>{articleDetail.title}</h1>
      </div>
      <ToggleGroup.Root type="single" className={style.underStandingStatus}>
        {(Object.keys(UNDERSTANDING_STATUS_META) as UnderstandingStatus[]).map(
          (status) => {
            const meta = UNDERSTANDING_STATUS_META[status];
            return (
              <ToggleGroup.Item
                className={style.underStandingStatus__item}
                style={{ "--status-color": meta.color } as React.CSSProperties}
                value={status}
              >
                {meta.label}
              </ToggleGroup.Item>
            );
          }
        )}
      </ToggleGroup.Root>
      <div className={style.articleDetail__tags}>
        {articleDetail.tags.map((tag) => {
          return <ArticleTagChip key={tag} tag={tag} />;
        })}
      </div>
      <div>投稿日：{formattedJstDatetime(articleDetail.createAt ?? "")}</div>
      <a
        href={articleDetail.url}
        target="_blank"
        className={style.articleDetail__link}
      >
        {meta.label} で開く
      </a>

      <div className={style.articleDetail__body}>
        <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {articleDetail.body}
        </Markdown>
      </div>

      <p>{error}</p>
    </div>
  );
}
