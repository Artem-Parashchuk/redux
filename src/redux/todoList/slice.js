import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1,
            todo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo ab magnam unde quidem esse?',
            completed: false,
            liked: false
        },
        {
            id: 2,
            todo: 'Lore explicabo ab magnam unde quidem esse?',
            completed: false,
            liked: false

        },
        {
            id: 3,
            todo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explic',
            completed: false,
            liked: false
        },
    ],

}

const slice = createSlice({
    name: 'todolist',
    selectors: {
        selectTodos: state => state.todos,
    },
    initialState,
    reducers: {
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const item = state.todos.find(todo => todo.id === action.payload)
            if (item) {
                item.completed = !item.completed
            }
        },
        likeTodo: (state, action) => {
            const item = state.todos.find(item => item.id === action.payload)
            if (item) {
                item.liked = !item.liked
            }
        },
        addTodo: {
            prepare: todo => {
                return {
                    payload: {
                        todo,
                        id: nanoid(),
                        completed: false,
                        liked: false
                    }
                }
            },
            reducer: (state, action) => {
                state.todos.push(action.payload)
            }
        }
    }
})

export const todoReducer = slice.reducer
export const { deleteTodo, toggleTodo, likeTodo, addTodo } = slice.actions;
export const { selectTodos } = slice.selectors