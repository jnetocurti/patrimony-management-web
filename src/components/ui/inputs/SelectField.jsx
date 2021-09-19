import React, { memo } from 'react';

import { MenuItem } from '@material-ui/core';

import PropTypes from 'prop-types';

import TextField from './TextField';

const SelectField = memo(({ options, ...rest }) => {
  return (
    <TextField select {...rest}>
      {options.map((e) => {
        return (
          <MenuItem key={e.value} value={e.value}>
            {e.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
});

SelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

export default SelectField;
