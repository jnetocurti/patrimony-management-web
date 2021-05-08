import React from 'react';

import { Typography } from '@material-ui/core';

import { mount } from 'enzyme';

import Store from '.';
import Connect from './connect';

describe('src/store/connect', () => {
  it('should render correctly', () => {
    const ConnectableElement = Connect()(({ test }) => (
      <Typography>{test}</Typography>
    ));

    const component = mount(
      <Store>
        <ConnectableElement />
      </Store>
    );
    expect(component).toMatchSnapshot();
  });
});
