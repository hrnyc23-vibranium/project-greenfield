import { getList, getMeta } from './getData.js';
import axios from 'axios';

export const submitForm = form => (dispatch, getState) => {
  const { productId, sort } = getState();
  console.log(form);
  axios
    .post(`http://18.222.40.124/reviews/${productId}`, {
      rating: String(form.rating),
      summary: form.summary,
      body: form.body,
      recommend: form.recommend === 'true',
      characteristics: form.characteristics,
      name: form.name,
      email: form.email,
      photos: form.photos.length > 0 || [],
    })
    .then(() => {
      dispatch(getList(productId, sort));
      dispatch(getMeta(productId));
    })
    .catch(err => {
      console.log(err);
    });
};
