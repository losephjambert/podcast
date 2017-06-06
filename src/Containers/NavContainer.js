import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../StyleComponents/Button';
import Colors from '../StyleComponents/Colors'

const navIcons = {
  "episodes": "url(../../Assets/images/episodes-active.svg)",
  "about": "url(../../Assets/images/about-active.svg)",
  "submit": "url(../../Assets/images/submit-active.svg)",
};

const Nav = styled.nav`
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin: 35px 0;
`;

const NavItem = styled.li`
  flex:${props=> `0 1 ${props.size}`};
  height: ${props=> props.size};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -10px;
  background-color: ${props => props.selected ? Colors.darkPurple : Colors.lightPurple};
  color: ${props => props.selected ? Colors.lightPurple : Colors.darkPurple};
`;

const ButtonText = styled.span`
  margin-top: auto;
  margin-bottom: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: inherit;
`;

class NavContainer extends Component {
  render() {
    const navButton = this.props.navItems.map((item, index) =>

      <NavItem
      size='80px'
      style={ this.props.setBackgroundStyle(item.title === this.props.selectedRegion ? item.active : item.inactive) }
      backgroundImageURL={item.title === this.props.selectedRegion ? item.active : item.inactive}
      selected={item.title === this.props.selectedRegion ? true : false}
      key={item.title}>
        <Button
          key={ index }
          onClick={() => { this.props.showRegion(item.title , index) } }>
          <ButtonText>{item.title}</ButtonText>
        </Button>
      </NavItem>
    );
    return (
      <Nav role="navigation" selectedRegion={ this.props.selectedRegion }>
        <NavList>
            {navButton}
        </NavList>
      </Nav>
    );
  }
}

export default NavContainer;
