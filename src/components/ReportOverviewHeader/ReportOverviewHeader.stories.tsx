import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReportOverviewHeader, { ReportOverviewHeaderProps } from './ReportOverviewHeader';

export default {
  title: 'PIT/ReportOverviewHeader',
  component: ReportOverviewHeader,
} as ComponentMeta<typeof ReportOverviewHeader>;

const Template: ComponentStory<typeof ReportOverviewHeader> = ({
  number,
}: ReportOverviewHeaderProps) => <ReportOverviewHeader number={number} />;

export const Default = Template.bind({});
