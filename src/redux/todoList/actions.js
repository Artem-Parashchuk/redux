import { nanoid } from "nanoid"
import { ADD_TODO, DELETE_TODO, LIKE_TODO, TOGGLE_TODO } from "./constants"

export const deleteTodo = id => {
    return {type: DELETE_TODO, payload: id}
}
export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: {
            todo,
            id: nanoid(),
            completed: false,
            liked: false
        }
    }
}
export const toggleTodo = id => {
    return {type: TOGGLE_TODO, payload: id}
}
export const likeTodo = id => {
    return {type: LIKE_TODO, payload: id}
}