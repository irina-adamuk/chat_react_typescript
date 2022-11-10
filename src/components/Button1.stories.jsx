import React from 'react';

import { Button1 } from './Button1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Button1,
  title: 'Example/Button1',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button1 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button1',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button1',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button1',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button1',
  size: 'small',
};
