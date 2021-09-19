import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { mount } from 'enzyme';
import Store from 'src/store';
import theme from 'src/theme/index';

import Toolbar from './Toolbar';

describe('src/containers/realEstateFunds/components/Toolbar', () => {
  it('should render correctly', () => {
    const component = mount(
      <Store>
        <ThemeProvider theme={theme}>
          <Toolbar />
        </ThemeProvider>
      </Store>
    );
    expect(component).toMatchSnapshot();
  });
});
