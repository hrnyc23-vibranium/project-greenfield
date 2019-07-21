import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

// React Components
import * as actions from '../../actions/Reviews/getData.js';
import ReviewsEntry from './ReviewsEntry.jsx';
import ReviewSort from '../Reviews/ReviewSort.jsx';

class ReviewsList extends Component {
  componentDidUpdate(prevProps) {
    const { getList, productId, getMeta } = this.props;
    if (this.props.productId !== prevProps.productId) {
      getList(productId, 'relevant');
      getMeta(productId);
    }
  }
  //if there are rating filters, show reviews with that rating
  renderList(reviews, filter) {
    let reviewList = reviews.results;

    return reviewList.map(review => {
      if (Object.keys(filter).length > 0) {
        if (filter[review.rating]) {
          return <ReviewsEntry key={review.review_id} review={review} />;
        }
      } else {
        return <ReviewsEntry key={review.review_id} review={review} />;
      }
    });
  }

  render() {
    const { reviews, filter } = this.props;
    return reviews.results ? (
      <div>
        <div>
          <span className="sortTitle">
            {reviews.results.length} reviews, sorted by
          </span>
          <span className="sortSelect">
            <ReviewSort />
          </span>
        </div>
        <div>
          {this.renderList(reviews, filter)}

          {/* {reviewList.results.map(review => {
            return this.renderList(review, filter);
          })} */}
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = state => ({
  productId: state.productId,
  reviews: state.reviewList,
  metaInfo: state.metaInfo,
  filter: state.reviewFilter,
});

export default connect(
  mapStateToProps,
  actions
)(ReviewsList);
