import { TodoListReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({reducer : TodoListReducer});

export type AppDispatch = typeof store.dispatch;