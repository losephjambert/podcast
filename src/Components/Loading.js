import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../StyleComponents/Colors'

const LoadingBg = styled.div`
  background-color: ${Colors.lightPurple};
  width:100vw;
  height:100vh;
`;
class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <LoadingBg/>
    );
  }
}

export default Loading;
