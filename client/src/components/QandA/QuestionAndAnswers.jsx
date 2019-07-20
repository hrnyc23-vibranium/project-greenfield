//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';

//React Componenets
import QuestionList from './QuestionList';
import Search from './Search';
import QuestionForm from './QuestionForm';

//Material Components
import { Container, Modal } from '@material-ui/core';
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
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
    outline: 'none',
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const QuestionAndAnswer = props => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="QA">
      <Typography variant="h6" component="h2">
        Question and Answers
      </Typography>
      <Search />
      <QuestionList />
      <div id="questionbuttons">
        <Button variant="outlined" className={classes.button}>
          More answered Questions
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleOpen}>
          Add a question +
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}>
          <div style={modalStyle} className={classes.paper}>
            <QuestionForm />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
