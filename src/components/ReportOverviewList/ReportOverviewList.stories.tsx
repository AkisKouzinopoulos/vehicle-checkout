import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { reportOverviewList } from './ReportOverviewList.dummy';
import ReportOverviewList, { ReportOverviewProps } from './ReportOverviewList';

export default {
  title: 'PIT/ReportOverviewList',
  component: ReportOverviewList,
} as ComponentMeta<typeof ReportOverviewList>;

const Template: ComponentStory<typeof ReportOverviewList> = ({
  reportOverview,
}: ReportOverviewProps) => <ReportOverviewList reportOverview={reportOverview} />;

export const Default = Template.bind({});
Default.args = {
  reportOverview: reportOverviewList,
};
