import VctApiClient from '../../clients/VctApiClient';

export const fetchVehicle = (assetPk: number) =>
  VctApiClient.getVehicle(assetPk)
    .then(response => response)
    .catch(() => {
      throw new Error('Error fetching vehicle');
    });

export const fetchVehicleChecks = () =>
  VctApiClient.getVehicleChecks()
    .then(response => response)
    .catch(() => {
      throw new Error('Error fetching vehicle checks');
    });
