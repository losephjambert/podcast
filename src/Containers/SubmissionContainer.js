import React, { Component } from 'react';
import axios from 'axios';
import SubmissionForm from '../Components/SubmissionForm';

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
  }

  handleSubmit(event) {
    event.preventDefault();
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

  render() {
    return (
      <div>
        <SubmissionForm {...this.state}/>
      </div>
    );
  }
}

export default SubmissionContainer;
