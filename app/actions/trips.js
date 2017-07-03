import * as types from './types';
import Api from '../lib/api';

export function searchCity(inputCity) {
	return (dispatch) => {
		// const params = [
		//       `i=${encodeURIComponent(ingredients)}`,
		//       'p=1'
		//     ].join('&');
		const params = 'city_state=' + encodeURIComponent(inputCity);
		return Api.get(`city_state_search/?${params}`).then(res => {
			dispatch(setSearchCities(res.city_state));
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

// export function addRecipe() {
// 	return {
// 		type: types.ADD_RECIPE
// 	}
// }