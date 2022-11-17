import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {CourseCard} from '../components/CourseCard/CourseCard.view';

export default {
    title: 'Components/CourseCard',
    component: CourseCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof CourseCard>;
  
  const Template: ComponentStory<typeof CourseCard> = (args) => <CourseCard {...args} />;

export const Main = Template.bind({});

Main.args = {
  courseName: "Pronghorn Club",
  location: "Bend, OR",
  rating: 60,
  imgUrl: 'images/pronghorn.jpg',
};