import React from 'react';
import { connect } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as actions from '../../actions/Reviews/setFormRating.js';

const WriteReview = props => {
  const [rating, setFormRating] = React.useState(0);

  return (
    <div>
      <DialogTitle id="form-dialog-title">Write Your Review </DialogTitle>
      <DialogContent>
        <DialogContentText>About the Product Name</DialogContentText>
        <h4>Overall Rating*</h4>
        <Rating
          name="rating"
          value={rating}
          onChange={(e, newValue) => {
            setFormRating(newValue);
          }}
          precision={1}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.handleClose} color="primary">
          Submit
        </Button>
      </DialogActions>
    </div>
  );
};

let mapStateToProps = state => ({
  rating: state.formRating
});

export default connect(
  mapStateToProps,
  actions
)(WriteReview);
