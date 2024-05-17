import { DECREMENT, INCREMENT, RESET, STEP } from "./constants"

const initialState = {
    count: 0,
    step: 1
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + state.step
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - state.step
            }
        }
        case RESET: {
            return initialState
        }
        case STEP: {
            return {
                ...state,
                step: action.payload
            }
        }
        default:
            return state
    }
}