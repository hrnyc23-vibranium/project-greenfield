import React, { Component } from 'react';
import ReviewsList from './ReviewsList.jsx';
export default class Reviews extends Component {
  render() {
    return (
      <div>
        Review
        <ReviewsList />
      </div>
    );
  }
}
