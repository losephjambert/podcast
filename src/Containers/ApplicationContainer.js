import React, { Component } from 'react';
import Wrap from '../StyleComponents/Wrap';
import ComingSoon from '../Components/ComingSoon'
import ContentContainer from './ContentContainer';

class ApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "comingSoon":false
    };
  }

  render() {
    return (
      <Wrap>
        { this.state.comingSoon === true ?
          <ComingSoon />
        : <div>
            <ContentContainer />
          </div>
        }
      </Wrap>
    );
  }
}

export default ApplicationContainer;
