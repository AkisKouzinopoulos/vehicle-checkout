import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import DisplayPicture from './DisplayPicture';

describe('testing the DisplayPicture page', () => {
  afterEach(cleanup);

  it('The page title is rendered', () => {
    render(<DisplayPicture />, { wrapper: Router });
    const displayPicturePageTitle = screen.getByRole('heading', { name: /display picture/i });
    expect(displayPicturePageTitle).toBeTruthy();
  });

  it('The take picture camera button is displayed', () => {
    render(<DisplayPicture />, { wrapper: Router });
    const displayPictureButton = screen.getByRole('button', { name: /uploadpicture/i });
    expect(displayPictureButton).toBeTruthy();
  });
});
