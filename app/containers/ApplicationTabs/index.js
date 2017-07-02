import { View, TabBarIOS, TabBarItemIOS } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../Home';
import About from '../About';

class ApplicationTabs extends Component {
	onPress(tabIndex) {
		this.props.setTab(tabIndex);
	}

	renderScene(component) {
		return (
			<View style={{flex: 1}}>
				{ React.createElement(component, this.props)}
			</View>
		)
	}

	render() {
		return <TabBarIOS style={{flex: 1}}>
			<TabBarIOS.Item
				systemIcon="favorites"
				onPress={ () => {return this.onPress(0); }}
				selected={this.props.tabs.index === 0 }
				iconSize={25}>
				{ this.renderScene(Home) }
			</TabBarIOS.Item>
			<TabBarIOS.Item
				systemIcon="more"
				onPress={ () => {return this.onPress(1); }}
				selected={this.props.tabs.index === 1 }
				iconSize={25}>
				{ this.renderScene(About) }
			</TabBarIOS.Item>
		</TabBarIOS>
	}
}

function mapStateToProps(state) {
	return {
		tabs: state.tabs
	}
}
export default connect(mapStateToProps)(ApplicationTabs);