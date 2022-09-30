import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ImageCaptureBox from './ImageCaptureBox';

describe('testing the ImageCaptureBox', () => {
  afterEach(cleanup);
  const onDeleteImage = jest.fn();

  it('testing when there is an image in ImageCaptureBox', () => {
    render(<ImageCaptureBox imageWasCaptured checkId={1} deleteImage={onDeleteImage} />, {
      wrapper: Router,
    });
    const imageCaptureBoxText = screen.queryAllByPlaceholderText('Image Captured');
    expect(imageCaptureBoxText).toBeTruthy();
  });

  it('testing when there isnt an image in ImageCaptureBox', () => {
    render(<ImageCaptureBox imageWasCaptured={false} checkId={1} deleteImage={onDeleteImage} />, {
      wrapper: Router,
    });
    const imageCaptureBoxText = screen.queryAllByPlaceholderText('No image captured.');
    expect(imageCaptureBoxText).toBeTruthy();
  });
});
