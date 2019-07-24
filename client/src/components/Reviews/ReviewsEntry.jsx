import React from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//React Components
import * as actions from '../../actions/Reviews/updateHelpful.js';
import { formatDate } from '../formatDate.js';
import Ratings from '../Ratings.jsx';
import ImageGallery from '../ImageGallery.jsx';
import { markdown } from '../search.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    borderBottom: '1px solid gray',
    marginTop: theme.spacing(4),
  },
  body: {
    marginBottom: theme.spacing(3),
  },
  images: {
    marginBottom: theme.spacing(3),
  },
  image: {
    marginRight: theme.spacing(1),
    width: 100,
    height: 100,
  },
  recommend: {
    marginBottom: theme.spacing(3),
  },
  check: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  response: {
    display: 'block',
    background: '#D9D9D9',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3, 2),
  },
  responseTitle: {
    fontWeight: 'bold',
    margin: theme.spacing(0),
    marginBottom: theme.spacing(3),
  },
  responseBody: {
    margin: theme.spacing(0),
  },
  helpful: {
    marginBottom: theme.spacing(1),
    fontSize: 15,
  },
  helpfulTitle: {
    marginTop: theme.spacing(0.3),
    marginRight: theme.spacing(1),
  },
  button: {
    display: 'inline',
    marginRight: theme.spacing(1),
    padding: theme.spacing(0),
    fontSize: 15,
    textDecoration: 'underline',
    textTransform: 'none',
    fontWeight: 'normal',
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
        <span className={classes.check}>&#10003;</span>
        <span className={classes.recommendBody}>I recommend this product</span>
      </Box>
    ) : (
      ''
    );
  };

  const renderResponse = response => {
    return response ? (
      <Box className={classes.response}>
        <p className={classes.responseTitle}>Response:</p>
        <p className={classes.responseBody}>{response}</p>
      </Box>
    ) : (
      ''
    );
  };

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
      <Grid container direct="row" justify="space-between">
        <Ratings rating={review.rating} />
        <Box>
          {review.reviewer_name}, {formatDate(review.date)}
        </Box>
      </Grid>
      <h3 className={classes.summary}>{markdown(review.summary, query)}</h3>
      <p className={classes.body}>{markdown(review.body, query)}</p>

      {renderPhotos(review.photos)}
      {renderRecommend(review.recommend)}
      {renderResponse(review.response)}
      <Grid container className={classes.helpful} direction="row">
        <Typography className={classes.helpfulTitle}>Helpful?</Typography>
        <Button
          component="span"
          className={classes.button}
          onClick={handleHelpful.bind(this, review.review_id)}
        >
          Yes ({review.helpfulness})
        </Button>
        <Button
          component="span"
          className={classes.button}
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
