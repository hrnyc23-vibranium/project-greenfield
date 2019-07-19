import React, { useState, useEffect } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  image: {
    position: 'relative',
    width: 100,
    height: 'auto',
    overflow: 'hidden',
  },
  avatar: {
    margin: 10,
    width: 80,
    height: 80,
  },
  progress: {
    position: 'relative',
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
}));

const StyleList = props => {
  const classes = useStyles();

  const [currentStyle, changeStyle] = useState('Forest Green & Black');
  const [originalPrice, changePrice] = useState('140');

  return (
    <div>
      <Typography
        variant="subtitle2"
        gutterBottom>{`$${originalPrice}`}</Typography>
      <Typography variant="overline" gutterBottom>
        <strong>Style > </strong>
        {currentStyle}
      </Typography>
      <div className={classes.root}>
        <GridList cellHeight={100} cols={4}>
          {props.styles.results ? (
            props.styles.results.map(style => (
              <GridListTile
                key={style.style_id}
                cols={1}
                onClick={() => {
                  changeStyle(style.name);
                  changePrice(style.original_price);
                }}>
                <Tooltip title={style.name} placement="bottom">
                  <Avatar
                    alt={style.name}
                    src={style.photos[0].thumbnail_url}
                    className={classes.avatar}
                  />
                </Tooltip>
              </GridListTile>
            ))
          ) : (
            <CircularProgress className={classes.progress} />
          )}
        </GridList>
      </div>
    </div>
  );
};

export default StyleList;
