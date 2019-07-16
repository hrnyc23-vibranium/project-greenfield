import { SET_CURRENT_ID } from './Reviews/types.js';
const setCurrentId = productId => ({
  type: 'SET_CURRENT_ID',
  payload: productId
});

export default setCurrentId;
