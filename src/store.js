import { createStore, combineReducers } from "redux"
import todoReducer from "./reducers/todoReducers";

const reduxDevToolEnnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(combineReducers(todoReducer), {}, reduxDevToolEnnhancer);

export default store;
