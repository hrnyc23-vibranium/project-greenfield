import React, { useState, useEffect, Fragment } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  GridList,
  GridListTile,
  CircularProgress,
  Avatar,
  Tooltip,
  Typography,
  Box,
} from '@material-ui/core';
import CheckCircle from '@material-ui/icons/CheckCircle';
// React Components
import Selectors from './Selectors.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  avatar: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    width: 80,
    height: 80,
    cursor: 'pointer',
  },
  progress: {
    margin: theme.spacing(1),
  },
  sale: {
    color: theme.palette.error.dark,
    marginLeft: theme.spacing(1),
  },
  checkmark: {
    color: 'rgb(143, 117, 0)',
    position: 'absolute',
    top: '1%',
    left: '45%',
    zIndex: 5,
  },
}));

const StyleList = ({ styles, product, changeStyle }) => {
  const classes = useStyles();

  const [currentStyle, setStyle] = useState();
  const [originalPrice, setPrice] = useState('');
  const [skus, setSkus] = useState();
  const [salePrice, setSalePrice] = useState('');
  const [currPrice, setCurrPrice] = useState('');
  const [cartImage, setCartImage] = useState();

  useEffect(() => {
    if (!currentStyle && styles.results) {
      let init = styles.results[0];
      setStyle(init.name);
      setPrice(init.original_price);
      setSkus(init.skus);
      setSalePrice(init.sale_price);
      setCurrPrice(init.original_price);
      setCartImage(init.photos[0].thumbnail_url);
      changeCols();
    }
  });

  const renderPrice = () => {
    if (salePrice !== '0') {
      return (
        <div>
          <Grid container direction="row">
            <Typography variant="h6" className={classes.price}>
              <strike>{`$${originalPrice}`}</strike>
            </Typography>
            <Typography
              variant="h6"
              className={classes.sale}>{`$${salePrice}`}</Typography>
          </Grid>
        </div>
      );
    } else {
      return (
        <Grid container direction="row">
          <Typography variant="h6" gutterBottom>
            {`$${originalPrice}`}
          </Typography>
        </Grid>
      );
    }
  };

  const changeCurrPrice = (price, sale) => {
    if (sale === '0') {
      setCurrPrice(price);
    } else {
      setCurrPrice(sale);
    }
  };

  const [col, setCol] = useState(1);

  const changeCols = () => {
    if (styles.results) {
      switch (styles.results.length) {
        case 1:
          return setCol(4);
        case 2:
          return setCol(2);
        case 3:
          return setCol(1.3);
        default:
          return;
      }
    }
  };

  return (
    <Fragment>
      {renderPrice()}
      <Typography variant="overline" gutterBottom>
        <strong>Style > </strong>
        {currentStyle}
      </Typography>
      <div className={classes.root}>
        <GridList cellHeight={100} cols={4}>
          {styles.results ? (
            styles.results.map((style, i) => (
              <GridListTile
                key={style.style_id}
                cols={col}
                onClick={() => {
                  setStyle(style.name);
                  setPrice(style.original_price);
                  setSkus(style.skus);
                  setSalePrice(style.sale_price);
                  setCartImage(style.photos[0].thumbnail_url);
                  changeCurrPrice(style.original_price, style.sale_price);
                  changeStyle(i);
                }}>
                <Tooltip title={style.name} placement="bottom">
                  <Avatar
                    alt={style.name}
                    src={style.photos[0].thumbnail_url}
                    className={classes.avatar}
                  />
                </Tooltip>
                <Box display={currentStyle === style.name ? 'inline' : 'none'}>
                  <CheckCircle className={classes.checkmark} />
                </Box>
              </GridListTile>
            ))
          ) : (
            <GridListTile cols={4}>
              <CircularProgress className={classes.progress} />
            </GridListTile>
          )}
        </GridList>
      </div>
      <Grid item xs={12}>
        <Selectors
          product={product}
          style={currentStyle}
          price={currPrice}
          skus={skus}
          cartImage={cartImage}
        />
      </Grid>
    </Fragment>
  );
};

export default StyleList;
