import { useDispatch, useSelector } from "react-redux";
import s from "./Filter.module.css";

import { changeFilter } from "../../redux/filter/actions";
import clsx from "clsx";
import { selectFilter } from "../../redux/filter/selectors";


export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper_btn}>
      <button
        onClick={() => dispatch(changeFilter("all"))}
        className={clsx(filter === 'all' ? s.btnSuccess : s.btn)}
      >
        All
      </button>
      <button
        onClick={() => dispatch(changeFilter("active"))}
        className={clsx(filter === 'active' ? s.btnSuccess : s.btn)}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(changeFilter("completed"))}
        className={clsx(filter === 'completed' ? s.btnSuccess : s.btn)}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(changeFilter("liked"))}
        className={clsx(filter === 'liked' ? s.btnSuccess : s.btn)}
      >
        Liked
      </button>
    </div>
  );
};
