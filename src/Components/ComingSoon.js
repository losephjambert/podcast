import React, { Component } from 'react';
import styled from 'styled-components';

const SoonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height:100vh;
`;

const SoonHeader = styled.h1 `
  height:200px;
  color: rgba(191,0,254,1);
`
const SoonImg = styled.img `
  height:200px;
`
class UnderConstruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SoonWrapper>
        <SoonImg src="../Assets/images/flat-earth.png" />
        <SoonHeader>SOON</SoonHeader>
      </SoonWrapper>
    );
  }
}

export default UnderConstruction;
