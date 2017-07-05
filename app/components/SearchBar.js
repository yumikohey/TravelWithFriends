import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles/styles';
import TripTimeline from './TripTimeline';

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

	componentDidUpdate(prevProps, prevState) {
		const { selectedCity, selectedState, travelDuration, fullTripDetails } = this.props;
		const prevFullTripDetails = prevProps.fullTripDetails;
		if (selectedCity && selectedState && travelDuration > 0 && fullTripDetails !== prevFullTripDetails ) {
			this.props.getFullTripDetails(selectedCity, selectedState, travelDuration);
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
		const { 
			showSearchInputField,
			showCityAndDays,
			selectedCity,
			selectedState,
			travelDuration,
			scrollViewMarginTop,
		} = this.props;

		const showSelectedCityStateText = selectedCity !== '' ? [selectedCity, selectedState].join(', ') : 'City';
		const showCityAndDaysText = (selectedCity !== '' && travelDuration > 0) ? `${selectedCity}, ${selectedState} · ${travelDuration} day(s)` : 'City · Number of Days';

		function travelDaysAddMinusGroupButtons (updateTravelDurationAction, updateTravelDuration, travelDuration) {
			const addButton = <Icon name='add-circle-outline' color='white' size={40} onPress={() => updateTravelDuration(updateTravelDurationAction, true, travelDuration)}/>;
			const minusButton = <Icon name='remove-circle-outline' color='white' size={40} onPress={() => updateTravelDuration(updateTravelDurationAction, false, travelDuration)}/>;
			if (travelDuration === 0 || travelDuration === 1) {
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
			<View>
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
										{showCityAndDaysText}
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
												Number of Days: {travelDuration}
											</Text>
										</View>
										{travelDaysAddMinusGroupButtons(this.props.updateTravelDuration, this.updateTravelDuration, travelDuration)}
									</View>
								</View>
							</View>
						</TouchableHighlight>
				  	</View>
				</View>
				<ScrollView style={{marginTop: scrollViewMarginTop}}>
					<TripTimeline />
				</ScrollView>
			</View>
		)
	}
}