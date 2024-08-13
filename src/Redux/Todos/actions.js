import { ADD_TODO } from "./actionTypes";

export const addTodo = (todo) => (dispatch) => {
  dispatch({ type: ADD_TODO, payload: todo });
};
