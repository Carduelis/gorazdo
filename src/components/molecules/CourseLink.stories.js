import React from 'react';
import { CourseLink } from './CourseLink';

export default {
  title: 'Molecules/CourseLink',
  component: CourseLink,
  parameters: {
    figma:
      'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo?node-id=129%3A2',
  },
};

const Template = (args) => <CourseLink {...args} />;

export const Default = Template.bind({});
