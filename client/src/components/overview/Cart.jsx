import React, { Fragment, useState, useEffect, forwardRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    margin: theme.spacing(1),
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
  subtotal: {
    fontWeight: 700,
  },
  checkout: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 0,
    padding: '15px',
    width: '25%',
    borderWidth: 2,
    borderColor: 'rgb(143, 117, 0)',
  },
  product: {
    fontSize: '1.3rem',
    fontWeight: 600,
  },
  details: {
    fontSize: '0.7rem',
    color: '#616161',
  },
  heading: {
    color: 'rgb(143, 117, 0)',
  },
  remove: {
    marginTop: theme.spacing(3),
    padding: 0,
    justifyContent: 'left',
    textDecoration: 'none !important',
  },
}));

const TAX_RATE = 0.07;

const shipping = 5.99;

const CheckoutLink = forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} to="/cart/checkout" />
));

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
      <Grid container direction="row" justify="space-between">
        <Typography variant="h5" gutterBottom className={classes.title}>
          Shopping Cart
        </Typography>
        <Button
          variant="outlined"
          component={CheckoutLink}
          className={classes.checkout}>
          Checkout
        </Button>
      </Grid>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.heading}>PRODUCT</TableCell>
            <TableCell align="center" className={classes.heading}>
              QUANTITY
            </TableCell>
            <TableCell align="right" className={classes.heading}>
              PRICE
            </TableCell>
            <TableCell align="right" className={classes.heading}>
              TOTAL PRICE
            </TableCell>
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
                      <Grid item xs container direction="column" spacing={1}>
                        <Grid item xs>
                          <Typography
                            variant="body1"
                            gutterBottom
                            className={classes.product}>
                            {item.product.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            className={classes.details}>
                            {`SKU#: ${item.product.product_id}`}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            className={classes.details}>
                            {`Style: ${item.style}`}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            className={classes.details}>
                            {`Size: ${item.size}`}
                          </Typography>
                          <Button
                            color="secondary"
                            className={classes.remove}
                            style={{ textDecoration: 'none' }}
                            onClick={props.removeItem(item.id)}>
                            REMOVE
                          </Button>
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
            <TableCell className={classes.subtotal}>Subtotal</TableCell>
            <TableCell />
            <TableCell
              align="right"
              className={classes.subtotal}>{`$${subtotal.toFixed(
              2
            )}`}</TableCell>
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
