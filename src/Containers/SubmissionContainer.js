import React, { Component } from 'react';
import axios from 'axios';
import SubmissionForm from '../Components/SubmissionForm';
import styled from 'styled-components';


const SubmitModal = styled.div `
  background:white;
  width:50vw;
  height:50vh;
`;

class SubmissionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      body: '',
      handleInputChange: this.handleInputChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
      sendEmailResponse: ''
    } ;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.showInputError(event.target.name);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.showFormErrors()) {
      // invalid form (errors are displayed)
    } else {
      axios
        .post(`https://trust-issues-api.herokuapp.com/send-email`, {
          subject: `New Submission!`,
          name: this.state.name,
          email: this.state.email,
          body: this.state.body
        })
        .catch(error => console.error(error))
        .then(function(response){
          // or whatever
          alert(response.data.message);
          document.getElementById('emailForm').reset();
        })
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });
    return isFormValid;
  }

  showInputError(refName) {
    console.log(refName)
    console.log(this.refs)
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    const isPasswordConfirm = refName === 'passwordConfirm';

    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 4 chars`;
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  render() {
    return (
      <SubmitModal>
        <SubmissionForm {...this.state}/>
      </SubmitModal>
    );
  }
}

export default SubmissionContainer;
