import React, { useState, useEffect, Fragment } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
// React Components
import Selectors from './Selectors.jsx';
import CartButton from './CartButton.jsx';

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
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    width: 80,
    height: 80,
  },
  progress: {
    margin: theme.spacing(1),
  },
}));

const StyleList = props => {
  const classes = useStyles();

  // const [currentStyle, changeStyle] = useState(
  //   props.styles.results ? props.styles.results[0].name : ''
  // );
  const [currentStyle, setStyle] = useState('Forest Green & Black');
  const [originalPrice, setPrice] = useState('140');
  const [skus, setSkus] = useState({ XS: 8, S: 16, M: 17, L: 10, XL: 15 });

  // const [originalPrice, changePrice] = useState(
  //   props.styles.results ? props.styles.results[0].original_price : ''
  // );

  // console.log('currentStyle', currentStyle);

  // useEffect(() => {
  //   if (props.styles.results) {
  //     changeStyle(props.styles.results[0].name);
  //     changePrice(props.styles.results[0].original_price);
  //   }
  // }, []);

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
                  setStyle(style.name);
                  setPrice(style.original_price);
                  setSkus(style.skus);
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
            <GridListTile cols={4}>
              <CircularProgress className={classes.progress} />
            </GridListTile>
          )}
        </GridList>
      </div>
      <Grid item xs={12}>
        <Selectors style={currentStyle} skus={skus} />
        <CartButton />
      </Grid>
    </div>
  );
};

export default StyleList;
