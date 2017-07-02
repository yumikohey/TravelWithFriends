import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements'

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

class About extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			citiesArray: ds.cloneWithRows([{id: 1, city: 'San Francisco'}, {id: 2, city: 'Los Angelos'}, {id:3, city: 'Chicago'}, {id:4, city: 'New York'}, {id:5, city: 'Boston'}, {id:6, city:'San Diego'}]),
		}
	}
	render() {
		const { citiesArray } = this.state;
		return(
			<ListView
			  style={{display: 'flex', flex: 1, backgroundColor: '#0090FF'}}
			  dataSource={citiesArray}
			  renderRow={(data) =>
			  	<View style={{flex: 1, padding: 12, flexDirection: 'row', alignItems: 'center'}}>
			  		<Text key={data.id}>{data.city}</Text>
			  	</View>}
			/>
		)
	}
}

function mapStateToProps(state) {
	return {
	}
}

export default connect(mapStateToProps)(About);