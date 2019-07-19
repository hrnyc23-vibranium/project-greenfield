import React from 'react';

//react component
import AnswerList from './AnswerList';

//material componenets
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Question = props => {
  return (
    <div>
      <Grid container justify="space-between">
        <Grid item lg={9} md={9} sm={12}>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="subtitle2">Q: </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                {props.question.question_body}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="subtitle2">A: </Typography>
            </Grid>
            <Grid item>
              <AnswerList questionId={props.question.question_id} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} md={3} sm={12}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Button size="small">
              Helpful? ({props.question.question_helpfulness})
            </Button>
            <Typography component="h4"> | </Typography>
            <Button size="small">Add Answer</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Question;
