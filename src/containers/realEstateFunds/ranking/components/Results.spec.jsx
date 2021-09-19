import React from 'react';

import { mount } from 'enzyme';
import api from 'src/api/realEstateFunds';
import Store from 'src/store';

import Results from './Results';

beforeEach(() => mockRandomMuiid());
jest.mock('src/api/realEstateFunds');

describe('src/containers/realEstateFunds/components/Results', () => {
  it('should render correctly', async () => {
    const response = await api.findAll();
    const realEstateFunds = response.data;
    const component = mount(
      <Store>
        <Results {...{ realEstateFunds }} />
      </Store>
    );
    await waitFor(() => {
      component.update();
      expect(component).toMatchSnapshot();
    });
  });
});
