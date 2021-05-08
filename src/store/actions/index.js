export const setGlobalError = (state, payload) => {
  state.globalError = payload;
};

export const setGlobalLoading = (state, payload = true) => {
  state.globalLoading = payload;
};

export default {
  setGlobalError,
  setGlobalLoading
};
