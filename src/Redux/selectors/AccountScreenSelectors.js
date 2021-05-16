import { createSelector } from "reselect";

const accountScreenState = (state) => state.AccountScreenReducers;

export const makeSelectUser = createSelector( 
    accountScreenState, 
    AccountScreenReducers => AccountScreenReducers.user
);