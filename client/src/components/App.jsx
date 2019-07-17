import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ReviewList from './Reviews/ReviewsList.jsx';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <h1>Vibranium</h1>
          </div>
          <Route path="/:id" component={ProductDetails} />
          <ReviewList />
        </div>
      </BrowserRouter>
    );
  }
}
