import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./features/home/pages/HomePage";
import ArticlesPage from "./features/articles/pages/ArticlesPage";

function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/articles"}>Apprticles</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/articles" element={<ArticlesPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
