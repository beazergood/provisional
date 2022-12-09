import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Account from './Account.view';

export default {
    title: 'Components/Account',
    component: Account,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Account>;
  
  const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />;

export const Main = Template.bind({});

Main.args = {
  // first_name: 'Dave',
  // last_name: 'Beazer',
  // email: 'hi@davebeazer.dev'
};