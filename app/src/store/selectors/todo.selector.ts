import { createSelector } from 'reselect';
import { StoreState } from '../store';

export const todoSelector = {
    getAll: createSelector(
        (state: StoreState) => state.todos,
        todos => todos.list,
    )
};

export default todoSelector;