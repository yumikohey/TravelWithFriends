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

	render() {
		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
			    <View style={{width: '100%', height: 100, backgroundColor: '#0090FF'}}>
				  	<View style={{width: '90%', height: 50, marginTop: '7.5%', marginRight: '5%', marginLeft: '5%', backgroundColor: '#00AFFF', borderRadius: 5}}>
				  		<View style={{width: '100%', flex: 1, flexDirection: 'row'}}>
					  		<Icon
					  			style={{height: 50, marginLeft: '2%', marginTop: '1.5%'}}
								name='search'
								color='white'
								size={40}
					  		  />
							<TextInput style={{
											color: 'white',
										 	paddingLeft: '2.5%',
										 	fontSize: 16,
										 	width: '90%'}}
								placeholder='City'>
							</TextInput>
				  		</View>
				  	</View>
			    </View>
			</View>
		)
	}
}