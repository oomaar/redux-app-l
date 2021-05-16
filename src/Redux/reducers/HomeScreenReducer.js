import { ActionTypes } from "../constants/HomeScreenConstants";

const defaultState = {
    users: ["No User"],
    status: false,
};

export default function HomeScreenReducer (state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload
            };

        case ActionTypes.SET_STATUS:
            return {
                ...state,
                status: action.payload
            }

        default:
            return state;
    }
};