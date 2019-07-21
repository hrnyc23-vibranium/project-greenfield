import { SET_LIMIT } from '../../actions/Reviews/types.js';

const listLimitReducer = (state = 2, { type }) => {
  switch (type) {
    case SET_LIMIT:
      return (state += 2);
    default:
      return state;
  }
};

export default listLimitReducer;
