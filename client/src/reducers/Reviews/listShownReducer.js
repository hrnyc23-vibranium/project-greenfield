import { SET_SHOWN } from '../../actions/Reviews/types.js';

const setShown = (state = 2, { type, payload }) => {
  switch (type) {
    case SET_SHOWN:
      return payload;
    default:
      return state;
  }
};

export default setShown;
