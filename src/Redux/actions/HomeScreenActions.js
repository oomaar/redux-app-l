import { ActionTypes } from "../constants/HomeScreenConstants";

export const setUsers = (users) => ({
        type: ActionTypes.SET_USERS,
        payload: users
    });

export const setStatus = status => ({
    type: ActionTypes.SET_STATUS,
    payload: status
});