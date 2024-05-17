import { Route, Routes } from "react-router-dom";
// import s from "./App.module.css";
import { Layout } from "./page/Layout/Layout";
import { Count } from "./page/Count/Count";
import { Todo } from "./page/Todo/Todo";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Count />}
          />
          <Route
            path="todo"
            element={<Todo />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
