import React from 'react';

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

const ReviewsEntry = ({ review }) => {
  return (
    <React.Fragment>
      <span>Stars</span>
      <span>
        {review.reviewer_name}, {review.date}
      </span>
      <h5>{review.reviewer_name}</h5>
      <p>{review.body}</p>
      {review.recommend ? <span>I recommend this product</span> : ''}
      {renderPhotos(review.photos)}
      <span>
        <span>Helpful?</span>
        <button>Yes({review.helpfulness})</button>
        <button>Report</button>
      </span>
      <br />
    </React.Fragment>
  );
};

export default ReviewsEntry;
