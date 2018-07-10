import React, { Component } from 'react';
import _ from 'lodash';
import { getTrivia } from '../utils/Trivia';
import Question from '../components/Question';
import '../styles/App.scss';


class Questions extends Component {

	constructor(props) {
		super(props);
		let oldState = this.props.location.state.state;

		this.state = {
			category: oldState.category,
			categoryAPI: oldState.categoryAPI,
			difficulty: oldState.difficulty,
			difficultyAPI: oldState.difficultyAPI,
			questionType: oldState.questionType,
			questionAPI: oldState.questionAPI,
			trivia: undefined,
			questionNumber: 0,
			question: ''
		};
	}

	componentDidMount() {
		getTrivia(this.state)
		.then((data) => {
			this.setState({trivia: data});
		});
	}

	generateTrivia() {
		if (this.state.trivia) {
			let questionNumber = this.state.questionNumber,
				trivia = this.state.trivia[questionNumber],
				answers = _.shuffle([...trivia.incorrect_answers, trivia.correct_answer]);


			return (
				<Question
					category={trivia.category}
					question={trivia.question}
					answers={answers}
				/>
			);
			this.setState({questionNumber: questionNumber++});
		}
	}

	render() {
		let trivia = this.generateTrivia();

		return (
			<div className={'questionContainer'}>
				{trivia}
			</div>
		);
	}
}

export default Questions;