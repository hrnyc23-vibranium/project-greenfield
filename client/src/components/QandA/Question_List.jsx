import { connect } from 'react-redux';
import React from 'react';
import getQuestions from '../../actions/QandA/getQuestions';
// import postQuestion from '../../actions/QandA/postQuestion';
// import voteQuestion from '../../actions/QandA/voteQuestion';
// import reportQuestion from '../../actions/QandA/reportQuestion';

class Questions extends React.Component {
  componentDidMount() {
    console.log('questionmount for product: ', this.props.productId);
    getQuestions(this.props.productId);
  }

  render() {
    if (!this.props.questions.results) {
      console.log(this.props);
      return <div />;
    } else {
      return (
        <div>
          {this.props.questions.results.map(question => {
            return <Question question={question} key={question.questionId} />;
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    productId: state.productId,
    questions: state.questions,
  };
};

const mapActionToState = dispatch => {
  return {
    getQuestions: productId => {
      dispatch(getQuestions(productId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapActionToState
)(Questions);
