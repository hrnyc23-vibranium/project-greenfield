import { connect } from 'react-redux';
import React from 'react';
import getQuestions from '../../actions/QandA/getQuestions';
// import postQuestion from '../../actions/QandA/postQuestion';
// import voteQuestion from '../../actions/QandA/voteQuestion';
// import reportQuestion from '../../actions/QandA/reportQuestion';

class Questions extends React.Component {
  componentDidMount() {
    this.loadQuestions(props.productId);
  }
  render() {
    return (
      <div>
        {questions.map(question => {
          return <Question question={question} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
  };
};

const mapActionToState = dispatch => {
  return {
    loadQuestions: productId => {
      dispatch(getQuestions(productId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapActionToState
)(Questions);
