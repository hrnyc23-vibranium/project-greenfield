import { SET_FORM_RATING } from './types.js';

export const setRating = rating => dispatch => {
  dispatch({ type: SET_FORM_RATING, payload: { rating } });
};
