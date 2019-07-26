import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
} from '@material-ui/core';

import * as actions from '../../actions/Reviews/submitForm.js';
import Recommend from './formComponents/Recommend.jsx';
import OverallRating from './formComponents/OverallRating.jsx';
import Characteristics from './formComponents/Characteristics.jsx';
import ReviewSummary from './formComponents/ReviewSummary.jsx';
import ReviewBody from './formComponents/ReviewBody.jsx';
import Nickname from './formComponents/Nickname.jsx';
import Email from './formComponents/Email.jsx';
import Images from './formComponents/Images.jsx';
import Success from '../Success.jsx';
import { validate } from '../helpers.js';
import { FormSnackbar } from '../SnackBar.jsx';

const defaultForm = {
  rating: 0,
  recommend: '',
  characteristics: {},
  summary: '',
  body: '',
  email: '',
  name: '',
  photos: [],
};

const useStyles = makeStyles(theme => ({
  errors: {
    color: theme.palette.error.dark,
    padding: theme.spacing(0),
  },
  error: {
    marginLeft: theme.spacing(2),
  },
}));

const WriteReview = props => {
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const classes = useStyles();

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
    let errorList = validate(form, 'reviews', props.metaInfo.characteristics);

    setErrors(errorList);

    if (!errorList) {
      setSuccess(true);
      props.submitForm(form);
      setForm(defaultForm);
    } else {
      //show snackbar
      setOpen(true);
    }
  };

  //close form
  const handleClose = (e, reason) => {
    setOpen(false); //close snackbr
  };

  //show all errors in a list
  const renderErrors = () => {
    if (!errors) {
      return;
    }

    return (
      <ul className="errors">
        You must enter the following:
        {Object.values(errors).map(err => {
          return (
            <li className="error" key={err}>
              {err}
            </li>
          );
        })}
      </ul>
    );
  };

  const closeSuccess = e => {
    props.handleClose(); //close form
    setSuccess(false);
  };

  return form ? (
    <React.Fragment>
      <DialogTitle id="form-dialog-title">Write Your Review </DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText>About {props.product.name}</DialogContentText>

        {renderErrors()}
        <OverallRating
          form={form}
          setForm={setForm.bind(this)}
          error={errors.hasOwnProperty('rating')}
        />

        <Recommend
          form={form}
          setForm={setForm.bind(this)}
          error={errors.hasOwnProperty('recommend')}
        />

        <Characteristics
          form={form}
          setForm={setForm}
          error={errors.hasOwnProperty('characteristics')}
        />

        <ReviewSummary
          summary={form.summary}
          handleChange={handleChange.bind(this)}
          error={errors.hasOwnProperty('summary')}
        />

        <ReviewBody
          body={form.body}
          handleChange={handleChange.bind(this)}
          error={errors.hasOwnProperty('body')}
        />

        <Images form={form} setForm={setForm.bind(this)} />

        <Nickname
          name={form.name}
          handleChange={handleChange.bind(this)}
          error={errors.hasOwnProperty('name')}
        />

        <Email
          email={form.email}
          handleChange={handleChange.bind(this)}
          error={errors.hasOwnProperty('email')}
        />
      </DialogContent>

      {/* Buttons */}
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>

        <Button onClick={handleSubmit} color="primary">
          Submit review
        </Button>

        {/* Snackbar */}
        <FormSnackbar open={open} handleClose={handleClose} />

        <Dialog open={success} onClose={closeSuccess}>
          <Success handleClose={closeSuccess} />
        </Dialog>
      </DialogActions>
    </React.Fragment>
  ) : (
    <Box>Loading...</Box>
  );
};

let mapStateToProps = state => ({
  product: state.product,
  metaInfo: state.metaInfo,
});

export default connect(
  mapStateToProps,
  actions
)(WriteReview);
