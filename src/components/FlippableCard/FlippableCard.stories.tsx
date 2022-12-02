import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FlippableCard } from "./FlippableCard.view";
import type { FlippableCardProps } from "./FlippableCard.view";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/FlippableCard",
	component: FlippableCard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof FlippableCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FlippableCard> = (args) => (
	<div
		style={{ backgroundColor: "#333", padding: "10px", textAlign: "center" }}
	>
		<FlippableCard {...args} />
	</div>
);

export const WithImage = Template.bind({});

WithImage.args = {
	courseName: "Mill Ride",
	location: "Ascot, UK",
	rating: 6,
	imgUrl: "images/brasada_ranch.jpg",
};
