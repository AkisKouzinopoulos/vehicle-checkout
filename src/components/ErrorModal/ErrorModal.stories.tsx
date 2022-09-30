import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withReactContext } from 'storybook-react-context';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

import ErrorModal from './ErrorModal';

export default {
  title: 'PIT/ErrorModal',
  component: ErrorModal,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    withReactContext({
      Context: VehicleContext,
      initialState: {
        error: true,
        errorMsg: 'An error occured please try again',
      },
    }),
  ],
} as ComponentMeta<typeof ErrorModal>;

const Template: ComponentStory<typeof ErrorModal> = () => <ErrorModal />;

export const GenericError = Template.bind({});
GenericError.args = {
  message: 'An error occured please try again',
};
