import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

// React Components
import { getList, getMeta } from '../../actions/Reviews/getData.js';
import { setShown } from '../../actions/Reviews/setShown.js';
import { setLimit } from '../../actions/Reviews/setListLimit.js';
import ReviewsEntry from './ReviewsEntry.jsx';
import ReviewSort from '../Reviews/ReviewSort.jsx';
import ReviewSearch from './ReviewSearch.jsx';

const useStyles = makeStyles(theme => ({
  listContainer: {
    maxHeight: '600px',
    overflowY: 'auto',
  },
  title: {
    display: 'inline-block',
    // fontSize: 16,
    fontWeight: 'bold',
    marginTop: '5px',
    marginRight: '5px',
  },
}));

const ReviewsList = props => {
  const { getList, getMeta, productId, reviews } = props;
  const classes = useStyles();

  //only update when productId changes
  useEffect(() => {
    getList(productId, 'relevant');
    getMeta(productId);
  }, [productId]);

  //if there is a search, filter reviews by checking if content includes search. if there are rating filters, filter the reviews then only render those reviews
  const renderList = () => {
    const { search, filter, listLimit, setShown } = props;
    let searchedList = reviews.results;
    if (search.length > 2) {
      searchedList = reviews.results.filter(review => {
        let bodyContains = review.body
          .toLowerCase()
          .includes(search.toLowerCase());
        let nameContains = review.reviewer_name
          .toLowerCase()
          .includes(search.toLowerCase());
        let summaryContains = review.summary
          .toLowerCase()
          .includes(search.toLowerCase());
        return bodyContains || nameContains || summaryContains;
      });
    }

    let filteredList = searchedList;
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
  };

  //settimeout to make expanded view noticible
  const handleScroll = e => {
    let box = e.target;
    //scrollHeight: total height of scrollable div
    //scrollTop: height scrolled from the top, distance scrolled
    //clientHeight: height that the div
    if (box.scrollHeight - box.scrollTop <= box.clientHeight + 1) {
      setTimeout(() => {
        props.expandView();
      }, 50);
    }
  };

  return reviews.results ? (
    <Fragment>
      <Box>
        <Typography variant="h6" className={classes.title}>
          {reviews.results.length} reviews, sorted by
        </Typography>
        <span className="sortSelect">
          <ReviewSort />
        </span>
      </Box>
      <ReviewSearch />
      <Box onScroll={handleScroll} className={classes.listContainer}>
        {renderList()}
      </Box>
    </Fragment>
  ) : (
    <Box>Loading...
    </Box>
  );
};

const mapStateToProps = state => ({
  productId: state.productId,
  reviews: state.reviewList,
  metaInfo: state.metaInfo,
  filter: state.reviewFilter,
  listLimit: state.listLimit,
  search: state.reviewSearch,
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
  expandView: () => {
    dispatch(setLimit());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ReviewsList);
