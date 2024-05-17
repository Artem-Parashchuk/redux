import { NavLink, Outlet } from "react-router-dom";
import s from './Layout.module.css'

export const Layout = () => {
  return (<>
    <div className={s.wrapper}>
      <NavLink to="count">Count</NavLink>
      <NavLink to='todo'>Todo</NavLink>
    </div>
      <Outlet/>
  </>
  );
};
