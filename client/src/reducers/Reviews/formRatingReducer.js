import { SET_FORM_RATING } from '../../actions/Reviews/types.js';

const formRatingReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case SET_FORM_RATING:
      return payload;
    default:
      return state;
  }
};
export default formRatingReducer;
