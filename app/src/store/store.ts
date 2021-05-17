import {combineReducers } from "redux"; 
import { todosActions } from "./actions/todos.actions";
import { TodosList, todosListInitalState, todosStoreReducer } from "./recuders/todos.reducer";
import { Actions as TodosActions } from './actions/todos.actions';

export type StoreActionType = TodosActions;

export interface StoreState {
    todos: TodosList;
};

export const initalStoreState: any = {
    todos: todosListInitalState,
};

export const recuders = combineReducers<StoreState>({
    todos: todosStoreReducer,
});