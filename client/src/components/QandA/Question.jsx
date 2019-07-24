//Dev Dependencies
import React from 'react';

//React Component
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm';

//Material Componenets
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  smallbutton: {
    margin: theme.spacing(1),
    'border-radius': 0,
    padding: '15px',
  },
  smallbutton: {
    margin: theme.spacing(1),
    'border-radius': 0,
    padding: '15px',
  },
  input: {
    display: 'none',
  },
}));

const Question = props => {
  return (
    <div>
      <Grid container justify="space-between" alignItems="flex-start">
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
            justify="flex-end"
            alignItems="flex-start">
            <Button size="small">
              Helpful? ({props.question.question_helpfulness})
            </Button>
            <Typography component="h4"> | </Typography>
            <AnswerForm
              product={props.product}
              question={props.question.question_body}
              questionId={props.question.question_id}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Question;
