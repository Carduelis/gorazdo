import React from 'react';
import { ContentPanel } from './ContentPanel';

export default {
  title: 'Molecules/ContentPanel',
  component: ContentPanel,
  parameters: {
    figma:
      'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo?node-id=129%3A2',
  },
};

const Template = (args) => <ContentPanel {...args} />;

export const Default = Template.bind({});
