import React from 'react';

import { shallow } from 'enzyme';

import FormTextField from './FormTextField';

describe('src/components/ui/TextFields', () => {
  it('should render correctly', () => {
    const component = shallow(<FormTextField />);
    expect(component).toMatchSnapshot();
  });
});
