import React, { Fragment, useState, useRef } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from '@material-ui/core';
// React Components
import CartButton from './CartButton.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  sizeControl: {
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },
  quantControl: {
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },
}));

const Selectors = props => {
  const classes = useStyles();

  const [currSize, setSize] = useState('-');
  const [currQuant, setQuantity] = useState();
  const [quant, setQuant] = useState(true);
  const [cartQuant, setCartQuant] = useState(1);

  const handleChange = event => {
    setSize(event.target.value);
    setQuantity(props.skus[event.target.value]);
    setQuant(false);
  };

  const handleQuantChange = event => {
    setCartQuant(event.target.value);
    setCartStatus(false);
  };

  const renderItem = quantity => {
    let quantArr = [];
    if (quantity > 15) {
      quantity = 15;
    }
    for (let i = 1; i <= quantity; i++) {
      quantArr.push(i);
    }
    return quantArr;
  };

  return (
    <Fragment>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={12} md={12} lg={8}>
          <FormControl variant="outlined" className={classes.sizeControl}>
            <InputLabel htmlFor="outlined-size">Size</InputLabel>
            <Select
              value={currSize}
              onChange={handleChange}
              input={
                <OutlinedInput labelWidth={30} name="size" id="outlined-size" />
              }>
              {props.skus
                ? Object.keys(props.skus).map(size => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))
                : ''}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <FormControl
            variant="outlined"
            className={classes.quantControl}
            disabled={quant}>
            <InputLabel htmlFor="outlined-quant">Quantity</InputLabel>
            <Select
              value={cartQuant}
              onChange={handleQuantChange}
              input={
                <OutlinedInput
                  labelWidth={60}
                  name="quantity"
                  id="outlined-quant"
                />
              }>
              {renderItem(currQuant).map(number => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <CartButton
        product={props.product}
        style={props.style}
        size={currSize}
        quantity={cartQuant}
        status={quant}
        price={props.price}
        image={props.cartImage}
      />
    </Fragment>
  );
};

export default Selectors;
