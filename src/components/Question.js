import React, { Component } from 'react';


class Question extends Component {
	
	generateAnswers(answers) {
		return answers.map((val, index) => {
			return (
				<label>
					<input
						key={index}
						type="checkbox" 
						name="trivia"
						value={val}
					/>
					{val}
				</label>
			);
		});
	}
	
	render() {
		const category = this.props.category,
			question = this.props.question,
			generatedAnswers = this.generateAnswers(this.props.answers);
			console.log(generatedAnswers);
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