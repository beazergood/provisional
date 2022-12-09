import React, { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Center,
  Heading,
  Text,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Star,
  ThumbUp,
  ThumbDown,
  InformationCircle,
  XCircle,
} from "@styled-icons/heroicons-outline";

import { IconButton } from "../IconButton/IconButton.view";

const CourseCardDiv = styled.div<{ imgUrl: string }>`
  box-sizing: border-box;
  background: url(${(props) => props?.imgUrl}) no-repeat;
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

/**
 * Primary UI component for user interaction
 */
export const CourseCard: React.FC<{
  courseName: string;
  location: string;
  imgUrl: string;
  variant: string;
}> = ({ courseName, location, imgUrl, variant }) => {
  const [flip, setFlip] = useState(false);

  const bg = useColorModeValue("brand.400", "brand.600");

  return (
    <Box>
      <CourseCardDiv imgUrl={imgUrl}>
        <VStack spacing="64px" alignItems="flex-start">
          <Heading>
            {courseName}
          </Heading>
          <Text fontSize="3xl" textAlign="left">
            {location}
          </Text>
          <Center w="100%">
            <HStack spacing="44px">
              <IconButton Icon={<ThumbDown size="40" color="#444" />} />
              <IconButton Icon={<Star size="40" color="#444" />} />
              <IconButton Icon={<ThumbUp size="40" color="#444" />} />
            </HStack>
          </Center>
        </VStack>
      </CourseCardDiv>
    </Box>
  );
};

export type CallToActionProps = React.ComponentProps<typeof CourseCard>;
