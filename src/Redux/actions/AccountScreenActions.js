import { AccountActionTypes } from "../constants/AccountScreenConstants";

export const setUser = user => ({
    type: AccountActionTypes.SET_USER,
    payload: user
});