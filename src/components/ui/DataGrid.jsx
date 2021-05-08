import React, { memo } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { DataGrid as Grid, ptBR } from '@material-ui/data-grid';

import PropTypes from 'prop-types';
import {
  formatCurrency,
  formatDecimalTwoPlaces,
  formatPercentage
} from 'src/helpers/formatters';

export const price = {
  type: 'number',
  cellClassName: 'font-tabular-nums',
  valueFormatter: ({ value }) => formatCurrency(value)
};

export const percentage = {
  type: 'number',
  cellClassName: 'font-tabular-nums',
  valueFormatter: ({ value }) => formatPercentage(value)
};

export const decimalTwoPlaces = {
  type: 'number',
  cellClassName: 'font-tabular-nums',
  valueFormatter: ({ value }) => formatDecimalTwoPlaces(value)
};

const theme = createMuiTheme(
  {
    palette: {
      primary: { main: '#1976d2' }
    }
  },
  ptBR
);

const DataGrid = memo(({ columns, rows, getRowId }) => {
  return (
    <PerfectScrollbar>
      <ThemeProvider theme={theme}>
        <Grid {...{ columns, rows, getRowId }} />
      </ThemeProvider>
    </PerfectScrollbar>
  );
});

DataGrid.propTypes = {
  getRowId: PropTypes.func,
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default DataGrid;
