import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
	selectedCity: '',
	selectedState: '',
	searchCities: ['San Francisco, CA', 'Los Angeles, CA', 'New York, NY', 'Boston, MA'],
	travelDuration: 0,
	fullTripDetails: [],
	fullTripId: '',
}
export const trips = createReducer(initialState, {
	[types.SET_SEARCH_CITIES](state, action) {
		if (action.cityState.length > 0) {
			return Object.assign({}, state, { searchCities: action.cityState });
		}
		return initialState;
	},
	[types.SELECTED_CITY_STATE](state, action) {
		return Object.assign({}, state, { selectedCity: action.data.city, selectedState: action.data.state });
	},
	[types.UPDATE_TRAVEL_DURATION](state, action) {
		return Object.assign({}, state, { travelDuration: action.days });
	},
	[types.SET_FULL_TRIP_DETAILS](state, action) {
		return Object.assign({}, state, {
			fullTripId: action.fullTripId,
			fullTripDetails: action.fullTripDetails
		})
	}
});