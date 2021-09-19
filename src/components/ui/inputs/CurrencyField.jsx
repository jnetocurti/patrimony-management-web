import React, { memo } from 'react';
import NumberFormat from 'react-number-format';

import PropTypes from 'prop-types';

import TextField from './TextField';

// eslint-disable-next-line no-unused-vars
const rightToLeftFormatter = (value) => {
  if (!Number(value)) return '';

  let amount = '';
  if (amount.length > 2) {
    amount = parseInt(value, 10).toFixed(2);
  } else {
    amount = (parseInt(value, 10) / 100).toFixed(2);
  }

  return `R$ ${amount}`;
};

const CurrencyFormat = React.forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      format={rightToLeftFormatter}
      // format={formatCurrency}
      thousandSeparator="."
      decimalSeparator=","
      isNumericString
      fixedDecimalScale
      placeholder="R$ 0,00"
      decimalScale={2}
      prefix="R$ "
    />
  );
});

CurrencyFormat.propTypes = {
  name: PropTypes.any,
  onChange: PropTypes.func
};

const CurrencyField = memo((props) => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: CurrencyFormat
      }}
    />
  );
});

export default CurrencyField;
