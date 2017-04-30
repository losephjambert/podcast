import React from 'react';
import styled from 'styled-components';

function SubmissionForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={props.handleInputChange} />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          onChange={props.handleInputChange} />
      </label>
      <textarea
        name="body"
        onChange={props.handleInputChange}>
      </textarea>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SubmissionForm;
