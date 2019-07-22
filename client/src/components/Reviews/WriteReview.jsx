import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

const defaultForm = {
  rating: 0,
  recommend: '',
  summary: '',
  body: '',
  email: '',
  name: '',
};

const WriteReview = props => {
  const [form, setForm] = useState(defaultForm);

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);
    setForm(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  console.log(form);
  return form ? (
    <React.Fragment>
      <DialogTitle id="form-dialog-title">Write Your Review </DialogTitle>
      <DialogContent>
        <DialogContentText>About the Product Name</DialogContentText>

        <h4>Overall Rating*</h4>
        <OverallRating form={form} setForm={setForm.bind(this)} />

        <h4>Do you recommend this product?*</h4>
        <Recommend form={form} setForm={setForm.bind(this)} />

        <h4>Characteristics*</h4>
        <Characteristics form={form} setForm={setForm} />

        <h4>Review Summary</h4>
        <ReviewSummary
          summary={form.summary}
          handleChange={handleChange.bind(this)}
        />

        <h4>Review Body*</h4>
        <ReviewBody body={form.body} handleChange={handleChange.bind(this)} />

        <h4>Upload your photos</h4>
        <Images form={form} setForm={setForm} />

        <h4>What is your nickname*</h4>
        <Nickname name={form.name} handleChange={handleChange.bind(this)} />

        <h4>Your email*</h4>
        <Email email={form.email} handleChange={handleChange.bind(this)} />
      </DialogContent>
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
