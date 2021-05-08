import { mockGet, mockPost } from 'axios';

import api from './realEstateFunds';

jest.mock('axios');

describe('src/api/realEstateFunds', () => {
  it('should perform findAll', () => {
    const payload = { code: 'HSML11' };

    api.findAll(payload);
    expect(mockGet).toHaveBeenCalledWith('/', {
      params: { filter: { where: payload } }
    });
  });

  it('should perform findAll without payload', () => {
    api.findAll();
    expect(mockGet).toHaveBeenCalledWith('/', {
      params: { filter: { where: {} } }
    });
  });

  it('should perform importFunds', () => {
    const payload = new Blob();
    payload.name = 'file';

    const formData = new FormData();
    formData.append('file', payload, payload.name);

    api.importFunds(payload);
    expect(mockPost).toHaveBeenCalledWith('/import', formData);
  });
});
