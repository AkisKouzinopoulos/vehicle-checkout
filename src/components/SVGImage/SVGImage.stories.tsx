import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SVGImage from './SVGImage';

export default {
  title: 'PIT/SVGImage',
  component: SVGImage,
} as ComponentMeta<typeof SVGImage>;

const Template: ComponentStory<typeof SVGImage> = () => <SVGImage size={50} type="Available" />;

export const Default = Template.bind({});
