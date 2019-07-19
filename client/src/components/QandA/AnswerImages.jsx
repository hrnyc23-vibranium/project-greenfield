//Dev Dependencies
import React from 'react';

//Material Components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  gridList: {
    'max-width': '650px',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  box: {
    padding: '10px 0',
  },
}));

const AnswerImages = ({ photos }) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <GridList
        className={classes.gridList}
        cellHeight={60}
        spacing={15}
        cols={6}>
        {photos.map(tile => (
          <GridListTile key={tile.id} cols={1}>
            <img src={tile.url} alt={tile.url} />
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
};

export default AnswerImages;
