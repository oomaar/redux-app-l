import { createStore, combineReducers } from "redux";
import HomeScreenReducer from "./reducers/HomeScreenReducer";
import MathReducers from "./reducers/MathReducers";
import AccountScreenReducers from "./reducers/AccountScreenReducers";

const reducers = combineReducers({
    HomeScreenReducer,
    MathReducers,
    AccountScreenReducers
});

export default createStore(reducers);