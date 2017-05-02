import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
`;

const StyledFormElement = styled.p`
  display:flex;
  min-width: 0;
  padding: 10px 0;
`;

const StyledInput = styled.input`
  margin-left:10px;
  width:100%;
`;

const StyledTextarea = styled.textarea`
  height: 50px;
  width:100%;
  margin-left:10px;
`;

const StyledButton = styled.input`
  padding: 10px;
`;

function SubmissionForm(props) {
  return (
      <StyledForm id="emailForm" onSubmit={props.handleSubmit}>
        <StyledFormElement>
          <label for="name">
            Name
          </label>
          <StyledInput
            type="text"
            name="name"
            onChange={props.handleInputChange} />
        </StyledFormElement>
        <StyledFormElement>
          <label for="email">
            Email
          </label>
          <StyledInput
            type="text"
            name="email"
            onChange={props.handleInputChange} />
        </StyledFormElement>
        <StyledFormElement>
          <label for="body">
            What
          </label>
          <StyledTextarea
            name="body"
            onChange={props.handleInputChange}>
          </StyledTextarea>
        </StyledFormElement>
        <StyledButton type="submit" value="Submit" />
      </StyledForm>
  );
}

export default SubmissionForm;
