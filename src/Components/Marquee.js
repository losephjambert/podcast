import React, { Component } from 'react';
import Marquee3k from 'marquee3000';
import styled from 'styled-components'

const MarqueeComponent = styled.div`
  padding: 0 25px;
`;
let marqueeInitialized = false;

class Marquee extends Component {

  shouldComponentUpdate(){
    return !marqueeInitialized;
  }

  componentDidUpdate(){
    Marquee3k.init();
    marqueeInitialized = true;
  }

  render() {
    return (
        <MarqueeComponent>{this.props.headline}</MarqueeComponent>
    );
  }
}

export default Marquee;
