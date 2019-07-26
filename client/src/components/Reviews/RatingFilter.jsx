import React from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

//React Components
import * as actions from '../../actions/Reviews/getData.js';
import RatingBar from './RatingBar.jsx';
import Ratings from '../Ratings.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '13px',
  },
  avgRating: {
    fontSize: 50,
    fontWeight: 900,
    marginRight: '15px',
  },
  ratings: {
    marginTop: theme.spacing(1.5),
  },
}));

const RatingFilter = props => {
  const { recommended, ratings } = props;
  const classes = useStyles();
  //calculate percent recommended out of total reviews
  const normalizeRecommended = (curr, total) => {
    if (total === 0) {
      return 0;
    }
    return ((curr / total) * 100).toFixed(0);
  };

  //render out recommended percentage
  const renderRecommended = totalReviews => {
    const { recommended } = props;
    let hasRecommended = recommended[1];
    let normalized = normalizeRecommended(hasRecommended || 0, totalReviews);
    return (
      <Typography variant="subtitle1">
        {normalized} % of reviews recommend this product
      </Typography>
    );
  };

  //render out star rating
  const renderAvgRating = totalReviews => {
    const { ratings } = props;
    if (ratings && totalReviews > 0) {
      let totalStars = 0;
      for (let stars in ratings) {
        let reviews = ratings[stars];
        totalStars += stars * reviews;
      }
      let avgRating = totalStars / totalReviews;
      return Number(avgRating.toFixed(1));
    }
    return 0;
  };

  //if avg rating doesn't have a decimal, add one
  const padAvgRating = avgRating => {
    let stringified = avgRating.toString();
    if (stringified.indexOf('.') < 0) {
      return stringified + '.0';
    }
    return stringified;
  };

  const addTotal = (ratings = {}) => {
    if (Object.keys(ratings).length > 0) {
      let totalReviews = Object.values(ratings).reduce((sum, num) => {
        return sum + num;
      });
      return totalReviews;
    }
    return 0;
  };

  const totalReviews = addTotal(ratings);
  const avgRating = renderAvgRating(totalReviews);
  return recommended && ratings ? (
    <Box>
      <Grid container direction="row" className={classes.root}>
        <span className={classes.avgRating}>{padAvgRating(avgRating)}</span>
        <span className={classes.ratings}>
          <Ratings rating={avgRating} />
        </span>
      </Grid>
      {renderRecommended(totalReviews)}
      <RatingBar ratings={ratings} totalReviews={totalReviews} />
    </Box>
  ) : (
    <Box>Loading...</Box>
  );
};

let mapStateToProps = state => ({
  productId: state.productId,
  ratings: state.metaInfo.ratings,
  recommended: state.metaInfo.recommended,
  filters: state.reviewFilter,
});

export default connect(
  mapStateToProps,
  actions
)(RatingFilter);
