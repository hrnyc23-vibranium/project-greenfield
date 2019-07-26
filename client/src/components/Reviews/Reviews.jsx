import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Dialog, Box, Typography } from '@material-ui/core';

// React Components
import { setOpen } from '../../actions/Reviews/setOpen.js';
import { setLimit } from '../../actions/Reviews/setListLimit.js';
import Meta from './Meta.jsx';
import ReviewsList from './ReviewsList.jsx';
import WriteReview from './WriteReview.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    maxWidth: '1100px',
  },
  title: {
    margin: theme.spacing(2, 0),
  },
  buttons: {
    margin: theme.spacing(3, 0, 5, 0),
    fontSize: 25,
  },
  moreButton: {
    marginRight: theme.spacing(2),
    padding: '15px',
    borderRadius: 0,
  },
  addButton: {
    borderRadius: 0,
    padding: '15px',
  },
}));

const Reviews = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleOpen = () => {
    props.setOpen(true);
  };
  const handleClose = () => {
    props.setOpen(false);
  };

  const handleLimit = () => {
    setExpanded(true);
    props.expandView();
  };

  //show buttons
  const renderButtons = () => {
    const { listShown, listLimit } = props;

    let moreButton = (
      <Button
        variant="outlined"
        onClick={handleLimit.bind(this)}
        // className={classes.moreButton}
      >
        MORE REVIEWS
      </Button>
    );

    let addButton = (
      <Button
        variant="outlined"
        onClick={handleOpen.bind(this)}
        // className={classes.addButton}
      >
        ADD A REVIEW +
      </Button>
    );

    if (listShown - listLimit > 0 && !expanded) {
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
    <Box>
      <Box id="reviews" className={classes.title}>
        <Typography variant="h5">RATINGS & REVIEWS</Typography>
      </Box>
      <Grid container direction="row" justify="space-between">
        <Grid item sm={12} md={4}>
          <Meta />
        </Grid>
        <Grid item sm={12} md={8}>
          <ReviewsList />

          <Box className={classes.buttons}>
            {renderButtons()}

            <Dialog
              open={props.open}
              onClose={handleClose}
              fullWidth={true}
              maxWidth="sm"
            >
              <WriteReview handleClose={handleClose.bind(this)} />
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </Box>
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
  expandView: () => {
    dispatch(setLimit());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
