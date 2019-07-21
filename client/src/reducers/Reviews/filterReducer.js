import {
  ADD_FILTER,
  DELETE_FILTER,
  RESET_FILTER,
} from '../../actions/Reviews/types.js';

const deleteProps = object => {
  for (let key in object) {
    delete object[key];
  }
  return object;
};

const filterReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_FILTER:
      return Object.assign({}, state, payload);
    case DELETE_FILTER:
      let deletedState = Object.assign({}, state);
      delete deletedState[payload];
      return deletedState;
    case RESET_FILTER:
      let resetedState = Object.assign({}, state);
      return deleteProps(resetedState);
    default:
      return state;
  }
};

export default filterReducer;
