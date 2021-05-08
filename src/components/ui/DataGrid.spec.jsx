import React from 'react';

import { mount } from 'enzyme';

import DataGrid, { price, percentage, decimalTwoPlaces } from './DataGrid';

beforeEach(() => mockRandomMuiid());

describe('src/components/ui/DataGrid', () => {
  it('should render correctly', () => {
    const component = mount(
      <DataGrid
        rows={[{ id: 1, name: 'foo' }]}
        columns={[{ field: 'name', headerName: 'Name' }]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly price', () => {
    const component = mount(
      <DataGrid
        rows={[{ id: 1, price: 1.2 }]}
        columns={[{ field: 'price', headerName: 'Price', ...price }]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly percentage', () => {
    const component = mount(
      <DataGrid
        rows={[{ id: 1, percentage: 0.45 }]}
        columns={[
          { field: 'percentage', headerName: 'Percentage', ...percentage }
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly decimalTwoPlaces', () => {
    const component = mount(
      <DataGrid
        rows={[{ id: 1, decimalTwoPlaces: 0.34456 }]}
        columns={[
          {
            field: 'decimalTwoPlaces',
            headerName: 'Decimal Two Places',
            ...decimalTwoPlaces
          }
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
