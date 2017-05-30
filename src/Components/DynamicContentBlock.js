import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

const Description = styled.div`
  margin:50px 0px;
  padding:5px;

  p{
    margin-bottom: 15px;
    color: red;
  }
`;

function DynamicContentBlock(props) {
  if (props.error) {
    return (
      <Description>{props.error}</Description>
    );
  } else {
    return (
      <Description dangerouslySetInnerHTML={{ __html: marked(props.body) }}></Description>
      );
  }
}

export default DynamicContentBlock;
