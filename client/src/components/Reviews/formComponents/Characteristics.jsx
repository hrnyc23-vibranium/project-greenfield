import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { makeStyles } from '@material-ui/core/styles';

const descriptions = {
  Fit: [
    'A size too small',
    '1/2 a size too small',
    'Perfect',
    '1/2 a size too big',
    'A size too wide'
  ],
  Length: [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly wide',
    'Too wide'
  ],
  Comfort: [
    'Uncomfortable',
    'Slightly uncomfortable',
    'Ok',
    'Comfortable',
    'Perfect'
  ],
  Quality: [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect'
  ]
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(0)
  },
  group: {
    margin: theme.spacing(2, 0)
  },
  col: {
    margin: theme.spacing(0),
    width: 120
  }
}));

const Characteristics = ({ form, setForm, characteristics }) => {
  // console.log(characteristics);
  const handleChange = e => {
    setForm(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  //for each characteristic, render out all 5 characteristics and it's corresponding label
  const classes = useStyles();
  return (
    <div>
      {Object.keys(characteristics).map(character => {
        let description = descriptions[character];
        return (
          <FormControl
            component="fieldset"
            key={character}
            className={classes.formControl}
          >
            <FormLabel component="legend">
              {character}: {form[character]}
            </FormLabel>
            <RadioGroup
              name={character}
              value={form[character] || ''}
              onChange={handleChange}
              row
              className={classes.group}
            >
              {[0, 1, 2, 3, 4].map(num => {
                return (
                  <FormControlLabel
                    value={description[num]}
                    control={<Radio color="primary" />}
                    label={num === 1 || num === 3 ? '' : description[num]}
                    labelPlacement="bottom"
                    key={num}
                    className={classes.col}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      })}
    </div>
  );
};

let mapStateToProps = state => ({
  characteristics: state.metaInfo.characteristics
});

export default connect(
  mapStateToProps,
  null
)(Characteristics);
