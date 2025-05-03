import { createStore } from 'redux';
import { counterReducer } from './reducer';
import { CounterState } from './types';

export const store = createStore(counterReducer);

export type AppDispatch = typeof store.dispatch;
