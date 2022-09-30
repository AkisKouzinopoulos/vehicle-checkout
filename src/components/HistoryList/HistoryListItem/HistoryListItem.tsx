import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import SVGImage from '../../SVGImage/SVGImage';
import { VehicleHistoryItem } from '../../../clients/models/Vehicle';
import { dateWithTimeFormater } from '../../../helpers/helper';

export interface VehicleHistoryProps {
  history: VehicleHistoryItem;
}

const HistoryListItem = ({ history }: VehicleHistoryProps) => {
  const { vehicleReportTypeName, reportedOn, reportedBy } = history;

  return (
    <Paper elevation={2}>
      <Grid container p={1} my={2} alignItems="center" data-testid="historyListItem">
        <Grid item xs={1} textAlign="center">
          <SVGImage size={25} type={vehicleReportTypeName} />
        </Grid>
        <Grid item xs={5} textAlign="center">
          <Typography variant="body1" color="primary">
            {vehicleReportTypeName}
          </Typography>
          <Typography variant="body2">{dateWithTimeFormater(reportedOn)}</Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography variant="body2">{reportedBy}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HistoryListItem;
