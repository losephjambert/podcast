import React, { Component } from 'react'
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const BackgroundArticleBody = styled.div`
  a {
    color: ${Colors.lightPurple};
  }
  p {
    padding:10px 0px;
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
      <BackgroundArticleBody dangerouslySetInnerHTML={{__html: this.props.body}} />
    );
  }
}

export default BackgroundArticle;
