import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  args: {},
  argTypes: {},
  parameters: {
    figma: '147%3A3',
  },
};

const Template = (args) => <Typography {...args} />;

export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: 'subtitle',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Typography-1',
  variant: 'h300',
};

export const Primary400 = Template.bind({});
Primary400.args = {
  children: 'Typography-1',
  variant: '400', // should be a string, otherwise it doesn't preselect value in storybook
  as: 'h4',
};
