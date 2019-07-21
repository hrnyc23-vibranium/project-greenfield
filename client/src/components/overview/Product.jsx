import React, { useState, useEffect } from 'react';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// React Components
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import StyleList from './StyleList.jsx';
import Features from './Features.jsx';

const Product = () => {
  const [product, setProduct] = useState();
  const [styles, setStyles] = useState();
  const [id, setId] = useState();

  return (
    <Box>
      <Header />
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="overline" gutterBottom>
          <em>Select Styles on Sale!</em> - Camo Onesie -{' '}
          <strong>30% off</strong> -{' '}
          <Link href={'1'} color="inherit" underline="always">
            Buy Now!
          </Link>
        </Typography>
      </Grid>
      <Grid container direction="row">
        <Grid item md={12} lg={8}>
          <Carousel />
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
              Category
            </Typography>
            <Typography variant="h3" gutterBottom>
              Name
            </Typography>
            <StyleList />
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-between">
        <Features />
      </Grid>
    </Box>
  );
};

export default Product;
