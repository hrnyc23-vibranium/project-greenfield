import React, { Fragment, useState, useRef } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// React Components
import CartButton from './CartButton.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  sizeControl: {
    marginTop: theme.spacing(2),
    minWidth: '72%',
  },
  quantControl: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    minWidth: '25%',
  },
}));

const Selectors = props => {
  const classes = useStyles();

  const [currSize, setSize] = useState('');
  const [currQuant, setQuantity] = useState('');
  const [quant, setQuant] = useState(true);
  const [cartQuant, setCartQuant] = useState('');
  const [cartStatus, setCartStatus] = useState(true);

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
    for (let i = 0; i <= quantity; i++) {
      quantArr.push(i);
    }
    return quantArr;
  };

  return (
    <Fragment>
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.sizeControl}>
          <InputLabel htmlFor="outlined-size">Size</InputLabel>
          <Select
            value={currSize}
            onChange={handleChange}
            input={
              <OutlinedInput labelWidth={30} name="size" id="outlined-size" />
            }>
            <MenuItem value={'XS'}>XS</MenuItem>
            <MenuItem value={'S'}>S</MenuItem>
            <MenuItem value={'M'}>M</MenuItem>
            <MenuItem value={'L'}>L</MenuItem>
            <MenuItem value={'XL'}>XL</MenuItem>
          </Select>
        </FormControl>
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
      </form>
      <CartButton
        product={props.product}
        style={props.style}
        size={currSize}
        quantity={cartQuant}
        status={cartStatus}
        price={props.price}
      />
    </Fragment>
  );
};

export default Selectors;
