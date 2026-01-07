import { NavLink, Outlet } from "react-router-dom";
import style from "./AppLayout.module.scss";

export function AppLayout() {
  return (
    <div className={style.layout}>
      <header className={style.header}></header>
      <aside className={style.navbar}>
        <nav className={style.nav}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/articles"}>Articles</NavLink>
        </nav>
      </aside>
      <main className={style.main}>
        <Outlet />
      </main>
      <footer className={style.footer}></footer>
    </div>
  );
}
