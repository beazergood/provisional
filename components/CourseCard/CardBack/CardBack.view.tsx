import React from 'react'
import styled from 'styled-components'
import { Star, ThumbUp, ThumbDown } from '@styled-icons/heroicons-outline'

import { IconButton } from '../../IconButton/IconButton.view'
import Slider from '../../Slider/Slider.view'

interface CourseCardBackProps {
  /**
   * Label for coursename
   */
  courseName: string
  /**
   * Course location label
   */
  location: string
  /**
   * Number from 1-10 rating the course
   */
  rating: number
}

const CourseCardBackContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
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
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const H3 = styled.h3`
  margin: 0;
  font-size: 24px;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  text-align: left;
  font-weight: 300;
  color: #333;
  text-shadow: 1px 1px 1px #5b5b5b;
`

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
  font-weight: 300;
  margin: 0;
  color: white;
`

const ButtonsContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const MyNotes = styled.textarea`
min-height: 80px;
margin:  10px 0;
border-radius: 5px;
stroke: none;
`

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
      {/* <ButtonsContainer>
        <IconButton Icon={<ThumbDown size="40" color="#444" />} />
        <IconButton Icon={<Star size="40" color="#444" />} />
        <IconButton Icon={<ThumbUp size="40" color="#444" />} />
      </ButtonsContainer> */}
      <Slider label="Vibe" color="#FFDC24" value={5} />
      <Slider label="Course" color="#FFDC24" value={5} />
      <Slider label="My Rating" color="#FFDC24" value={rating} />
      <label>My Notes</label>
      <MyNotes placeholder='How were the greens? Anything to remember for next time?'/>
    </CourseCardBackContainer>
  )
}
