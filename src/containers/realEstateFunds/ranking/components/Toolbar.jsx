import React, { memo } from 'react';

import { Grid } from '@material-ui/core';

import PropTypes from 'prop-types';
import UploadButton from 'src/components/ui/buttons/UploadButton';
import SearchInput from 'src/components/ui/SearchInput';
import useRealEstateFundsController from 'src/helpers/useRealEstateFundsController';
import Connect from 'src/store/connect';

const Toolbar = memo(({ loading, dispatch }) => {
  const { importFunds, search } = useRealEstateFundsController(dispatch);

  return (
    <Grid container justify="space-between">
      <Grid item xs={12} md={6}>
        <SearchInput
          callback={search}
          searchStatus={loading}
          placeholder="Pesquisar fundos imobiliários"
        />
      </Grid>
      <Grid item>
        <UploadButton
          onFileUpload={importFunds}
          title="Importar Fundos Imobiliários"
        />
      </Grid>
    </Grid>
  );
});

Toolbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ realEstateFundsStore }, props) => {
  const {
    results: { loading }
  } = realEstateFundsStore;
  return { loading, ...props };
};

export default Connect(mapStateToProps)(Toolbar);
