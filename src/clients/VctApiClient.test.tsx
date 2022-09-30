import axios from 'axios';
import VctApiClient from './VctApiClient';
import {
  sampleUsers,
  sampleVehicle,
  sampleVehicleHistory,
  sampleCheckList,
} from './VctApiTestData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('VctApiClient', () => {
  it('given an identityNumber number  it should retrieve a user', async () => {
    mockedAxios.get.mockResolvedValue({ data: sampleUsers });
    const response = await VctApiClient.getUsers('123116');

    expect(response).toEqual(sampleUsers);
    expect(mockedAxios.get).toHaveBeenCalled();
  });

  it('given an assetPk number it should retrieve the vehicle', async () => {
    mockedAxios.get.mockResolvedValue({ data: sampleVehicle });
    const response = await VctApiClient.getVehicle(41246);

    expect(response).toEqual(sampleVehicle);
    expect(mockedAxios.get).toHaveBeenCalled();
  });

  it('given an assetPk number it should retrieve the history of the vehicle', async () => {
    mockedAxios.get.mockResolvedValue({ data: sampleVehicleHistory });
    const response = await VctApiClient.getVehicleHistory(41246);

    expect(response).toEqual(sampleVehicleHistory);
    expect(mockedAxios.get).toHaveBeenCalled();
  });

  it('given an assetPk number it should retrieve the history of the vehicle', async () => {
    mockedAxios.get.mockResolvedValue({ data: sampleCheckList });
    const response = await VctApiClient.getVehicleChecks();

    expect(response).toEqual(sampleCheckList);
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
