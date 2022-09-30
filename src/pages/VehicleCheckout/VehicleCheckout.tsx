import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { VISUAL_CHECKS_PAGE } from '../Paths';
import Status from '../../components/Status/Status';
import VctApiClient from '../../clients/VctApiClient';
import HistoryList from '../../components/HistoryList/HistoryList';
import AppNavigation from '../../components/AppNavigation/AppNavigation';
import QRScannerContent from '../../components/QRScannerContent/QRScannerContent';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';
import { dateFormater, dateHasExpired, dayDifference, vehicleMsg } from '../../helpers/helper';
import { UserCertificate } from '../../clients/models/User';
import { msgConstants as msg } from '../../helpers/constants';

export const checkCertification = (certificates: UserCertificate[], vehicleTypeId: number) => {
  const userCertObj = {
    hasCertification: false,
    expiryDate: '',
    daysTillExpiryDate: 0,
  };
  certificates?.forEach((certificate: UserCertificate) => {
    if (certificate.vehicleTypeId === vehicleTypeId) {
      userCertObj.hasCertification = true;
      userCertObj.daysTillExpiryDate = dayDifference(certificate.expiryDate);
      userCertObj.expiryDate = dateHasExpired(certificate.expiryDate) ? certificate.expiryDate : '';
    }
  });

  return userCertObj;
};

export const showQrScanner = (statusName: string, hasCertExpiry: string | null) =>
  statusName?.toLocaleLowerCase() === 'available' ||
  statusName?.toLocaleLowerCase() === 'checked out' ||
  hasCertExpiry;

let unauthorizedAttemptsCount = 0;

const VehicleCheckout = () => {
  const navigate = useNavigate();

  const { id: assetPk } = useParams() as unknown as { id: number };
  const { vehicle, scannedQRCode, user, notification, dispatch } = useContext<any>(VehicleContext);
  const [vehicleHistory, setVehicleHistory] = useState<any>([]);
  const [certExpiry, setCertExpiry] = useState<string>('');
  const [userIsCertified, setUserIsCertified] = useState<boolean>(true);
  const [msgToDisplay, setMsgToDisplay] = useState<string>('');
  const [inputText, setInputText] = useState<string>('Employee ID');

  const addTrainerId = useCallback(
    (identityNumber: string) => {
      if (!userIsCertified || certExpiry) {
        //  if the user is not certified or has expired certificate it means only a trainerId can pass the verification
        dispatch({ type: 'SET_TRAINER_ID', payload: identityNumber });
      }
    },
    [userIsCertified, certExpiry, dispatch]
  );

  const scanEmployeeQRCode = useCallback(
    (manualIdentityNumber: string) => {
      const identityNumber = manualIdentityNumber || scannedQRCode;

      setInputText(manualIdentityNumber);

      dispatch({ type: 'SET_LOADING', payload: true });

      VctApiClient.getUsers(identityNumber)
        .then(response => {
          dispatch({ type: 'SET_LOADING', payload: false });
          if (response.length <= 0) {
            dispatch({ type: 'SET_ERROR', payload: { error: true, errorMsg: msg.qrScanErrorMsg } });
            setInputText('Employee ID');
            return;
          }

          const userCertsArray = response[0].certificates as UserCertificate[];
          const typeId = vehicle.vehicleTypeId;
          const certifiedUserObj = checkCertification(userCertsArray, typeId);

          dispatch({ type: 'GET_USER', payload: response[0] });

          // Check if vehicle does not require certification
          if (!vehicle.certificateRequired) {
            navigate(VISUAL_CHECKS_PAGE);
            return;
          }

          // Check if user has the certification
          if (!certifiedUserObj.hasCertification) {
            setMsgToDisplay(vehicleMsg('Not Certified'));
            setUserIsCertified(false);
            addTrainerId(identityNumber);
            setInputText('Authorized Employee ID');
            unauthorizedAttemptsCount += 1;
            if (unauthorizedAttemptsCount > 1) {
              dispatch({
                type: 'SET_ERROR',
                payload: { error: true, errorMsg: msg.authorizationFailedAgain },
              });
            }
            return;
          }
          // if user has a not expired (valid) certificate
          if (!certifiedUserObj.expiryDate) {
            navigate(VISUAL_CHECKS_PAGE);
            return;
          }

          setCertExpiry(checkCertification(userCertsArray, typeId).expiryDate);
          setMsgToDisplay(vehicleMsg('Certificate Expired'));
          addTrainerId(identityNumber);
          setInputText('Employee ID');
        })
        .catch(() => {
          dispatch({ type: 'SET_ERROR', payload: { error: true, errorMsg: msg.genericErrorMsg } });
        });
      dispatch({
        type: 'SET_NOTIFICATION',
        payload: { ...notification.notification, notification: { hasBeenShown: false } },
      });
    },
    [
      addTrainerId,
      dispatch,
      vehicle.certificateRequired,
      vehicle.vehicleTypeId,
      navigate,
      notification.notification,
      scannedQRCode,
    ]
  );

  const cancelScanEmployeeQRCode = () => {
    setMsgToDisplay(vehicleMsg(''));
    setCertExpiry('');
    setUserIsCertified(true);
    setInputText('Employee ID');
    dispatch({ type: 'SET_TRAINER_ID', payload: '' });
  };

  useEffect(() => {
    // Need to use separate useEffect to solve issue with the msgToDisplay that was updated the second time when manualy entering the IdentityNumber
    if (scannedQRCode) {
      scanEmployeeQRCode(scannedQRCode);
    }
  }, [scanEmployeeQRCode, scannedQRCode]);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });

    // Show a message if vehicle is 'Retired' or 'Out of Service'
    setMsgToDisplay(vehicleMsg(vehicle.statusName));

    const fetchVehicleHistory = async () => {
      await VctApiClient.getVehicleHistory(assetPk)
        .then(response => {
          dispatch({ type: 'SET_LOADING', payload: false });
          setVehicleHistory(response);
        })
        .catch(() => {
          dispatch({ type: 'SET_ERROR', payload: { error: true, errorMsg: msg.genericErrorMsg } });
        });
      dispatch({ type: 'RESET_EQUIPMENT_CHECKS' });
    };

    fetchVehicleHistory();
  }, [assetPk, dispatch, vehicle.statusName]);

  return (
    <>
      <AppNavigation title="Vehicle Checkout" />
      <Paper elevation={2} sx={{ margin: '10px 0' }}>
        <Status
          vehicle={vehicle}
          certExpiry={dateFormater(certExpiry)}
          isUserCertified={userIsCertified}
        />
      </Paper>
      {msgToDisplay && (
        <Paper elevation={2} sx={{ margin: '10px 0' }}>
          {(certExpiry || !userIsCertified) && (
            <Typography variant="h3" align="center" pt={3}>
              {user.fullName}
            </Typography>
          )}
          <Typography p={3} align="center">
            {msgToDisplay}
          </Typography>
        </Paper>
      )}
      {showQrScanner(vehicle.statusName, certExpiry) && (
        <Paper elevation={2} sx={{ padding: '5px' }}>
          <QRScannerContent
            inputText={certExpiry ? 'Authorized Employee ID' : inputText}
            buttonText="Next"
            scanQRCode={scanEmployeeQRCode}
            scanQRCancel={cancelScanEmployeeQRCode}
            showCancel={!!(certExpiry || !userIsCertified)}
          />
        </Paper>
      )}
      <HistoryList vehicleHistory={vehicleHistory} />
    </>
  );
};

export default VehicleCheckout;
