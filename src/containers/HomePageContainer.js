import React, {Component} from 'react';
import {connect} from 'react-redux';

import HomePage from '../components/HomePage';

export class HomePageContainer extends Component {
  render() {
    return (<HomePage />);
  }
}

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  return {};
}


function mapDispatchToProps(dispatch) { // eslint-disable-line no-unused-vars
  return {};
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
