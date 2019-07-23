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

const Characteristics = ({ form, setForm, characteristics }) => {
  const handleChange = e => {
    setForm(prevState => {
      prevState.characteristics[e.target.name] = e.target.value;
      return { ...prevState };
    });
  };
  //for each characteristic, render out all 5 characteristics and it's corresponding label
  const classes = useStyles();
  return Object.values(characteristics)[0] ? (
    <Box>
      <h4>Characteristics*</h4>
      {Object.keys(characteristics).map(character => {
        let description = descriptions[character];
        if (!description) {
          console.log(character);
        }

        return (
          <FormControl component="fieldset" key={character}>
            <FormLabel className={classes.category} asterick="true" required>
              {character}: {form.characteristics[character] || 'None selected:'}
            </FormLabel>
            <RadioGroup
              name={character}
              value={form.characteristics[character] || ''}
              onChange={handleChange}
              row
              className={classes.group}
            >
              {[0, 1, 2, 3, 4].map(num => {
                return (
                  <FormControlLabel
                    value={description[num]}
                    control={<Radio color="primary" />}
                    label={
                      <Typography className={classes.label}>
                        {num === 1 || num === 3 ? '' : description[num]}
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
