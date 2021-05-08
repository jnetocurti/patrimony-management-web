import React from 'react';

import { ListItem } from '@material-ui/core';
import { Apartment as ApartmentIcon, ListOutlined } from '@material-ui/icons';

import { shallow } from 'enzyme';

import NavItem from './NavItem';

describe('src/layouts/DashboardLayout/NavBar/NavItem', () => {
  const config = {
    icon: ApartmentIcon,
    title: 'Fundos imobiliários',
    href: '/app/real-estate-funds',
    subItems: [
      {
        icon: ListOutlined,
        title: 'Ranking',
        href: '/app/real-estate-funds/ranking'
      }
    ]
  };
  it('should render correctly', () => {
    const component = shallow(<NavItem {...{ config }} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with open property', () => {
    const component = shallow(<NavItem {...{ config }} />);
    component.find(ListItem).at(0).simulate('click');

    expect(component).toMatchSnapshot();
  });
});
