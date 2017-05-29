import React, { Component } from 'react';
import Wrap from '../StyleComponents/Wrap';

import HeaderContainer from './HeaderContainer';
import ContentContainer from './ContentContainer';
import FooterContainer from './FooterContainer';


class ApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrap>
        <HeaderContainer />
        <ContentContainer />
        <FooterContainer />
      </Wrap>
    );
  }
}

export default ApplicationContainer;
