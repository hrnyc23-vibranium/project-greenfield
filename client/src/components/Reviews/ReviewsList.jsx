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
  //if there are rating filters, filter the list then render those entries
  renderList() {
    const { reviews, filter, listLimit } = this.props;

    let filteredList = reviews.results;
    if (Object.keys(filter).length > 0) {
      filteredList = filteredList.filter(review => {
        return filter[review.rating];
      });
    }

    let reviewsList = filteredList.map(review => {
      return <ReviewsEntry key={review.review_id} review={review} />;
    });

    return reviewsList.slice(0, listLimit);
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
        <div>{this.renderList()}</div>
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
  listLimit: state.listLimit,
});

export default connect(
  mapStateToProps,
  actions
)(ReviewsList);
