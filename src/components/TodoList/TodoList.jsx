import s from './TodoList.module.css'
import { TodoItem } from "../TodoItem/TodoItem"
export const TodoList = ({todos}) => {

  return (
    <div>
        <ul className={s.list}>
            {todos.map(todo => {
              return <TodoItem key={todo.id} todo={todo}/>
            })}
        </ul>
    </div>
  )
}
