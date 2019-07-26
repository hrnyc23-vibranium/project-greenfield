//Dev Dependencies
import React, { Fragment } from 'react';

//React Componenets
import QuestionForm from './QuestionForm';

//Material Components
import { Container, Modal, Button } from '@material-ui/core';
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

const QuestionButtons = props => {
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
    <div id="questionbuttons">
      {props.showLoadMore ? (
        <Button
          variant="outlined"
          // className={classes.button}
          onClick={() => {
            props.loadMore();
          }}>
          More answered Questions
        </Button>
      ) : props.showCollapes ? (
        <Button
          variant="outlined"
          // className={classes.button}
          onClick={() => {
            props.collapesQuestions();
          }}>
          Collapes Questions
        </Button>
      ) : (
        <Fragment />
      )}

      <QuestionForm product={props.product} />
    </div>
  );
};

export default QuestionButtons;
