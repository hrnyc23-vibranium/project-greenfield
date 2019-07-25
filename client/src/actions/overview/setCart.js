import { ADD_ITEM, REMOVE_ITEM } from './types';
import axios from 'axios';

export const addItem = item => {
  return dispatch => {
    axios
      .post('http://localhost:5000/api/v1/cart', {
        product: item.product,
        style: item.style,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })
      .then(res => {
        dispatch({ type: ADD_ITEM, payload: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export const removeItem = itemId => {
  return dispatch => {
    axios
      .delete(`http://localhost:5000/api/v1/cart/${itemId}`)
      .then(res => {
        dispatch({ type: REMOVE_ITEM, payload: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  };
};
