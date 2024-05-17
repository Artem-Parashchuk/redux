import { ADD_TODO, DELETE_TODO, LIKE_TODO, TOGGLE_TODO } from "./constants"

const initialState = {
    todos: [
        {
            id: 1, todo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo ab magnam unde quidem esse?'
        },
        {
            id: 2, todo: 'Lore explicabo ab magnam unde quidem esse?'
        },
        {
            id: 3, todo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explic'
        },
    ],

}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                })
            }
        case LIKE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === action.payload ? { ...todo, liked: !todo.liked } : todo
                })
            }

        default:
            return state
    }
}