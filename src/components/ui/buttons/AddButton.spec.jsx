import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { mount } from 'enzyme';
import theme from 'src/theme/index';

import AddButton from './AddButton';

describe('src/components/ui/buttons/AddButton', () => {
  it('should render correctly', () => {
    const component = mount(
      <ThemeProvider theme={theme}>
        <AddButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
