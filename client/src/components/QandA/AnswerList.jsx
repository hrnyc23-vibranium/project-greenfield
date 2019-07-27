//Dev Dependencies
import React, { Fragment } from 'react';
import Answer from './Answer';
import axios from 'axios';

//Material UI
import { Button } from '@material-ui/core';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], load: 2 };
    this.getAnswers = this.getAnswers.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.collapesAnswers = this.collapesAnswers.bind(this);
    this.voteAnswer = this.voteAnswer.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);
  }
  componentDidMount() {
    this.getAnswers();
  }
  loadMore() {
    this.setState({
      load: this.state.load + 2,
    });
  }
  collapesAnswers() {
    this.setState({
      load: 2,
    });
  }

  getAnswers(page = 1, count = 50) {
    axios
      .get(
        `http://18.222.40.124/qa/${
          this.props.questionId
        }/answers?page=${page}&count=${count}`
      )
      .then(res => {
        this.setState({ answers: res.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  }
  voteAnswer(answerId) {
    axios
      .put(`http://18.222.40.124/qa/answer/${answerId}/helpful`)
      .then(res => {
        this.getAnswers();
      })
      .catch(err => {
        console.log(err);
      });
  }
  reportAnswer(answerId) {
    axios
      .put(`http://18.222.40.124/qa/answer/${answerId}/report`)
      .then(res => {
        this.getAnswers();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.answers.length > 0) {
      return (
        <div className="answerContainer">
          {this.state.answers.map((answer, index) => {
            if (index < this.state.load) {
              return (
                <Answer
                  answer={answer}
                  key={index}
                  voteAnswer={this.voteAnswer}
                  reportAnswer={this.reportAnswer}
                />
              );
            }
          })}

          {this.state.load < this.state.answers.length ? (
            <Button
              variant="text"
              className="loadmore"
              onClick={() => {
                this.loadMore();
              }}>
              Load more answers
            </Button>
          ) : this.state.load > 2 ? (
            <Button
              variant="text"
              className="loadmore"
              onClick={() => {
                this.collapesAnswers();
              }}>
              Collapse answers
            </Button>
          ) : (
            <Fragment />
          )}
        </div>
      );
    } else {
      return <div>There's no answer for this question yet.</div>;
    }
  }
}

export default Answers;
