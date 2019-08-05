import { GET_LIST, GET_META } from './types.js';
import axios from 'axios';

export const getList = (productId, sort, count = 50) => async dispatch => {
  let reviewList = await axios.get(
    `http://127.0.0.1:8901/reviews/${productId}/list`,
    {
      params: {
        sort: sort,
        count: count,
      },
    }
  );
  console.log(reviewList)
  dispatch({
    type: GET_LIST,
    payload: reviewList.data,
  });
};

export const getMeta = productId => async dispatch => {
  let metaList = await axios.get(
    `http://127.0.0.1:8901/reviews/${productId}/meta`
  );
  dispatch({
    type: GET_META,
    payload: metaList.data,
  });
};
