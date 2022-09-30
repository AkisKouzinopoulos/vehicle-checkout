import { VehicleCheckItem } from '../../clients/models/Vehicle';

export interface VehicleReportProps {
  id: number;
}

export interface ButtonTypeProps {
  bgColor: string;
  bgHoverColor: string;
  text: string;
}

export interface CustomButtonProps {
  btnbg: ButtonTypeProps;
  align: 'left' | 'center' | 'right';
}

export type FilteredCheckProps = Pick<VehicleCheckItem, 'id' | 'title' | 'vehicleCheckTypeId'>;
