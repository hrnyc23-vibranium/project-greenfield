import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Typography,
  Box,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cartImage: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  progress: {
    margin: theme.spacing(1),
  },
}));

const Cart = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container direction="row">
        <Grid item>
          {props.cart ? (
            props.cart.cart.map(item => (
              <Grid container spacing={2}>
                <Grid item>
                  <Box className={classes.cartImage}>
                    <img
                      className={classes.img}
                      alt={item.style}
                      src={item.image}
                    />
                  </Box>
                </Grid>
              </Grid>
            ))
          ) : (
            <CircularProgress className={classes.progress} />
          )}
        </Grid>
      </Grid>
      <div>My Shopping Bag</div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect()(Cart);
