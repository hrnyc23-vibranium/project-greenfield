import axios from 'axios';

import { getList } from './getData.js';

export const updateHelpful = reviewId => (dispatch, getState) => {
  const { productId, sort } = getState();
  axios.put(`http://18.222.40.124/reviews/helpful/${reviewId}`).then(() => {
    dispatch(getList(productId, sort));
  });
};
