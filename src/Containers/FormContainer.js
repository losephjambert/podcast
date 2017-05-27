import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmit: false,
      showAbout: false
    };
  }

  render() {
    return (
      <p>FormContainer</p>
    );
  }
}

export default FormContainer;
