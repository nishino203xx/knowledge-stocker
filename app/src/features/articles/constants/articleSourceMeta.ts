import style from "../components/ArticleList/ArticleList.module.scss";
import type { ArticleSource } from "../types/article";

type SourceMeta = { label: string; className: string };
export const ARTICLE_SOURCE_META = {
  qiita: { label: "Qiita", className: style["articleSource--qiita"] },
  "dev.to": { label: "DEV", className: style["articleSource--devto"] },
} satisfies Record<ArticleSource, SourceMeta>;
