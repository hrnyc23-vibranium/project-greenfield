import {GET_LIST, GET_META} from './types.js'
import axios from 'axios'
export const getList = (productId, sort) = async dispatch => {
  let reviewList = await axios.get(`http://18.222.40.124/reviews/${productId}/list?sort=${sort}`)

  dispatch({
    type: GET_LIST,
    reviewList: reviewList
  })
}
