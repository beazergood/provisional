import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Account from '../components/Account/Account.view';

export default {
    title: 'Components/Account',
    component: Account,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Account>;
  
  const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />;

export const Main = Template.bind({});

Main.args = {
  first_name: 'Dave',
  last_name: 'Beazer',
  email: 'hi@davebeazer.dev'
};