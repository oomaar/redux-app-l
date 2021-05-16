import { MathActionTypes } from "../constants/MathConstants";

const defaultState = {
    number: 0
};

export default function MathReducers(state = defaultState, action) {
    switch (action.type) {
        case MathActionTypes.INCREMENT:
            return {
                ...state,
                number: action.payload
            }

        case MathActionTypes.DECREMENT:
            return {
                ...state,
                number: action.payload
            }

        case MathActionTypes.INC_BY_TEN:
            return {
                ...state,
                number: action.payload
            }

        default:
            return state;
    }
};