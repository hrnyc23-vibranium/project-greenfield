import React from 'react';
import Typography from '@material-ui/core/Typography';

const Question = props => {
  return (
    <Typography variant="h1" component="h1">
      {props.question.question_body}
    </Typography>
  );
};

export default Question;
