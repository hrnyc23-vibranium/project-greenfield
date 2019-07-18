import { GET_PRODUCT } from '../../actions/overview/types';

export default function(state = {}, { type, payload }) {
  switch (type) {
    case GET_PRODUCT:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
