import { ADD_TODO } from "./actionTypes"

// const existingTodo = JSON.parse(localStorage.getItem("todos")) || []

export const addTodo=(todo)=>(dispatch)=>{
    // existingTodo.push(todo)
    dispatch({type:ADD_TODO,payload:todo})
    // localStorage.setItem("todos",JSON.stringify(existingTodo))
}

// export const remove