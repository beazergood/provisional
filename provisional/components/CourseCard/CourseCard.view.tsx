import React from 'react'
import styled from 'styled-components'

// import {Star, ThumbUp, ThumbDown} from '@styled-icons/heroicons-solid'
import { Star, ThumbUp, ThumbDown } from '@styled-icons/heroicons-outline'

const Card = styled.div`
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: cover;
  /* height: 300px; */
  width: 350px;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction column;
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
  margin: 0;
`

const ButtonsContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Button = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  height: 56px;
  width: 56px;
  border: none;
  padding: 5px;
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
  return (
    <Card imgUrl={imgUrl}>
      <TextContainer>
        <H3>{courseName}</H3>
        <H5>{location}</H5>
      </TextContainer>
      <ButtonsContainer>
        <Button>
          <ThumbDown size="40" color="#444" />
        </Button>
        <Button>
          <Star size="40" color="#444" />
        </Button>
        <Button>
          <ThumbUp size="40" color="#444" />
        </Button>
      </ButtonsContainer>
    </Card>
  )
}
