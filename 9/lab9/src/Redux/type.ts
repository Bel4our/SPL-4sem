export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export type TodoListTypes = 
 | {type: typeof ADD_TODO, text: string} 
 | {type: typeof TOGGLE_TODO, id: number} 
 | {type: typeof EDIT_TODO, id: number, text: string} 
 | {type: typeof DELETE_TODO, id: number};

 export type Todos = { id: number, text: string; completed: boolean};

 export type TodoListState = Todos[];