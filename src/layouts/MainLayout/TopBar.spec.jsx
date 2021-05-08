import React from 'react';

import { shallow } from 'enzyme';

import TopBar from './TopBar';

describe('src/layouts/MainLayout/TopBar', () => {
  it('should render correctly', () => {
    const component = shallow(<TopBar />);
    expect(component).toMatchSnapshot();
  });
});
