import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as actions from '../../actions/Reviews/setForm.js';
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
    color: 'red',
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

    if (!errors) {
      console.log('no errors');
      //call action that makes post request
    }

    //show snackbar
    setOpen(true);
  };

  //close snackbar
  const handleClose = e => {
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
        {errors.map(err => {
          return (
            <li className={classes.error} key={err}>
              {err}
            </li>
          );
        })}
      </ul>
    );
  };

  return form ? (
    <React.Fragment>
      <DialogTitle id="form-dialog-title">Write Your Review </DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText>About {props.product.name}</DialogContentText>

        {renderErrors()}
        <OverallRating form={form} setForm={setForm.bind(this)} />

        <Recommend form={form} setForm={setForm.bind(this)} />

        <Characteristics form={form} setForm={setForm} />

        <ReviewSummary
          summary={form.summary}
          handleChange={handleChange.bind(this)}
        />

        <ReviewBody body={form.body} handleChange={handleChange.bind(this)} />

        <Images form={form} setForm={setForm} />

        <Nickname name={form.name} handleChange={handleChange.bind(this)} />

        <Email email={form.email} handleChange={handleChange.bind(this)} />
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
