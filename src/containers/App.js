import React, { Component } from 'react';
import _ from 'lodash';
import Question from '../components/Question';
import { getTrivia } from '../utils/Trivia';
import '../styles/App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trivia: undefined
		};
	}
  
	componentDidMount() {
		getTrivia().then((data) => {
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

export default App;
