import { Todo } from "../recuders/todos.reducer";

export enum TodoStoreActions {
    SET_NEW_TODO = 'SET_NEW_TODO',
    SET_TODO_DONE = 'SET_TODO_DONE',
    SET_DELETE_TODO = 'SET_DELETE_TODO',
}
export interface SetNewTodoAction{
    type: TodoStoreActions.SET_NEW_TODO,
    payload: {
        todo: Todo
    }
}
export interface SetTodoDaneAction {
    type: TodoStoreActions.SET_TODO_DONE,
    payload: {
        id: number,
    }
}
export interface SetDeleteTodoAction {
    type: TodoStoreActions.SET_DELETE_TODO,
    payload: {
        todo: Todo
    }
}
export type Actions = SetNewTodoAction | SetTodoDaneAction | SetDeleteTodoAction;

export const todosActions = {
    setTodoDone: (todo: Todo): SetNewTodoAction =>({
        type: TodoStoreActions.SET_NEW_TODO,
        payload: { todo }
    }),
    setNewTodo: (id: number): SetTodoDaneAction =>({
        type: TodoStoreActions.SET_TODO_DONE,
        payload: { id }
    }),
    setDeleteTodo: (todo: Todo) =>({
        type: TodoStoreActions.SET_DELETE_TODO,
        payload: { todo }
    }),
};