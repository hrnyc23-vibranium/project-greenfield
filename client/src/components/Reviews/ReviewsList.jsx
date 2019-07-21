import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

// React Components
import { getList, getMeta } from '../../actions/Reviews/getData.js';
import { setShown } from '../../actions/Reviews/setShown.js';
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
  //if there are rating filters, filter the reviews then only render those reviews
  renderList() {
    const { reviews, filter, listLimit, setShown } = this.props;

    let filteredList = reviews.results;
    //if filters are selected, filter the list
    if (Object.keys(filter).length > 0) {
      filteredList = filteredList.filter(review => {
        return filter[review.rating];
      });
    }

    let reviewsList = filteredList.map(review => {
      return <ReviewsEntry key={review.review_id} review={review} />;
    });

    //update amount of reviews displayed
    setShown(reviewsList.length);

    //display amount of reviews depending on limit set
    return reviewsList.slice(0, listLimit);
  }

  render() {
    const { reviews } = this.props;
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

const mapDispatchToprops = dispatch => ({
  setShown: length => {
    dispatch(setShown(length));
  },
  getList: (productId, sort) => {
    dispatch(getList(productId, sort));
  },
  getMeta: productId => {
    dispatch(getMeta(productId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ReviewsList);
