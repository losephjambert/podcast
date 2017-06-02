import React from 'react';
import styled from 'styled-components';
import Button from '../StyleComponents/Button'
import Colors from '../StyleComponents/Colors'
import Fonts from '../StyleComponents/Fonts'

const FormWrapper = styled.div`
  box-shadow: 0 0 0 6px ${Colors.darkPurple};
`;

const Form = styled.form`
  display: flex;
    flex-flow: column nowrap;
  color: ${Colors.lightPurple};
  box-shadow: 0 0 0 3px ${Colors.lightPurple};
  background-color: ${Colors.darkPurple};
  padding: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
    flex-flow: column nowrap;
`;

const TextArea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  background-color: ${Colors.lightPurple};
  font-family: ${Fonts.poppins};
  color: ${Colors.darkPurple};
`;

const SubmissionText = styled.div`
  display: flex;
    flex-flow: column nowrap;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: ${Colors.lightPurple};
  font-family: ${Fonts.poppins};
  color: ${Colors.darkPurple};
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${Colors.lightPurple} inset !important;
  }
`;

const SubmitButton = Button.extend`
  padding: 15px;
  margin: 10px 0;
  min-width: 130px;
  font-weight: 500;
  font-size: 16px;
  background-color: ${Colors.lightPurple};
  color: ${Colors.darkPurple};
  box-shadow: 0 0 0 3px ${Colors.darkPurple};
`;

function SubmissionForm(props) {
  return (
    <FormWrapper>
      <Form id="emailForm" onSubmit={ props.handleSubmit }>
        <p>{ props.description }</p>
        { props.submissionResponse.message ?
          <span className={ props.submissionResponse.class }>{ props.submissionResponse.message }</span>
        : null}
        <InputWrapper>
          <label>
            Email
          </label>
          <Input
            type="text"
            name="email"
            onChange={ props.handleInputChange } />
        </InputWrapper>
        <SubmissionText>
          <label>
            What
          </label>
          <TextArea
            name="body"
            rows="10"
            onChange={ props.handleInputChange }>
          </TextArea>
        </SubmissionText>
        <InputWrapper>
          <SubmitButton type="submit" value="Submit" >send</SubmitButton>
        </InputWrapper>
      </Form>
    </FormWrapper>
  );
}

export default SubmissionForm;
