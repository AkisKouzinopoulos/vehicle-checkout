import React, { createContext, useReducer, useMemo } from 'react';
import { vehicleReducer } from './VehicleReducer';
import { Vehicle, VehicleCheckItem } from '../../clients/models/Vehicle';
import { User } from '../../clients/models/User';
import { NotificationProps } from '../../components/Notification/Notification';

interface VehicleProviderProps {
  children?: React.ReactNode;
}

const initialState = {
  vehicle: {} as Vehicle,
  vehicleChecks: [] as VehicleCheckItem[],
  editedVehicleChecks: [] as VehicleCheckItem[],
  isLoading: false,
  error: false,
  isEdited: false,
  scannedQRCode: '' as string,
  tempCapturedImage: '' as string,
  user: {} as User,
  notification: {} as NotificationProps,
};

export const VehicleContext = createContext(initialState);

export const VehicleProvider = ({ children }: VehicleProviderProps) => {
  const [state, dispatch] = useReducer(vehicleReducer, initialState);

  const allVehicle = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state]
  );

  return <VehicleContext.Provider value={allVehicle}>{children}</VehicleContext.Provider>;
};
