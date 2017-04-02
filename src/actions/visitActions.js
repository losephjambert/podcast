import * as actionTypes from '../constants/actionTypes';
import api from '../api';
import { browserHistory } from 'react-router';

export function getVisits() {
  console.log('visitsActions: getVisits');
  return async function(dispatch) {
    try {
      let visits = await api.getVisits();
      dispatch({
        type: actionTypes.GOT_VISITS,
        payload: visits
      });
    } catch (e) {
      console.trace('visitActions: getVisits: error', e);
    }
  };
}

export function createVisit( formValues ) {
  console.log('visitActions: createVisit: ', formValues);

  return async function(dispatch) {
    try {
      const visit = await api.createVisit(formValues);
      console.log('visitActions: got visit back from api: ', visit);

      // if it worked, redirect to the main page after 1.5secs
      setTimeout(() => {browserHistory.push('/guestbook');}, 1500);
      console.log(`visitActions: form success: Welcome to Solstice, ${formValues.firstName}`);
      dispatch({
        type: actionTypes.ADD_ALERT,
        payload: {
          failure: false,
          message: `Welcome to Solstice, ${formValues.firstName}`
        }
      });
      return visit;
    } catch (error) {
      console.log('visitActions: createVisit: error: ', error);
      dispatch({
        type: actionTypes.ADD_ALERT,
        payload: {
          failure: true,
          message: `It seems your form was not submitted, ${formValues.firstName}. Please re-enter your information and try again.`
        },

      });
    }
  };
}

export function updateVisit(formValues) {
  const { badgeNum } = formValues.visit;

  return async function(dispatch) {
    try {
      const result = await api.updateVisit(badgeNum);

      // if it worked, redirect to the main page after 1.5secs
      setTimeout(() => {browserHistory.push('/guestbook');}, 1500);
      console.log('visitActions: updateVisit: result from api: ', result);
      dispatch({
        type: actionTypes.UPDATE_VISIT,
        payload: result
      });
    } catch (e) {
      console.log('visitActions: updateVisit: error: ', e);
    }
  };
}

export function redirectVisit() {
  console.log('visitActions: redirectVisit: ');
  return {
    type: actionTypes.CLEAR_ALERT,
    payload: {}
  };
}
