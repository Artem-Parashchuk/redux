import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { addColorToLink } from "../../helpers/addActiveLink";

export const Layout = () => {
  return (
    <div>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => addColorToLink(isActive, s.active)}
            >
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/about"
              className={({ isActive }) => addColorToLink(isActive, s.active)}
            >
              About
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/users"
              className={({ isActive }) => addColorToLink(isActive, s.active)}
            >
              Users
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/login"
              className={({isActive}) => addColorToLink(isActive, s.active)}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
