import React, { Component } from 'react'
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'
import SiteTitle from '../StyleComponents/SiteTitle'

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
  padding: 8px 0 5px;
  width: 100%;
  height: 40px;
  background-color: ${Colors.lightPurple};
  box-shadow: inset 0 0 0 5px ${Colors.darkPurple};
`;

const HeaderContentContainer = styled.div`

`;

const InputBlock = styled.ul`
  color: ${Colors.darkPurple};
  display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  margin: 15px 0;
  font-size: 12px;
  @media screen and (min-width:375px){
    font-size: 14px;
  }
`;

const InputBlockLabel = styled.li`
  display: flex;
    justify-content: flex-end;
  flex: 0 1 100px;
  padding: 10px 0;
  margin-right: 10px;
  @media screen and (min-width:375px){
    margin-right: 5px;
  }
`;

const InputBlockPlaceholder = styled.li`
  display: inline-flex;
  flex: 0 1 100%;
  padding: 10px;
  box-shadow: inset 0 0 0 3px ${Colors.darkPurple};
  background-color: ${Colors.lightPurple};
`;

class HeaderContainer extends Component {

  render() {
    return (
      <Header>
        <FixedTopBar>
          <SiteTitle>Trust Issues</SiteTitle>
        </FixedTopBar>
        <HeaderContentContainer>
          <InputBlock>
            <InputBlockLabel>Send To:</InputBlockLabel>
            <InputBlockPlaceholder>420InsideJob@hotmail.com</InputBlockPlaceholder>
          </InputBlock>
          <InputBlock>
            <InputBlockLabel>Copy To: </InputBlockLabel>
            <InputBlockPlaceholder>all</InputBlockPlaceholder>
          </InputBlock>
          <InputBlock>
            <InputBlockLabel>Subject: </InputBlockLabel>
            <InputBlockPlaceholder>We Have Trust Issues</InputBlockPlaceholder>
          </InputBlock>
        </HeaderContentContainer>
      </Header>
    );
  }
}

export default HeaderContainer;
