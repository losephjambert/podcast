/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// require('./favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';
import config from './config';

import firebase from 'firebase';
import firebaseui from 'firebaseui';

// console.log('src/index: firebase.initializeApp: environment: ', process.env.NODE_ENV);
// console.log('src/index: firebase.initializeApp: authDomain: ', config.firebase.authDomain);
firebase.initializeApp(config.firebase);
window.ui = new firebaseui.auth.AuthUI(firebase.auth());
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
