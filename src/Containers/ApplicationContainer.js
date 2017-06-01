import React, { Component } from 'react';
import Wrap from '../StyleComponents/Wrap';

import ComingSoon from '../Components/ComingSoon';
import HeaderContainer from './HeaderContainer';
import ContentContainer from './ContentContainer';
import FooterContainer from './FooterContainer';


class ApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "comingSoon":true
    };
  }

  render() {
    return (
      <Wrap>
        { this.state.comingSoon === true ?
          <ComingSoon />
        : <div>
            <HeaderContainer />
            <ContentContainer />
            <FooterContainer />
          </div>
        }
      </Wrap>
    );
  }
}

export default ApplicationContainer;
