import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';

import { useStyles } from './inputStyle.js';

const Recommend = ({ form, setForm, error }) => {
  const classes = useStyles();
  const handleChange = e => {
    setForm(prevState => {
      return { ...prevState, recommend: e.target.value };
    });
  };

  return (
    <Box>
      <h4 className={error ? classes.titleError : classes.title}>
        Do you recommend this product?*
      </h4>
      <FormControl component="fieldset">
        <RadioGroup
          name="position"
          value={form.recommend}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="true"
            control={<Radio color="primary" />}
            label="Yes"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="false"
            control={<Radio color="primary" />}
            label="No"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Recommend;
