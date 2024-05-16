import { createStore } from "redux";
import { countReducer } from "./counter/reducers";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer()

export const store = createStore(countReducer, enhancer)