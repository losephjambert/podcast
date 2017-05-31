import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  height:100%;
  padding: 15px;
`;

const StyledFormElement = styled.div`
  display:flex;
  min-width: 0;
  padding: 10px 0;
  flex-grow:1;
`;

const StyledInput = styled.input`
  margin-left:10px;
  width:100%;
  flex-grow:1;
`;

const SubmissionText = styled.div`
  display:flex;
  min-width: 0;
  padding: 10px 0;
  flex-grow:10;
`;

const StyledTextarea = styled.textarea`
  width:100%;
  margin-left:10px;
`;

const SubmitButton = styled.input`
  padding: 10px;
  flex-grow:1;
`;

function SubmissionForm(props) {
  return (
      <StyledForm id="emailForm" onSubmit={ props.handleSubmit }>
        <span className={ props.submissionResponse.class }>{ props.submissionResponse.message }</span>
        <StyledFormElement>
          <label>
            Email
          </label>
          <StyledInput
            type="text"
            name="email"
            onChange={ props.handleInputChange } />
        </StyledFormElement>
        <SubmissionText>
          <label>
            What
          </label>
          <StyledTextarea
            name="body"
            onChange={ props.handleInputChange }>
          </StyledTextarea>
        </SubmissionText>
        <StyledFormElement>
          <SubmitButton type="submit" value="Submit" />
        </StyledFormElement>
      </StyledForm>
  );
}

export default SubmissionForm;
