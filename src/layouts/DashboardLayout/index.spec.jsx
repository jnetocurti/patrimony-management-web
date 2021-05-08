import React from 'react';

import { shallow } from 'enzyme';

import DashboardLayout from '.';
import NavBar from './NavBar';
import TopBar from './TopBar';

describe('src/components/Logo', () => {
  it('should render correctly', () => {
    const component = shallow(<DashboardLayout />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly on mobile nav open', () => {
    const component = shallow(<DashboardLayout />);
    component.find(TopBar).simulate('mobileNavOpen');
    expect(component).toMatchSnapshot();
  });

  it('should render correctly on mobile close', () => {
    const component = shallow(<DashboardLayout />);
    component.find(NavBar).simulate('mobileClose');
    expect(component).toMatchSnapshot();
  });
});
