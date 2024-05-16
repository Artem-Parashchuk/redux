import { DECREMENT, INCREMENT, RESET, STEP } from "./constans"

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const reset = () => ({ type: RESET })
export const changeStep = (step) => ({ type: STEP, payload: step })
