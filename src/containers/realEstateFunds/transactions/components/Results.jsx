import React, { memo } from 'react';

import { makeStyles } from '@material-ui/styles';

import PropTypes from 'prop-types';
import DataGrid from 'src/components/ui/DataGrid';
import Connect from 'src/store/connect';

const useStyles = makeStyles({
  root: {
    '& .font-tabular-nums': {
      fontVariantNumeric: 'tabular-nums'
    }
  }
});

const Results = memo(({ transactions }) => {
  const classes = useStyles();

  return (
    <div style={{ height: 350, width: '100%' }} className={classes.root}>
      <DataGrid
        columns={[
          {
            field: 'code',
            width: 125,
            headerName: 'Código'
          },
          {
            field: 'operation',
            width: 150,
            headerName: 'Operação'
          },
          {
            field: 'quantity',
            width: 100,
            headerName: 'Qtd'
          },
          {
            field: 'price',
            width: 120,
            headerName: 'Preço'
          },
          {
            field: 'costs',
            width: 120,
            headerName: 'Custos'
          },
          {
            field: 'total',
            width: 110,
            headerName: 'Total'
          },
          {
            field: 'observation',
            width: 300,
            headerName: 'Observação'
          }
        ]}
        rows={transactions}
      />
    </div>
  );
});

Results.propTypes = {
  transactions: PropTypes.array.isRequired
};

const mapStateToProps = ({ realEstateFundsTransactionsStore }, props) => {
  const {
    results: { transactions, searchTerm }
  } = realEstateFundsTransactionsStore;
  return { transactions, searchTerm, ...props };
};

export default Connect(mapStateToProps)(Results);
