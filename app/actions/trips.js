import * as types from './types';
import Api from '../lib/api';

export function searchCity(inputCity) {
	return (dispatch) => {
		const params = 'city_state=' + encodeURIComponent(inputCity);
		return Api.get(`city_state_search/?${params}`).then(res => {
			dispatch(setSearchCities(res.city_state));
		}).catch((err) => {
			console.log(err);
		});
	}
}

export function getFullTripDetails(city, state, days) {
	return (dispatch) => {
		const params = [
			`city=${encodeURIComponent(city)}`,
			`state=${encodeURIComponent(state)}`,
			`n_days=${days}`
		].join('&');
		return Api.get(`full_trip_search/?${params}`).then(res => {
			console.log(res);
			// dispatch(setFullTripDetails(res));
		}).catch((err) => {
			console.log(err);
		});
	}
}

export function setSearchCities(cityState) {
	return {
		type: types.SET_SEARCH_CITIES,
		cityState
	}
}

export function selectedCityAndState(data) {
	return {
		type: types.SELECTED_CITY_STATE,
		data
	}
}

export function updateTravelDuration(days) {
	return {
		type: types.UPDATE_TRAVEL_DURATION,
		days
	}
}

export function setFullTripDetails(res) {
	console.log(res);
}