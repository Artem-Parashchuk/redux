
import s from './App.module.css'

function App() {

  return (
    <div>
      <div className={s.counter}>
        <p className={s.text}></p>
        <input type="text" className={s.input}/>
        <div className={s.btn_wrapper}>

        <button className={s.btn}>Minus</button>
        <button className={s.btn}>Plus</button>
        <button className={s.btn}>Reset</button>
        </div>
      </div>

    </div>
  )
}

export default App
