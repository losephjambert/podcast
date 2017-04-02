import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function visits(state = initialState.visits, action = {}) {
  switch (action.type) {
    case types.GOT_VISITS:
      console.log('visitsReducer: GOT_VISITS: action: ', action);
      return action.payload;
    default:
      return state;
  }
}
