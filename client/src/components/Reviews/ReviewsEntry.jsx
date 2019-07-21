import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/Reviews/updateHelpful.js';
import Ratings from '../Ratings.jsx';

const ReviewsEntry = ({ review, updateHelpful }) => {
  const renderPhotos = photos => {
    if (photos.length > 0) {
      return (
        <div>
          {photos.map(photo => {
            return (
              <img
                key={photo.id}
                src={photo.url}
                style={{ width: '150px', height: 'auto' }}
              />
            );
          })}
        </div>
      );
    }
  };

  const renderResponse = response => {
    return response ? (
      <span>
        Response: <br /> {response}
      </span>
    ) : (
      ''
    );
  };

  const handleHelpful = reviewId => {
    updateHelpful(reviewId);
  };

  return (
    <div style={{ borderBottom: '2px solid black' }}>
      <Ratings rating={review.rating} />
      <span>
        {review.reviewer_name}, {review.date}
      </span>
      <h5>{review.reviewer_name}</h5>
      <p>{review.body}</p>
      {review.recommend ? <span>I recommend this product</span> : ''}
      {renderResponse(review.response)}
      <br />
      {renderPhotos(review.photos)}
      <span>
        <span>Helpful?</span>
        <button onClick={handleHelpful.bind(this, review.review_id)}>
          Yes({review.helpfulness})
        </button>
        <button>Report</button>
      </span>
      <br />
    </div>
  );
};

export default connect(
  null,
  actions
)(ReviewsEntry);
