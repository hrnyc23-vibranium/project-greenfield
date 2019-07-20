import { SET_OPEN } from '../../actions/Reviews/types.js';

const openReducer = (state = false, { type, payload }) => {
  switch (type) {
    case SET_OPEN:
      return payload;
    default:
      return state;
  }
};

export default openReducer;
