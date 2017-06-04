import React, { Component } from 'react';
import styled from 'styled-components';

const Article = styled.p`
  line-height:1.3em;
  font-size:14px;
`;


class BackgroundArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Article>{this.props.body}</Article>
    );
  }
}

export default BackgroundArticle;
