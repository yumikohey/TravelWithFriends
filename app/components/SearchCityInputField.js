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

	render() {
		return (
			<View style={styles.flexRow}>
			    <View style={styles.listViewSearchInputComponent}>
				  	<View style={styles.firstSearchTouchable}>
				  		<View style={styles.flexRowFullWidth}>
					  		<Icon
					  			style={styles.searchBarIcons}
								name='search'
								color='white'
								size={40}
					  		  />
							<TextInput style={styles.searchInputTextField}
								placeholder='City'>
							</TextInput>
				  		</View>
				  	</View>
			    </View>
			</View>
		)
	}
}