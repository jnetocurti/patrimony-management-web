import React, { createContext, useReducer } from 'react';

import PropTypes from 'prop-types';

import rootReducer, { rootInitialState } from './reducers/index';
import realEstateFundsReducer, {
  realEstateFundsInitialState
} from './reducers/realEstateFunds';
import realEstateFundsTransactionsReducer, {
  realEstateFundsTransactionsInitialState
} from './reducers/realEstateFundsTransactions';

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [rootStore, rootDispatch] = useReducer(rootReducer, rootInitialState);

  const [realEstateFundsStore, realEstateFundsDispatch] = useReducer(
    realEstateFundsReducer,
    realEstateFundsInitialState
  );

  const [
    realEstateFundsTransactionsStore,
    realEstateFundsTransactionsDispatch
  ] = useReducer(
    realEstateFundsTransactionsReducer,
    realEstateFundsTransactionsInitialState
  );

  const triggerDispatchs = (action) => {
    const dispatchs = [
      rootDispatch,
      realEstateFundsDispatch,
      realEstateFundsTransactionsDispatch
    ];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const combinedReducers = {
    store: {
      rootStore,
      realEstateFundsStore,
      realEstateFundsTransactionsStore
    },
    dispatch: (action) => triggerDispatchs(action)
  };

  return (
    <StoreContext.Provider value={combinedReducers}>
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node.isRequired
};

export default Store;
