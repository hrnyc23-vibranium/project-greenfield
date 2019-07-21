import React, { Component } from 'react';
import { connect } from 'react-redux';
// Material UI Components
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

// React Components
import Meta from './Meta.jsx';
import ReviewsList from './ReviewsList.jsx';
import WriteReview from './WriteReview.jsx';
import { setOpen } from '../../actions/Reviews/setOpen.js';
import { setLimit } from '../../actions/Reviews/setListLimit.js';

const Reviews = props => {
  const handleOpen = () => {
    props.setOpen(true);
  };
  const handleClose = () => {
    props.setOpen(false);
  };

  const handleLimit = () => {
    props.setLimit();
  };

  const renderMoreButton = () => {
    const { listShown, listLimit } = props;

    if (listShown - listLimit > 0) {
      return (
        <Button
          size="large"
          variant="outlined"
          onClick={handleLimit.bind(this)}
        >
          MORE REVIEWS
        </Button>
      );
    }
  };

  return (
    <div>
      RATINGS & REVIEWS
      <Grid container direction="row" justify="space-between">
        <Grid item sm={12} md={3}>
          <Meta />
        </Grid>
        <Grid item sm={12} md={9}>
          <ReviewsList />
          {renderMoreButton()}
          <Button
            size="large"
            variant="outlined"
            onClick={handleOpen.bind(this)}
          >
            ADD A REVIEW +
          </Button>
          <Dialog
            open={props.open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth="md"
          >
            <WriteReview handleClose={handleClose.bind(this)} />
          </Dialog>
        </Grid>
      </Grid>
    </div>
  );
};

let mapStateToProps = state => ({
  open: state.open,
  listShown: state.listShown,
  listLimit: state.listLimit,
});

let mapDispatchToProps = dispatch => ({
  setOpen: boolean => {
    dispatch(setOpen(boolean));
  },
  setLimit: () => {
    dispatch(setLimit());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
