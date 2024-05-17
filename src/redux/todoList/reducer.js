import { createReducer } from "@reduxjs/toolkit"
import { addTodo, deleteTodo, likeTodo, toggleTodo } from "./actions"
// import { ADD_TODO, DELETE_TODO, LIKE_TODO, TOGGLE_TODO } from "./constants"

const initialState = {
    todos: [
        {
            id: 1, todo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo ab magnam unde quidem esse?',
            completed: false
        },
        {
            id: 2, todo: 'Lore explicabo ab magnam unde quidem esse?', 
            completed: false

        },
        {
            id: 3, todo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explic',
            completed: false
        },
    ],

}

export const todoReducer = createReducer(initialState, builder => {
    builder
        .addCase(addTodo, (state, action) => {
            state.todos.push(action.payload)
        })
        .addCase(deleteTodo, (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        })
        .addCase(toggleTodo, (state, action) => {
            const item = state.todos.find(todo => todo.id === action.payload)
            item.completed = !item.completed
        })
        .addCase(likeTodo, (state, action) => {
            const item = state.todos.find(todo => todo.id === action.payload)
            item.liked = !item.liked
        })
})

// export const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case deleteTodo.type:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.payload)
//             }
//         case addTodo.type:
//             return {
//                 ...state,
//                 todos: [...state.todos, action.payload]
//             }
//         case toggleTodo.type:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => {
//                     return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//                 })
//             }
//         case likeTodo.type:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => {
//                     return todo.id === action.payload ? { ...todo, liked: !todo.liked } : todo
//                 })
//             }

//         default:
//             return state
//     }
// }