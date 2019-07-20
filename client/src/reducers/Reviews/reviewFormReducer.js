import { SET_FORM_RATING } from '../../actions/Reviews/types.js';

const defaultForm = {
  rating: 0,
  isHelpful: ''
};

const formRatingReducer = (state = defaultForm, { type, payload }) => {
  switch (type) {
    case SET_FORM_RATING:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
export default formRatingReducer;
