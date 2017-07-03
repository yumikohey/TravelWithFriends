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

	console() {
		console.log('hihi');
	}

	render() {
		const { data, rowID } = this.props;
		return (
			//update onPress background color
			<TouchableHighlight onPress={() => this.console()}>
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