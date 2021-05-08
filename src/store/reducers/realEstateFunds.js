import realEstateFundsActions from 'src/store/actions/realEstateFunds';

import { dispatchAction } from './index';

export const realEstateFundsInitialState = {
  results: {
    searchTerm: '',
    loading: false,
    realEstateFunds: []
  }
};

const realEstateFundsReducer = (state, action) => {
  return dispatchAction(state, action, realEstateFundsActions);
};

export default realEstateFundsReducer;
