import React, { Fragment } from 'react';
import Overview from './overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';

const ProductDetails = ({ match }) => {
  return (
    <Fragment>
      <h3>ID: {match.params.id}</h3>
      <Overview />
      <Reviews />
    </Fragment>
  );
};

export default ProductDetails;
