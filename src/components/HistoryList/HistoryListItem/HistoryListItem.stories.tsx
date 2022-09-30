import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { historyItemObj } from './HistoryListItem.dummy';
import HistoryListItem, { VehicleHistoryProps } from './HistoryListItem';

export default {
  title: 'PIT/HistoryListItem',
  component: HistoryListItem,
} as ComponentMeta<typeof HistoryListItem>;

const Template: ComponentStory<typeof HistoryListItem> = ({ history }: VehicleHistoryProps) => (
  <HistoryListItem history={history} />
);

export const Default = Template.bind({});
Default.args = {
  history: historyItemObj,
};
