import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import { ReportOverviewItem } from '../../../clients/models/Vehicle';

export interface ReportOverviewItemProps {
  reportItem: ReportOverviewItem;
}

const ReportOverviewListItem = ({ reportItem }: ReportOverviewItemProps) => {
  const { title, userComment } = reportItem;

  return (
    <Paper elevation={2} sx={{ backgroundColor: '#e1e1e1' }}>
      <Grid container p={1} my={1} alignItems="center" data-testid="reportOverviewListItem">
        <Grid item xs={3}>
          <Typography variant="body2" color="red">
            Attention Needed
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            COMMENT:
          </Typography>
          <Typography variant="body2">{userComment}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReportOverviewListItem;
