import * as types from './types';
import ReactNative from 'react-native';
import { NavigationActions } from 'react-navigation';

export function setTab(tabIndex) {
	return (dispatch, getState) => {
		const { tabs } = getState();
		dispatch(Object.assign( { type: types.SET_TAB }, { index: tabIndex } ));
	}
}

//Page state
export function showMoreSearchBar() {
	return (dispatch) => {
		dispatch(Object.assign( 
			{ type: types.SET_SEARCH_BAR_STATE },
			{ 
				showSearchInputField: 'none',
				showCityAndDays: 'flex',
			}
		));
	}
}

export function showLessSearchBar() {
	return (dispatch) => {
		dispatch(Object.assign( 
			{ type: types.SET_SEARCH_BAR_STATE },
			{ 
				showSearchInputField: 'flex',
				showCityAndDays: 'none',
			}
		));
	}
}

export function listRecommendedCities(toShow, dispatch) {
	return (dispatch) => {
		dispatch(Object.assign( { type: types.LIST_RECOMMENDED_CITIES }, { showRecommendedCitiesList: toShow } ));
	}
}