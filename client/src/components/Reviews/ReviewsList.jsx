import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reviews/getData.js';

class ReviewsList extends Component {
  componentDidMount() {
    const { getList, productId, getMeta } = this.props;
    getList(productId, 'relevant');
    getMeta(productId);
  }

  render() {
    return <div>Reviews List</div>;
  }
}

const mapStateToProps = state => ({
  productId: state.productId,
  reviewList: state.reviewList,
  metaInfo: state.metaInfo
});

export default connect(
  mapStateToProps,
  actions
)(ReviewsList);
