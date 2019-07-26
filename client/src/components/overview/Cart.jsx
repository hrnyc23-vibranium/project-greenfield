import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/overview/setCart.js';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Typography,
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(2),
    fontWeight: 700,
  },
  cartImage: {
    width: 128,
    height: 128,
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
  table: {
    width: '100%',
  },
}));

const Cart = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h5" gutterBottom className={classes.title}>
        Shopping Cart
      </Typography>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cart.cart ? (
            props.cart.cart.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
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
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography variant="body1" gutterBottom>
                            {item.product.name}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {`SKU#: ${item.product.product_id}`}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {`Style: ${item.style}`}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {`Size: ${item.size}`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography variant="body2">{item.quantity}</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{`$${item.price}`}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{`$${item.price}`}</Typography>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <CircularProgress className={classes.progress} />
          )}
        </TableBody>
      </Table>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  actions
)(Cart);
