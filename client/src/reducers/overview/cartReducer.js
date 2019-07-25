import { ADD_ITEM, REMOVE_ITEM } from '../../actions/overview/types';

const cartReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return Object.assign({}, state, payload);
    case REMOVE_ITEM:
      return;
    default:
      return state;
  }
};

export default cartReducer;
