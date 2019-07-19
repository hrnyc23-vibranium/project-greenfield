//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';

//React Componenets
import QuestionList from './QuestionList';
import Search from './Search';

//Material Components
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const QuestionAndAnswer = props => {
  return (
    <Container maxWidth="md">
      <div>Question and Andwers</div>
      <div>Have a Question? Search for Andwers...</div>
      <Search />
      <QuestionList />
      <div>
        <button>More answered Questions</button>
        <button>Add a quetion+</button>
      </div>
    </Container>
  );
};

export default QuestionAndAnswer;
