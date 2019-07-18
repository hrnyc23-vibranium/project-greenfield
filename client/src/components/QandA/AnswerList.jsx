import React from 'react';
import Answer from './Answer';
//import { connect } from 'react-redux';
//import XgetAnswers from '../../actions/QandA/getAnswers';
import axios from 'axios';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answers: [] };
    this.getAnswers = this.getAnswers.bind(this);
  }
  componentDidMount() {
    //this.state.answers = this.props.getAnswers();
    this.getAnswers();
  }

  getAnswers() {
    axios
      .get(`http://18.222.40.124/qa/${this.props.questionId}/answers`)
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
        <div>
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

// const mapStateToProps = state => {
//   return {
//     answers: state.answers,
//   };
// };
// export default connect(
//   null,
//   { XgetAnswers }
// )(Answers);

export default Answers;
