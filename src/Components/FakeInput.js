import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'
import React, { Component } from 'react';

const Input = styled.div`
  box-shadow: inset 0 0 0 3px ${Colors.darkPurple};
  background-color: ${Colors.lightPurple};
  width:100%;
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
      <Input><marquee>{this.props.value.concat(` ${this.props.value} `).repeat(3)}</marquee></Input>
    );
  }
}

export default FakeInput;
