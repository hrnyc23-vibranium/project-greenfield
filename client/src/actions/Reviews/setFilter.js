import { ADD_FILTER, DELETE_FILTER, RESET_FILTER } from './types.js';

export const addFilter = filter => ({
  type: ADD_FILTER,
  payload: { [filter]: true },
});

export const deleteFilter = filter => ({
  type: DELETE_FILTER,
  payload: filter,
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});
