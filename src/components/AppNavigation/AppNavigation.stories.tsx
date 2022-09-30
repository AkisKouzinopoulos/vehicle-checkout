import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import AppNavigation, { AppNavigationProps } from './AppNavigation';

export default {
  title: 'PIT/AppNavigation',
  component: AppNavigation,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} as ComponentMeta<typeof AppNavigation>;

const Template: ComponentStory<typeof AppNavigation> = ({ title, pathTo }: AppNavigationProps) => (
  <AppNavigation title={title} pathTo={pathTo} />
);

export const WithNext = Template.bind({});
WithNext.args = {
  title: 'Operational Checks',
  pathTo: '/visual-checks',
};

export const WithoutNext = Template.bind({});
WithoutNext.args = {
  title: 'Report Overview',
  pathTo: '',
};
