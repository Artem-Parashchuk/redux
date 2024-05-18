import { filterReducer } from "./filter/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./counter/slice";
import { todoReducer } from "./todoList/slice";


export const store = configureStore({
    reducer: {
        counter: countReducer,
        todolist: todoReducer,
        filter: filterReducer,
    },
    // Закриття devTools на продакшені
    // devTools: import.meta.env.MODE !== 'productions'
})