import React, { Component } from 'react';
import Marquee3k from 'marquee3000';
import styled from 'styled-components'

const MarqueeComponent = styled.div`
  padding: 0 25px;
`;

class Marquee extends Component {

  componentDidUpdate(){
    Marquee3k.init();
  }

  render() {
    return (
        <MarqueeComponent>{this.props.headline}</MarqueeComponent>
    );
  }
}

export default Marquee;
