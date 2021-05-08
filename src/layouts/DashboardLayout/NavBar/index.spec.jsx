import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { mount } from 'enzyme';

import NavBar from './index';

describe('src/layouts/DashboardLayout/NavBar', () => {
  const onMobileClose = jest.fn();

  it('should render correctly openMobile false', () => {
    const openMobile = true;
    onMobileClose.mockReturnValue(false);

    const component = mount(
      <BrowserRouter>
        <NavBar {...{ onMobileClose, openMobile }} />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly openMobile true', () => {
    const openMobile = false;
    onMobileClose.mockReturnValue(true);

    const component = mount(
      <BrowserRouter>
        <NavBar {...{ onMobileClose, openMobile }} />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
