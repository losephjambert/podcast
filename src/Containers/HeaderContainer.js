import React, { Component } from 'react'
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'
import SiteTitle from '../StyleComponents/SiteTitle'
import FakeInput from '../StyleComponents/FakeInput'

const Header = styled.header`

`;

const FixedTopBar = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  display: flex;
    justify-content: center;
    align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${Colors.lightPurple};
  box-shadow: inset 0 0 0 5px ${Colors.darkPurple};
`;

const HeaderContentContainer = styled.div`
  display:flex;
`;

const FakeLabel = styled.span`
  color: ${Colors.darkPurple};
`;

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Header>
        <FixedTopBar>
          <SiteTitle>Trust Issues</SiteTitle>
        </FixedTopBar>
        <HeaderContentContainer>
          <FakeLabel>Send To:</FakeLabel><FakeInput/>
          <FakeLabel>Copy To:</FakeLabel><FakeInput/>
          <FakeLabel>Subject:</FakeLabel><FakeInput/>
        </HeaderContentContainer>
      </Header>
    );
  }
}

export default HeaderContainer;
