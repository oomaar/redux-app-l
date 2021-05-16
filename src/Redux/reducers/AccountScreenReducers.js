import { AccountActionTypes } from "../constants/AccountScreenConstants"

const defaultState = {
    user: "No User",
}

export default function AccountScreenReducers (state = defaultState, action) {
    switch (action.type) {
        case AccountActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state
    };
};