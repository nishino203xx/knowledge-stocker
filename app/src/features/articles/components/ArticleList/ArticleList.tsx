import type { Article } from "../../types/article";
import { ArticleListItem } from "./ArticleListItem";

export const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <ul>
      {articles.map((article) => {
        return <ArticleListItem key={article.id} article={article} />;
      })}
    </ul>
  );
};
