import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const BackgroundMiddleHeadline = styled.h2`
  display: flex;
    justify-content: center;
  position: relative;
  padding: 25px 0;
  margin: 50px 25px;
  min-width: 300px;
  text-align: center;
  line-height: 1.3em;
  align-self: center;
  font-weight: 300;
  font-size: 3.1vmax;
  &::before,
  &::after{
    content: '';
    position: absolute;
    width: 50%;
    left:25%;
    height: 3px;
    background-color: ${Colors.darkPurple};
  }
  &::before{
    top: 0;
  }
  &::after{
    bottom: 0;
  }
`;


class BackgroundMiddleHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BackgroundMiddleHeadline>{this.props.headline}</BackgroundMiddleHeadline>
    );
  }
}

export default BackgroundMiddleHeader;
