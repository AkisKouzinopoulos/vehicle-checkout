export interface User {
  id: number;
  identityNumber: string;
  dcLocationId: number;
  dcLocationCode: string;
  email: string;
  upn: string;
  fullName: string;
  firstName: string;
  lastName: string;
  manager: string;
  managerEmail: string;
  companyName: string;
  isContractWorker: boolean;
  role: number;
  certificates: UserCertificate[];
  dcLocations: UserDcLocation[];
}

export interface UserCertificate {
  id: number;
  userId: number;
  vehicleTypeId: number;
  vehicleTypeName: string;
  certificateTypeId: number;
  certificateTypeName: string;
  expiryDate: string;
  certifiedOn: string;
  createdOn: string;
  createdBy: string | null;
}

export interface UserDcLocation {
  dcLocationId: number;
  dcLocationCode: string;
  dcLocationName: string;
  roleId: number;
  isDefault: boolean;
}
