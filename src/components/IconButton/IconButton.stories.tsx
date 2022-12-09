import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconButton } from './IconButton.view'
import { Star, ThumbUp, ThumbDown } from '@styled-icons/heroicons-outline'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
    <IconButton {...args} />
  </div>
)

export const ThumbUpIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThumbUpIcon.args = {
  Icon: <ThumbUp size="40" color="#444" />,
}

export const ThumbDownIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThumbDownIcon.args = {
  Icon: <ThumbDown size="40" color="#444" />,
}

export const StarIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StarIcon.args = {
  Icon: <Star size="40" color="#444" />,
}
