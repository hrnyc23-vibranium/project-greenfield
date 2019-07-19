//Dev Dependencies
import React from 'react';
import Answer from './Answer';
import axios from 'axios';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answers: [] };
    this.getAnswers = this.getAnswers.bind(this);
  }
  componentDidMount() {
    this.getAnswers();
  }

  getAnswers(page = 1, count = 2) {
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

  render() {
    if (this.state.answers.length > 0) {
      return (
        <div className="answerContainer">
          {this.state.answers.map((answer, index) => {
            return <Answer answer={answer} key={index} />;
          })}
        </div>
      );
    } else {
      return <div>answer not rendered</div>;
    }
  }
}

export default Answers;
