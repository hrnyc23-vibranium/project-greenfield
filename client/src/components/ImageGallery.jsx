//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { buildGallery } from '../actions/galleryActions';

//React Componenets
import Gallery from './GalleryModal';

//Material Components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Container, Modal } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  gridList: {
    'max-width': '650px',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  box: {
    padding: '10px 0',
  },
  input: {
    display: 'none',
  },
  paper: {
    position: 'absolute',
    width: 800,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none',
  },
}));

const ImageGallery = ({ photos, launchGallery }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  return (
    <Box className={classes.box}>
      <GridList
        className={classes.gridList}
        cellHeight={60}
        spacing={15}
        cols={6}
      >
        {photos.map((tile, index) => (
          <GridListTile key={tile.id} cols={1}>
            <img
              src={tile.url}
              alt={tile.url}
              onClick={e => {
                launchGallery(photos, index);
                handleOpen();
              }}
            />
          </GridListTile>
        ))}
      </GridList>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Gallery />
        </div>
      </Modal>
    </Box>
  );
};

//export default AnswerImages;

const mapDispatchToProps = dispatch => {
  return {
    launchGallery: (images, current) => {
      dispatch(buildGallery({ images, current }));
    },
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ImageGallery);
