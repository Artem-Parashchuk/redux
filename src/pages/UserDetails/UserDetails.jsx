import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchUserById } from "../../services/api";
import s from "./UserDetails.module.css";
import { addColorToLink } from "../../helpers/addActiveLink";

export const UserDetails = () => {
  const { userId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state) || '/users'

  useEffect(() => {
    const getDetails = async () => {
      const res = await fetchUserById(userId);
      setDetails(res);
    };
    getDetails();
  }, [userId]);
  if (!details) {
    return <span className={s.loader}></span>;
  }
  return (
    <>
      <Link to={goBackRef.current}>Go back</Link>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.user_container}>
            <div className={s.img_container}>
              <img
                src={details.image}
                alt={details.firstName}
              />
            </div>
            <h3>
              {details.firstName} {details.lastName}
            </h3>
            <p>Age: {details.age}</p>
            <p>Phone: {details.phone}</p>
            <p>Email: {details.email}</p>
            <p>Address: {details.address.address}</p>
          </div>
        </div>
        <section className={s.section}>
          <ul className={s.list}>
            <li>
              <NavLink
                to="info"
                className={({ isActive }) => addColorToLink(isActive, s.active)}
              >
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to="posts"
                className={({ isActive }) => addColorToLink(isActive, s.active)}
              >
                Post
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </section>
      </div>
    </>
  );
};
