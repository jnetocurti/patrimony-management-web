export const addItem = (state, payload) => {
  state.globalError = payload;
  state.results.loading = false;
};

export default {
  addItem
};
