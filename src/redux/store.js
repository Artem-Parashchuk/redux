import { countReducer } from "./counter/reducers";
import { todoReducer } from "./todoList/reducer";
import { filterReducer } from "./filter/reducers";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        counter: countReducer,
        todolist: todoReducer,
        filter: filterReducer
    }
})