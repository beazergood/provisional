import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SliderComponent from './Slider.view';

export default {
    title: 'Components/Slider',
    component: SliderComponent,
  } as ComponentMeta<typeof SliderComponent>;
  
  const Template: ComponentStory<typeof SliderComponent> = (args) => <SliderComponent {...args} />;

export const Main = Template.bind({});

Main.args = {
  color: '#ff0000'
};