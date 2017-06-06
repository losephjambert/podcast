import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'
import React, { Component } from 'react';

const Input = styled.div`
  box-shadow: inset 0 0 0 3px ${Colors.darkPurple};
  background-color: ${Colors.lightPurple};
  width:100%;
  height:35px;
  color: ${Colors.darkPurple};
  padding:10px;
  display: flex;
    align-items: center;
    justify-content:center;
    overflow:hidden;
`;

class FakeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Input>{this.props.value}</Input>
    );
  }
}

export default FakeInput;
