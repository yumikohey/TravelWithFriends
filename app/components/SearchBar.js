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
		this.state = {
			showSearchInputField: 'flex',
			showCityAndDays: 'none',
			selectedCity: this.props.selectedCity,
		}
	}

	showMoreSearchBar() {
		this.setState({
			showSearchInputField: 'none',
			showCityAndDays: 'flex',
		})
	}

	showLessSearchBar() {
		this.setState({
			showSearchInputField: 'flex',
			showCityAndDays: 'none',
		})
	}

	showSearchCityLayout() {
		console.log('hi');
		this.props.listRecommendedCities();
	}

	render() {
		const { showSearchInputField, showCityAndDays } = this.state;
		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
			    <View style={{display: showSearchInputField, width: '100%', height: 100, backgroundColor: '#0090FF'}}>
				  	<TouchableHighlight style={{width: '90%', height: 50, marginTop: '7.5%', marginRight: '5%', marginLeft: '5%', backgroundColor: '#00AFFF', borderRadius: 5}}
				  		onPress={() => this.showMoreSearchBar()}
				  	>
				  		<View style={{width: '100%', flex: 1, flexDirection: 'row'}}>
					  		<Icon
					  			style={{height: 50, marginLeft: '2%', marginTop: '1.5%'}}
								name='search'
								color='white'
								size={40}
					  		  />
							<View style={{height: 50}}>
								<Text style={{
												color: 'white',
											 	paddingLeft: '2.5%',
											 	paddingTop: '4%',
											 	fontSize: 16 }}>
									City · Number of Days
								</Text>
							</View>
				  		</View>
				  	</TouchableHighlight>
			    </View>
			    <View style={{display: showCityAndDays, width: '100%', height: 200, backgroundColor: '#0090FF'}}>
			    	<TouchableHighlight style={{height: 25, marginTop: '7.5%'}} onPress={() => this.showLessSearchBar() }>
			    		<View>
			    			<Icon name='keyboard-arrow-up' color='white'/>
			    		</View>
			    	</TouchableHighlight>
					<TouchableHighlight style={{width: '90%', height: 50, marginTop: '2.5%', marginRight: '5%', marginLeft: '5%', backgroundColor: '#00AFFF', borderRadius: 5}}
						onPress={() => this.showSearchCityLayout()}
					>
						<View style={{width: '100%', flex: 1, flexDirection: 'row'}}>
							<Icon
								style={{height: 50, marginLeft: '2%', marginTop: '1.5%'}}
							name='room'
							color='white'
							size={40}
							  />
						<View style={{height: 50}}>
							<Text style={{
											color: 'white',
										 	paddingLeft: '2.5%',
										 	paddingTop: '4%',
										 	fontSize: 16 }}>
								City
							</Text>
						</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight style={{width: '90%', height: 50, marginTop: '2.5%', marginRight: '5%', marginLeft: '5%', backgroundColor: '#00AFFF', borderRadius: 5}}
						onPress={() => this.showMoreSearchBar()}
					>
						<View style={{width: '100%', flex: 1, flexDirection: 'row'}}>
							<Icon
								style={{height: 50, marginLeft: '2%', marginTop: '1.5%'}}
							name='date-range'
							color='white'
							size={40}
							  />
							<View style={{height: 50}}>
								<Text style={{
												color: 'white',
											 	paddingLeft: '2.5%',
											 	paddingTop: '4%',
											 	fontSize: 16 }}>
									Number of Days
								</Text>
							</View>
						</View>
					</TouchableHighlight>
			  	</View>
			</View>
		)
	}
}