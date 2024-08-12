import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      const updatedState = [...state, payload];
      localStorage.setItem("todos", JSON.stringify(updatedState));
      return updatedState;
    case REMOVE_TODO:
      const newTodo = state.filter((el) => el.title !== payload);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    case TOGGLE_TODO:
      const newTodo1 = state.map((el) => {
        if (el.title === payload) {
          el.status = !el.status;
        }
        return el;
      });
      localStorage.setItem("todos", JSON.stringify(newTodo1));
      return newTodo1;
    default:
      return state;
  }
};
