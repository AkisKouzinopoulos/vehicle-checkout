import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { reportItemObj } from './ReportOverviewListItem.dummy';
import ReportOverviewListItem, { ReportOverviewItemProps } from './ReportOverviewListItem';

export default {
  title: 'PIT/ReportOverviewListItem',
  component: ReportOverviewListItem,
} as ComponentMeta<typeof ReportOverviewListItem>;

const Template: ComponentStory<typeof ReportOverviewListItem> = ({
  reportItem,
}: ReportOverviewItemProps) => <ReportOverviewListItem reportItem={reportItem} />;

export const Default = Template.bind({});
Default.args = {
  reportItem: reportItemObj,
};
