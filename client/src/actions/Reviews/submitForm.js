import { SUBMIT_FORM } from './types.js';
import { getList, getMeta } from './getData.js';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';

export const submitForm = form => (dispatch, getState) => {
  const { productId, sort } = getState();

  console.log(form);

  axios
    .post(`http://18.222.40.124/reviews/${productId}`, {
      rating: String(form.rating),
      summary: form.summary,
      body: form.body,
      recommend: form.recommend === 'true',
      name: form.name,
      email: form.email,
    })
    .then(() => {
      dispatch(getList(productId, sort));
      dispatch(getMeta(productId));
    })
    .catch(err => {
      console.log(err);
    });
};
