import React, { useContext } from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

import Notification from './Notification';

describe('testing the Notification component', () => {
  afterEach(cleanup);
  const successMsg = 'Check out Success! You can now use the vehicle';
  const errorMsg =
    'The vehicle has been placed out of service and the facilities team have been notified';

  it('Notification component is rendered with success message', () => {
    const SuccessNotification = () => {
      const { notification } = useContext(VehicleContext);
      notification.showNotification = true;
      notification.message = successMsg;
      return <Notification />;
    };

    render(<SuccessNotification />);
    const notificationTxt = screen.getByRole('heading', {
      name: /check out success! you can now use the vehicle/i,
    });
    expect(notificationTxt).toBeTruthy();
  });

  it('Notification component is rendered with error message', () => {
    const ErrorNotification = () => {
      const { notification } = useContext(VehicleContext);
      notification.showNotification = true;
      notification.message = errorMsg;
      return <Notification />;
    };
    render(<ErrorNotification />);
    const notificationTxt = screen.getByRole('heading', {
      name: /the vehicle has been placed out of service and the facilities team have been notified/i,
    });
    expect(notificationTxt).toBeTruthy();
  });
});
