const GET_QUESTION = {
  type: "GET_QUESTION",
  text: 'Get questions by product id'
}

const getQuestions = (productid) => {
  return {
    type: "GET_QUESTION",
    payload: productid
  }
}

export default getQuestions;