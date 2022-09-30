export const sampleUsers = [
  {
    id: 1,
    identityNumber: '123116',
    dcLocationId: 3,
    dcLocationCode: 'MMS-0082',
    email: 'akis@vehicle-checkout.ie',
    upn: 'akis@vehicle-checkout.ie',
    fullName: 'Akis Kouzinopoulos',
    firstName: 'akis',
    lastName: 'kouzinopoulos',
    manager: 'jhon, doe',
    managerEmail: 'manager@test.com',
    companyName: 'VehicleTracker',
    isContractWorker: false,
    role: 2,
    certificates: [
      {
        id: 52,
        userId: 1,
        vehicleTypeId: 13,
        vehicleTypeName: 'Clark',
        certificateTypeId: 1,
        certificateTypeName: 'Temporary New Operator',
        expiryDate: '2022-02-08T00:00:00Z',
        certifiedOn: '2021-09-09T00:00:00Z',
        createdOn: '2021-09-22T09:22:44.5431389Z',
        createdBy: null,
      },
    ],
    dcLocations: [
      {
        dcLocationId: 1,
        dcLocationCode: '0060',
        dcLocationName: 'Grapevine, TX, USA - 4250 Patriot Drive (A060)',
        roleId: 3,
        isDefault: false,
      },
      {
        dcLocationId: 3,
        dcLocationCode: 'MMS-0082',
        dcLocationName: 'AZ, Tempe/Phoenix 7343 South Hardy Dr (A082)',
        roleId: 2,
        isDefault: true,
      },
    ],
  },
];

export const sampleVehicle = {
  id: 118,
  dcLocationCode: '0060',
  serialNumber: '1A219015',
  unitNumber: '202',
  assetPk: 41246,
  assetId: 'USCLRK01-202',
  name: '#202 Clark',
  statusId: 1,
  statusName: 'Retired',
  vehicleTypeId: 13,
  vehicleTypeName: 'Clark',
  lastUsed: '2021-09-23T20:53:37.1950253Z',
  isRental: false,
  certificateRequired: true,
  model: '',
  manufacturer: 'BMW',
};

export const sampleVehicleHistory = [
  {
    assetPk: 41246,
    vehicleReportId: 71,
    reportedBy: 'Jhon Doe',
    reportedOn: '2021-09-23T20:53:37.1950253Z',
    vehicleReportTypeId: 2,
    vehicleReportTypeName: 'Out of Service',
    closedOn: '2022-01-05T19:35:59.09',
    workOrderId: '0060-101402',
    isManualEntry: false,
    trainer: null,
    vehicleName: null,
  },
  {
    assetPk: 41246,
    vehicleReportId: 18,
    reportedBy: 'User05',
    reportedOn: '2021-05-20T20:11:25.7953498Z',
    vehicleReportTypeId: 2,
    vehicleReportTypeName: 'Out of Service',
    closedOn: '2022-01-05T19:35:59.09',
    workOrderId: '0060-94689',
    isManualEntry: false,
    trainer: null,
    vehicleName: null,
  },
  {
    assetPk: 41246,
    vehicleReportId: 34,
    reportedBy: 'User08',
    reportedOn: '2021-05-20T04:05:00Z',
    vehicleReportTypeId: 1,
    vehicleReportTypeName: 'Checked Out',
    closedOn: '2022-01-05T19:35:59.09',
    workOrderId: null,
    isManualEntry: true,
    trainer: null,
    vehicleName: null,
  },
];

export const sampleCheckList = [
  {
    id: 1,
    title: 'Damaged Parts',
    subtitle: 'Bent, dented, broken',
    vehicleCheckTypeId: 1,
    vehicleCheckTypeName: 'Visual',
  },
  {
    id: 2,
    title: 'Leaks',
    subtitle: 'Drive unit, brakes, hydraulics',
    vehicleCheckTypeId: 2,
    vehicleCheckTypeName: 'Visual',
  },
  {
    id: 4,
    title: 'Tires & Wheels',
    subtitle: 'Drive wheels, steer wheels, load wheels, etc',
    vehicleCheckTypeId: 3,
    vehicleCheckTypeName: 'Visual',
  },
];