import { Link } from "react-router-dom";
import s from "./NotFound.module.css";
export const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.item}>Сторінки не знайдено</h1>
      <div>
        <Link
          className={s.link}
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};
