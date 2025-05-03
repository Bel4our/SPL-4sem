import {ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TodoListTypes} from './type';

export const add_todo = (text: string): TodoListTypes => ({
    type : ADD_TODO,
    text
});

export const toggle_todo = (id: number): TodoListTypes => ({
    type : TOGGLE_TODO,
    id
});

export const edit_todo = (id: number, text: string): TodoListTypes => ({
    type : EDIT_TODO,
    id,
    text
});

export const delete_todo = (id: number): TodoListTypes => ({
    type : DELETE_TODO,
    id
});