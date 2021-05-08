export const search = (state, payload) => {
  state.results.loading = true;
  state.results.searchTerm = payload;
};

export const findAll = (state, payload) => {
  state.results.loading = false;

  state.results.realEstateFunds = payload;
};

export const findAllError = (state, payload) => {
  state.globalError = payload;
  state.results.loading = false;
};

export default {
  search,
  findAll,
  findAllError
};
