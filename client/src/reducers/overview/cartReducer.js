import { GET_CART, ADD_ITEM } from '../../actions/overview/types';

const cartReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_CART:
      return payload;
    case ADD_ITEM:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};

export default cartReducer;
