import { HANDLE_SEARCH } from './types.js';

export const setReviewSearch = query => ({
  type: HANDLE_SEARCH,
  payload: query,
});
