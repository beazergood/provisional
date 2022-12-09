import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CourseCard } from "./CourseCard.view";

export default {
	title: "Components/CourseCard",
	component: CourseCard,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof CourseCard>;

const Template: ComponentStory<typeof CourseCard> = (args) => (
	<div
		style={{ padding: "100px" }}
	>
		<CourseCard {...args} />
	</div>
);

export const WithImage = Template.bind({});

WithImage.args = {
	courseName: "Mill Ride",
	location: "Ascot, UK",
	variant: 'alt',
	imgUrl: "https://www.mill-ride.com/images/thumbs/slideshow/millride/1500x805/0-0-0-0/1/31_192.jpg",
};
