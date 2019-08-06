import axios from 'axios';

import { getList } from './getData.js';

export const updateHelpful = reviewId => (dispatch, getState) => {
  const { productId, sort } = getState();
  axios.put(`http://3.92.130.185/reviews/helpful/${reviewId}`).then(() => {
    dispatch(getList(productId, sort));
  });
};

export const updateReport = reviewId => (dispatch, getState) => {
  const { productId, sort } = getState();
  axios.put(`http://3.92.130.185/reviews/report/${reviewId}`).then(() => {
    dispatch(getList(productId, sort));
  });
};
