import React from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useStyles } from './inputStyle.js';
import FileUpload from '../../UploadImage.jsx';

const Images = ({ form, setForm }) => {
  const handleUpload = images => {
    setForm(prevState => {
      return { ...prevState, photos: images };
    });
  };

  return (
    <React.Fragment>
      <h4>Upload your photos</h4>
      <FileUpload handleUpload={handleUpload.bind(this)} />
    </React.Fragment>
  );
};

export default Images;
