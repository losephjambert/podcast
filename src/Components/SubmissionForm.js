import React from 'react';
import styled from 'styled-components';
import Button from '../StyleComponents/Button'
import Colors from '../StyleComponents/Colors'
import Fonts from '../StyleComponents/Fonts'

const FormWrapper = styled.div`
  margin: 0 6px;
  box-shadow: 0 0 0 6px ${Colors.darkPurple};
`;

const Form = styled.form`
  display: flex;
    flex-flow: column nowrap;
  color: ${Colors.lightPurple};
  box-shadow: 0 0 0 3px ${Colors.lightPurple};
  background-color: ${Colors.darkPurple};
  padding: 15px;
  font-weight: 300;
`;

const TextArea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  margin-top:15px;
  background-color: ${Colors.lightPurple};
  font-family: ${Fonts.poppins};
  color: ${Colors.darkPurple};
`;

const SubmitButton = Button.extend`
  padding: 15px;
  margin: 10px 0;
  min-width: 130px;
  font-weight: 500;
  font-size: 16px;
  background-color: ${(props) => props.hasInput ? Colors.darkPurple : Colors.lightPurple};
  color: ${(props) => props.hasInput ? Colors.lightPurple : Colors.darkPurple};
  box-shadow: 0 0 0 3px ${(props) => props.hasInput ? Colors.lightPurple : Colors.darkPurple};
`;

function SubmissionForm(props) {
  return (
    <FormWrapper>
      <Form id="emailForm" onSubmit={ props.handleSubmit }>
        <p>{ props.description }</p>
        { props.submissionResponse.message ?
          <span className={ props.submissionResponse.class }>{ props.submissionResponse.message }</span>
        : null}
          <TextArea
            name="body"
            rows="10"
            onChange={ props.handleInputChange }>
          </TextArea>
          <SubmitButton hasInput={props.hasInput} type="submit" value="Submit">send</SubmitButton>
      </Form>
    </FormWrapper>
  );
}

export default SubmissionForm;
