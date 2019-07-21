import { SET_SHOWN } from './types.js';

export const setShown = length => ({
  type: SET_SHOWN,
  payload: length,
});
