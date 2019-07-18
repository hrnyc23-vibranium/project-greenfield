import React from 'react';
import Answer from './Answer';
import { connect } from 'react-redux';
import getAnswers from '../../actions/QandA/getAnswers';

class Answers extends React.Component {
  componentDidMount() {
    this.props.getAnswers(this.props.questionId);
  }

  render() {
    if (this.props.answers.results) {
      return (
        <div>
          {this.props.answers.results.map((answer, index) => {
            return <div key={index}>answer will be liast here</div>;
            //return <Answer key={this.props.questionId} answer={answer} />;
          })}
        </div>
      );
    } else {
      return <div>answer not rendered</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers,
  };
};
export default connect(
  mapStateToProps,
  { getAnswers }
)(Answers);
