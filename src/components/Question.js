import React, { Component } from 'react';


class Question extends Component {
	
	generateAnswers(answers) {
		return answers.map((val, index) => {
			return (
				<select>
					<option
						key={index}
						value={val}
					>
						{val}
					</option>
				</select>
			);
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
				<form>
					{generatedAnswers}
				</form>
			</span>
		);
	}
}

export default Question;