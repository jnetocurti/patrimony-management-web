import React from 'react';

import { shallow } from 'enzyme';

import TextField from './TextField';

describe('src/components/ui/TextFields', () => {
  it('should render correctly', () => {
    const component = shallow(<TextField />);
    expect(component).toMatchSnapshot();
  });
});
