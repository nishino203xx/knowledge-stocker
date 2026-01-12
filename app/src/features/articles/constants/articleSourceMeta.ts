import style from "../components/ArticleList/ArticleList.module.scss";
import type { ArticleSource } from "../types/article";

type SourceMeta = { label: string; iconLabel: string; className: string };
export const ARTICLE_SOURCE_META = {
  qiita: {
    label: "Qiita",
    iconLabel: "Qiita",
    className: style["articleSource--qiita"],
  },
  devto: {
    label: "dev.to",
    iconLabel: "DEV",
    className: style["articleSource--devto"],
  },
} satisfies Record<ArticleSource, SourceMeta>;
