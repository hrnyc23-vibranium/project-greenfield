//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions/QandA/getQuestions';
// import postQuestion from '../../actions/QandA/postQuestion';
// import voteQuestion from '../../actions/QandA/voteQuestion';
// import reportQuestion from '../../actions/QandA/reportQuestion';

//React Components
import Question from './Question';
import QuestionButtons from './QuestionButtons';

//Material Componenets
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: 4,
    };
  }
  loadMore() {
    if (this.state.load < this.props.questions.results.length)
      this.setState({
        load: this.state.load + 2,
      });
  }
  collapesQuestions() {
    this.setState({
      load: 4,
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.productId !== prevProps.productId ||
      this.props.searchKeyword !== prevProps.searchKeyword
    ) {
      this.props.getQuestions(
        this.props.productId,
        1,
        50,
        this.props.searchKeyword
      );
    }
  }

  render() {
    if (this.props.questions.results.length > 0) {
      return (
        <div>
          {this.props.questions.results.map((question, index) => {
            if (index < this.state.load) {
              return (
                <Question
                  question={question}
                  key={question.question_id}
                  product={this.props.productName}
                />
              );
            }
          })}
          <QuestionButtons
            loadMore={this.loadMore.bind(this)}
            collapesQuestions={this.collapesQuestions.bind(this)}
            showCollapes={this.state.load > 4}
            showLoadMore={this.state.load < this.props.questions.results.length}
          />
        </div>
      );
    } else {
      return <QuestionButtons showLoadMore={false} showCollapes={false} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    productId: state.productId,
    searchKeyword: state.searchKeyword,
    questions: state.questions,
    productName: state.product.name,
  };
};

const QuestionList = connect(
  mapStateToProps,
  { getQuestions }
)(Questions);

export default QuestionList;
