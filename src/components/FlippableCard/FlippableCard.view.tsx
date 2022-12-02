import React, { useState } from "react";
import styled from "styled-components";
import {
	Star,
	ThumbUp,
	ThumbDown,
	InformationCircle,
	XCircle,
} from "@styled-icons/heroicons-outline";

import { IconButton } from "../IconButton/IconButton.view";
import Slider from "../Slider/Slider.view";

export type FlippableCardProps = {
	courseName: string;
	location: string;
	rating: number;
	imgUrl: string;
};

const Card = styled.div<{ imgUrl: string }>`
  box-sizing: border-box;
  background: url(${(props) => props?.imgUrl}) no-repeat;
  background-size: cover;
  /* min-height: 300px; */
  width: 350px;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction column;
  justify-content: space-between;
  position: relative;
  transform: perspective(1000px) rotateY(var(--rotate-y, 0)) translateY(var(--translate-y, 0));
  transform-style: preserve-3d;
  transition: 150ms;

  &.card.flip {
    --rotate-y: 180deg;
    height: 440px;
  }
`;

const MoreInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;

  &.flipped {
    transform: rotateY(180deg);
    transition: 150ms;
  }
`;

const MoreInfoBtn = ({
	setFlip,
	flip,
}: { setFlip: (val: boolean) => void; flip: boolean }) => {
	return (
		<MoreInfo className={` ${flip ? "flipped" : ""}`}>
			<IconButton
				Icon={
					flip ? (
						<XCircle size="20" color="#444" />
					) : (
						<InformationCircle size="20" color="#444" />
					)
				}
				onClicked={() => setFlip(!flip)}
			/>
		</MoreInfo>
	);
};
/**
 * Primary UI component for user interaction
 */
export const FlippableCard = ({
	courseName,
	location,
	rating,
	imgUrl,
}: FlippableCardProps) => {
	const [flip, setFlip] = useState(false);

	return (
		<Card imgUrl={imgUrl} className={`card ${flip ? "flip" : ""}`}>
			<MoreInfoBtn flip={flip} setFlip={setFlip} />

			<CourseCardFront
				courseName={courseName}
				location={location}
				rating={rating}
			/>

			<CourseCardBack
				courseName={courseName}
				location={location}
				rating={rating}
			/>
		</Card>
	);
};

const CourseCardFrontContainer = styled.div`
  box-sizing: border-box;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

interface CourseCardFrontProps {
	/**
	 * Label for coursename
	 */
	courseName: string;
	/**
	 * Course location label
	 */
	location: string;
	/**
	 * Course imgage source label
	 */
	imgUrl?: string;
	/**
	 * Number from 1-10 rating the course
	 */
	rating: number;
}

/**
 * Content on the front of a course card
 */
export const CourseCardFront = ({
	courseName,
	location,
}: CourseCardFrontProps) => {
	return (
		<CourseCardFrontContainer>
			<TextContainer>
				<H3>{courseName}</H3>
				<H5>{location}</H5>
			</TextContainer>
			<ButtonsContainer>
				<IconButton Icon={<ThumbDown size="40" color="#444" />} />
				<IconButton Icon={<Star size="40" color="#444" />} />
				<IconButton Icon={<ThumbUp size="40" color="#444" />} />
			</ButtonsContainer>
		</CourseCardFrontContainer>
	);
};

interface CourseCardBackProps {
	/**
	 * Label for coursename
	 */
	courseName: string;
	/**
	 * Course location label
	 */
	location: string;
	/**
	 * Number from 1-10 rating the course
	 */
	rating: number;
}

const CourseCardBackContainer = styled.div`
  box-sizing: border-box;
  /* position: absolute; */
  transform: rotateY(180deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 330px;
  margin-top: 40px;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 24px;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  text-align: left;
  font-weight: 400;
  color: #333;
  -webkit-text-stroke: 2px #5b5b5b;
`;

const H5 = styled.h5`
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  padding: 3px;
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: white;
`;

const ButtonsContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

/**
 * Content on the back of a course card
 */
export const CourseCardBack = ({
	courseName,
	location,
	rating,
}: CourseCardBackProps) => {
	return (
		<CourseCardBackContainer>
			<TextContainer>
				<H3>{courseName}</H3>
				<H5>{location}</H5>
			</TextContainer>
			<ButtonsContainer>
				<IconButton Icon={<ThumbDown size="40" color="#444" />} />
				<IconButton Icon={<Star size="40" color="#444" />} />
				<IconButton Icon={<ThumbUp size="40" color="#444" />} />
			</ButtonsContainer>
			<Slider label="Vibe" color="#FFDC24" />
			<Slider label="Course" color="#FFDC24" />
			<Slider label="My Rating" color="#FFDC24" value={rating} />
		</CourseCardBackContainer>
	);
};
