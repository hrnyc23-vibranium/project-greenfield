import React, { useState, Fragment, forwardRef } from 'react';
import { Link } from 'react-router-dom';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Badge,
  SvgIcon,
  Popover,
  Paper,
  Typography,
  Grid,
  Box,
  ButtonGroup,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  badge: {
    margin: theme.spacing(2),
  },
  cart: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
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
  buttonGroup: {
    marginTop: theme.spacing(2),
  },
  backButton: {
    borderRadius: 0,
    padding: '15px',
  },
  checkout: {
    borderRadius: 0,
    padding: '15px',
  },
}));

const CartIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 300.005 300.005">
      <path d="M182.936 76.966h-.002c0-18.516-15.066-33.58-33.58-33.58-18.516 0-33.58 15.064-33.58 33.58v11.671h67.162V76.966zM206.585 104.199h-8.09v10.911c2.498 2.179 4.113 5.351 4.113 8.93 0 6.57-5.325 11.897-11.894 11.897-6.564 0-11.894-5.327-11.894-11.897 0-3.577 1.611-6.749 4.113-8.927v-10.914h-67.162v10.911c2.5 2.181 4.113 5.351 4.113 8.93 0 6.57-5.327 11.897-11.894 11.897-6.57 0-11.894-5.327-11.894-11.897 0-3.577 1.613-6.751 4.113-8.93v-10.911h-8.09c-4.573 0-8.292 3.719-8.292 8.292v111.168c0 4.573 3.719 8.292 8.292 8.292h114.465c4.57 0 8.292-3.722 8.292-8.292V112.491c.001-4.573-3.721-8.292-8.291-8.292z" />
      <path d="M150 0C67.159 0 .002 67.162.002 150S67.159 300.005 150 300.005 300.003 232.841 300.003 150 232.841 0 150 0zm80.439 223.659c0 13.152-10.704 23.854-23.854 23.854H92.121c-13.152 0-23.854-10.701-23.854-23.854V112.491c0-13.152 10.701-23.854 23.854-23.854h8.09V76.966c0-27.098 22.046-49.142 49.142-49.142s49.142 22.046 49.142 49.142v11.671h8.09c13.15 0 23.854 10.701 23.854 23.854v111.168z" />
    </SvgIcon>
  );
};

const CheckoutLink = forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} to="/cart" />
));

const CartPopover = props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getTotalPrice = () => {
    if (props.cart.cart) {
      let sum = 0;
      props.cart.cart.forEach(item => {
        sum += parseInt(item.price, 10) * item.quantity;
      });
      return <Typography variant="h6">{`$${sum}`}</Typography>;
    }
  };

  const getTotalItems = () => {
    if (props.cart.cart) {
      let total = 0;

      props.cart.cart.forEach(item => {
        total += item.quantity;
      });

      if (total === 1) {
        return <Typography variant="h6">{`Total: 1 item`}</Typography>;
      } else {
        return <Typography variant="h6">{`Total: ${total} items`}</Typography>;
      }
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'cart-popover' : undefined;

  return (
    <Fragment>
      <IconButton
        color="inherit"
        aria-owns={open ? 'cart-popover' : undefined}
        aria-haspopup={true}
        onClick={handleOpen}>
        <Badge
          className={classes.badge}
          badgeContent={props.cart.cart ? props.cart.cart.length : ''}
          color="secondary">
          <CartIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        {props.cart.cart
          ? props.cart.cart.map(item => (
              <Paper className={classes.cart} key={item.id}>
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
                        <Typography variant="subtitle1" gutterBottom>
                          {item.product.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>{`Style: ${
                          item.style
                        }`}</Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom>{`Size: ${item.size}`}</Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom>{`Quantity: ${
                          item.quantity
                        }`}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">{`Price: $${
                        item.price
                      }`}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))
          : ''}
        <Paper className={classes.cart}>
          <Grid container direction="row" justify="space-between">
            <Grid item>{getTotalItems()}</Grid>
            <Grid item>{getTotalPrice()}</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <ButtonGroup fullWidth className={classes.buttonGroup}>
                <Button
                  variant="outlined"
                  className={classes.backButton}
                  onClick={handleClose}>
                  Back
                </Button>
                <Button
                  variant="outlined"
                  className={classes.checkout}
                  component={CheckoutLink}
                  onClick={handleClose}>
                  Checkout
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Paper>
      </Popover>
    </Fragment>
  );
};

export default CartPopover;
