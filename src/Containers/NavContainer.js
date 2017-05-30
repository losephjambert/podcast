import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../StyleComponents/Button';


const Nav = styled.nav`
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-item: center;
`;

const NavItem = styled.li`
  flex: 0 1 75px;
  height: 75px;
`;

class NavContainer extends Component {
  render() {
    const navButton = this.props.navItems.map((item, index) =>
      <NavItem key={item}>
        <Button
          selected={item === this.props.selectedRegion ? true : false}
          key={ index }
          onClick={() => { this.props.showRegion(item ,index) } }>
          {item} -- {item === this.props.selectedRegion ? 'Yep' : 'Nope'}
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
