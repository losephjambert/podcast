import React, { Component } from 'react';
import axios from 'axios';
import SubmissionForm from '../Components/SubmissionForm';
import ContentHeader from '../StyleComponents/ContentHeader'

class SubmissionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      [name]: value,
    });
    this.setState({hasInput: value ? true : false});
  }

  formIsValid() {
    const bodyIsValid = (this.state.body && typeof this.state.body === 'string');
    if (bodyIsValid) {
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
          subject: `New Submission from wehavetrustissues.com`,
          contactEmail: this.state.contactEmail || null,
          body: this.state.body
        })
        .catch(error => console.error(error))
        .then(function(response){
          self.setState({ submissionResponse: { message: "Sent! Thanks.", class: "success"}})
          document.getElementById('emailForm').reset();
        })
    }
  }

  render() {
    return (
      <div>
        <ContentHeader>Submit</ContentHeader>
        <SubmissionForm description={this.props.description} {...this.state}/>
      </div>
    );
  }
}

export default SubmissionContainer;
