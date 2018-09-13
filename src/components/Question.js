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
		// console.log(this.props.correctAnswer)
		console.log(answeredCorrectly)
		this.setState({answered: true, answeredCorrectly: answeredCorrectly});
	}

	generateAnswers(answers) {
		// console.log(answers);
		return answers.map((val, index) => {
			console.log(val);
			console.log(index);
			return (
				<TouchableOpacity
					key={index}
					value={val}
					style={this.state.answered && this.props.correctAnswer === val ? [styles.button, styles.correct] : styles.button}
					onPress={(event) => {this.press(event, val)}}
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
		flex: 0
	},
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
	},
	correct: {
		backgroundColor: 'green'
	}
});

export default Question;