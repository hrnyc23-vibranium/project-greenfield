import React, { Component } from 'react';
import ReviewsList from './ReviewsList.jsx';
import Grid from '@material-ui/core/Grid/';
import Meta from './Meta.jsx';
export default class Reviews extends Component {
  render() {
    return (
      <Grid container>
        <Grid item l={2}>
          <Grid container spacing={10}>
            <Grid item>
              <Meta />
            </Grid>
            <Grid item>
              <ReviewsList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
