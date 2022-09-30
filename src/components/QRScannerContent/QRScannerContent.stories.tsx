import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import QRScannerContent, { QRScannerContentProps } from './QRScannerContent';

export default {
  title: 'PIT/QRScannerContent',
  component: QRScannerContent,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} as ComponentMeta<typeof QRScannerContent>;

const Template: ComponentStory<typeof QRScannerContent> = ({
  inputText,
  buttonText,
  scanQRCode,
  showCancel,
}: QRScannerContentProps) => (
  <QRScannerContent
    inputText={inputText}
    buttonText={buttonText}
    scanQRCode={scanQRCode}
    showCancel={showCancel}
  />
);

export const Homescreen = Template.bind({});
Homescreen.args = {
  inputText: 'Vehicle Barcode',
  buttonText: 'Submit',
  showCancel: false,
};

export const VehicleCheckout = Template.bind({});
VehicleCheckout.args = {
  inputText: 'Employee ID',
  buttonText: 'Next',
  showCancel: false,
};

export const Unauthorized = Template.bind({});
Unauthorized.args = {
  inputText: 'Authorized Employee ID',
  buttonText: 'Next',
  showCancel: true,
};
