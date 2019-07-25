import React, { useState, Fragment } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Badge, SvgIcon, Popover } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  badge: {
    margin: theme.spacing(2),
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

const CartPopover = props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <div>This is the cart</div>
      </Popover>
    </Fragment>
  );
};

export default CartPopover;
