import React from 'react';
import HistoryListItem from './HistoryListItem/HistoryListItem';
import { VehicleHistoryItem } from '../../clients/models/Vehicle';

export interface VehicleHistoryProps {
  vehicleHistory: VehicleHistoryItem[];
}

const HistoryList = ({ vehicleHistory }: VehicleHistoryProps) => (
  <div data-testid="historyListContainer">
    {vehicleHistory.map(historyItem => (
      <HistoryListItem key={historyItem.vehicleReportId} history={historyItem} />
    ))}
  </div>
);

export default HistoryList;
