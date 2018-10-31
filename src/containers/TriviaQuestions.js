import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import _ from 'lodash';
import { getTrivia } from '../utils/getTrivia';
import Answers from '../components/Answers';
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

	generateAnswers() {
		let trivia = this.state.trivia;

		return trivia.map((question, ind) => {
			let answers = _.shuffle([
				...question.incorrect_answers,
				question.correct_answer
			]);

			return (
				<Answers
					key={`answer-${ind}`}
					answers={answers}
					correctAnswer={question.correct_answer}
					answerQuestion={() => {
						let currentNumber = this.state.questionNumber;
						this.setState({
							questionNumber: currentNumber + 1
						});
					}}
				/>
			);
		});
	}

	generateQuestions() {
		let trivia = this.state.trivia;

		return trivia.map((trivia, ind) => {
			return (
				<Question key={`question-${ind}`} question={trivia.question} />
			);
		});
	}

	componentWillMount() {
		getTrivia(this.state).then((data) => {
			this.setState({ trivia: data });
		});
	}

	render() {
		let answers = this.state.trivia ? this.generateAnswers() : [],
			questions = this.state.trivia ? this.generateQuestions() : [];

		return (
			<View style={styles.container}>
				{questions[this.state.questionNumber]}
				{answers[this.state.questionNumber]}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1b286b',
		paddingTop: 80,
		paddingHorizontal: '5%'
	}
});

export default TriviaQuestions;
