import { SET_SORT } from './types.js';
import { getList } from './getData.js';

export const setSort = sort => (dispatch, getState) => {
  const { productId } = getState();
  dispatch({
    type: SET_SORT,
    payload: sort,
  });
  dispatch(getList(productId, sort));
};
