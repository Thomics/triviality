import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Question extends Component {
	render() {
		return (
			<View style={styles.questionContainer}>
				<Text style={styles.questionText}>{this.props.question}</Text>
				<Text style={styles.numberQuestion}>
					{this.props.questionNumber}
					/10
				</Text>
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
	},
	numberQuestion: {
		color: '#FFFFFF',
		fontSize: 22,
		position: 'absolute',
		bottom: 10,
		right: 10,
		backgroundColor: '#00d5f9'
	}
});

export default Question;
