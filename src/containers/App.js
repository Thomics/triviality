import React, { Component } from 'react';
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
			console.log(data);
			this.setState({trivia: data});
		});
	}

	generateTrivia() {
		return this.state.trivia ? this.state.trivia.map((val, index) => {
			return (
				<div key={index}>
					<h3>{val.category}</h3>
					<h4>{val.question}</h4>
					<ul>
						<li>{val.incorrect_answers[0]}</li>
						<li>{val.incorrect_answers[1]}</li>
						<li>{val.incorrect_answers[2]}</li>
						<li>{val.correct_answer}</li>
					</ul>
				</div>
			);
		}) : null;
	}

	render() {
		let trivia = this.generateTrivia();
		return (
			<div className="App">
				<ul>
					{trivia}
				</ul>
			</div>
		);
	}
}

export default App;
