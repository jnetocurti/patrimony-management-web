import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { mount } from 'enzyme';
import theme from 'src/theme/index';

import EditIconButton from './EditIconButton';

describe('src/components/ui/buttons/EditIconButton', () => {
  it('should render correctly', () => {
    const component = mount(
      <ThemeProvider theme={theme}>
        <EditIconButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
