import React, { useState } from 'react'
import styled from 'styled-components'

import { IconButton } from '../IconButton/IconButton.view'
// import {Star, ThumbUp, ThumbDown} from '@styled-icons/heroicons-solid'
import {
  Star,
  ThumbUp,
  ThumbDown,
  InformationCircle,
  XCircle,
} from '@styled-icons/heroicons-outline'
import Slider from '../Slider/Slider.view'

const Card = styled.div`
box-sizing: border-box;
background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: cover;
  min-height: 300px;
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
  
  &:hover {
    --translate-y: -2px;
  }

  &.card.flip {
    --rotate-y: 180deg;
  }
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
  -webkit-text-stroke: 2px #5b5b5b;
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
  font-weight: 400;
  margin: 0;
  color: white;
`

const ButtonsContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const MoreInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
`

const CardFront = styled.div`
  /* position: absolute; */
  box-sizing: border-box;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
`

const CardBack = styled.div`
  box-sizing: border-box;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  width: 330px;
`

interface CourseCardProps {
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
  imgUrl: string
  /**
   * Number from 1-10 rating the course
   */
  rating: number
}

/**
 * Primary UI component for user interaction
 */
export const CourseCard = ({
  courseName,
  location,
  rating,
  imgUrl,
  ...props
}: CourseCardProps) => {
  const [flip, setFlip] = useState(false)

  return (
    <Card imgUrl={imgUrl} className={`card ${flip ? 'flip' : ''}`}>
      <CardFront>
        <MoreInfo>
          <IconButton
            Icon={<InformationCircle size="20" color="#444" />}
            onClicked={() => setFlip(!flip)}
          />
        </MoreInfo>
        <TextContainer>
          <H3>{courseName}</H3>
          <H5>{location}</H5>
        </TextContainer>
        <ButtonsContainer>
          <IconButton Icon={<ThumbDown size="40" color="#444" />} />
          <IconButton Icon={<Star size="40" color="#444" />} />
          <IconButton Icon={<ThumbUp size="40" color="#444" />} />
        </ButtonsContainer>
      </CardFront>

      <CardBack>
        <MoreInfo>
          <IconButton
            Icon={<XCircle size="20" color="#444" />}
            onClicked={() => setFlip(!flip)}
          />
        </MoreInfo>
        <Slider label="Vibe" color="#FFDC24" />
        <Slider label="Course" color="#FFDC24" />
        <Slider label="Price" color="#FFDC24" />
      </CardBack>
    </Card>
  )
}
