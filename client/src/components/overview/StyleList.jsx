import React from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

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

  return (
    <div>
      <div className={classes.root}>
        <GridList cellHeight={100} cols={4}>
          {props.styles.results ? (
            props.styles.results.map(style => (
              <GridListTile key={style.style_id} cols={1}>
                <Avatar
                  alt={style.name}
                  src={style.photos[0].thumbnail_url}
                  className={classes.avatar}
                />
                {/* <Box className={classes.image}>
                  <img src={style.photos[0].thumbnail_url} />
                </Box> */}
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
