import React, { Fragment } from 'react';
import Overview from './overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';

const ProductDetails = ({ match }) => {
  return (
    <Fragment>
      <Overview />
      <Reviews />
    </Fragment>
  );
};

export default ProductDetails;
