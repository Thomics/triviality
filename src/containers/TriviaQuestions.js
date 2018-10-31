import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import _ from 'lodash';
import { getTrivia } from '../utils/getTrivia';
import Answers from '../components/Answers';

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

		const triviaArr = trivia.map((question, ind) => {
			let answers = _.shuffle([
				...question.incorrect_answers,
				question.correct_answer
			]);

			return (
				<Answers
					key={ind}
					answers={answers}
					category={question.category}
					question={question.question}
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
		return triviaArr;
	}

	componentWillMount() {
		getTrivia(this.state).then((data) => {
			this.setState({ trivia: data });
		});
	}

	render() {
		let trivia = this.state.trivia ? this.generateAnswers() : [];

		return (
			<View style={styles.container}>
				{trivia[this.state.questionNumber]}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1b286b'
	}
});

export default TriviaQuestions;
