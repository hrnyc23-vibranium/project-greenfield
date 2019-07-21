import { SET_LIMIT } from '../../actions/Reviews/types.js';

const listLimitReducer = (state = 2, { type, payload }) => {
  switch (type) {
    case SET_LIMIT:
      return state + payload;
    default:
      return state;
  }
};

export default listLimitReducer;
