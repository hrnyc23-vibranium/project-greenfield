import { SET_FORM } from '../../actions/Reviews/types.js';

const formRatingReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_FORM:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
export default formRatingReducer;
