import { combineReducers } from "redux";
import { todoReducer } from "./Todos/reducer";

export const rootReducer = combineReducers({
    todos:todoReducer
})