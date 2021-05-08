import immer from 'immer';
import rootActions from 'src/store/actions/index';

export const rootInitialState = {
  globalError: false,
  globalLoading: false
};

export function dispatchAction(state, action, actions = {}) {
  const fn = actions[action.type];

  if (fn) {
    return immer(state, (draftState) => {
      fn(draftState, action.payload, rootInitialState);
    });
  }

  return state;
}

const rootReducer = (state, action) => {
  return dispatchAction(state, action, rootActions);
};

export default rootReducer;
