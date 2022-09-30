import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {
  Vehicle,
  VehicleCheckItem,
  VehicleReport,
  VehicleReportResponse,
  VehicleReportImageResponse,
} from './models/Vehicle';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const VctApiClient = {
  getUsers: async (identityNumber: string) => {
    const { data } = await axios.get<any>(`/api/v1/Users/${identityNumber}`, {
      headers: HEADERS,
    });

    return data;
  },
  getVehicle: async (assetPk: number) => {
    const { data } = await axios.get<Vehicle[]>(`/api/v1/Vehicle/${assetPk}`, {
      headers: HEADERS,
    });

    return data;
  },
  getVehicleHistory: async (assetPk: number) => {
    const { data } = await axios.get<Vehicle[]>(`/api/v1/Vehicle/${assetPk}/history`, {
      headers: HEADERS,
    });

    return data;
  },
  getVehicleChecks: async () => {
    const { data } = await axios.get<VehicleCheckItem[]>(`/api/v1/VehicleChecks/`, {
      headers: HEADERS,
    });

    return data;
  },

  sendReport: async (report: VehicleReport) => {
    const { data, status } = await axios.post<VehicleReportResponse>(
      `/api/v1/VehicleReports/`,
      report,
      {
        method: 'POST',
        headers: HEADERS,
      }
    );

    return { data, status };
  },

  uploadImage: async (vehicleReportId: number, vehicleCheckId: number, image: string) => {
    const blob = await fetch(image).then(res => res.blob());
    const file = new File([blob], `${uuidv4()}.JPG`, { type: 'image/jpeg' });
    const formData = new FormData();
    formData.append('Photo', file);

    const { data } = await axios.post<VehicleReportImageResponse>(
      `/api/v1/VehicleReports/${vehicleReportId}/images/${vehicleCheckId}/upload`,
      formData
    );

    return data;
  },
};

export default VctApiClient;
