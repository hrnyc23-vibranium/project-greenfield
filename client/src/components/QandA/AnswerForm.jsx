//Dev Dependencies
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { validate } from '../validation';

//React Components
import UploadImage from '../UploadImage';
//import * as filestack from 'filestack-js';

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

const defaultForm = {
  answer: '',
  email: '',
  name: '',
  photos: [],
};

const AnswerForm = ({ product, question, answer }) => {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(defaultForm);
  const [error, setErrors] = React.useState(false);

  //add inputs to form
  const handleChange = e => {
    e.persist();
    setForm(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  //set errors, if there are no errors make post request. Show snackbar depending on success/error
  const handleSubmit = e => {
    //returns an arr or errors or false
    console.log(form);
    let errorList = validate(form, 'answer', null);
    setErrors(errorList);
    console.log(error);
    if (!error) {
      //submitForm(form);
      handleClose();
    }
    //show snackbar
    setOpen(true);
  };

  const handleUpload = images => {
    setForm(prevState => {
      return { ...prevState, photos: images };
    });
  };
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
              onChange={handleChange.bind(this)}
              value={form.answer}
              error={error.answer ? true : false}
              name="answer"
            />
            <TextField
              id="nickname"
              required
              label="What is your nickname"
              placeholder="Example:jack543!"
              fullWidth
              required
              helperText="For privacy reasons, do not use your full name or email address"
              onChange={handleChange.bind(this)}
              value={form.name}
              name="name"
              error={error.name ? true : false}
            />
            <TextField
              id="email"
              required
              fullWidth
              label="Your email"
              inputProps={{ maxLength: 60 }}
              placeholder="Why did you like the product or not"
              helperText="For authentication reasons, you will not be emailed"
              onChange={handleChange.bind(this)}
              value={form.email}
              error={error.email ? true : false}
              name="email"
            />
            <UploadImage form={form} handleUpload={handleUpload.bind(this)} />
          </form>
        </DialogContent>
        <DialogActions>
          <Grid container justify="flex-end">
            <Button onClick={handleClose} color="secondary">
              cancel
            </Button>
            <Button
              onClick={e => {
                event.preventDefault();
                handleSubmit();
              }}>
              Submit
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AnswerForm;
