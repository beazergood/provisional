import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: .95;
  }
`

interface IconButtonProps {
  Icon: React.ReactElement;
  onClicked?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({ Icon, onClicked }: IconButtonProps) => {
  return <Button className={'red-bg'} onClick={onClicked}>{Icon}</Button>
}
