import React, { memo, useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';

import PropTypes from 'prop-types';
import DataGrid, {
  price,
  percentage,
  decimalTwoPlaces
} from 'src/components/ui/DataGrid';
import useRealEstateFundsController from 'src/helpers/useRealEstateFundsController';
import Connect from 'src/store/connect';

const useStyles = makeStyles({
  root: {
    '& .font-tabular-nums': {
      fontVariantNumeric: 'tabular-nums'
    }
  }
});

const Results = memo(({ realEstateFunds, searchTerm, dispatch }) => {
  const classes = useStyles();
  const { findAll } = useRealEstateFundsController(dispatch);

  useEffect(() => {
    (async function fetch() { await findAll(searchTerm); }());
  }, [searchTerm]);

  return (
    <div style={{ height: 350, width: '100%' }} className={classes.root}>
      <DataGrid
        columns={[
          { field: 'code', width: 125, headerName: 'Código' },
          { field: 'sector', width: 140, headerName: 'Setor' },
          {
            field: 'currentPrice',
            width: 160,
            ...price,
            headerName: 'Preço Atual'
          },
          {
            field: 'dailyLiquidity',
            width: 180,
            hide: true,
            type: 'number',
            headerName: 'Liquidez Diária'
          },
          {
            field: 'dividend',
            width: 160,
            ...price,
            headerName: 'Rendimento'
          },
          {
            field: 'dividendYield',
            width: 100,
            ...percentage,
            headerName: 'DY'
          },
          {
            field: 'dividendYieldThreeMonthsAccumulated',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'DY (3M) Acumulado'
          },
          {
            field: 'dividendYieldSixMonthsAccumulated',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'DY (6M) Acumulado'
          },
          {
            field: 'dividendYieldTwelveMonthsAccumulated',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'DY (12M) Acumulado'
          },
          {
            field: 'dividendYieldThreeMonthsAverage',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'DY (3M) Média'
          },
          {
            field: 'dividendYieldSixMonthsAverage',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'DY (6M) Média'
          },
          {
            field: 'dividendYieldTwelveMonthsAverage',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'DY (12M) Média'
          },
          {
            field: 'liquidPatrimony',
            width: 200,
            hide: true,
            ...price,
            headerName: 'Patrimônio Líquido'
          },
          {
            field: 'patrimonyValue',
            width: 150,
            ...price,
            headerName: 'VPA'
          },
          {
            field: 'patrimonyValueByPrice',
            width: 120,
            ...decimalTwoPlaces,
            headerName: 'P/VPA'
          },
          {
            field: 'dividendYieldPatrimonyValue',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'DY Patrimonial'
          },
          {
            field: 'physicalVacancy',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'Vacância Física'
          },
          {
            field: 'financialVacancy',
            width: 180,
            hide: true,
            ...percentage,
            headerName: 'Vacância Financeira'
          },
          {
            field: 'activeQuantity',
            width: 180,
            type: 'number',
            headerName: 'Qtd de Ativos'
          }
        ]}
        rows={realEstateFunds}
      />
    </div>
  );
});

Results.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  realEstateFunds: PropTypes.array.isRequired
};

const mapStateToProps = ({ realEstateFundsStore }, props) => {
  const {
    results: { realEstateFunds, searchTerm }
  } = realEstateFundsStore;
  return { realEstateFunds, searchTerm, ...props };
};

export default Connect(mapStateToProps)(Results);
