import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
    step: 1
}

const slice = createSlice({
    name: 'counter',
    initialState,
    selectors: {
        selectCounter: state => state.count,
        selectStep: state => state.step
    },
    reducers: {
        increment: (state, action) => {
            state.count += state.step
        },
        decrement: (state, action) => {
            state.count -= state.step
        },
        reset: (state, action) => {
            return initialState
        },
        changeStep: (state, action) => {
            state.step = action.payload
        }
    }
})

export const countReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions
export const { selectCounter, selectStep } = slice.selectors