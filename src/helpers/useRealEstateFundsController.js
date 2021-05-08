import api from 'src/api/realEstateFunds';

const useRealEstateFundsController = (dispatch) => {
  const search = (searchTerm) => {
    dispatch({ type: 'search', payload: searchTerm });
  };

  const findAll = async (searchTerm) => {
    try {
      const res = await api.findAll({
        or: [{ code: { like: searchTerm } }, { sector: { like: searchTerm } }]
      });
      dispatch({ type: 'findAll', payload: res.data });
    } catch (error) {
      dispatch({ type: 'findAllError', payload: error });
    }
  };

  const importFunds = async (file) => {
    dispatch({ type: 'setGlobalLoading' });
    try {
      const res = await api.importFunds(file);
      dispatch({ type: 'findAll', payload: res.data });
    } catch (error) {
      dispatch({ type: 'setGlobalError', payload: error });
    }
    dispatch({ type: 'setGlobalLoading', payload: false });
  };

  return {
    search,
    findAll,
    importFunds
  };
};

export default useRealEstateFundsController;
