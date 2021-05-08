import React from 'react';

import { shallow } from 'enzyme';

import MainLayout from '.';

describe('src/layouts/MainLayout/TopBar', () => {
  it('should render correctly', () => {
    const component = shallow(<MainLayout />);
    expect(component).toMatchSnapshot();
  });
});
