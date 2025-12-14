import style from "./ArticleTagChip.module.scss";

export const ArticleTagChip = ({ tag }: { tag: string }) => {
  return (
    <div key={tag} className={style.articleTag}>
      #{tag}
    </div>
  );
};
