import { HANDLE_SEARCH } from '../../actions/Reviews/types.js';

const reviewSearchReducer = (state = '', { type, payload }) => {
  switch (type) {
    case HANDLE_SEARCH:
      return payload;
    default:
      return state;
  }
};

export default reviewSearchReducer;
