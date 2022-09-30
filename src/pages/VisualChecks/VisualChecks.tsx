import React, { useEffect, useContext } from 'react';
import AppNavigation from '../../components/AppNavigation/AppNavigation';
import CheckList from '../../components/CheckList/CheckList';
import { OPERATIONAL_CHECKS_PAGE } from '../Paths';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';
import { fetchVehicleChecks } from '../../context/Vehicle/VehicleActions';
import { VehicleCheckItem } from '../../clients/models/Vehicle';
import { textCertExpiry } from '../../helpers/helper';
import { checkCertification } from '../VehicleCheckout/VehicleCheckout';

// It is a request, that we need to set the vehicleCheckTypeId to all items as 1 expect the one with id="10" (Fire Extinguisher)
export const changeTypeForChecks = (checksArray: VehicleCheckItem[] | void) => {
  const idToExclude = 10;
  checksArray?.forEach(check => {
    const itemCheck = check;
    itemCheck.vehicleCheckTypeId = 1;
    if (check.id === idToExclude) {
      itemCheck.vehicleCheckTypeId = 3;
    }
  });
  return checksArray; // Return it just for the testing file purposes
};

const VisualChecks = () => {
  const { editedVehicleChecks, isEdited, vehicle, user, notification, dispatch } =
    useContext<any>(VehicleContext);

  const daysTillExpiry = checkCertification(
    user?.certificates,
    vehicle?.vehicleTypeId
  ).daysTillExpiryDate;

  useEffect(() => {
    const getVehicleChecks = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });

      const vehicleChecksData = await fetchVehicleChecks();

      // It is a request, that we need to set the vehicleCheckTypeId to all items as 1 expect the one with id="10" (Fire Extinguisher)
      changeTypeForChecks(vehicleChecksData);

      dispatch({ type: 'GET_EQUIPMENT_CHECKS', payload: vehicleChecksData });
      if (!isEdited) {
        // Passing data from the api to the editedVehicleChecks the get the initial object if not edited, so is not reseted when page loads.
        dispatch({ type: 'SET_EQUIPMENT_CHECKS', payload: vehicleChecksData });
      }
    };

    getVehicleChecks();

    if (
      daysTillExpiry <= 30 &&
      daysTillExpiry > 7 &&
      vehicle.certificateRequired &&
      !notification?.hasBeenShown
    ) {
      dispatch({
        type: 'SET_NOTIFICATION',
        payload: {
          ...notification.notification,
          notification: {
            showNotification: true,
            message: `${textCertExpiry} ${daysTillExpiry} days`,
            type: 'warning',
            hasBeenShown: true,
          },
        },
      });
    } else if (daysTillExpiry <= 7 && vehicle.certificateRequired && !notification?.hasBeenShown) {
      dispatch({
        type: 'SET_NOTIFICATION',
        payload: {
          ...notification.notification,
          notification: {
            showNotification: true,
            message: `${textCertExpiry} ${daysTillExpiry} days`,
            type: 'error',
            hasBeenShown: true,
          },
        },
      });
    }
  }, [
    daysTillExpiry,
    dispatch,
    vehicle.certificateRequired,
    isEdited,
    notification?.hasBeenShown,
    notification.notification,
  ]);

  return (
    <div data-testid="checksContainer">
      <AppNavigation title="Visual Checks 1/2" pathTo={OPERATIONAL_CHECKS_PAGE} />
      <CheckList vehicleChecks={editedVehicleChecks} type="Visual" />
    </div>
  );
};

export default VisualChecks;
