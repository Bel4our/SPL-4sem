import {ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TodoListState, TodoListTypes, Todos} from './type';

const initialState: TodoListState = [];

let counter: number = 1;

export const TodoListReducer = 
(
    state: TodoListState = initialState,
    action: TodoListTypes
): TodoListState => {
    switch(action.type)
    {
        case ADD_TODO:
            const newTodos: Todos = {
                id: counter++,
                text: action.text,
                completed: false,
            }
            return [...state, newTodos];

        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );

        case EDIT_TODO:
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, text: action.text } : todo
            );

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
            
        default: 
            return state;
    }
}