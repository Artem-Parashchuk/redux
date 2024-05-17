
// export const increment = () => ({ type: INCREMENT })
// export const decrement = () => ({ type: DECREMENT })
// export const reset = () => ({ type: RESET })
// export const changeStep = (step) => ({ type: STEP, payload: step })

import { createAction } from "@reduxjs/toolkit";

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const changeStep = createAction('changeStep')