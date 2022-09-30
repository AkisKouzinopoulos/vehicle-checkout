import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import CheckList from './CheckList';
import { checkListObjVisual } from './CheckList.dummy';

describe('testing the CheckList', () => {
  afterEach(cleanup);

  it('renders the CheckList', () => {
    render(<CheckList vehicleChecks={checkListObjVisual} type="visual" />);
    const checkListElement = screen.getByTestId('checkListElement');
    expect(checkListElement).toBeTruthy();
  });
});
