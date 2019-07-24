import React from 'react';
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
  Fit: [
    'A size too small',
    '1/2 a size too small',
    'Perfect',
    '1/2 a size too big',
    'A size too wide',
  ],
  Size: [
    'A size too small',
    '1/2 a size too small',
    'Perfect',
    '1/2 a size too big',
    'A size too wide',
  ],
  Length: [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly wide',
    'Too wide',
  ],
  Width: [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly wide',
    'Too wide',
  ],
  Comfort: [
    'Uncomfortable',
    'Slightly uncomfortable',
    'Ok',
    'Comfortable',
    'Perfect',
  ],
  Quality: [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect',
  ],
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
      prevState.characteristics[e.target.name] = {
        id: id,
        value: e.target.value,
      };
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
        let description = descriptions[character];
        let formCharacter = form.characteristics[character];
        let formCharacterValue = formCharacter ? formCharacter.value : '';
        return (
          <FormControl component="fieldset" key={character}>
            <FormLabel className={classes.category}>
              {character}:
              {formCharacterValue
                ? description[formCharacterValue - 1]
                : 'None selected:'}
            </FormLabel>
            <RadioGroup
              name={character}
              value={formCharacterValue}
              onChange={handleChange}
              row
              className={classes.group}
            >
              {[1, 2, 3, 4, 5].map(num => {
                return (
                  <FormControlLabel
                    value={String(num)} //value has to be a string
                    control={<Radio color="primary" />}
                    label={
                      <Typography className={classes.label}>
                        {num === 2 || num === 4 ? '' : description[num - 1]}
                      </Typography>
                    }
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
