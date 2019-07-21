import React, { useState, useEffect, Fragment } from 'react';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// React Components
import Carousel from './Carousel.jsx';
import StyleList from './StyleList.jsx';

const Product = props => {
  return (
    <Fragment>
      <Grid container direction="row">
        <Grid item md={12} lg={8}>
          <Carousel styles={props.styles} />
        </Grid>
        <Grid item md={12} lg={4} style={{ marginTop: 5 }}>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignContent="space-around">
            <Link href={'#'} color="inherit" variant="body2" underline="always">
              Read All 26 Reviews
            </Link>
            <Typography variant="overline" gutterBottom>
              {props.product.category}
            </Typography>
            <Typography variant="h3" gutterBottom>
              {props.product.name}
            </Typography>
            <StyleList
              product={props.product}
              styles={props.styles}
              id={props.id}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Product;
