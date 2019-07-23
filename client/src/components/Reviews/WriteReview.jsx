import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as actions from '../../actions/Reviews/submitForm.js';
import Recommend from './formComponents/Recommend.jsx';
import OverallRating from './formComponents/OverallRating.jsx';
import Characteristics from './formComponents/Characteristics.jsx';
import ReviewSummary from './formComponents/ReviewSummary.jsx';
import ReviewBody from './formComponents/ReviewBody.jsx';
import Nickname from './formComponents/Nickname.jsx';
import Email from './formComponents/Email.jsx';
import Images from './formComponents/Images.jsx';
import { validate } from '../validation.js';
import { FormSnackbar } from '../SnackBar.jsx';

const defaultForm = {
  rating: 0,
  recommend: '',
  characteristics: {},
  summary: '',
  body: '',
  email: '',
  name: '',
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
    let errorList = validate(form, 'reviews');
    setErrors(errorList);

    if (!errorList) {
      props.submitForm(form);
      props.handleClose();
    }

    //show snackbar
    setOpen(true);
  };

  //close snackbar
  const handleClose = (e, reason) => {
    setOpen(false);
  };

  //show all errors in a list
  const renderErrors = () => {
    if (!errors) {
      return;
    }

    return (
      <ul className={classes.errors}>
        You must enter the following:
        {Object.values(errors).map(err => {
          return (
            <li className={classes.error} key={err}>
              {err}
            </li>
          );
        })}
      </ul>
    );
  };

  const checkErrors = input => {
    return errors.hasOwnProperty(input);
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
          error={checkErrors('rating')}
        />

        <Recommend
          form={form}
          setForm={setForm.bind(this)}
          error={checkErrors('recommend')}
        />

        <Characteristics
          form={form}
          setForm={setForm}
          error={checkErrors('characteristics')}
        />

        <ReviewSummary
          summary={form.summary}
          handleChange={handleChange.bind(this)}
          error={checkErrors('summary')}
        />

        <ReviewBody
          body={form.body}
          handleChange={handleChange.bind(this)}
          error={checkErrors('body')}
        />

        <Images form={form} setForm={setForm.bind(this)} />

        <Nickname
          name={form.name}
          handleChange={handleChange.bind(this)}
          error={checkErrors('name')}
        />

        <Email
          email={form.email}
          handleChange={handleChange.bind(this)}
          error={checkErrors('email')}
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
        <FormSnackbar open={open} handleClose={handleClose} errors={errors} />
      </DialogActions>
    </React.Fragment>
  ) : (
    <div>Loading...</div>
  );
};

let mapStateToProps = state => ({
  product: state.product,
});

export default connect(
  mapStateToProps,
  actions
)(WriteReview);
