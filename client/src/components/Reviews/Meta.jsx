import React, { Component } from 'react';

//components
import RatingFilter from './RatingFilter.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
class Meta extends Component {
  render() {
    return (
      <div>
        <RatingFilter />
        <ProductBreakdown />
      </div>
    );
  }
}

export default Meta;
