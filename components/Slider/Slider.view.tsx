import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 15px;
  height: 15px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 1rem;
  box-sizing: border-box;
  
  .value {
    flex: 1;
    font-size: 2rem;
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
      ${props => sliderThumbStyles(props)}
    }

    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 50
  }

  handleOnChange = (e) => this.setState({ value: e?.target?.value })

  render() {
    return (
      <Styles opacity={this.state.value > 10 ? (this.state.value / 100) : .1} color={this.props.color}>
        <label>{this.props.label}</label>
        <input type="range" min={0} max={100} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value}</div>
      </Styles>
    )
  }
}
