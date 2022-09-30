import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavigation from './AppNavigation';
import { VISUAL_CHECKS_PAGE } from '../../pages/Paths';

describe('testing the AppNavigation component', () => {
  afterEach(cleanup);

  it('AppNavigation component is rendered', () => {
    render(<AppNavigation title="Vehicle Checkout" pathTo={VISUAL_CHECKS_PAGE} />, {
      wrapper: Router,
    });
    const appNavigationHeader = screen.getByRole('heading', { name: /vehicle checkout/i });
    expect(appNavigationHeader).toBeTruthy();
  });

  it('Next showing when pathTo is provided', () => {
    render(<AppNavigation title="Vehicle Checkout" pathTo={VISUAL_CHECKS_PAGE} />, {
      wrapper: Router,
    });
    const nextLink = screen.getByRole('heading', { name: /next/i });
    expect(nextLink).toBeTruthy();
  });
});
