import s from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStep, decrement, increment, reset } from "./redux/counter/actions";
import { selectCounter, selectStep } from "./redux/counter/selectors";

function App() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  const step = useSelector(selectStep);

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
}

export default App;
