import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import RecommendedCitiesList from '../components/RecommendedCitiesList';

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

class Home extends Component {
	constructor(props) {
		super(props);
	}

	renderScene(component) {
		return (
			<View style={{flex: 1}}>
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
		selectedCity: '',
		showRecommendedCitiesList: state.tabs.showRecommendedCitiesList
	}
}

export default connect(mapStateToProps)(Home);