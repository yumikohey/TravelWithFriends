import React, {Component} from 'react';
import styles from './styles';
import { View } from 'react-native';
import VerticalLine from './VerticalLine';

export default class Footer extends Component {
	render() {
		return(
			<View style={styles.rowContainer}>
			    <View style={styles.rowLeftArea}>
			        <VerticalLine height={40} />
			    </View>
			</View>
		)
	}
};