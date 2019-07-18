import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
// import HomeIcon from '@material-ui/icons/Home';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const ShieldIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M387.514 66.486C344.639 23.612 287.634 0 227 0S109.361 23.612 66.486 66.486C23.612 109.361 0 166.366 0 227s23.612 117.639 66.486 160.514C109.361 430.388 166.366 454 227 454s117.639-23.612 160.514-66.486C430.388 344.639 454 287.634 454 227s-23.612-117.639-66.486-160.514zM227 434c-114.141 0-207-92.859-207-207S112.859 20 227 20s207 92.859 207 207-92.859 207-207 207z"/>
    </SvgIcon>
  );
}

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            aria-label="Open drawer">
            <ShieldIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Vibranium
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
