import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Question extends Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonColor: 'red',
			answered: false,
			answeredCorrectly: undefined
		};
		this.press = this.press.bind(this);
	}

	press = (e, selectedValue) => {
		let answeredCorrectly = selectedValue === this.props.correctAnswer;
		this.setState({ answered: true, answeredCorrectly: answeredCorrectly });
	};

	generateAnswers(answers) {
		return answers.map((val, index) => {
			return (
				<TouchableOpacity
					key={index}
					value={val}
					style={
						this.state.answered && this.props.correctAnswer === val
							? [styles.button, styles.correct]
							: styles.button
					}
					onPress={(event) => {
						this.press(event, val);
					}}
				>
					<Text style={styles.questionText}>{val}</Text>
				</TouchableOpacity>
			);
		});
	}

	render() {
		const question = this.props.question,
			correctAnswer = this.props.correctAnswer,
			generatedAnswers = this.generateAnswers(this.props.answers);

		return (
			<View style={styles.container}>
				<View style={styles.questionContainer}>
					<Text style={styles.question}>{question}</Text>
				</View>
				<View>{generatedAnswers}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 80,
		paddingHorizontal: '5%',
		flex: 0,
		backgroundColor: '#1b286b'
	},
	button: {
		backgroundColor: 'transparent',
		borderColor: '#00d5f9',
		borderStyle: 'solid',
		borderWidth: 1,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15,
		borderRadius: 10
	},
	question: {
		fontSize: 22,
		color: '#FFFFFF'
	},
	questionContainer: {
		backgroundColor: '#00d5f9',
		padding: 20,
		borderRadius: 10,
		minHeight: 200
	},
	questionText: {
		fontSize: 24,
		color: '#FFFFFF'
	},
	correct: {
		backgroundColor: '#70bdbb'
	}
});

export default Question;
