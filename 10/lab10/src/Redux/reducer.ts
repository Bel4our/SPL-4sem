import { createReducer } from '@reduxjs/toolkit';
import { add_todo, toggle_todo, edit_todo, delete_todo } from './action';
import type { TodoListState } from './type';

const initialState: TodoListState = [];

export const TodoListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(add_todo, (state, action) => {
      state.push(action.payload);
    })
    .addCase(toggle_todo, (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    })
    .addCase(edit_todo, (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    })
    .addCase(delete_todo, (state, action) => {
      const todoIndex = state.findIndex((t) => t.id === action.payload);
      if (todoIndex !== -1) {
        state.splice(todoIndex, 1);
      }
    });
});
