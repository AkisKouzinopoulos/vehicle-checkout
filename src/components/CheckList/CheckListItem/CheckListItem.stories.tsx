import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { checkListItemObj } from './CheckListItem.dummy';
import CheckListItem, { CheckListItemProps } from './CheckListItem';

export default {
  title: 'PIT/CheckListItem',
  component: CheckListItem,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} as ComponentMeta<typeof CheckListItem>;

const Template: ComponentStory<typeof CheckListItem> = ({ check }: CheckListItemProps) => (
  <CheckListItem check={check} />
);

export const Default = Template.bind({});
Default.args = {
  check: checkListItemObj,
};
