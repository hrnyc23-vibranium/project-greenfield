import { connect } from 'react-redux';
import React from 'react';
import { getQuestions } from '../../actions/QandA/getQuestions';
import Question from './Question';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import postQuestion from '../../actions/QandA/postQuestion';
// import voteQuestion from '../../actions/QandA/voteQuestion';
// import reportQuestion from '../../actions/QandA/reportQuestion';

class Questions extends React.Component {
  componentDidMount() {
    //console.log('questionmount for product: ', this.props.productId);
    this.props.getQuestions(this.props.productId);
  }

  render() {
    if (this.props.questions.results) {
      return (
        <div>
          {this.props.questions.results.map(question => {
            // console.log(question.question_id);
            return <Question question={question} key={question.question_id} />;
          })}
        </div>
      );
    } else {
      return <div>Add questions</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    productId: state.productId,
    questions: state.questions,
  };
};
// const mapActionToState = dispatch => {
//   return {
//     loadQuestion: questions => {
//       dispatch(getQuestions(questions));
//     },
//   };
// };
// const mapActionToState = async dispatch => {
//   return {
//     question: productId => {
//       console.log('start');
//       let questions = {};
//       axios
//         .get(`http://18.222.40.124/qa/${productId}`)
//         .then(res => {
//           console.log(res);
//           questions = res.data;
//         })
//         .catch(err => {
//           qustions = err;
//         });
//        dispatch(getQuestions(questions));
//     },
//   };
// };
export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);
