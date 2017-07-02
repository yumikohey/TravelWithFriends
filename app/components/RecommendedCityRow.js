import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Icon } from 'react-native-elements';

const {
	ScrollView,
	View,
	TextInput,
	Image,
	TouchableHighlight,
	StyleSheet,
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
		const { data } = this.props;
		return (
			//update onPress background color
			<TouchableHighlight onPress={() => this.console()}>
				<View style={{flex: 1, padding: 12, flexDirection: 'row', alignItems: 'center'}}>
					<Text key={data.id} 
					      style={{
					      	marginLeft: '2.5%',
					        color: 'white',
					        fontSize: 16,
					    	fontWeight: 'bold'}}
					>
						{data.city}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}