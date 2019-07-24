import { GET_CART, ADD_ITEM, REMOVE_ITEM } from './types';

export const getCart = () => ({
  type: GET_CART,
  payload: {},
});

export const addItem = () => ({
  type: ADD_ITEM,
  payload: {},
});

export const removeItem = () => ({
  type: REMOVE_ITEM,
  payload: {},
});
