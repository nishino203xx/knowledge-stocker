import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./features/home/pages/HomePage";
import ArticlesPage from "./features/articles/pages/ArticlesPage";
import ArticleDetailPage from "./features/articles/pages/ArticleDetailPage";
import { AppLayout } from "./layouts/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/articles" element={<ArticlesPage />}></Route>
          <Route
            path="/article/:itemId"
            element={<ArticleDetailPage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
