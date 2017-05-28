import React, { Component } from 'react';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmit: false,
      showAbout: false
    };
  }

  render() {
    return (
      <p>HeaderContainer</p>
    );
  }
}

export default HeaderContainer;
