// import { ADD_TODO, DELETE_TODO, LIKE_TODO, TOGGLE_TODO } from "./constants"
import { createAction, nanoid } from "@reduxjs/toolkit"

export const addTodo = createAction('addTodo', (todo) => {
    return {
        payload: {
            todo,
            id: nanoid(),
            completed: false,
            liked: false
        }
    }
})
export const deleteTodo = createAction('deleteTodo')
export const toggleTodo = createAction('toggleTodo')
export const likeTodo = createAction('likeTodo')

// export const addTodo = todo => {
//     return {
//         type: ADD_TODO,
//         payload: {
//             todo,
//             id: nanoid(),
//             completed: false,
//             liked: false
//         }
//     }
// }
// export const deleteTodo = id => {
//     return {type: DELETE_TODO, payload: id}
// }
// export const toggleTodo = id => {
//     return {type: TOGGLE_TODO, payload: id}
// }
// export const likeTodo = id => {
//     return {type: LIKE_TODO, payload: id}
// }