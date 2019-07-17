import { GET_PRODUCT_STYLES } from '../../actions/overview/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_PRODUCT_STYLES:
      return action.payload;
    default:
      return state;
  }
}
