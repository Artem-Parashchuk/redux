import { NavLink, Outlet } from "react-router-dom";
import s from './About.module.css'
import { addColorToLink } from "../../helpers/addActiveLink";
export const About = () => {
  return (
    <>
      <div><h1>About</h1></div>
      <ul className={s.list}>
        <li>
          <NavLink to="team" className={({isActive}) => addColorToLink(isActive, s.active)}>Our Team</NavLink>
        </li>
        <li>
          <NavLink to="ourMission" className={({isActive}) => addColorToLink(isActive, s.active)}>Our Mission</NavLink>
        </li>
        <li>
          <NavLink to="company" className={({isActive}) => addColorToLink(isActive, s.active)}>Company</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
