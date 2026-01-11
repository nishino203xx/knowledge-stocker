import { NavLink, Outlet } from "react-router-dom";
import style from "./AppLayout.module.scss";

export function AppLayout() {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <nav className={style.nav}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? `${style.navItem} ${style["navItem--active"]}`
                : `${style.navItem}`
            }
          >
            ホーム
          </NavLink>
          <NavLink
            to={"/articles"}
            className={({ isActive }) =>
              isActive
                ? `${style.navItem} ${style["navItem--active"]}`
                : `${style.navItem}`
            }
          >
            記事一覧
          </NavLink>
        </nav>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
      <footer className={style.footer}></footer>
    </div>
  );
}
