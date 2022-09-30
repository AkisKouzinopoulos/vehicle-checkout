import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withReactContext } from 'storybook-react-context';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

import LoadingModal from './LoadingModal';

export default {
  title: 'PIT/LoadingModal',
  component: LoadingModal,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    withReactContext({
      Context: VehicleContext,
      initialState: {
        isLoading: true,
      },
    }),
  ],
} as ComponentMeta<typeof LoadingModal>;

const Template: ComponentStory<typeof LoadingModal> = () => <LoadingModal />;

export const Default = Template.bind({});
