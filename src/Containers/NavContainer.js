import React, { Component } from 'react';

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmit: false,
      showAbout: false
    };
  }

  render() {
    return (
      <p>NavContainer</p>
    );
  }
}

export default NavContainer;
