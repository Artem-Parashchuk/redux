import { useDispatch, useSelector } from "react-redux";
// import {selectCounter, selectStep} from '../../redux/counter/selectors.js'
import { increment, decrement, reset, changeStep } from "../../redux/counter/actions.js";
import s from "./Count.module.css";
import { selectCounter, selectStep } from "../../redux/counter/selectors.js";

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
