import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../StyleComponents/Colors'

const Article = styled.div`
  line-height:1.5em;
  font-size: 16px;
  font-weight: 300;
  a {
    color: ${Colors.darkPurple};
  }
  p {
    padding:10px 0px;
    word-wrap: break-word;
  }
`;

class BackgroundArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Article dangerouslySetInnerHTML={{__html: this.props.body}} />
    );
  }
}

export default BackgroundArticle;
