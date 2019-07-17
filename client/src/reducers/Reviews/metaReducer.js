import { GET_META } from '../../actions/Reviews/types.js';

const metaReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_META:
      return payload;
    default:
      return state;
  }
};

export default metaReducer;
