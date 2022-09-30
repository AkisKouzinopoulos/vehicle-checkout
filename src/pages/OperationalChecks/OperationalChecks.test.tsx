import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import OperationalChecks from './OperationalChecks';

describe('testing the OperationalChecks page', () => {
  afterEach(cleanup);

  it('The page title is rendered', () => {
    render(<OperationalChecks />, { wrapper: Router });
    const operationalChecksPageTitle = screen.getByRole('heading', {
      name: /operational checks 2\/2/i,
    });
    expect(operationalChecksPageTitle).toBeTruthy();
  });
});
