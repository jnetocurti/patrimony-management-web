import React, { memo } from 'react';

import { TextField } from '@material-ui/core';

const FormTextField = memo((props) => {
  return (
    <TextField {...props} required fullWidth size="small" variant="outlined" />
  );
});

export default FormTextField;
