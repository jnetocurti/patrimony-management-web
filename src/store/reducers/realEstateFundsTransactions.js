import realEstateFundsTransactions from 'src/store/actions/realEstateFundsTransactions';

import { dispatchAction } from './index';

export const realEstateFundsTransactionsInitialState = {
  results: {
    searchTerm: '',
    loading: false,
    transactions: []
  },
  tradingNoteForm: {
    formData: {
      operation: '',
      date: undefined,
      code: undefined,
      price: undefined,
      quantity: undefined,
      totalPrice: undefined
    },
    operations: [
      { label: 'Compra', value: 'compra' },
      { label: 'Venda', value: 'venda' }
    ]
  }
};

const realEstateFundsTransactionsReducer = (state, action) => {
  return dispatchAction(state, action, realEstateFundsTransactions);
};

export default realEstateFundsTransactionsReducer;
