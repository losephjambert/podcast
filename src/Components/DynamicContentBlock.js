import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  margin:50px 0px;
  padding:5px;
`;

function DynamicContentBlock(props) {
  if (props.error) {
    return (
      <Description>{props.error}</Description>
    );
  } else {
    return (
      <Description dangerouslySetInnerHTML={{__html: props.about}}></Description>
      );
  }
}

export default DynamicContentBlock;
