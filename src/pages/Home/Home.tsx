import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import QRScannerContent from '../../components/QRScannerContent/QRScannerContent';
import WelcomeContainer from '../../components/WelcomeContainer/WelcomeContainer';
import { VEHICLE_CHECKOUT_PAGE } from '../Paths';
import VctApiClient from '../../clients/VctApiClient';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';
import { msgConstants as msg } from '../../helpers/constants';

const Home = () => {
  const navigate = useNavigate();

  const { scannedQRCode, dispatch, editedVehicleChecks, notification } =
    useContext<any>(VehicleContext);
  const [inputText, setInputText] = useState<string>('Vehicle Barcode');
  const hasAttentionNeededReported = editedVehicleChecks.some(
    (issue: any) => issue.vehicleCheckTypeId === 2
  );

  const scanVehicleQRCode = useCallback(
    (manualAssetPk: string) => {
      const assetPk = +manualAssetPk || scannedQRCode;

      setInputText(manualAssetPk || scannedQRCode);

      dispatch({ type: 'SET_LOADING', payload: true });

      VctApiClient.getVehicle(assetPk)
        .then(response => {
          if (response.length <= 0) {
            dispatch({ type: 'SET_ERROR', payload: { error: true, errorMsg: msg.qrScanErrorMsg } });
            return;
          }

          dispatch({ type: 'GET_EQUIPMENT', payload: response[0] });
          navigate(`${VEHICLE_CHECKOUT_PAGE}${assetPk}`);
        })
        .catch(() => {
          dispatch({ type: 'SET_ERROR', payload: { error: true, errorMsg: msg.genericErrorMsg } });
        });
    },
    [dispatch, navigate, scannedQRCode]
  );

  useEffect(() => {
    const setNotification = () => {
      if (editedVehicleChecks.length <= 0) {
        return;
      }
      dispatch({
        type: 'SET_NOTIFICATION',
        payload: {
          ...notification.notification,
          notification: {
            showNotification: true,
          },
        },
      });

      if (hasAttentionNeededReported) {
        dispatch({
          type: 'SET_NOTIFICATION',
          payload: {
            ...notification.notification,
            notification: {
              message: msg.outOfServiceMsg,
              type: 'warning',
            },
          },
        });
      } else {
        dispatch({
          type: 'SET_NOTIFICATION',
          payload: {
            ...notification.notification,
            notification: {
              message: msg.checkOutMsg,
              type: 'success',
            },
          },
        });
      }
    };

    if (scannedQRCode) {
      scanVehicleQRCode(scannedQRCode);
    }

    setNotification();
  }, [
    dispatch,
    editedVehicleChecks.length,
    hasAttentionNeededReported,
    notification,
    scanVehicleQRCode,
    scannedQRCode,
  ]);

  return (
    <Stack direction="column" justifyContent="center" height="100vh">
      <WelcomeContainer />
      <QRScannerContent inputText={inputText} buttonText="Submit" scanQRCode={scanVehicleQRCode} />
    </Stack>
  );
};

export default Home;
