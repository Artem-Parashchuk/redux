import { useDispatch, useSelector } from "react-redux";
import s from "./Count.module.css";
import { changeStep, decrement, increment, reset, selectCounter, selectStep } from "../../redux/counter/slice.js";

export const Count = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleChange = (e) => {
    dispatch(changeStep(+e.target.value));
  };
  return (
    <div>
      <div className={s.counter}>
        <p className={s.text}>{counter}</p>
        <input
          type="text"
          className={s.input}
          onChange={handleChange}
          value={step}
        />
        <div className={s.btn_wrapper}>
          <button
            className={s.btn}
            onClick={handleDecrement}
          >
            Minus
          </button>
          <button
            className={s.btn}
            onClick={handleIncrement}
          >
            Plus
          </button>
          <button
            className={s.btn}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
