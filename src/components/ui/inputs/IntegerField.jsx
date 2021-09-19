import React, { memo } from 'react';

import PropTypes from 'prop-types';

import TextField from './TextField';

const IntegerField = memo(({ min, ...rest }) => {
  return (
    <TextField
      type="number"
      {...rest}
      InputProps={{
        inputProps: { min: min || 1 }
      }}
    />
  );
});

IntegerField.propTypes = {
  min: PropTypes.number
};

export default IntegerField;
