import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Status, { VehicleProps } from './Status';
import { vehicleObj } from './Status.dummy';

export default {
  title: 'PIT/Status',
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = ({ vehicle }: VehicleProps) => (
  <Status vehicle={vehicle} />
);

export const Default = Template.bind({});

Default.args = {
  vehicle: vehicleObj,
};
