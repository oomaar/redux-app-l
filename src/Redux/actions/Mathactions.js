import { MathActionTypes } from "../constants/MathConstants"

export const setIncrement = number => ({
    type: MathActionTypes.INCREMENT,
    payload: number
});

export const setDecrement = number => ({
    type: MathActionTypes.DECREMENT,
    payload: number
});

export const setByTen = number => ({
    type: MathActionTypes.INC_BY_TEN,
    payload: number
})