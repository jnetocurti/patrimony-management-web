import React, { memo } from 'react';

import { TextField as Field } from '@material-ui/core';

import PropTypes from 'prop-types';

const TextField = memo(({ name, label, required, ...rest }) => {
  return (
    <Field
      fullWidth
      size="small"
      variant="outlined"
      required={required || false}
      {...{ name, label, ...rest }}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
});

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool
};

export default TextField;
