import React from 'react';

import { shallow } from 'enzyme';

import NotFoundView from './NotFoundView';

describe('src/containers/errors/NotFoundView', () => {
  it('should render correctly', () => {
    const component = shallow(<NotFoundView />);
    expect(component).toMatchSnapshot();
  });
});
