import { SET_OPEN } from './types.js';

export const setOpen = boolean => ({
  type: SET_OPEN,
  payload: boolean
});
