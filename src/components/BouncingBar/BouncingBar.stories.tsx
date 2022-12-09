import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ThumbUp,
  ThumbDown,
  PlusCircle,
} from "@styled-icons/heroicons-outline";

import {BouncingBar} from './BouncingBar.view';

export default {
    title: 'Components/BouncingBar',
    component: BouncingBar,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof BouncingBar>;
  
  const Template: ComponentStory<typeof BouncingBar> = (args) => <BouncingBar {...args} />  

export const Main = Template.bind({});

Main.args = {
  iconLeft: <PlusCircle/>,
  iconCenter:  <ThumbDown/>,
  iconRight: <ThumbUp/>
};