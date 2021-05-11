import { createStore, combineReducers } from "redux";
import homeScreenReducer from "../screens/HomeScreen/reducers";

const reducers = combineReducers({ homeScreenReducer });

export default createStore(reducers);