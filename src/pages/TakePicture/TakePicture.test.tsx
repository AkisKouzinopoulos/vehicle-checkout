import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VehicleProvider } from '../../context/Vehicle/VehicleContext';

import TakePicture from './TakePicture';

describe('testing the TakePicture page', () => {
  afterEach(cleanup);

  it('The take picture camera button is displayed', () => {
    render(
      <VehicleProvider>
        <TakePicture />
      </VehicleProvider>,
      { wrapper: Router }
    );
    const takePictureButton = screen.getByRole('button', { name: /takepicture/i });
    expect(takePictureButton).toBeTruthy();
  });
});
