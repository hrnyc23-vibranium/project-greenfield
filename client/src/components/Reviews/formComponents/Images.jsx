import React from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useStyles } from './inputStyle.js';

const Images = (form, setForm) => {
  const handleChange = e => {};
  return (
    <React.Fragment>
      <h4>Upload your photos</h4>
      <TextField
        type="file"
        accept="image/png, image/jpeg"
        value={form.images}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default Images;
