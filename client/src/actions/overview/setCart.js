import { GET_CART, ADD_ITEM, REMOVE_ITEM } from './types';
import axios from 'axios';

export const getCart = () => async dispatch => {
  const res = await axios.get(
    `https://vibranium-cart.herokuapp.com/api/v1/cart`
  );

  dispatch({ type: GET_CART, payload: res.data });
};

export const addItem = item => {
  return dispatch => {
    axios
      .post('https://vibranium-cart.herokuapp.com/api/v1/cart', {
        product: item.product,
        style: item.style,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })
      .then(res => {
        dispatch({ type: ADD_ITEM, payload: res.data });
        dispatch(getCart());
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export const removeItem = itemId => {
  return dispatch => {
    axios
      .delete(`https://vibranium-cart.herokuapp.com/api/v1/cart/${itemId}`)
      .then(res => {
        dispatch({ type: REMOVE_ITEM, payload: res.data });
        dispatch(getCart());
      })
      .catch(err => {
        console.error(err);
      });
  };
};
