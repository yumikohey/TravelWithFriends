import { combineReducers } from 'redux';
import * as tripsReducer from './trips';
import * as navigationReducer from './navigation';

export default combineReducers(Object.assign(
	tripsReducer,
	navigationReducer
));