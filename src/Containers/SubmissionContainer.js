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
      email: '',
      body: '',
      submissionResponse: {},
      handleInputChange: this.handleInputChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  formIsValid() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailIsValid = emailRegex.test(this.state.email);
    const bodyIsValid = (typeof this.state.body === 'string');
    if (emailIsValid && bodyIsValid) {
      return true
    } else {
      this.setState({
        submissionResponse: {
          message: "Check your form, please.",
          class: "error"
        }
      })
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState = this.setState.bind(this)
    if (this.formIsValid()) {
      var self = this;
      axios
        .post(`https://trust-issues-api.herokuapp.com/send-email`, {
          subject: `New Submission!`,
          email: this.state.email,
          body: this.state.body
        })
        .catch(error => console.error(error))
        .then(function(response){
          self.setState({ submissionResponse: { message: "Thanks!", class: "success"}})
          document.getElementById('emailForm').reset();
        })
    }
  }

  render() {
    return (
      <SubmitModal>
        <p>{ this.props.description }</p>
        <SubmissionForm {...this.state}/>
      </SubmitModal>
    );
  }
}

export default SubmissionContainer;
