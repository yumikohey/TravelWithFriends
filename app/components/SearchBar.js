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
		this.props.showMoreSearchBar();
	}

	showLessSearchBar() {
		this.props.showLessSearchBar();
	}

	showSearchCityLayout() {
		const { dispatch } = this.props;
		this.props.listRecommendedCities(true, dispatch);
	}

	updateTravelDuration(updateTravelDurationAction, isAdd, currentTravelDuration) {
		if (isAdd & currentTravelDuration < 5) {
			updateTravelDurationAction(currentTravelDuration + 1);
		}
		if (!isAdd & currentTravelDuration > 1) {
			updateTravelDurationAction(currentTravelDuration - 1);
		}
	}

	render() {
		const { showSearchInputField, showCityAndDays, selectedCity, selectedState, travelDuration } = this.props;
		const showSelectedCityStateText = selectedCity !== '' ? [selectedCity, selectedState].join(', ') : 'City';
		const showNumberOfDays = `Number of Days: ${travelDuration}`;
		console.log(showNumberOfDays);
		console.log(travelDuration);
		function travelDaysAddMinusGroupButtons (updateTravelDurationAction, updateTravelDuration, travelDuration) {
			const addButton = <Icon name='add-circle-outline' color='white' size={40} onPress={() => updateTravelDuration(updateTravelDurationAction, true, travelDuration)}/>;
			const minusButton = <Icon name='remove-circle-outline' color='white' size={40} onPress={() => updateTravelDuration(updateTravelDurationAction, false, travelDuration)}/>;
			if (travelDuration === 1) {
				return (
					<View style={{flex: 1, flexDirection: 'row-reverse'}}>
						{addButton}
					</View>
				);
			} else if (travelDuration === 5) {
				return (
					<View style={{flex: 1, flexDirection: 'row-reverse'}}>
						{minusButton}
					</View>
				);
			}
			return (
				<View style={{flex: 1, flexDirection: 'row-reverse'}}>
					{addButton}
					{minusButton}
				</View>
			)
		}
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
								{showSelectedCityStateText}
							</Text>
						</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight style={styles.secondSearchTouchable}>
						<View style={styles.flexRowFullWidth}>
							<Icon
								style={styles.searchBarIcons}
							name='date-range'
							color='white'
							size={40}
							  />
							<View style={styles.flexRowFullWidthHeightFifty}>
								<View style={styles.flexRowFullWidth}>
									<View>
										<Text style={styles.searchBarPlaceholder}>
											{showNumberOfDays}
										</Text>
									</View>
									{travelDaysAddMinusGroupButtons(this.props.updateTravelDuration, this.updateTravelDuration, travelDuration)}
								</View>
							</View>
						</View>
					</TouchableHighlight>
			  	</View>
			</View>
		)
	}
}