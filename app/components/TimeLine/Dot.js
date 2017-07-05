import React, { Component } from 'react';
import ReactNative from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const {
	View,
} = ReactNative;

export default class Dot extends Component {

	render() {
		const { completed, color } = this.props;
		const dotStyle = {
			width: 24,
			height: 24,
			borderRadius: 12,
			borderWidth: 2,
			borderColor: color,
			backgroundColor: color
		};
		return (
			<View name="Dot" style={dotStyle} />
		);
	}
}

Dot.propTypes = {
    completed: PropTypes.bool,
};