import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Answers extends Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonColor: 'red',
			answered: false,
			answeredCorrectly: undefined
		};

		this.userPressAnswer = this.userPressAnswer.bind(this);
	}

	userPressAnswer = (e, selectedValue) => {
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
						this.userPressAnswer(event, val);
					}}
				>
					<Animatable.View
						animation="bounceIn"
						style={
							this.state.answered &&
							this.props.correctAnswer === val
								? [styles.answerButton, styles.correctAnswer]
								: styles.answerButton
						}
					>
						<Text style={styles.answerText}>{val}</Text>
					</Animatable.View>
				</TouchableOpacity>
			);
		});
	}

	render() {
		const generatedAnswers = this.generateAnswers(this.props.answers);

		return (
			<View style={styles.container}>
				<View>{generatedAnswers}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		backgroundColor: '#1b286b'
	},
	answerButton: {
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
	answerText: {
		fontSize: 24,
		color: '#FFFFFF'
	},
	correctAnswer: {
		backgroundColor: '#3cdd00',
		borderColor: '#3cdd00'
	}
});

export default Answers;
