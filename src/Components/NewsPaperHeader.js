import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const NewsPaperHeadline = styled.h2`
  display: flex;
    justify-content: center;
  position: relative;
  padding: 25px 0;
  margin: 50px 25px;
  max-width: 500px;
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


class NewsPaperHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NewsPaperHeadline>{this.props.headline}</NewsPaperHeadline>
    );
  }
}

export default NewsPaperHeader;
