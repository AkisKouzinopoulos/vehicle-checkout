import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import WelcomeContainer from './WelcomeContainer';

describe('testing the WelcomeContainer component', () => {
  afterEach(cleanup);

  it('WelcomeContainer component is rendered', () => {
    render(<WelcomeContainer />);
    const welcomeContainer = screen.queryAllByTestId('welcomeContainer');
    expect(welcomeContainer).toBeTruthy();
  });
});
