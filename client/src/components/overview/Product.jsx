import React, { useState, useEffect, Fragment } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
// React Components
import Carousel from './Carousel.jsx';
import StyleList from './StyleList.jsx';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(1),
  },
}));

const Product = props => {
  const classes = useStyles();

  const [styles, setStyles] = useState(props.styles);
  const [currStyleIndex, setCurrStyleIndex] = useState(0);

  useEffect(() => {
    setStyles(props.styles);
  });

  const changeCurrStyle = index => {
    setCurrStyleIndex(index);
  };

  return (
    <Fragment>
      <Grid container direction="row">
        <Grid item md={12} lg={8}>
          <Carousel styles={styles} index={currStyleIndex} />
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
              changeStyle={changeCurrStyle}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Product;
