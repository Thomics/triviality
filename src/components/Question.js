import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


class Question extends Component {
	
	generateAnswers(answers) {
		return answers.map((val, index) => {
			return (
				<TouchableOpacity
					key={index}
					value={val}
					style={styles.button}
				>
					<Text>{val}</Text>
				</TouchableOpacity>
			);
		});
	}
	
	render() {
		const category = this.props.category,
			question = this.props.question,
			correctAnswer = this.props.correctAnswer,
			generatedAnswers = this.generateAnswers(this.props.answers);
		let selectedValue = '';

		return (
			<View style={styles.container}>
				<Text style={styles.category}>{category}</Text>
				<Text style={styles.question}>{question}</Text>
				<View style={styles.buttonContainer}>
					{generatedAnswers}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 100
	},
	buttonContainer: {
		alignItems: 'center',
		marginTop: 40
	},
	button: {
		backgroundColor: '#ffb3ba',
		width: 250,
		padding: 15
	},
	category: {
		fontSize: 26
	},
	question: {
		fontSize: 18
	}
});

export default Question;