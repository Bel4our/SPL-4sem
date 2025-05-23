import { createAction } from '@reduxjs/toolkit';
import {ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, Todos} from './type';

let counter: number = 1;

export const add_todo = createAction(ADD_TODO, (text: string) => {
    return {
      payload: {
        id: counter++,
        text,
        completed: false,
      } as Todos,
    };
  });

export const toggle_todo = createAction<number>(TOGGLE_TODO);

export const edit_todo = createAction<{ id: number, text: string }>(EDIT_TODO);

export const delete_todo = createAction<number>(DELETE_TODO);