import React, { useState } from 'react'
import styled from 'styled-components'

import { IconButton } from '../IconButton/IconButton.view'
import { CourseCardFront } from './CardFront/CardFront.view'
import { CourseCardBack } from './CardBack/CardBack.view'
import { InformationCircle, XCircle } from '@styled-icons/heroicons-outline'

interface CourseCardProps {
  courseName: string
  location: string
  rating: number
  imgUrl: string
}

const Card = styled.div<{imgUrl:string}>`
  z-index:0;
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
`

const MoreInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;

  &.flipped {
    transform: rotateY(180deg);
    transition: 150ms;
  }
`

/**
 * Primary UI component for user interaction
 */
export const CourseCard = ({
  courseName,
  location,
  rating,
  imgUrl
}: CourseCardProps) => {
  const [flip, setFlip] = useState(false)

  return (
    <Card imgUrl={imgUrl} className={`card ${flip ? 'flip' : ''}`}>
      <MoreInfo className={` ${flip ? `flipped` : ''}`}>
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
  )
}
