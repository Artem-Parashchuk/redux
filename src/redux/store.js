import { combineReducers, createStore } from "redux";
import { countReducer } from "./counter/reducers";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { todoReducer } from "./todoList/reducer";

const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({
    counter: countReducer,
    todolist: todoReducer,
})

export const store = createStore(rootReducer, enhancer)