import { createSelector } from "reselect";

const homeScreenState = (state) => state.HomeScreenReducer;

export const makeSelectUsers = createSelector( homeScreenState, homeScreen => homeScreen.users );

export const makeSelectStatus = createSelector( homeScreenState, homeScreen => homeScreen.status );