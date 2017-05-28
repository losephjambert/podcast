import React, { Component } from 'react';

class FooterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmit: false,
      showAbout: false
    };
  }

  render() {
    return (
      <p>FooterContainer</p>
    );
  }
}

export default FooterContainer;
