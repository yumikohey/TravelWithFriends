import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles/styles';

const {
	ScrollView,
	View,
	TextInput,
	Image,
	TouchableHighlight,
	Text,
	ListView,
} = ReactNative;

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	selectedCityAndState(str) {
		const city = str.split(', ')[0];
		const state = str.split(', ')[1];
		const {dispatch} = this.props;
		const data = {
			city,
			state
		}
		this.props.selectedCityAndState(data);
		this.props.listRecommendedCities(false, dispatch);
	}

	render() {
		const { data, rowID } = this.props;
		return (
			//update onPress background color
			<TouchableHighlight onPress={() => this.selectedCityAndState(data)}>
				<View style={styles.listViewRow}>
					<Text key={rowID} 
					      style={styles.listViewRowText}
					>
						{data}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}