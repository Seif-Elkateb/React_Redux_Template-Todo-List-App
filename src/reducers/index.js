import { goalReducer } from "./goalreducer";
import { todoReducer } from "./todoreducer";
import { combineReducers } from "redux";

export default combineReducers({
  todos:todoReducer,
  goals:goalReducer
});