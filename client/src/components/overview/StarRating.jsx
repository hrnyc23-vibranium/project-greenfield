import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reviews/getData.js';
// Material UI Components
import { Link, Box } from '@material-ui/core';
// React Components
import Ratings from '../Ratings.jsx';

class StarRating extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.getMeta(this.props.id);
    }
  }

  renderAvgRating(totalReviews) {
    const { ratings } = this.props;
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
  }

  getNumReviews(ratings = {}) {
    if (Object.keys(ratings).length > 0) {
      let totalReviews = Object.values(ratings).reduce((sum, num) => {
        return sum + num;
      });
      return totalReviews;
    }
    return 0;
  }

  render() {
    const numReviews = this.getNumReviews(this.props.ratings);
    const rating = this.renderAvgRating(numReviews);
    return (
      <Fragment>
        {numReviews ? (
          <Box display="flex" flexWrap="nowrap" style={{ marginBottom: '5px' }}>
            <Box component="span" style={{ marginRight: '5px' }}>
              <Ratings rating={rating} />
            </Box>
            <Link
              href={'#reviews'}
              color="inherit"
              variant="body2"
              underline="always">
              {`Read All ${numReviews} Reviews`}
            </Link>
          </Box>
        ) : (
          <Box />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  id: state.productId,
  ratings: state.metaInfo.ratings,
});

export default connect(
  mapStateToProps,
  actions
)(StarRating);
