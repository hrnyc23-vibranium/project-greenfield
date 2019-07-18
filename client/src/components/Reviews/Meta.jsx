import React, { Component } from 'react';

//components
import RatingFilter from './RatingFilter.jsx';
class Meta extends Component {
  render() {
    return (
      <div>
        <RatingFilter />
        <div>Rating Breakdown</div>
      </div>
    );
  }
}

export default Meta;
