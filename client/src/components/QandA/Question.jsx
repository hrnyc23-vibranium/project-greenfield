//Dev Dependencies
import React, { Fragment } from 'react';

//React Component
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm';

//Material Componenets
import { Typography, Grid, Button } from '@material-ui/core';
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
  const [disabled, setDisabled] = React.useState(false);
  return (
    <Fragment>
      <Grid container justify="space-between" alignItems="flex-start">
        <Grid item lg={9} md={9} sm={12}>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="h6">Q: </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                {props.question.question_body}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-start">
            <Grid item>
              <Typography variant="h6">A: </Typography>
            </Grid>
            <Grid item>
              {/* {console.log(props.question)} */}
              <AnswerList questionId={props.question.question_id} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} md={3} sm={12}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center">
            <Button
              // size="small"
              disabled={disabled}
              onClick={() => {
                props.voteQuestion(props.question.question_id);
                setDisabled(!disabled);
              }}>
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
    </Fragment>
  );
};

export default Question;
