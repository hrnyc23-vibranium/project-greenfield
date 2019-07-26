import React, { Fragment, useState, useEffect } from 'react';
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

const TAX_RATE = 0.07;

const shipping = 5.99;

const Cart = props => {
  const classes = useStyles();

  const [itemTotal, setItemTotal] = useState();

  const getItemTotal = () => {
    let total = 0;

    if (props.cart.cart) {
      props.cart.cart.forEach(item => {
        total += item.quantity * item.price;
      });
    }
    setItemTotal(total);
  };

  useEffect(() => {
    getItemTotal();
  });

  const taxes = TAX_RATE * itemTotal;

  const subtotal = itemTotal + taxes + shipping;

  return (
    <Fragment>
      <Typography variant="h5" gutterBottom className={classes.title}>
        Shopping Cart
      </Typography>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Price</TableCell>
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
                <TableCell align="center">
                  <Typography variant="body2">{item.quantity}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">{`$${item.price}`}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">{`$${item.quantity *
                    item.price}`}</Typography>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <CircularProgress className={classes.progress} />
          )}
          <TableRow>
            <TableCell rowSpan={4} />
            <TableCell colSpan={2}>Item Total</TableCell>
            <TableCell align="right">{`$${itemTotal}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{`$${taxes.toFixed(2)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shipping</TableCell>
            <TableCell />
            <TableCell align="right">{`$${shipping}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Subtotal</TableCell>
            <TableCell />
            <TableCell align="right">{`$${subtotal.toFixed(2)}`}</TableCell>
          </TableRow>
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
