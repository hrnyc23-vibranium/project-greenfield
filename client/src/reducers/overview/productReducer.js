import { GET_PRODUCT } from '../../actions/overview/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
