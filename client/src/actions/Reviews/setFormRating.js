import { SET_FORM_RATING } from './types.js';

const setFormRating = rating => dispatch => {
  dispatch({ type: SET_FORM_RATING, payload: rating });
};

export default setFormRating;
