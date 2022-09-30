import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { checkListObjVisual, checkListObjOperational } from './CheckList.dummy';
import CheckList, { CheckListProps } from './CheckList';

export default {
  title: 'PIT/CheckList',
  component: CheckList,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} as ComponentMeta<typeof CheckList>;

const Template: ComponentStory<typeof CheckList> = ({ vehicleChecks, type }: CheckListProps) => (
  <CheckList vehicleChecks={vehicleChecks} type={type} />
);

export const VisualChecks = Template.bind({});
VisualChecks.args = {
  vehicleChecks: checkListObjVisual,
  type: 'Visual',
};

export const OperationalChecks = Template.bind({});
OperationalChecks.args = {
  vehicleChecks: checkListObjOperational,
  type: 'Operational',
};
