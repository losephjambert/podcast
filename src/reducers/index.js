import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import visits from './visitsReducer';


const rootReducer = combineReducers({
  visits,
	routing: routerReducer,
});

export default rootReducer;
