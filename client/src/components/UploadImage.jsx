//Dev Dependencies
import React from 'react';
import * as filestack from 'filestack-js';
import { FileUploader_API_KEY } from '../../config/config.js';

//React Componenets
import ImageGallery from './ImageGallery';

//Material UI
import { Button, Box, InputLabel, Grid, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const client = filestack.init(FileUploader_API_KEY);

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(url, id) {
    let imageSet = this.state.images.slice(0);
    imageSet.push({ url: url, id: id });
    this.setState({ images: imageSet }, () => {
      this.props.handleUpload(
        this.state.images.map(image => {
          return image.url;
        })
      );
    });
  }
  render() {
    const pickerOptions = {
      fromSources: ['local_file_system', 'instagram', 'facebook'],
      onFileUploadFinished: res => {
        this.handleUpload(res.url, res.handle);
      },
    };
    return (
      <Box id="ImageUploader">
        <Grid container justify="flex-start" alignItems="center" spacing={3}>
          <Grid item>
            <InputLabel>Upload your photos</InputLabel>
          </Grid>
          <Grid item>
            {this.state.images.length < 5 ? (
              <Button
                variant="outlined"
                color="default"
                onClick={() => {
                  client.picker(pickerOptions).open();
                }}>
                Upload
                <CloudUploadIcon />
              </Button>
            ) : (
              <Typography variant="body1">
                5 photos have been uploaded
              </Typography>
            )}
          </Grid>
        </Grid>
        <ImageGallery photos={this.state.images} />
      </Box>
    );
  }
}
export default FileUpload;
