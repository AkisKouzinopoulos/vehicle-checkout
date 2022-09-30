import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import AppNavigation from '../../components/AppNavigation/AppNavigation';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

const QRScan = () => {
  const navigate = useNavigate();

  const { notification, dispatch } = useContext<any>(VehicleContext);

  return (
    <div data-testid="QRReaderContainer">
      <AppNavigation title="QR Scan" />
      <QrReader
        onResult={(result: any, error) => {
          if (result) {
            dispatch({ type: 'SCAN_QR_CODE', payload: result?.text });
            dispatch({
              type: 'SET_NOTIFICATION',
              payload: {
                notification: {
                  ...notification.notification,
                  showNotification: true,
                  message: `QR scanned successfully: ${result?.text}`,
                  type: 'success',
                },
              },
            });

            navigate(-1);
            return;
          }

          if (error) {
            dispatch({
              type: 'SET_NOTIFICATION',
              payload: {
                notification: {
                  ...notification.notification,
                  showNotification: true,
                  message: `Scan failed, please try again or place you camera closer to the QR code.`,
                  type: 'error',
                },
              },
            });
          }
        }}
        constraints={{ facingMode: 'environment' }}
      />
    </div>
  );
};

export default QRScan;
