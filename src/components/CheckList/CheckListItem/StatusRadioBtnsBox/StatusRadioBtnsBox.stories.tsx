import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import StatusRadioBtnsBox from './StatusRadioBtnsBox';

export default {
  title: 'PIT/StatusRadioBtnsBox',
  component: StatusRadioBtnsBox,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} as ComponentMeta<typeof StatusRadioBtnsBox>;

const Template: ComponentStory<typeof StatusRadioBtnsBox> = () => (
  <StatusRadioBtnsBox checkId={2} />
);

export const Default = Template.bind({});
