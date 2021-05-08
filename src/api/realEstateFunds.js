import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/real-estate-funds`
});

const findAll = (where = {}) => {
  return instance.get('/', {
    params: {
      filter: { where }
    }
  });
};

const importFunds = (file) => {
  const formData = new FormData();
  formData.append('file', file, file.name);

  return instance.post('/import', formData);
};

export default {
  findAll,
  importFunds
};
