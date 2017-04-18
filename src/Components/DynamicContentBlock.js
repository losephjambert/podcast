import React from 'react';

function DynamicContentBlock(props) {
  if (props.error) {
    return (
      <div>
        <p>{props.error}</p>
      </div>
    );
  } else {
    return (
      <p>{props.about}</p>
      );
  }
}

export default DynamicContentBlock;
