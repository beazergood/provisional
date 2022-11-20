import React from 'react'
import styled from 'styled-components'

const sliderThumbStyles = (props: SliderProps) => `
  width: 15px;
  height: 15px;
  background: ${props.color};
  cursor: pointer;
  outline: 2px solid #fff;
  border-radius: 50%;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 1.5;
  }
`

const Styles = styled.div<SliderProps>`
  display: flex;
  align-items: center;
  color: #444;
  margin-bottom: 1rem;
  box-sizing: border-box;

  .value {
    flex: 1;
    font-size: 1.3rem;
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props) => sliderThumbStyles(props)}
    }

    &::-moz-range-thumb {
      ${(props) => sliderThumbStyles(props)}
    }
  }
`

interface SliderProps {
  color: string
  label?: string
  value?: number
}

export default class Slider extends React.Component<SliderProps> {
  state = {
    value: this.props.value
  }

  handleOnChange = (e: { target: { value: any } }) =>
    this.setState({ value: e?.target?.value })

  render() {
    return (
      <Styles color={this.props.color}>
        <label>{this.props.label}</label>
        <input
          type="range"
          min={0}
          max={10}
          value={this.state.value}
          className="slider"
          onChange={this.handleOnChange}
        />
        <div className="value">{this.state.value}</div>
      </Styles>
    )
  }
}
