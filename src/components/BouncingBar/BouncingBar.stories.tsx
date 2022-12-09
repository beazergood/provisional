import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '@chakra-ui/react';
import {BouncingBar} from './BouncingBar.view';
import type {BouncingBarProps} from './BouncingBar.view';

export default {
    title: 'Components/BouncingBar',
    component: BouncingBar,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof BouncingBar>;
  
  const Template: ComponentStory<BouncingBarProps> = (args) => <Flex>    <BouncingBar {...args}  />  </Flex>

export const Main = Template.bind({});

Main.args = {
  icons: ["ThumbDown", "Star", "ThumbUp"]
};