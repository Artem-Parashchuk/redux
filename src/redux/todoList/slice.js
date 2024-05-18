import { createSlice, nanoid } from "@reduxjs/toolkit"
// Створюємо початковий стан
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
// Створюємо слайс
const slice = createSlice({
    // Даємо ім'я (має спіівпадати з назвою в сторі )
    name: 'todolist',

    // Передаємо початковий стан
    initialState,

    // Створюємо селектори прямо в слайсі
    selectors: {
        selectTodos: state => state.todos,
    },

    // Створюємо редюсери(екшени)
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
        // Підготовка пейлоада відбувається таким чином
        // Спочатку викликається prepare
        // ПОтім викликається reducer
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
// Експорт редюсера (його стан, логіка)
export const todoReducer = slice.reducer
// Експорт екшенів - того, що написано в реюсерах
export const { deleteTodo, toggleTodo, likeTodo, addTodo } = slice.actions;
// Експорт селекторів
export const { selectTodos } = slice.selectors