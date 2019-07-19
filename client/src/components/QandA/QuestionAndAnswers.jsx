//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';

//React Componenets
import QuestionList from './QuestionList';

//Material Components

const QuestionAndAnswer = props => {
  return (
    <div>
      <div>Question and Andwers</div>
      <div>Have a Question? Search for Andwers...</div>
      <QuestionList />
      <div>
        <button>More answered Questions</button>
        <button>Add a quetion+</button>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
