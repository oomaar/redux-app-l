import { createStore, combineReducers } from "redux";
import HomeScreenReducer from "./reducers/HomeScreenReducer";

const reducers = combineReducers({ HomeScreenReducer });

export default createStore(reducers);