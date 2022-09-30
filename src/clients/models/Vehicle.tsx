export interface Vehicle {
  id: number;
  dcLocationCode: string;
  serialNumber: string;
  unitNumber: string;
  assetPk: number;
  assetId: string;
  name: string;
  statusId: number;
  statusName: string;
  vehicleTypeId: number;
  vehicleTypeName: string;
  lastUsed: string;
  isRental: boolean;
  certificateRequired: boolean;
  model: string;
  manufacturer: string;
}

export interface VehicleHistoryItem {
  assetPk: number;
  vehicleReportId: number;
  reportedBy: string;
  reportedOn: string;
  vehicleReportTypeId: number;
  vehicleReportTypeName: string;
  closedOn: string;
  workOrderId: string;
  isManualEntry: boolean;
  trainer: string;
  vehicleName: string;
}

export interface VehicleCheckItem {
  id: number;
  title: string;
  subtitle: string;
  vehicleCheckTypeId: number;
  vehicleCheckTypeName: string;
}

export interface EditedVehicleCheckItem {
  id: number;
  title: string;
  subtitle: string;
  vehicleCheckTypeId: number;
  vehicleCheckTypeName: string;
  userComment?: string;
  image: string;
}

export interface ReportOverviewItem {
  id: number;
  title: string;
  subtitle?: string;
  userComment?: string;
  vehicleCheckTypeId: number;
}

export interface VehicleReportIssue {
  vehicleCheckId: number;
  userComment?: string;
  vehicleCheckStatusId?: string;
}

export interface VehicleReport {
  reportedByUserId: number;
  reportedOn: string;
  trainerId: number | '';
  vehicleId: number;
  issues: VehicleReportIssue[];
  isManualEntry: boolean;
  workOrderId: string;
}

export interface VehicleReportResponse {
  id: number;
  reportedBy: string;
  serialNumber: string;
  vehicleTypeId: number;
  unitNumber: string;
  reportedOn: '2022-08-15T11:09:22.740Z';
  closedOn: '2022-08-15T11:09:22.740Z';
  workOrderId: string;
  isManualEntry: boolean;
  issues: VehicleReportIssueResponse[];
}

export interface VehicleReportIssueResponse {
  id: number;
  title: string;
  subTitle: string;
  userComment: string;
  vehicleCheckStatusId: string;
  vehicleCheckStatusName: string;
  images: VehicleReportImageResponse[];
}

export interface VehicleReportImageResponse {
  id: number;
  vehicleIssueId: number;
  imageName: string;
  uploaded: boolean;
}
