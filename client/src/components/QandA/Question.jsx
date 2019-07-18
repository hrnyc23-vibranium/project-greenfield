import React from 'react';
import AnswerList from './AnswerList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const Question = props => {
  //console.log(props.question);
  return (
    <div>
      <Grid lg={12} container={true}>
        <Grid lg={8} md={8} item={true}>
          <Typography component="h4">
            Q: {props.question.question_body}
          </Typography>
        </Grid>
        <Grid lg={3} md={3} item={true}>
          <Grid container={true}>
            <Typography component="h4">Helpful?</Typography>
            <Typography component="h4">
              {props.question.question_helpfulness}
            </Typography>
            <Typography component="h4"> | </Typography>
            <Typography component="h4">Add answer</Typography>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <AnswerList questionId={props.question.question_id} />
        {/* {Object.keys(props.question.answers).length > 0 ? (
          Object.keys(props.question.answers).map(answerid => {
            let answer = props.question.answers[answerid].body;
            // console.log(answer.body);
            return (
              <div>
                <Typography component="h4">{answer}</Typography>
              </div>
            );
          })
        ) : (
          <div />
        )} */}
      </div>
    </div>
  );
};

export default Question;
