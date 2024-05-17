import { createReducer } from "@reduxjs/toolkit"
import { changeStep, decrement, increment, reset } from "./actions"


const initialState = {
    count: 0,
    step: 1
}
export const countReducer = createReducer(initialState, builder => {
    return builder
    .addCase(increment, (state, action) => {
        state.count += state.step
    })
    .addCase(decrement, (state, action) => {
        state.count -= state.step
    })
    .addCase(reset, (state, action) => {
        return initialState
    })
    .addCase(changeStep, (state, action) => {
        state.step = action.payload
    })
})
// export const countReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case increment.type: {
//             return {
//                 ...state,
//                 count: state.count + state.step
//             }
//         }
//         case decrement.type: {
//             return {
//                 ...state,
//                 count: state.count - state.step
//             }
//         }
//         case reset.type: {
//             return initialState
//         }
//         case changeStep.type: {
//             return {
//                 ...state,
//                 step: action.payload
//             }
//         }
//         default:
//             return state
//     }
// }