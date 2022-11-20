import React from 'react'
import styled from 'styled-components'
import { Star, ThumbUp, ThumbDown } from '@styled-icons/heroicons-outline'

import { IconButton } from '../../IconButton/IconButton.view'

interface CourseCardFrontProps {
  /**
   * Label for coursename
   */
  courseName: string
  /**
   * Course location label
   */
  location: string
  /**
   * Course imgage source label
   */
  imgUrl?: string
  /**
   * Number from 1-10 rating the course
   */
  rating: number
}

const CourseCardFrontContainer = styled.div`
  /* position: absolute; */
  box-sizing: border-box;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const H3 = styled.h3`
  margin: 0;
  font-size: 44px;
  min-height: 110px;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  font-weight: 900;
  color: #fff;
  text-shadow: 1px 1px 1px #5b5b5b
`

const H5 = styled.h5`
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  font-size: 16px;
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

/**
 * Content on the front of a course card
 */
export const CourseCardFront = ({
  courseName,
  location
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
  )
}
