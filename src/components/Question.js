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
					<Text style={styles.questionText}>{val}</Text>
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
				<View>
					{generatedAnswers}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		// flexWrap: 'wrap',
		// alignItems: 'center'
		flex: 0
	},
	// buttonContainer: {
	// 	alignItems: 'center',
	// 	marginTop: 40
	// },
	button: {
		backgroundColor: '#ffb3ba',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15
	},
	category: {
		fontSize: 26,
		paddingLeft: 20,
		paddingRight: 10
	},
	question: {
		fontSize: 18,
		paddingLeft: 20,
		paddingRight: 10
	},
	questionText: {
		fontSize: 24
	}
});

export default Question;