import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { mount } from 'enzyme';
import theme from 'src/theme/index';

import ComeBackButton from './ComeBackButton';

describe('src/components/ui/buttons/ComeBackButton', () => {
  it('should render correctly', () => {
    const component = mount(
      <ThemeProvider theme={theme}>
        <ComeBackButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
