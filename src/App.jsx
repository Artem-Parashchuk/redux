
import { useDispatch, useSelector } from 'react-redux'
import s from './App.module.css'

function App() {
  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch({type: 'INCREMENT'})
  }
  const handleDecrement = () => {
    dispatch({type: 'DECREMENT'})
  }
  const handleReset = () => {
    dispatch({type: 'RESET'})
  }

  return (
    <div>
      <div className={s.counter}>
        <p className={s.text}>{counter }</p>
        <input type="text" className={s.input}/>
        <div className={s.btn_wrapper}>

        <button className={s.btn} onClick={handleDecrement}>Minus</button>
        <button className={s.btn} onClick={handleIncrement}>Plus</button>
        <button className={s.btn} onClick={handleReset}>Reset</button>
        </div>
      </div>

    </div>
  )
}

export default App
