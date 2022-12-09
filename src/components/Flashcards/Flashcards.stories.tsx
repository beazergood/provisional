import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Flashcards } from "./Flashcards.view";

export default {
  title: "Components/Flashcards",
  component: Flashcards,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Flashcards>;

const Template: ComponentStory<typeof Flashcards> = (args) => (
  <div
    style={{ backgroundColor: "#333", padding: "10px", textAlign: "center" }}
  >
    <Flashcards {...args} />
  </div>
);

export const Main = Template.bind({});

Main.args = {
  data: {
    cards: [
      {
        name: "Mill Ride!",
        city: "Ascot",
        state: "UK",
        imgUrl: "images/brasada_ranch.jpg",
        rating: "6",
      },
    ],
  },
};
