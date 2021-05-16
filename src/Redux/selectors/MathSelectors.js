import { createSelector } from "reselect";

const mathComponentState = state => state.MathReducers;

export const selectIncrement = createSelector(mathComponentState, mathState => mathState.number);