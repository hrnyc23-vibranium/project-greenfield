import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reviews/getData.js';
// Material UI Components
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
// React Components
import Ratings from '../Ratings.jsx';

class StarRating extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.getMeta(this.props.id);
    }
  }

  getAvgRating() {
    const { ratings, totalReviews } = this.props;
    if (ratings && totalReviews) {
      let totalStars = 0;
      for (let stars in ratings) {
        let reviews = ratings[stars];
        totalStars += stars * reviews;
      }
      return totalStars / totalReviews.length;
    }
  }

  getNumReviews() {
    const { totalReviews } = this.props;
    if (totalReviews) {
      return totalReviews.length;
    }
  }

  render() {
    const rating = this.getAvgRating();
    const numReviews = this.getNumReviews();
    return (
      <Fragment>
        {numReviews ? (
          <Box display="flex" flexWrap="nowrap">
            <Ratings rating={rating} />
            <Link href={'#'} color="inherit" variant="body2" underline="always">
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
  totalReviews: state.reviewList.results,
});

export default connect(
  mapStateToProps,
  actions
)(StarRating);
