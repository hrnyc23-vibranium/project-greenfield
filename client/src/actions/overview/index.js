import axios from 'axios';
import { GET_PRODUCT_STYLES, GET_PRODUCT } from './types';

export const getProduct = productId => async dispatch => {
  const res = await axios.get(`http://18.222.40.124/products/${productId}`);

  dispatch({ type: GET_PRODUCT, payload: res.data });
};

export const getProductStyles = productId => async dispatch => {
  const res = await axios.get(
    `http://18.222.40.124/products/${productId}/styles`
  );
  dispatch({ type: GET_PRODUCT_STYLES, payload: res.data });
};
