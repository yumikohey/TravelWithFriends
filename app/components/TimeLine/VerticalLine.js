import React, {Component} from 'react';
import styles from './styles';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class VerticalLine extends Component {
	render() {
		const { height, color } = this.props;
		return (
			<View
			  style={[styles.verticalLine, { flex: height, backgroundColor: color }]}
			/>
		)
	}
};

VerticalLine.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
}
