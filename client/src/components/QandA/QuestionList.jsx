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
    this.props.getQuestions(this.props.productId);
  }

  render() {
    if (this.props.questions.results) {
      return (
        <div>
          {this.props.questions.results.map(question => {
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

export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);
