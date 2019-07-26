import React from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Button, Typography } from '@material-ui/core';

//React Components
import * as actions from '../../actions/Reviews/updateHelpful.js';
import { formatDate, markdown } from '../helpers.js';
import Ratings from '../Ratings.jsx';
import ImageGallery from '../ImageGallery.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    boxSizing: 'border-box',
    borderBottom: '1px solid gray',
    marginTop: theme.spacing(3),
  },
  rating: {
    marginBottom: theme.spacing(0.5),
  },
  summary: {
    paddingBottom: theme.spacing(0.5),
  },
  body: {
    paddingBottom: theme.spacing(0.5),
  },
  images: {
    paddingBottom: theme.spacing(2),
  },
  image: {
    marginRight: theme.spacing(1),
    width: 100,
    height: 100,
  },
  recommend: {
    marginBottom: theme.spacing(1),
  },
  check: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  response: {
    display: 'block',
    background: '#D9D9D9',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2, 1),
  },
  responseTitle: {
    fontWeight: 'bold',
    margin: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
  responseBody: {
    margin: theme.spacing(0),
  },
  helpful: {
    marginBottom: theme.spacing(0.5),
    fontWeight: 'normal',
  },
  helpfulTitle: {
    marginTop: theme.spacing(0.3),
    marginRight: theme.spacing(1),
  },
}));

const ReviewsEntry = ({ review, updateHelpful, updateReport, query }) => {
  const classes = useStyles();

  const renderPhotos = photos => {
    if (photos.length > 0) {
      return (
        <Box className={classes.images}>
          <ImageGallery photos={photos} />
        </Box>
      );
    }
  };

  const renderRecommend = recommend => {
    return recommend ? (
      <Box className={classes.recommend}>
        <Typography variant="body2" className={classes.recommendBody}>
          <span className={classes.check}>&#10003;</span>I recommend this
          product
        </Typography>
      </Box>
    ) : (
      ''
    );
  };

  const renderResponse = response => {
    return response ? (
      <Box className={classes.response}>
        <Typography variant="body2" className={classes.responseTitle}>
          <strong>Response: </strong>
        </Typography>
        <Typography variant="body2" className={classes.responseBody}>
          {response}
        </Typography>
      </Box>
    ) : (
      ''
    );
  };

  //check if local storage contains the reviewID, if not then increment review helpfulness by one and add reviewID to storage
  //prevents user from incrementing review more than once
  const handleHelpful = reviewId => {
    if (!localStorage.getItem(reviewId)) {
      updateHelpful(reviewId);
      localStorage.setItem(reviewId, true);
    }
  };

  const handleReport = reviewId => {
    updateReport(reviewId);
  };

  return (
    <Box className={classes.root}>
      <Grid
        container
        direct="row"
        justify="space-between"
        className={classes.rating}
      >
        <Ratings rating={review.rating} />
        <Box>
          <Typography variant="caption">
            {markdown(review.reviewer_name, query)}, {formatDate(review.date)}
          </Typography>
        </Box>
      </Grid>

      <Typography variant="h6" gutterBottom className={classes.summary}>
        {markdown(review.summary, query)}
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.body}>
        {markdown(review.body, query)}
      </Typography>

      {renderPhotos(review.photos)}
      {renderRecommend(review.recommend)}
      {renderResponse(review.response)}

      <Grid
        container
        className={classes.helpful}
        alignItems="center"
        direction="row"
      >
        <Typography variant="subtitle2" className={classes.helpfulTitle}>
          Helpful?
        </Typography>
        <Button
          // className={classes.button}
          onClick={handleHelpful.bind(this, review.review_id)}
        >
          Yes ({review.helpfulness})
        </Button>
        <Typography>|</Typography>
        <Button
          // className={classes.button}
          onClick={handleReport.bind(this, review.review_id)}
        >
          Report
        </Button>
      </Grid>
      <br />
    </Box>
  );
};

let mapStateToProps = state => ({
  query: state.reviewSearch,
});

export default connect(
  mapStateToProps,
  actions
)(ReviewsEntry);
