import React from 'react';
import { VehicleCheckItem } from '../../clients/models/Vehicle';
import CheckListItem from './CheckListItem/CheckListItem';

export interface CheckListProps {
  vehicleChecks: VehicleCheckItem[];
  type: string;
}

const CheckList = ({ vehicleChecks, type }: CheckListProps) => {
  const filteredByTypeChecks = vehicleChecks.filter(check => check.vehicleCheckTypeName === type);

  return (
    <div data-testid="checkListElement">
      {filteredByTypeChecks.map(checkItem => (
        <CheckListItem key={checkItem.id} check={checkItem} />
      ))}
    </div>
  );
};

export default CheckList;
