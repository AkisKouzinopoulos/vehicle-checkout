import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import { ReportOverviewItem } from '../../clients/models/Vehicle';
import ReportOverviewListItem from './ReportOverviewListItem/ReportOverviewListItem';

export interface ReportOverviewProps {
  reportOverview: ReportOverviewItem[];
}

const ReportOverview = ({ reportOverview }: ReportOverviewProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev: boolean) => !prev);
  };

  return (
    <Box mb={1}>
      {reportOverview.slice(0, 2).map(reportItem => (
        <ReportOverviewListItem key={reportItem.id} reportItem={reportItem} />
      ))}
      <Collapse in={checked} sx={{ marginTop: '-8px' }}>
        {reportOverview.slice(2).map(reportItem => (
          <ReportOverviewListItem key={reportItem.id} reportItem={reportItem} />
        ))}
      </Collapse>
      {reportOverview.length > 2 && (
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end" mt={1}>
          <Button onClick={handleChange}>{checked ? 'Collapse' : 'Expand'}</Button>
        </Box>
      )}
    </Box>
  );
};

export default ReportOverview;
