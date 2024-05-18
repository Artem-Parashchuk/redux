import { useDispatch } from "react-redux";
import s from "./TodoItem.module.css";

import { FaRegStar } from "react-icons/fa";
import { deleteTodo, likeTodo, toggleTodo } from "../../redux/todoList/slice";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      {todo.liked && <FaRegStar color="gold" />}
      <p className={s.text}>{todo.todo}</p>
      <label className="cursor-pointer label">
        <span className="label-text">Set as completed</span>
        <input
          onChange={() => dispatch(toggleTodo(todo.id))}
          checked={todo.completed}
          type="checkbox"
          className="checkbox checkbox-secondary"
        />
      </label>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
      <button
        className={s.btn_like}
        onClick={() => dispatch(likeTodo(todo.id))}
      >
        Like
      </button>
    </li>
  );
};
