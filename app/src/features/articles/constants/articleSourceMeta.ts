import type { ArticleSource } from "../types/article";

type SourceMeta = { label: string; iconLabel: string; className: string };
export const ARTICLE_SOURCE_META = {
  qiita: {
    label: "Qiita",
    iconLabel: "Qiita",
    className: "articleSource--qiita",
  },
  devto: {
    label: "dev.to",
    iconLabel: "DEV",
    className: "articleSource--devto",
  },
} satisfies Record<ArticleSource, SourceMeta>;
