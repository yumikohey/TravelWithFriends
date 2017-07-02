import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Icon } from 'react-native-elements';
import RecommendedCityRow from './RecommendedCityRow';
import SearchCityInputField from './SearchCityInputField';

const {
	ScrollView,
	View,
	TextInput,
	Image,
	TouchableHighlight,
	StyleSheet,
	Text,
	ListView
} = ReactNative;

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 2,
    backgroundColor: '#75C3FF',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
});

export default class RecommendedCitiesList extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			citiesArray: ds.cloneWithRows([{id: 1, city: 'San Francisco'}, {id: 2, city: 'Los Angeles'}, {id:3, city: 'Chicago'}, {id:4, city: 'New York'}, {id:5, city: 'Boston'}, {id:6, city:'San Diego'}]),
		}
	}
	render() {
		const { citiesArray } = this.state;
		return(
			<ListView
			  style={{display: 'flex', flex: 1, backgroundColor: '#0090FF'}}
			  dataSource={citiesArray}
			  renderRow={(data) => <RecommendedCityRow data={data} />}
			  renderSeparator={(sectionId, rowId) => <View key={sectionId} style={styles.separator} />}
			  renderHeader={() => <SearchCityInputField />}
			/>
		)
	}
}