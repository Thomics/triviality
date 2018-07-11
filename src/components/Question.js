import React, { Component } from 'react';


class Question extends Component {
	
	generateAnswers(answers) {
		return answers.map((val, index) => {
			return (
				
					<option
						key={index}
						value={val}
					>
						{val}
					</option>
				
			);
		});
	}
	
	render() {
		const category = this.props.category,
			question = this.props.question,
			generatedAnswers = this.generateAnswers(this.props.answers);
		return (
			<span>
				<h3>Category: {category}</h3>
				<h4>{question}</h4>
				<form>
					<select size={4}>
						<option disabled selected value style={{'display': 'none'}}></option>
						{generatedAnswers}
					</select>
					
				</form>
			</span>
		);
	}
}

export default Question;