import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { mount } from 'enzyme';
import Store from 'src/store';
import theme from 'src/theme/index';

import RealEstateFunds from '.';
import Toolbar from './components/Toolbar';

beforeEach(() => mockRandomMuiid());
jest.mock('src/api/realEstateFunds');

describe('src/containers/realEstateFunds/index', () => {
  it('should render correctly', async () => {
    const component = mount(
      <Store>
        <ThemeProvider theme={theme}>
          <RealEstateFunds />
        </ThemeProvider>
      </Store>
    );
    await waitFor(() => {
      component.update();
      expect(component).toMatchSnapshot();
    });
  });

  it('should render correctly on search funds', async () => {
    const component = mount(
      <Store>
        <ThemeProvider theme={theme}>
          <RealEstateFunds />
        </ThemeProvider>
      </Store>
    );

    component
      .find(Toolbar)
      .find('input[type="text"]')
      .simulate('change', { target: { value: 'HSML11' } });

    await waitFor(() => {
      component.update();
      expect(component).toMatchSnapshot();
    });
  });

  it('should render correctly on import funds', async () => {
    const component = mount(
      <Store>
        <ThemeProvider theme={theme}>
          <RealEstateFunds />
        </ThemeProvider>
      </Store>
    );

    component
      .find(Toolbar)
      .find('input[type="file"]')
      .simulate('change', { target: { files: [] } });

    await waitFor(() => {
      component.update();
      expect(component).toMatchSnapshot();
    });
  });
});
