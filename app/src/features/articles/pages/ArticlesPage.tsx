import { mockArticles } from "../mocks/mockArticles";

function ArticlesPage() {
  return (
    <>
      <h1>記事一覧</h1>
      <ul>
        {mockArticles.map((article) => {
          return (
            <li
              key={article.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                listStyle: "none",
                borderRadius: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                backgroundColor: "#fff",
                marginBottom: 10,
                padding: 16,
              }}
            >
              <div>投稿日：{article.createAt}</div>
              <div style={{ display: "flex", gap: 6 }}>
                {article.tags.map((tag) => {
                  return (
                    <div
                      key={tag}
                      style={{
                        backgroundColor: "rgba(105, 159, 235, 0.34)",
                        borderRadius: "999px",
                        padding: "2px 8px",
                        color: "rgba(5, 78, 235, 1)",
                      }}
                    >
                      #{tag}
                    </div>
                  );
                })}
              </div>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>
                {article.title}
              </div>
              <div>{article.memo}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticlesPage;
