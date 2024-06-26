import { useDispatch, useSelector } from "react-redux";

import s from "./Todo.module.css";
import { TodoList } from "../../components/TodoList/TodoList";
import { Field, Form, Formik } from "formik";
import { Filter } from "../../components/Filter/Filter";
import { addTodo, selectTodos } from "../../redux/todoList/slice";

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
      <Filter/>
      <TodoList todos={todos} />
    </div>
  );
};
