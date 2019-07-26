import React, { useState, useEffect, Fragment } from 'react';
// Material UI Components
import { Grid, Typography } from '@material-ui/core';
// React Components
import Carousel from './Carousel.jsx';
import StyleList from './StyleList.jsx';
import StarRating from './StarRating.jsx';

const Product = props => {
  const [styles, setStyles] = useState(props.styles);
  const [currStyleIndex, setCurrStyleIndex] = useState(0);

  useEffect(() => {
    setStyles(props.styles);
  });

  const changeCurrStyle = index => {
    setCurrStyleIndex(index);
  };

  const [imgColumns, setImgColumns] = useState(8);
  const [styleColumns, setStyleColumns] = useState(4);

  const changeGridSize = (img, style) => {
    setImgColumns(img);
    setStyleColumns(style);
  };

  return (
    <Fragment>
      <Grid container direction="row">
        <Grid item sm={12} md={imgColumns}>
          <Carousel
            styles={styles}
            index={currStyleIndex}
            changeSize={changeGridSize}
          />
        </Grid>
        <Grid item sm={12} md={styleColumns} style={{ marginTop: 5 }}>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="stretch">
            <StarRating />
            <Typography variant="h5" gutterBottom>
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
