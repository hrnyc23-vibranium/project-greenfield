//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';

//React Componenets
import QuestionList from './QuestionList';
import Search from './Search';

//Material Components
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    'border-radius': 0,
    padding: '15px',
  },
  input: {
    display: 'none',
  },
}));
const QuestionAndAnswer = props => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="h6" component="h2">
        Question and Answers
      </Typography>
      <Search />
      <QuestionList />
      <div>
        <Button variant="outlined" className={classes.button}>
          More answered Questions
        </Button>
        <Button variant="outlined" className={classes.button}>
          Add a quetion +
        </Button>
      </div>
    </Container>
  );
};

export default QuestionAndAnswer;
