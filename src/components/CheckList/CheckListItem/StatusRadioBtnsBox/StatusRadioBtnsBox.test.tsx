import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import StatusRadioBtnsBox from './StatusRadioBtnsBox';

describe('testing the StatusRadioBtnsBox component', () => {
  afterEach(cleanup);

  it('StatusRadioBtnsBox component is rendered', () => {
    render(<StatusRadioBtnsBox checkId={1} />, { wrapper: Router });
    const radioBtnsElement = screen.queryByTestId('radioBtnsBoxElement');
    expect(radioBtnsElement).toBeTruthy();
  });
});
