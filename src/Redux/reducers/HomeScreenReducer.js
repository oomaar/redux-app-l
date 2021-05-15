import { ActionTypes } from "../constants/HomeScreenConstants";

const defaultState = {
    users: ["No User"]
};

export default function HomeScreenReducer (state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;
    }
};