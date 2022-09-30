import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import QRScannerContent from './QRScannerContent';

describe('testing the QRScannerContent component is rendered with correct button and placeholder text', () => {
  afterEach(cleanup);
  const scanQRCode = jest.fn();

  it('QRScannerContent container is rendered', () => {
    render(
      <QRScannerContent
        inputText="Vehicle Barcode"
        buttonText="Submit"
        scanQRCode={scanQRCode}
        showCancel={false}
      />,
      { wrapper: Router }
    );
    const QRScannerContentElement = screen.getByTestId('QRScannerContent');
    expect(QRScannerContentElement).toBeInTheDocument();
  });

  it('for Homescreen', () => {
    render(
      <QRScannerContent
        inputText="Vehicle Barcode"
        buttonText="Submit"
        scanQRCode={scanQRCode}
        showCancel={false}
      />,
      { wrapper: Router }
    );
    const inputPlaceholderTxt = screen.getByPlaceholderText(/vehicle barcode/i);
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    expect(inputPlaceholderTxt).toBeTruthy();
    expect(submitBtn).toBeTruthy();
  });

  it('for CheckoutPage', () => {
    render(
      <QRScannerContent
        inputText="Employee ID"
        buttonText="Next"
        scanQRCode={scanQRCode}
        showCancel={false}
      />,
      {
        wrapper: Router,
      }
    );
    const inputPlaceholderTxt = screen.getByPlaceholderText(/employee id/i);
    const nextBtn = screen.getByRole('button', { name: /next/i });
    expect(inputPlaceholderTxt).toBeTruthy();
    expect(nextBtn).toBeTruthy();
  });

  it('for Unauthorized', () => {
    render(
      <QRScannerContent
        inputText="Authorized Employee ID"
        buttonText="Next"
        scanQRCode={scanQRCode}
        showCancel
      />,
      { wrapper: Router }
    );
    const inputPlaceholderTxt = screen.getByPlaceholderText(/authorized employee id/i);
    const submitBtn = screen.getByRole('button', { name: /next/i });
    const cancelBtn = screen.getByRole('button', { name: /cancel/i });
    expect(inputPlaceholderTxt).toBeTruthy();
    expect(submitBtn).toBeTruthy();
    expect(cancelBtn).toBeTruthy();
  });
});
