import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Question extends Component {
	render() {
		return (
			<View style={styles.questionContainer}>
				<Text style={styles.questionText}>{this.props.question}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	questionText: {
		fontSize: 22,
		color: '#FFFFFF'
	},
	questionContainer: {
		backgroundColor: '#00d5f9',
		padding: 20,
		borderRadius: 10,
		minHeight: 200,
		marginBottom: 40
	}
});

export default Question;
