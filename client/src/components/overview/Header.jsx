import React from 'react';
// Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// React Components
import SideNav from './SideNav.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    background: '#000042',
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

const CartIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 300.005 300.005">
      <path d="M182.936 76.966h-.002c0-18.516-15.066-33.58-33.58-33.58-18.516 0-33.58 15.064-33.58 33.58v11.671h67.162V76.966zM206.585 104.199h-8.09v10.911c2.498 2.179 4.113 5.351 4.113 8.93 0 6.57-5.325 11.897-11.894 11.897-6.564 0-11.894-5.327-11.894-11.897 0-3.577 1.611-6.749 4.113-8.927v-10.914h-67.162v10.911c2.5 2.181 4.113 5.351 4.113 8.93 0 6.57-5.327 11.897-11.894 11.897-6.57 0-11.894-5.327-11.894-11.897 0-3.577 1.613-6.751 4.113-8.93v-10.911h-8.09c-4.573 0-8.292 3.719-8.292 8.292v111.168c0 4.573 3.719 8.292 8.292 8.292h114.465c4.57 0 8.292-3.722 8.292-8.292V112.491c.001-4.573-3.721-8.292-8.291-8.292z" />
      <path d="M150 0C67.159 0 .002 67.162.002 150S67.159 300.005 150 300.005 300.003 232.841 300.003 150 232.841 0 150 0zm80.439 223.659c0 13.152-10.704 23.854-23.854 23.854H92.121c-13.152 0-23.854-10.701-23.854-23.854V112.491c0-13.152 10.701-23.854 23.854-23.854h8.09V76.966c0-27.098 22.046-49.142 49.142-49.142s49.142 22.046 49.142 49.142v11.671h8.09c13.15 0 23.854 10.701 23.854 23.854v111.168z" />
    </SvgIcon>
  );
};

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <SideNav />
          <Typography className={classes.title} variant="h6" noWrap>
            Vibranium
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
          <IconButton color="inherit">
            <CartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
