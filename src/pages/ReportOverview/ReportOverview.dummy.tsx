export const editedVehicleChecksDummy = [
  {
    id: 15,
    title: 'Travel Controls',
    subtitle: 'Check vehicle movement forward and reverse. Acceleration smooth, not jerky',
    vehicleCheckTypeId: 2,
    vehicleCheckTypeName: 'Operational',
    userComment: 'Broken travel controls',
  },
  {
    id: 16,
    title: 'Hydraulic Controls',
    subtitle:
      'Test all hydraulic functions (lift, tilt, side shift) for smooth and proper operation and no unusual noise',
    vehicleCheckTypeId: 2,
    vehicleCheckTypeName: 'Operational',
    userComment: 'Broken control',
  },
  {
    id: 17,
    title: 'Battery Charge',
    subtitle: 'Discharge meter in full green or 75% charge after turning on and raising forks',
    vehicleCheckTypeId: 1,
    vehicleCheckTypeName: 'Operational',
    userComment: 'Batteries are charging',
  },
];

export const expectedVehicleChecksDummy = [
  {
    id: 15,
    title: 'Travel Controls',
    subtitle: 'Check vehicle movement forward and reverse. Acceleration smooth, not jerky',
    vehicleCheckTypeId: 2,
    vehicleCheckTypeName: 'Operational',
    userComment: 'Broken travel controls',
  },
  {
    id: 16,
    title: 'Hydraulic Controls',
    subtitle:
      'Test all hydraulic functions (lift, tilt, side shift) for smooth and proper operation and no unusual noise',
    vehicleCheckTypeId: 2,
    vehicleCheckTypeName: 'Operational',
    userComment: 'Broken control',
  },
];

export const expectedVehicleChecksChangedArray = [
  {
    vehicleCheckId: 15,
    userComment: 'Broken travel controls',
    vehicleCheckStatusId: 'AttentionNeeded',
  },
  {
    vehicleCheckId: 16,
    userComment: 'Broken control',
    vehicleCheckStatusId: 'AttentionNeeded',
  },
  {
    vehicleCheckId: 17,
    userComment: 'Batteries are charging',
    vehicleCheckStatusId: 'OK',
  },
];
