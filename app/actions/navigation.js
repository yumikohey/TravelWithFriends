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
export function listRecommendedCities() {
	return (dispatch, getState) => {
		const { showRecommendedCitiesList } = getState();
		dispatch(Object.assign( { type: types.LIST_RECOMMENDED_CITIES }, { showRecommendedCitiesList: !showRecommendedCitiesList } ));
	}
}