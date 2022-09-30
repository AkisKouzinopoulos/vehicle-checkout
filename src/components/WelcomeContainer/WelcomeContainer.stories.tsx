import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WelcomeContainer from './WelcomeContainer';

export default {
  title: 'PIT/WelcomeContainer',
  component: WelcomeContainer,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof WelcomeContainer>;

const Template: ComponentStory<typeof WelcomeContainer> = () => <WelcomeContainer />;

export const Default = Template.bind({});
