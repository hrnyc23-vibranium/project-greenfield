import { GET_LIST, GET_META } from './types.js';
import axios from 'axios';

export const getList = (productId, sort, count = 3) => async dispatch => {
  let reviewList = await axios.get(
    `http://18.222.40.124/reviews/${productId}/list`,
    {
      params: {
        sort: sort,
        count: count,
      },
    }
  );
  // let reviewList = await axios.get(
  //   `http://18.222.40.124/reviews/${productId}/list?sort=${sort}`
  // );
  dispatch({
    type: GET_LIST,
    payload: reviewList.data,
  });
};

export const getMeta = productId => async dispatch => {
  let metaList = await axios.get(
    `http://18.222.40.124/reviews/${productId}/meta`
  );
  dispatch({
    type: GET_META,
    payload: metaList.data,
  });
};
