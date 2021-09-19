import React, { memo } from 'react';

import TextField from './TextField';

const DateField = memo((props) => {
  return <TextField type="date" {...props} />;
});

export default DateField;
