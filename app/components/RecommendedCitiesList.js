import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Icon } from 'react-native-elements';
import RecommendedCityRow from './RecommendedCityRow';
import SearchCityInputField from './SearchCityInputField';
import styles from '../styles/styles';

const {
	ScrollView,
	View,
	TextInput,
	Image,
	TouchableHighlight,
	Text,
	ListView
} = ReactNative;

export default class RecommendedCitiesList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.searchCities);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const citiesArray = ds.cloneWithRows(this.props.searchCities);
		const { searchCity, dispatch, searchCities } = this.props;
		return(
			<ListView
			  style={styles.listCitiesBg}
			  dataSource={citiesArray}
			  renderRow={(data, rowId) => <RecommendedCityRow data={data} rowId={rowId}/>}
			  renderSeparator={(sectionId, rowId) => <View key={sectionId} style={styles.separator} />}
			  renderHeader={() => <SearchCityInputField searchCity={searchCity} dispatch={dispatch} />}
			/>
		)
	}
}