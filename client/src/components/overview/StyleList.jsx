import React, { useState, useEffect, Fragment } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
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
  image: {
    position: 'relative',
    width: 100,
    height: 'auto',
    overflow: 'hidden',
  },
  avatar: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    width: 80,
    height: 80,
  },
  progress: {
    margin: theme.spacing(1),
  },
  sale: {
    color: 'red',
    marginLeft: theme.spacing(1),
  },
  checkmark: {
    color: 'green',
    position: 'absolute',
    top: 16,
    right: 13,
  },
}));

const StyleList = props => {
  const classes = useStyles();

  const [currentStyle, setStyle] = useState('Forest Green & Black');
  const [originalPrice, setPrice] = useState('140');
  const [skus, setSkus] = useState({ XS: 8, S: 16, M: 17, L: 10, XL: 15 });
  const [salePrice, setSalePrice] = useState('0');
  const [currPrice, setCurrPrice] = useState('140');
  const [cartImage, setCartImage] = useState(
    'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  );
  const [selected, setSelected] = useState(true);

  const renderPrice = () => {
    if (salePrice !== '0') {
      return (
        <div>
          <Grid container direction="row">
            <Typography variant="subtitle2">
              <strike>{`$${originalPrice}`}</strike>
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.sale}>{`$${salePrice}`}</Typography>
          </Grid>
        </div>
      );
    } else {
      return (
        <Grid container direction="row">
          <Typography variant="subtitle2" gutterBottom>
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

  return (
    <div>
      {renderPrice()}
      <Typography variant="overline" gutterBottom>
        <strong>Style > </strong>
        {currentStyle}
      </Typography>
      <div className={classes.root}>
        <GridList cellHeight={100} cols={4}>
          {props.styles.results ? (
            props.styles.results.map(style => (
              <GridListTile
                key={style.style_id}
                cols={1}
                onClick={() => {
                  setStyle(style.name);
                  setPrice(style.original_price);
                  setSkus(style.skus);
                  setSalePrice(style.sale_price);
                  setCartImage(style.photos[0].thumbnail_url);
                  changeCurrPrice(style.original_price, style.sale_price);
                  setSelected(false);
                }}>
                <Tooltip title={style.name} placement="bottom">
                  <Badge
                    invisible={selected}
                    badgeContent={
                      <CheckCircle className={classes.checkmark} />
                    }>
                    <Avatar
                      alt={style.name}
                      src={style.photos[0].thumbnail_url}
                      className={classes.avatar}
                    />
                  </Badge>
                </Tooltip>
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
          product={props.product}
          style={currentStyle}
          price={currPrice}
          skus={skus}
          cartImage={cartImage}
        />
      </Grid>
    </div>
  );
};

export default StyleList;
