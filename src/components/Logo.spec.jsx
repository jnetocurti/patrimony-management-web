import React from 'react';

import { shallow } from 'enzyme';

import Logo from './Logo';

describe('src/components/Logo', () => {
  it('should render correctly', () => {
    const component = shallow(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
