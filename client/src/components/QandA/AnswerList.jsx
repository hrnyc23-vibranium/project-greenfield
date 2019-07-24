//Dev Dependencies
import React from 'react';
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
  }
  componentDidMount() {
    this.getAnswers();
  }
  loadMore() {
    this.setState({
      load: this.state.load + 2,
    });
  }

  getAnswers(page = 1, count = 50, keyword = null) {
    axios
      .get(
        `http://18.222.40.124/qa/${
          this.props.questionId
        }/answers?page=${page}&count=${count}&body=${keyword}`
      )
      .then(res => {
        this.setState({ answers: res.data.results });
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
              return <Answer answer={answer} key={index} />;
            }
          })}

          {this.state.load < this.state.answers.length ? (
            <Button
              variant="text"
              onClick={() => {
                this.loadMore();
              }}>
              Load more answers
            </Button>
          ) : (
            <div />
          )}
        </div>
      );
    } else {
      return <div>There's not answer for this question yet</div>;
    }
  }
}

export default Answers;
