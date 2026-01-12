import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useArticleDetail } from "../../hooks/useArticleDetail";
import style from "./ArticleDetailPage.module.scss";
import type { ArticleSource } from "../../types/article";
import { formattedJstDatetime } from "../../../../utils/formatDate";
import { ARTICLE_SOURCE_META } from "../../constants/articleSourceMeta";

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
      <h1 className={style.articleDetail__title}>{articleDetail.title}</h1>
      <div>投稿日：{formattedJstDatetime(articleDetail.createAt ?? "")}</div>
      <a
        href={articleDetail.url}
        target="_blank"
        className={style.articleDetail__link}
      >
        {meta.label} で開く
      </a>

      <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        {articleDetail.body}
      </Markdown>

      <p>{error}</p>
    </div>
  );
}
