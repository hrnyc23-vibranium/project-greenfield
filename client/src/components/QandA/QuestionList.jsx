//Dev Dependencies
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions/QandA/getQuestions';
import axios from 'axios';

//React Components
import Question from './Question';
import QuestionButtons from './QuestionButtons';

//Material Componenets

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: 4,
    };
    this.voteQuestion = this.voteQuestion.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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

  voteQuestion(questionId) {
    axios
      .put(`http://18.222.40.124/qa/question/${questionId}/helpful`)
      .then(res => {
        this.props.getQuestions(
          this.props.productId,
          1,
          50,
          this.props.searchKeyword
        );
      })
      .catch(err => {
        console.log(err);
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

  handleScroll(e) {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      this.loadMore();
    }
  }
  render() {
    var QuestionContainer = {
      maxHeight: window.innerHeight - 200,
    };
    if (this.props.questions.results.length > 0) {
      return (
        <Fragment>
          <div
            style={QuestionContainer}
            className="QuestionContainer"
            onScroll={this.handleScroll}>
            {this.props.questions.results.map((question, index) => {
              if (index < this.state.load) {
                return (
                  <Question
                    question={question}
                    key={question.question_id}
                    product={this.props.productName}
                    voteQuestion={this.voteQuestion}
                  />
                );
              }
            })}
          </div>
          <QuestionButtons
            loadMore={this.loadMore.bind(this)}
            collapesQuestions={this.collapesQuestions.bind(this)}
            showCollapes={this.state.load > 4}
            showLoadMore={this.state.load < this.props.questions.results.length}
          />
        </Fragment>
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
