import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const Footer = styled.footer`
  color: ${Colors.darkPurple};
  font-weight: 300;
`;

const FooterContent = styled.ul`
  display: flex; 
    justify-content: space-between;
    align-items: center;
  padding: 25px 0 15px;
  font-size: 10px;
  @media screen and (min-width:375px){
    font-size: 12px;
  }
  @media screen and (min-width:600px){
    margin-bottom: 50px;
    font-size: 14px;
  }
`;

const FooterItem = styled.li`

`;

const LinkItem = styled.a`
  color: ${Colors.darkPurple};
`;

class FooterContainer extends Component {

  render() {
    return (
      <Footer>
        <FooterContent>
          <FooterItem>&copy; Trust Issues {this.props.theDate()}</FooterItem>
          <FooterItem><LinkItem href="https://twitter.com/trustissuespod" target="_blank">We're on Twitter, too</LinkItem></FooterItem>
        </FooterContent>
      </Footer>
    );
  }
}

export default FooterContainer;
