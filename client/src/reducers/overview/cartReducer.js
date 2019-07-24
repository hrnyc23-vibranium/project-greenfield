import { GET_CART } from '../../actions/overview/types';

export default function(state = {}, { type, payload }) {
  switch (type) {
    case GET_CART:
      return payload;
    default:
      return state;
  }
}
