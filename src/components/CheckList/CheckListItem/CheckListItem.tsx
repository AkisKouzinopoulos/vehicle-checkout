import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { VehicleCheckItem } from '../../../clients/models/Vehicle';
import StatusRadioBtnsBox from './StatusRadioBtnsBox/StatusRadioBtnsBox';

export interface CheckListItemProps {
  check: VehicleCheckItem;
}

const AccordionSX = {
  margin: '10px 0',
  '&.MuiAccordion-root:before': {
    display: 'none',
  },
};

export const mapTypeString = (type: number) => {
  switch (type) {
    case 1:
      return { text: 'OK', color: 'success.main', apiText: 'OK' };
    case 2:
      return { text: 'Attention Needed', color: 'error', apiText: 'AttentionNeeded' };
    case 3:
      return { text: 'N/A', color: 'text', apiText: 'NotApplicable' };
    default:
      return {};
  }
};

const CheckListItem = ({ check }: CheckListItemProps) => {
  const { title, subtitle, vehicleCheckTypeId } = check;
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      sx={AccordionSX}
      data-testid="checkListItem"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={3}>
            <Typography variant="body2" color={mapTypeString(vehicleCheckTypeId).color}>
              {mapTypeString(vehicleCheckTypeId).text}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1" color="primary">
              {title}
            </Typography>
            <Typography variant="body2">{subtitle}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <StatusRadioBtnsBox checkId={check.id} />
      </AccordionDetails>
    </Accordion>
  );
};

export default CheckListItem;
