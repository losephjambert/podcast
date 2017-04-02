/* eslint-disable import/no-named-as-default */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import HomePageContainer from './containers/HomePageContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePageContainer} />
  </Route>
);
