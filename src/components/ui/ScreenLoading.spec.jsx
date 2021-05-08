import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { mount } from 'enzyme';
import theme from 'src/theme/index';

import { ScreenLoading } from './ScreenLoading';

describe('src/components/ui/ScreenLoading', () => {
  it('should render correctly', () => {
    const loading = true;
    const component = mount(
      <ThemeProvider theme={theme}>
        <ScreenLoading {...{ loading }} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
