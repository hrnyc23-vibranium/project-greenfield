import React, { useState } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import UpArrow from '@material-ui/icons/ExpandLess';
import DownArrow from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  thumbnailSlider: {
    position: 'relative',
    margin: '0 auto',
    width: 100,
    height: 330,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  thumbnailSliderWrapper: {
    position: 'relative',
    width: '100%',
    height: '10%',
  },
  thumbnail: {
    display: 'block',
    height: '200%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  arrow: {
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing(3),
  },
  progress: {
    margin: theme.spacing(1),
  },
}));

const Thumbnails = props => {
  const classes = useStyles();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [translateValue, setTranslateValue] = useState(0);

  const goToPreviousThumbnail = () => {
    if (currentIndex === 0) {
      return;
    }

    setCurrentIndex(Math.max(currentIndex - 2, 0));
    setTranslateValue(translateValue + 108);
  };

  const goToNextThumbnail = () => {
    if (props.thumbnails) {
      if (currentIndex === props.thumbnails.length - 1) {
        return setCurrentIndex(0), setTranslateValue(0);
      }
    }

    setCurrentIndex(Math.min(currentIndex + 2, 5));
    setTranslateValue(translateValue + -108);
  };
  console.log('currentIndex', currentIndex);

  return (
    <div>
      <IconButton
        className={classes.arrow}
        onClick={goToPreviousThumbnail}
        disabled={currentIndex === 0 ? true : false}>
        <UpArrow />
      </IconButton>
      <Box className={classes.thumbnailSlider}>
        <Box
          className={classes.thumbnailSliderWrapper}
          style={{
            transform: `translateY(${translateValue}px)`,
            transition: 'transform ease-out 0.5s',
          }}>
          {props.thumbnails ? (
            props.thumbnails.map((thumbnail, i) => (
              <div
                className={classes.thumbnail}
                key={i}
                style={{
                  backgroundImage: `url(${thumbnail.thumbnail_url})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% top',
                  height: '100px',
                }}
              />
            ))
          ) : (
            <CircularProgress className={classes.progress} />
          )}
        </Box>
      </Box>
      <IconButton className={classes.arrow} onClick={goToNextThumbnail}>
        <DownArrow />
      </IconButton>
    </div>
  );
};

export default Thumbnails;
