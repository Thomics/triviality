import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import _ from 'lodash';
import { getTrivia } from '../utils/getTrivia';
import Question from '../components/Question';

class TriviaQuestions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			...props.location.state,
			trivia: undefined,
			questionNumber: 0,
			question: undefined
		};
	}

	generateTrivia() {
		if (this.state.trivia) {
			let questionNumber = this.state.questionNumber,
				trivia = this.state.trivia[questionNumber],
				correctAnswer = trivia.correct_answer,
				answers = _.shuffle([
					...trivia.incorrect_answers,
					correctAnswer
				]);

			return (
				<Question
					category={trivia.category}
					question={trivia.question}
					answers={answers}
					correctAnswer={correctAnswer}
				/>
			);
		}
	}

	componentWillMount() {
		getTrivia(this.state).then((data) => {
			this.setState({ trivia: data });
		});
	}

	render() {
		let trivia = this.generateTrivia();

		return <View style={styles.container}>{trivia}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1b286b'
	}
});

export default TriviaQuestions;
