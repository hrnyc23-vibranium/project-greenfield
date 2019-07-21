import { ADD_FILTER, DELETE_FILTER } from '../../actions/Reviews/types.js';

let defaultState = new Set([]);

const filterReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_FILTER:
      return Object.assign({}, state, payload);
    case DELETE_FILTER:
      let newState = Object.assign({}, state);
      delete newState[payload];
      return newState;
    default:
      return state;
  }
};

export default filterReducer;
