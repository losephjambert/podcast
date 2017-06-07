import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const Footer = styled.footer`
  color: ${Colors.darkPurple};
  font-weight: 300;
`;

const FooterContent = styled.ul`
  display: flex; 
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
  padding: 30px 0 0px;
  font-size: 14px;
  @media screen and (min-width: 600px){
    flex-flow: row wrap;
  }
`;

const FooterItem = styled.li`
  padding: 10px 0; 
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
