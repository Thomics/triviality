import React, { Component } from 'react';


class Question extends Component {
	
	generateAnswers(answers) {
		return answers.map((val, index) => {
			return (<li key={index}>{val}</li>);
		});
	}
	
	render() {
		const category = this.props.category,
			question = this.props.question,
			generatedAnswers = this.generateAnswers(this.props.answers);

		return (
			<span>
				<h3>{category}</h3>
				<h4>{question}</h4>
				<ul>
					{generatedAnswers}
				</ul>
			</span>
		);
	}
}

export default Question;