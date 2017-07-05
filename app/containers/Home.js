import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import RecommendedCitiesList from '../components/RecommendedCitiesList';
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

class Home extends Component {
	constructor(props) {
		super(props);
	}

	renderScene(component) {
		return (
			<View style={styles.defaultFlex}>
				{ React.createElement(component, this.props) }
			</View>
		)
	}

	render() {
		const layoutComponent = this.props.showRecommendedCitiesList ? RecommendedCitiesList : SearchBar;
		return this.renderScene(layoutComponent);
	}
}

function mapStateToProps(state) {
	return {
		selectedCity: state.trips.selectedCity,
		selectedState: state.trips.selectedState,
		searchCities: state.trips.searchCities,
		showRecommendedCitiesList: state.tabs.showRecommendedCitiesList,
		showSearchInputField: state.tabs.showSearchInputField,
		showCityAndDays: state.tabs.showCityAndDays,
		travelDuration: state.trips.travelDuration,
		fullTripDetails: state.trips.fullTripDetails,
		scrollViewMarginTop: state.tabs.scrollViewMarginTop,
	}
}

export default connect(mapStateToProps)(Home);