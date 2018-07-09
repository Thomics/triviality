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
			trivia: undefined
		};
	}

	componentDidMount() {
		getTrivia(this.state)
		.then((data) => {
			this.setState({trivia: data});
		});
	}

	generateTrivia() {
		return this.state.trivia ? this.state.trivia.map((val, index) => {
			let answers = _.shuffle([...val.incorrect_answers, val.correct_answer]);

			return (
				<div key={index}>
					<Question
						category={val.category}
						question={val.question}
						answers={answers}
					/>
				</div>
			);
		}) : null;
	}

	render() {
		let trivia = this.generateTrivia();

		return (
			<div>
				{trivia}
			</div>
		);
	}
}

export default Questions;