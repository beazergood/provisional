import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {InfiniteCards} from './InfiniteCards.view';

export default {
    title: 'Components/InfiniteCards',
    component: InfiniteCards,
  } as ComponentMeta<typeof InfiniteCards>;
  
  const Template: ComponentStory<typeof InfiniteCards> = (args) => <InfiniteCards {...args} />;

export const Main = Template.bind({});

Main.args = {
  data: {
    cards: []
  }
};