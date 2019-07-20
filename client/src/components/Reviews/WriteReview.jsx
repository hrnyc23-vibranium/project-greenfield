import React from 'react';
import { connect } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as actions from '../../actions/Reviews/setForm.js';

const WriteReview = props => {
  //render meaning depending on the rating selected
  const renderMeaning = rating => {
    let ratings = {
      '1': 'Poor',
      '2': 'Fair',
      '3': 'Average',
      '4': 'Good',
      '5': 'Great'
    };
    return <div> {ratings[rating]} </div>;
  };

  //selecting rating changes the stars displayed
  const renderRating = () => {
    return (
      <Grid container direction="row">
        <Rating
          name="rating"
          value={props.form.rating}
          onChange={(e, newValue) => {
            props.setRating(newValue);
          }}
          precision={1}
        />
        {renderMeaning(props.form.rating)}
      </Grid>
    );
  };

  const renderEmail = () => {
    return (
      <React.Fragment>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </React.Fragment>
    );
  };

  return props.form ? (
    <div>
      <DialogTitle id="form-dialog-title">Write Your Review </DialogTitle>
      <DialogContent>
        <DialogContentText>About the Product Name</DialogContentText>
        <h4>Overall Rating*</h4>
        {renderRating()}
        <h4>Do you recommend this product?*</h4>
        <h4>Characteristics*</h4>
        <h4>Review Summary</h4>
        <h4>Review Body*</h4>
        <h4>Upload your photos</h4>
        <h4>What is your nickname*</h4>
        <h4>Your email*</h4>
        {renderEmail()}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.handleClose} color="primary">
          Submit review
        </Button>
      </DialogActions>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

let mapStateToProps = state => ({
  form: state.reviewForm
});

export default connect(
  mapStateToProps,
  actions
)(WriteReview);
