import { createStore, combineReducers } from "redux";
import HomeScreenReducer from "./reducers/HomeScreenReducer";
import MathReducers from "./reducers/MathReducers";

const reducers = combineReducers({
    HomeScreenReducer,
    MathReducers
});

export default createStore(reducers);