import React, { Component } from 'react';

class BackgroundArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <p>{this.props.body}</p>
    );
  }
}

export default BackgroundArticle;
