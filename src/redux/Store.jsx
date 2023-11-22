import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";

const reducer = combineReducers({
    todo: TodoReducer
})
const store = configureStore({reducer})

export default store