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
import { classes } from 'istanbul-lib-coverage';

const defaultForm = {
  rating: 0,
  recommend: '',
  summary: '',
  body: '',
  email: '',
  name: '',
};

const useStyles = makeStyles(theme => ({}));

const WriteReview = props => {
  const [form, setForm] = useState(defaultForm);

  const handleChange = e => {
    e.persist();
    setForm(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return form ? (
    <React.Fragment>
      <DialogTitle id="form-dialog-title">Write Your Review </DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText>About the Product Name</DialogContentText>

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
        <Button onClick={props.handleClose} color="primary">
          Submit review
        </Button>
      </DialogActions>
    </React.Fragment>
  ) : (
    <div>Loading...</div>
  );
};

let mapStateToProps = state => ({
  // form: state.reviewForm
});

export default connect(
  mapStateToProps,
  actions
)(WriteReview);
