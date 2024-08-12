import { ADD_TODO } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const todoReducer = (state = initialState, { type, payload }) => {
    console.log("state: ",state)
  switch (type) {
    case ADD_TODO:
      const updatedState = [...state, payload]; // Create a new array with the added todo
      localStorage.setItem("todos", JSON.stringify(updatedState)); // Update localStorage with the new state
      return updatedState; // Return the updated state
    default:
      return state;
  }
};
