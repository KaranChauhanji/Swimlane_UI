import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

let updatedState = null;
let newTodo = null;
let newTodo1 = null;

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      updatedState = [...state, payload];
      localStorage.setItem("todos", JSON.stringify(updatedState));
      return updatedState;
    case REMOVE_TODO:
      newTodo = state.filter((el) => el.title !== payload);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    case TOGGLE_TODO:
      newTodo1 = state.map((el) => {
        if (el.title === payload.title && !payload.isStarted) {
          console.log("payload: ", payload);
          el.status = !el.status;
        }
        if (el.title === payload.title) {
          el.todo = false;
        }
        return el;
      });
      localStorage.setItem("todos", JSON.stringify(newTodo1));
      return newTodo1;
    default:
      return state;
  }
};
