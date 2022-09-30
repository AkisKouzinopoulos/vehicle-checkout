import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { vehicleObj } from './Status.dummy';

import Status from './Status';

describe('testing the Status component', () => {
  afterEach(cleanup);

  it('Status component is rendered', () => {
    render(<Status vehicle={vehicleObj} />);
    const pickerHeader = screen.getByTestId('statusContainer');
    expect(pickerHeader).toBeTruthy();
  });
});
