import React, { Fragment, useState } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  SvgIcon,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 0,
    padding: '15px',
    marginLeft: theme.spacing(2),
    marginRight: '0 !important',
  },
}));

const FacebookIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 455 455">
      <path
        d="M0 0v455h455V0H0zm301.004 125.217H265.44c-7.044 0-14.153 7.28-14.153 12.696v36.264h49.647c-1.999 27.807-6.103 53.235-6.103 53.235h-43.798V385h-65.266V227.395h-31.771v-53.029h31.771V131.01c0-7.928-1.606-61.009 66.872-61.009h48.366v55.216z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </SvgIcon>
  );
};

const InstagramIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 455 455">
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path d="M336.351 106.363h-35.83c-6.986.051-12.346 5.157-12.396 12.104-.051 12.155-.051 24.259 0 36.414.051 6.897 5.411 12.066 12.307 12.066h35.817c7.189 0 12.447-5.22 12.447-12.409.051-11.914.051-23.865 0-35.767 0-7.149-5.258-12.356-12.345-12.408zM227.591 288.104c33.493-.051 60.534-27.143 60.534-60.635-.051-33.493-27.142-60.521-60.635-60.521-33.378 0-60.47 27.129-60.521 60.47-.051 33.543 27.091 60.686 60.622 60.686z" />
        <path d="M318.239 261.698c-7.24 19.102-19.344 34.433-36.173 45.952-30.355 20.729-70.046 22.469-101.951 4.458-16.131-9.132-28.781-21.782-37.608-38.104-12.104-22.329-14.886-45.939-8.777-70.592h-27.345v132.51c0 7.595 5.169 12.752 12.752 12.752 4.864.051 9.678 0 14.543 0h201.87c8.192 0 13.146-5.004 13.146-13.197V203.361h-27.383c5.017 19.839 4.114 39.285-3.074 58.337z" />
        <path d="M0 0v455h455V0H0zm384.97 105.919V349.17c0 17.909-13.844 33.493-31.651 35.576-1.397.152-2.781.254-4.166.254H105.89c-17.604 0-33.087-13.552-35.423-30.966-.292-2.032-.445-4.115-.445-6.147V106.96c0-18.162 12.155-32.947 30.012-36.363 2.134-.406 4.37-.546 6.554-.546C187.253 70 267.879 70 348.505 70c18.9 0 34.433 14.035 36.363 32.795.153 1.041.102 2.082.102 3.124z" />
      </g>
    </SvgIcon>
  );
};

const PinterestIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 455 455">
      <path
        d="M0 0v455h455V0H0zm251.83 297.635c-19.57 0-37.973-10.516-44.227-22.557 0 0-10.516 41.691-12.71 49.78-7.84 28.437-30.926 56.874-32.684 59.176-1.229 1.649-4.013 1.105-4.324-1.026-.482-3.656-6.379-39.497.545-68.728 3.469-14.701 23.272-98.627 23.272-98.627s-5.771-11.543-5.771-28.624c0-26.85 15.556-46.856 34.939-46.856 16.474 0 24.377 12.337 24.377 27.177 0 16.521-10.516 41.318-15.977 64.216-4.511 19.212 9.598 34.831 28.546 34.831 34.332 0 57.371-43.993 57.371-96.138 0-39.684-26.678-69.397-75.292-69.397-54.867 0-89.075 40.96-89.075 86.649 0 15.805 4.667 26.928 11.963 35.499 3.345 4.014 3.765 5.585 2.613 10.143-.917 3.344-2.862 11.309-3.765 14.529-1.151 4.559-4.931 6.191-9.053 4.496-25.217-10.329-37.009-37.989-37.009-69.164C105.569 131.619 148.832 70 234.874 70c69.101 0 114.557 50.013 114.557 103.667 0 70.968-39.436 123.968-97.601 123.968z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </SvgIcon>
  );
};

const TwitterIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 455 455">
      <path
        d="M0 0v455h455V0H0zm352.751 163.259c.123 2.773.186 5.561.186 8.36 0 85.403-65.002 183.876-183.873 183.876-36.496 0-70.466-10.697-99.065-29.037 5.056.601 10.199.907 15.417.907 30.278 0 58.143-10.331 80.262-27.668-28.28-.519-52.148-19.204-60.373-44.88 3.948.757 7.997 1.163 12.161 1.163 5.894 0 11.604-.794 17.027-2.268-29.563-5.939-51.841-32.057-51.841-63.368 0-.273 0-.544.006-.814 8.712 4.84 18.676 7.748 29.271 8.084-17.342-11.589-28.748-31.371-28.748-53.79 0-11.845 3.187-22.945 8.751-32.492 31.873 39.101 79.493 64.828 133.203 67.526-1.103-4.732-1.677-9.665-1.677-14.729 0-35.688 28.938-64.623 64.626-64.623 18.589 0 35.385 7.847 47.173 20.406 14.719-2.895 28.551-8.276 41.038-15.681-4.824 15.092-15.071 27.754-28.415 35.754 13.074-1.563 25.528-5.038 37.118-10.178-8.662 12.959-19.618 24.342-32.247 33.452z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </SvgIcon>
  );
};

const ListItemLink = props => {
  return <ListItem button component="a" {...props} />;
};

const ShareButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'share-popover' : undefined;

  return (
    <Fragment>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleOpen}>
        <ShareIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <List>
          <ListItemLink href="http://www.facebook.com" target="_blank">
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItemLink>
          <ListItemLink href="http://www.instagram.com" target="_blank">
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItemLink>
          <ListItemLink href="http://www.pinterest.com" target="_blank">
            <ListItemIcon>
              <PinterestIcon />
            </ListItemIcon>
            <ListItemText primary="Pinterest" />
          </ListItemLink>
          <ListItemLink href="http://www.twitter.com" target="_blank">
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItemLink>
        </List>
      </Popover>
    </Fragment>
  );
};

export default ShareButton;
