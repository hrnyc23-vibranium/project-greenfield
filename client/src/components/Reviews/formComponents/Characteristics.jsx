import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
//maake the arrays an object
const descriptions = {
  Fit: {
    '1': 'A size too small',
    '2': '1/2 a size too small',
    '3': 'Perfect',
    '4': '1/2 a size too big',
    '5': 'A size too wide',
  },
  Size: {
    '1': 'A size too small',
    '2': '1/2 a size too small',
    '3': 'Perfect',
    '4': '1/2 a size too big',
    '5': 'A size too wide',
  },
  Length: {
    '1': 'Too narrow',
    '2': 'Slightly narrow',
    '3': 'Perfect',
    '4': 'Slightly wide',
    '5': 'Too wide',
  },
  Width: {
    '1': 'Too narrow',
    '2': 'Slightly narrow',
    '3': 'Perfect',
    '4': 'Slightly wide',
    '5': 'Too wide',
  },
  Comfort: {
    '1': 'Uncomfortable',
    '2': 'Slightly uncomfortable',
    '3': 'Ok',
    '4': 'Comfortable',
    '5': 'Perfect',
  },
  Quality: {
    '1': 'Poor',
    '2': 'Below average',
    '3': 'What I expected',
    '4': 'Pretty great',
    '5': 'Perfect',
  },
};

const useStyles = makeStyles(theme => ({
  titleError: {
    color: theme.palette.error.dark,
  },
  category: {
    margin: theme.spacing(0),
    fontSize: 15,
    fontWeight: 'bold',
  },
  group: {
    margin: theme.spacing(1, 0),
    marginBottom: theme.spacing(4),
  },
  col: {
    margin: theme.spacing(0),
    width: 80,
    alignContent: 'center',
  },
  label: {
    fontSize: 13,
    textAlign: 'center',
  },
}));

const Characteristics = ({ form, setForm, error, characteristics }) => {
  const classes = useStyles();
  const handleChange = e => {
    setForm(prevState => {
      let id = characteristics[e.target.name].id;
      prevState.characteristics[id] = Number(e.target.value);
      return { ...prevState };
    });
  };
  //for each characteristic, render out all 5 characteristics and it's corresponding label
  return Object.values(characteristics) ? (
    <Box>
      <h4 className={error ? classes.titleError : classes.title}>
        Characteristics*
      </h4>
      {Object.keys(characteristics).map(character => {
        let id = characteristics[character].id; //id corresponding to character
        let description = descriptions[character]; //descriptions  corresponding to character
        let selected = form.characteristics[id]; //selected radio button value
        return (
          <FormControl component="fieldset" key={character}>
            <FormLabel className={classes.category}>
              {character}:{description[selected] || 'None selected:'}
            </FormLabel>
            <RadioGroup
              name={character}
              value={String(selected) || ''}
              onChange={handleChange}
              row
              className={classes.group}
            >
              {['1', '2', '3', '4', '5'].map(value => {
                return (
                  <FormControlLabel
                    value={value} //value has to be a string
                    control={<Radio color="primary" />}
                    label={
                      <Typography className={classes.label}>
                        {value === '2' || value === '4'
                          ? ''
                          : description[value]}
                      </Typography>
                    }
                    labelPlacement="bottom"
                    key={value}
                    className={classes.col}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      })}
    </Box>
  ) : (
    ''
  );
};

let mapStateToProps = state => ({
  characteristics: state.metaInfo.characteristics,
});

export default connect(
  mapStateToProps,
  null
)(Characteristics);
