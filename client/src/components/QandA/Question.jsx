import React from 'react';

//react component
import AnswerList from './AnswerList';

//material componenets
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const Question = props => {
  return (
    <Container maxWidth="lg">
      <Grid container justify="space-between">
        <Grid lg={10} md={10} sm={12} item>
          <div className="questioncontainer">
            <Typography variant="subtitle2" componenet="p">
              {props.question.question_body}
            </Typography>
          </div>
          <div className="answercontainer">
            <AnswerList questionId={props.question.question_id} />
          </div>
        </Grid>
        <Grid lg={2} md={2} sm={12} item>
          <Grid container>
            <Typography component="h4">Helpful?</Typography>
            <Typography component="h4">
              {props.question.question_helpfulness}
            </Typography>
            <Typography component="h4"> | </Typography>
            <Typography component="h4">Add answer</Typography>
          </Grid>
        </Grid>
      </Grid>
      <div />
    </Container>
  );
};

export default Question;
