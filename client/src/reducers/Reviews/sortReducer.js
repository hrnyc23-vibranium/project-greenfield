import { SET_SORT } from '../../actions/Reviews/types.js';

const sortReducer = (state = 'relevant', { type, payload }) => {
  switch (type) {
    case SET_SORT:
      return payload;
    default:
      return state;
  }
};

export default sortReducer;
