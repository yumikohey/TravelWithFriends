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
			<View style={styles.flexRow}>
			    <View style={{display: showSearchInputField, width: '100%', height: 100, backgroundColor: '#0090FF'}}>
				  	<TouchableHighlight style={styles.firstSearchTouchable}
				  		onPress={() => this.showMoreSearchBar()}
				  	>
				  		<View style={styles.flexRowFullWidth}>
					  		<Icon
					  			style={styles.searchBarIcons}
								name='search'
								color='white'
								size={40}
					  		  />
							<View style={styles.heightFifty}>
								<Text style={styles.searchBarPlaceholder}>
									City · Number of Days
								</Text>
							</View>
				  		</View>
				  	</TouchableHighlight>
			    </View>
			    <View style={{display: showCityAndDays, width: '100%', height: 200, backgroundColor: '#0090FF'}}>
			    	<TouchableHighlight style={styles.backwardArrow} onPress={() => this.showLessSearchBar() }>
			    		<View>
			    			<Icon name='keyboard-arrow-up' color='white'/>
			    		</View>
			    	</TouchableHighlight>
					<TouchableHighlight style={styles.secondSearchTouchable}
						onPress={() => this.showSearchCityLayout()}
					>
						<View style={styles.flexRowFullWidth}>
							<Icon
								style={styles.searchBarIcons}
							name='room'
							color='white'
							size={40}
							  />
						<View style={styles.heightFifty}>
							<Text style={styles.searchBarPlaceholder}>
								City
							</Text>
						</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight style={styles.secondSearchTouchable}
						onPress={() => this.showMoreSearchBar()}
					>
						<View style={styles.flexRowFullWidth}>
							<Icon
								style={styles.searchBarIcons}
							name='date-range'
							color='white'
							size={40}
							  />
							<View style={styles.heightFifty}>
								<Text style={styles.searchBarPlaceholder}>
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