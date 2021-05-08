import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { mount } from 'enzyme';
import theme from 'src/theme/index';

import UploadButton from './UploadButton';

describe('src/components/ui/buttons/UploadButton', () => {
  it('should render correctly', () => {
    const onFileUpload = jest.fn();
    const component = mount(
      <ThemeProvider theme={theme}>
        <UploadButton {...{ onFileUpload }} />
      </ThemeProvider>
    );
    component.find('input').simulate('change', { target: { files: [] } });
    expect(component).toMatchSnapshot();
  });
});
