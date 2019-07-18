import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reviews/getData.js';
// React Components
import ReviewsEntry from './ReviewsEntry.jsx';
class ReviewsList extends Component {
  componentDidUpdate(prevProps) {
    const { getList, productId, getMeta } = this.props;
    if (this.props.productId !== prevProps.productId) {
      getList(productId, 'relevant');
      getMeta(productId);
    }
  }

  render() {
    const { reviewList } = this.props;
    return reviewList.results ? (
      <div>
        <div>288 reviews, sorted by </div>
        <div>
          {reviewList.results.map(review => {
            return <ReviewsEntry key={review.review_id} review={review} />;
          })}
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = state => ({
  productId: state.productId,
  // productId: 2,
  reviewList: state.reviewList,
  metaInfo: state.metaInfo
});

export default connect(
  mapStateToProps,
  actions
)(ReviewsList);
