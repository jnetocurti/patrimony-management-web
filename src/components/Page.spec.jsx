import React, { Fragment } from 'react';

import { shallow } from 'enzyme';

import Page from './Page';

describe('src/components/Page', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Page>
        <></>
      </Page>
    );
    expect(component).toMatchSnapshot();
  });
});
