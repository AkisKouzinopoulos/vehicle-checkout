import React, { useContext } from 'react';
import AppNavigation from '../../components/AppNavigation/AppNavigation';
import CheckList from '../../components/CheckList/CheckList';
import { REPORT_OVERVIEW_PAGE } from '../Paths';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

const OperationalChecks = () => {
  const { editedVehicleChecks } = useContext<any>(VehicleContext);

  return (
    <>
      <AppNavigation title="Operational Checks 2/2" pathTo={REPORT_OVERVIEW_PAGE} />
      <CheckList vehicleChecks={editedVehicleChecks} type="Operational" />
    </>
  );
};

export default OperationalChecks;
