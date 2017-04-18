import React, { Component } from 'react';
import DynamicContentBlock from '../Components/DynamicContentBlock';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
      error: null
    } ;
  }

  componentWillMount() {
    // let res;
    let res = "a successful return from the server! :)";
    if (res) {
      this.setState({ about:[res] });
    } else {
      this.setState({ error: `Unfortunately, something has gone wrong and we couldn't do what you asked. Please try wrapping tinfoil around your forehead and clasping your thighs while chanting to the sky ,"I am definitely a dolphin mummy."`})
    }
  }

  render() {
    return (
      <div>
        <DynamicContentBlock {...this.state}/>
      </div>
    );
  }
}

export default AboutContainer;
