import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ImageCaptureBox, { ImageCaptureBoxProps } from './ImageCaptureBox';

export default {
  title: 'PIT/ImageCaptureBox',
  component: ImageCaptureBox,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} as ComponentMeta<typeof ImageCaptureBox>;

const Template: ComponentStory<typeof ImageCaptureBox> = ({
  imageWasCaptured,
}: ImageCaptureBoxProps) => <ImageCaptureBox imageWasCaptured={imageWasCaptured} checkId={1} />;

export const ImageWasCapturedTrue = Template.bind({});
ImageWasCapturedTrue.args = {
  imageWasCaptured: true,
};

export const ImageWasCapturedFalse = Template.bind({});
ImageWasCapturedFalse.args = {
  imageWasCaptured: false,
};
