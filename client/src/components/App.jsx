import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Overview from './overview/Overview.jsx';
import Questions from './QandA/Question_List';
import Reviews from './Reviews/Reviews.jsx';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <h1>Vibranium</h1>
          </div>
          <Route path="/:id" component={ProductDetails} />
          <Overview />
          <Questions />
          <Reviews />
        </div>
      </BrowserRouter>
    );
  }
}
