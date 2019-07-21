import React from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

//React Components
import * as actions from '../../actions/Reviews/updateHelpful.js';
import Ratings from '../Ratings.jsx';

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
  response: {
    display: 'block',
    background: '#D9D9D9',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3, 2),
  },
  responseTitle: {
    fontWeight: 'bold',
    margin: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
  responseBody: {
    margin: theme.spacing(0),
  },
  helpful: {
    marginBottom: theme.spacing(1),
  },
}));

const ReviewsEntry = ({ review, updateHelpful }) => {
  const classes = useStyles();

  const renderPhotos = photos => {
    if (photos.length > 0) {
      return (
        <Box className={classes.images}>
          {photos.map(photo => {
            return (
              <img key={photo.id} src={photo.url} className={classes.image} />
            );
          })}
        </Box>
      );
    }
  };

  const renderRecommend = recommend => {
    return recommend ? <span>I recommend this product</span> : '';
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
    updateHelpful(reviewId);
  };

  return (
    <Box className={classes.root}>
      <Grid container direct="row" justify="space-between">
        <Ratings rating={review.rating} />
        <Box>
          {review.reviewer_name}, {review.date}
        </Box>
      </Grid>
      <h3 className={classes.summary}>{review.summary}</h3>
      <p className={classes.body}>{review.body}</p>

      {renderPhotos(review.photos)}

      {renderRecommend(review.recommend)}

      {renderResponse(review.response)}

      <Box className={classes.helpful}>
        <span>Helpful?</span>
        <button onClick={handleHelpful.bind(this, review.review_id)}>
          Yes({review.helpfulness})
        </button>
        <button>Report</button>
      </Box>
      <br />
    </Box>
  );
};

export default connect(
  null,
  actions
)(ReviewsEntry);
