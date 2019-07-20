//Dev Dependencies
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

//React Components

//Material Componenet
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  TextField,
  Grid,
  Button,
  Slide,
} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AnswerForm = ({ product, question, answer }) => {
  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Button size="small" onClick={handleClickOpen}>
        Add answer
      </Button>
      <Dialog
        TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle>Submit your Answer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {product}: {question}
          </DialogContentText>
          <form>
            <TextField
              id="answerbody"
              label="Your answer"
              multiline
              required
              inputProps={{ maxLength: 1000 }}
              fullWidth
              // value={answer}
            />
            <TextField
              id="nickname"
              required
              label="What is your nickname"
              placeholder="Example:jack543!"
              fullWidth
              required
              // value={nickname}
              helperText="For privacy reasons, do not use your full name or email address"
            />
            <TextField
              id="email"
              required
              fullWidth
              label="Your email"
              inputProps={{ maxLength: 60 }}
              placeholder="Why did you like the product or not"
              helperText="For authentication reasons, you will not be emailed"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Grid container justify="flex-end">
            <Button onClick={handleClose} variant="contained" color="secondary">
              cancel
            </Button>
            <Button onClick={handleClose} variant="contained">
              Submit
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AnswerForm;
