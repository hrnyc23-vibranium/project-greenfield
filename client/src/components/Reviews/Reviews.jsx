import React, { Component } from 'react';
import { connect } from 'react-redux';
// Material UI Components
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

// React Components
import Meta from './Meta.jsx';
import ReviewsList from './ReviewsList.jsx';
import WriteReview from './WriteReview.jsx';
import { setOpen } from '../../actions/Reviews/setOpen.js';
import { setLimit } from '../../actions/Reviews/setListLimit.js';

const useStyles = makeStyles(theme => ({
  buttons: {
    margin: theme.spacing(5, 0),
  },
  moreButton: {
    marginRight: theme.spacing(2),
  },
}));

const Reviews = props => {
  const classes = useStyles();

  const handleOpen = () => {
    props.setOpen(true);
  };
  const handleClose = () => {
    props.setOpen(false);
  };

  const handleLimit = () => {
    props.setLimit();
  };

  //show buttons
  const renderButtons = () => {
    const { listShown, listLimit } = props;

    let moreButton = (
      <Button
        size="large"
        variant="outlined"
        onClick={handleLimit.bind(this)}
        className={classes.moreButton}
      >
        MORE REVIEWS
      </Button>
    );

    let addButton = (
      <Button size="large" variant="outlined" onClick={handleOpen.bind(this)}>
        ADD A REVIEW +
      </Button>
    );

    if (listShown - listLimit > 0) {
      return (
        <React.Fragment>
          {moreButton}
          {addButton}
        </React.Fragment>
      );
    } else {
      return addButton;
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
          <Box className={classes.buttons}>
            {renderButtons()}
            <Dialog
              open={props.open}
              onClose={handleClose}
              fullWidth={true}
              maxWidth="md"
            >
              <WriteReview handleClose={handleClose.bind(this)} />
            </Dialog>
          </Box>
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
