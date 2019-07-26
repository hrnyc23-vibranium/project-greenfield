import React, { useState, useEffect, forwardRef } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/overview/setCart.js';
// Material UI Components
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  IconButton,
  SvgIcon,
  InputBase,
  Divider,
} from '@material-ui/core';
// React Components
import CartPopover from './CartPopover.jsx';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    background: '#000042',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuItems: {
    marginLeft: theme.spacing(1.5),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const ShieldIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 454 454">
      <path d="M387.514 66.486C344.639 23.612 287.634 0 227 0S109.361 23.612 66.486 66.486C23.612 109.361 0 166.366 0 227s23.612 117.639 66.486 160.514C109.361 430.388 166.366 454 227 454s117.639-23.612 160.514-66.486C430.388 344.639 454 287.634 454 227s-23.612-117.639-66.486-160.514zM227 434c-114.141 0-207-92.859-207-207S112.859 20 227 20s207 92.859 207 207-92.859 207-207 207z" />
      <path d="M227 50.677c-97.225 0-176.323 79.099-176.323 176.323S129.775 403.323 227 403.323 403.323 324.225 403.323 227 324.225 50.677 227 50.677zm0 332.646c-86.197 0-156.323-70.126-156.323-156.323S140.803 70.677 227 70.677 383.323 140.803 383.323 227 313.197 383.323 227 383.323z" />
      <path d="M227 101.354c-69.281 0-125.646 56.365-125.646 125.646 0 41.358 20.09 78.108 51.019 101.018.247.221.503.434.775.632.262.19.533.362.809.524 20.598 14.768 45.823 23.473 73.044 23.473 27.221 0 52.445-8.705 73.043-23.472.275-.162.547-.334.81-.525.272-.198.528-.411.775-.632 30.929-22.909 51.019-59.66 51.019-101.018-.002-69.281-56.367-125.646-125.648-125.646zm95.225 79.91H260.23l-19.161-58.971c35.821 4.788 66.022 27.589 81.156 58.971zM259.5 243.74l16.453 50.639-43.075-31.296c-1.753-1.273-3.815-1.91-5.878-1.91s-4.125.637-5.878 1.91l-43.075 31.296L194.5 243.74c1.339-4.12-.128-8.634-3.633-11.18l-43.076-31.297h53.245c4.332 0 8.172-2.79 9.511-6.91L227 143.715l16.453 50.639c1.339 4.12 5.179 6.91 9.511 6.91h53.245l-43.076 31.297c-3.505 2.545-4.972 7.059-3.633 11.179zm-46.569-121.448l-19.161 58.971h-61.995c15.134-31.381 45.335-54.182 81.156-58.971zM121.354 227c0-6.478.589-12.82 1.711-18.979l50.169 36.449-19.143 58.917c-20.16-19.251-32.737-46.378-32.737-76.387zm55.5 92.967L227 283.533l50.146 36.434c-14.928 8.084-32.01 12.68-50.146 12.68s-35.218-4.596-50.146-12.68zm123.055-16.581l-19.143-58.917 50.169-36.449c1.122 6.159 1.711 12.501 1.711 18.979 0 30.01-12.577 57.137-32.737 76.387z" />
    </SvgIcon>
  );
};

const HomeLink = forwardRef((props, ref) => (
  <Link
    innerRef={ref}
    to="/shop/1"
    style={{ textDecoration: 'none', color: 'white' }}
    {...props}
  />
));

const Header = props => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.getCart();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const ListItemLink = props => {
    return <ListItem button component="a" {...props} />;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" aria-label="nav-bar" className={classes.navbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            onClick={handleDrawerOpen}>
            <ShieldIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h4"
            noWrap
            style={{ fontFamily: 'Cinzel', fontWeight: 700 }}>
            <HomeLink>Vibranium</HomeLink>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <CartPopover cart={props.cart} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListSubheader>Jackets</ListSubheader>
          <ListItemLink href={'/shop/1'}>
            <ListItemText className={classes.menuItems} primary="Camo Onesie" />
          </ListItemLink>
          <ListSubheader>Pants</ListSubheader>
          <ListItemLink href={'/shop/3'}>
            <ListItemText
              className={classes.menuItems}
              primary="Morning Joggers"
            />
          </ListItemLink>
          <ListItemLink href={'/shop/4'}>
            <ListItemText
              className={classes.menuItems}
              primary="Slacker's Slacks"
            />
          </ListItemLink>
          <ListSubheader>Shoes</ListSubheader>
          <ListItemLink href={'/shop/5'}>
            <ListItemText
              className={classes.menuItems}
              primary="Heir Force Ones"
            />
          </ListItemLink>
          <ListItemLink href={'/shop/6'}>
            <ListItemText
              className={classes.menuItems}
              primary="Pumped Up Kicks"
            />
          </ListItemLink>
          <ListItemLink href={'/shop/7'}>
            <ListItemText
              className={classes.menuItems}
              primary="Blues Suede Shoes"
            />
          </ListItemLink>
          <ListItemLink href={'/shop/8'}>
            <ListItemText className={classes.menuItems} primary="YEasy 350" />
          </ListItemLink>
          <ListItemLink href={'/shop/9'}>
            <ListItemText
              className={classes.menuItems}
              primary="Summer Shoes"
            />
          </ListItemLink>
          <ListSubheader>Accessories</ListSubheader>
          <ListItemLink href={'/shop/2'}>
            <ListItemText
              className={classes.menuItems}
              primary="Bright Future Sunglasses"
            />
          </ListItemLink>
          <ListItemLink href={'/shop/10'}>
            <ListItemText
              className={classes.menuItems}
              primary="Infinity Stone"
            />
          </ListItemLink>
        </List>
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  actions
)(Header);
