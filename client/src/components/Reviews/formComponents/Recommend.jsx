import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Recommend = ({ form, setForm }) => {
  const handleChange = e => {
    setForm(prevState => {
      return { ...prevState, helpful: e.target.value };
    });
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        name="position"
        value={form.helpful || ''}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />}
          label="Yes"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="bottom"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Recommend;
