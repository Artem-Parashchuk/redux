import { useDispatch, useSelector } from "react-redux";

import s from "./Todo.module.css";
import { selectTodos } from "../../redux/todoList/selectors";
import { TodoList } from "../../components/TodoList/TodoList";
import { Field, Form, Formik } from "formik";
import { addTodo } from "../../redux/todoList/actions";

export const Todo = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(addTodo(values.todo));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ todo: "" }}
        className={s.form}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field
            name="todo"
            type="text"
            className={s.input}
          />
          <button
            className={s.btn}
            type="submit"
          >
            Add todo
          </button>
        </Form>
      </Formik>
      <TodoList todos={todos} />
    </div>
  );
};
