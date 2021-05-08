/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from 'react';

import { Button } from '@material-ui/core';
import { PublishOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'capitalize',
    marginLeft: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const UploadButton = memo(({ title, onFileUpload, ...rest }) => {
  const classes = useStyles();

  const onFileChange = (event) => {
    onFileUpload(event.target.files[0]);
    event.target.value = null;
  };

  return (
    <div className={classes.root}>
      <input
        multiple
        type="file"
        id="file-button"
        className={classes.input}
        onChange={onFileChange}
      />
      <label htmlFor="file-button">
        <Button
          {...rest}
          color="primary"
          component="span"
          variant="contained"
          className={classes.root}
          startIcon={<PublishOutlined />}
        >
          {title || 'Upload'}
        </Button>
      </label>
    </div>
  );
});

UploadButton.propTypes = {
  title: PropTypes.string,
  onFileUpload: PropTypes.func.isRequired
};

export default memo(UploadButton);
