import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withReactContext } from 'storybook-react-context';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

import Notification from './Notification';

export default {
  title: 'PIT/Notification',
  component: Notification,
  decorators: [
    withReactContext({
      Context: VehicleContext,
      initialState: {
        notification: {
          showNotification: true,
          message: 'Test notification message',
          type: 'success',
          position: 'top',
        },
      },
    }),
  ],
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = () => <Notification />;

export const Default = Template.bind({});
Default.args = {
  notification: {
    showNotification: true,
    message: 'Test notification message.',
    type: 'error',
    position: 'top',
  },
};
