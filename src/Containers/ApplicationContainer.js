import React, { Component } from 'react';
import AboutContainer from './AboutContainer';

class ApplicationContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello Podcast</h1>
        <AboutContainer />
      </div>
    );
  }
}

export default ApplicationContainer;
