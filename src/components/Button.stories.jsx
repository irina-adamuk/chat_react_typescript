import { Button } from './Button';
import React from 'react';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Button,
  title: 'MyComponents/Button',
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
  primary: true,
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
