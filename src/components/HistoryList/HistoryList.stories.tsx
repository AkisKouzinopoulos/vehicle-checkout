import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { historyListObj } from './HistoryList.dummy';
import HistoryList, { VehicleHistoryProps } from './HistoryList';

export default {
  title: 'PIT/HistoryList',
  component: HistoryList,
} as ComponentMeta<typeof HistoryList>;

const Template: ComponentStory<typeof HistoryList> = ({ vehicleHistory }: VehicleHistoryProps) => (
  <HistoryList vehicleHistory={vehicleHistory} />
);

export const Default = Template.bind({});
Default.args = {
  vehicleHistory: historyListObj,
};
