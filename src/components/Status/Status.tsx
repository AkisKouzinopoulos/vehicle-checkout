import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SVGImage from '../SVGImage/SVGImage';
import { Vehicle } from '../../clients/models/Vehicle';

export interface VehicleProps {
  vehicle: Vehicle;
  certExpiry?: string;
  isUserCertified?: boolean;
}

export const textToDisplay = (
  certExpiry?: string,
  isUserCertified?: boolean,
  statusName?: string
) => {
  let text: any = statusName;

  if (certExpiry) {
    text = <Typography variant="caption">Certificate expires {certExpiry}</Typography>;
  }
  if (!isUserCertified) {
    text = <Typography variant="caption">Not Authorized</Typography>;
  }
  return text;
};

const Status = ({ vehicle, certExpiry, isUserCertified }: VehicleProps) => {
  const { name, serialNumber, statusName } = vehicle;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      data-testid="statusContainer"
    >
      <Typography variant="h2" color="secondary">
        {name}
      </Typography>
      <Typography variant="body1">{serialNumber}</Typography>
      {statusName && (
        <SVGImage
          size={50}
          type={certExpiry || !isUserCertified ? 'Certificate expired' : statusName}
        />
      )}
      {textToDisplay(certExpiry, isUserCertified, statusName)}
    </Stack>
  );
};

export default Status;
