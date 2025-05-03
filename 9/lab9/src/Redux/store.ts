import { TodoListReducer } from "./reducer";
import { createStore } from 'redux';

export const store = createStore(TodoListReducer);
export type AppDispatch = typeof store.dispatch;