import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Material UI Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// React Components
import ProductDetails from './ProductDetails.jsx';
import Overview from './overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        <Container maxWidth={false}>
          <Route path="/:id" component={ProductDetails} />
          <Overview />
          <Reviews />
        </Container>
      </BrowserRouter>
    );
  }
}
