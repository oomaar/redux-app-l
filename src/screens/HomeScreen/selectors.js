import { createSelector } from "reselect";

const homeScreenState = (state) => state.homeScreenReducer;

export const makeSelectUsers = createSelector(
    homeScreenState,
    homeScreenReducer => homeScreenReducer.users
);