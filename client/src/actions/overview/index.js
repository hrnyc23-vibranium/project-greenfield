import axios from 'axios';
import { GET_PRODUCT_STYLES, GET_PRODUCT } from './types';

export const getProduct = () => async dispatch => {
  const res = await axios.get(
    `https://cors-anywhere.herokuapp.com${'/18.222.40.124/products/1'}`
  );

  dispatch({ type: GET_PRODUCT, payload: res.data });
};

export const getProductStyles = () => async dispatch => {
  const res = await axios.get(
    `https://cors-anywhere.herokuapp.com${'/18.222.40.124/products/1/styles'}`
  );
  dispatch({ type: GET_PRODUCT_STYLES, payload: res.data });
};
