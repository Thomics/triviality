import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Question from './Question';

class Answers extends Component {
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
		setTimeout(() => {
			this.props.answerQuestion();
		}, 2500);
	};

	generateAnswers(answers) {
		return answers.map((val, index) => {
			return (
				<TouchableOpacity
					key={index}
					value={val}
					onPress={(event) => {
						this.press(event, val);
					}}
				>
					<Animatable.View
						animation="bounceIn"
						style={
							this.state.answered &&
							this.props.correctAnswer === val
								? [styles.button, styles.correct]
								: styles.button
						}
					>
						<Text style={styles.questionText}>{val}</Text>
					</Animatable.View>
				</TouchableOpacity>
			);
		});
	}

	render() {
		const question = this.props.question,
			generatedAnswers = this.generateAnswers(this.props.answers);

		return (
			<View style={styles.container}>
				<Question question={question} />
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
		minHeight: 200,
		marginBottom: 40
	},
	questionText: {
		fontSize: 24,
		color: '#FFFFFF'
	},
	correct: {
		backgroundColor: '#3cdd00',
		borderColor: '#3cdd00'
	}
});

export default Answers;
