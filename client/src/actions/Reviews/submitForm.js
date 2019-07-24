import { getList, getMeta } from './getData.js';
import axios from 'axios';

export const submitForm = form => (dispatch, getState) => {
  const { productId, sort } = getState();
  axios
    .post(`http://18.222.40.124/reviews/${productId}`, {
      rating: form.rating,
      summary: form.summary,
      body: form.body,
      recommend: form.recommend === 'true',
      characteristics: form.characteristics,
      name: form.name,
      email: form.email,
      photos: form.photos || [],
    })
    .then(() => {
      dispatch(getList(productId, sort));
      dispatch(getMeta(productId));
    })
    .catch(err => {
      dispatch(getList(productId, sort));
      dispatch(getMeta(productId));
    });
};
