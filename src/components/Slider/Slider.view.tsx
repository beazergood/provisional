import React from "react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from "@chakra-ui/react";
interface SliderProps {
	color: string;
	label?: string;
	value?: number;
}

export default class SliderComponent extends React.Component<SliderProps> {
	state = {
		value: this.props.value,
	};

	handleOnChange = (e: { target: { value: any } }) =>
		this.setState({ value: e?.target?.value });

	render() {
		return (
      <Slider defaultValue={60} min={0} max={300} step={30}>
      <SliderTrack bg='red.100'>
        <Box position='relative' right={10} />
        <SliderFilledTrack bg='tomato' />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
		);
	}
}
