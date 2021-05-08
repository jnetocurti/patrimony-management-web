import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { mount } from 'enzyme';
import theme from 'src/theme/index';

import SaveButton from './SaveButton';

describe('src/components/ui/buttons/SaveButton', () => {
  it('should render correctly', () => {
    const component = mount(
      <ThemeProvider theme={theme}>
        <SaveButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
