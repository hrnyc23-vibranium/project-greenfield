//Dev Dependencies
import React from 'react';

//React Componenets
import QuestionList from './QuestionList';
import Search from './Search';

//Material Components
import { Typography, Box } from '@material-ui/core';

const QuestionAndAnswer = props => {
  return (
    <Box id="QA">
      <Typography variant="h6" component="h2">
        Question and Answers
      </Typography>
      <Search />
      <QuestionList />
    </Box>
  );
};

export default QuestionAndAnswer;
