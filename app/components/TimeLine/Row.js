import React, { Component } from 'react';
import ReactNative from 'react-native';
import styles from './styles';
import Dot from './Dot';
import VerticalLine from './VerticalLine';
import PropTypes from 'prop-types';

const {
	View,
	Text
} = ReactNative;

export default class Row extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {completed, min, title, description, day} = this.props;
		const colors=['#007fff', '#2d6ef8', '#9755de', '#c835b9', '#e3088d'];
		const selectedColor=colors[day];
		return (
			<View style={styles.rowContainer}>
			  <View name="Row Left" style={styles.rowLeftArea}>
			    <VerticalLine />
			    <Dot completed={completed} color={selectedColor}/>
			    <VerticalLine height={4} color={selectedColor}/>
			  </View>
			  <View name="Row Body" style={{ opacity: completed ? 1 : 0.5, marginLeft: '4%'}}>
			    <Text
			      name="Row Date"
			      style={styles.rowDate}
			    >{`People normally spend ${min} mins here`}</Text>
			    <Text name="Row Title" style={[styles.rowTitle, {color:selectedColor}]}>{title}</Text>
			    <Text name="Row Description" style={styles.rowDescription}>
			      {description}
			    </Text>
			  </View>
			</View>
		)
	}
}

Row.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  date: PropTypes.number,
  status: PropTypes.string,
};