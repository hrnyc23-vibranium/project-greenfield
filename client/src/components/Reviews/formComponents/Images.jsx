import React from 'react';

import makeStyles from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Images = (form, setForm) => {
  const handleChange = e => {};
  return (
    <React.Fragment>
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
