import React from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

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
  progress: {},
}));

const StyleList = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={100} cols={4} spacing={10}>
        {props.styles.results ? (
          props.styles.results.map(style => (
            <GridListTile key={style.style_id} cols={1}>
              <Box className={classes.image}>
                <img src={style.photos[0].thumbnail_url} />
              </Box>
            </GridListTile>
          ))
        ) : (
          <CircularProgress />
        )}
      </GridList>
    </div>
  );
};

export default StyleList;
