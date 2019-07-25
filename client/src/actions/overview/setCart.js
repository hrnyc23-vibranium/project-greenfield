import { GET_CART, ADD_ITEM, REMOVE_ITEM } from './types';

export const getCart = () => ({
  type: GET_CART,
  payload: {},
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});
