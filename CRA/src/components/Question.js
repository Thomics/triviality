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
			correctAnswer = this.props.correctAnswer,
			generatedAnswers = this.generateAnswers(this.props.answers);
		let selectedValue = '';

		return (
			<span>
				<h3>Category: {category}</h3>
				<h4>{question}</h4>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (selectedValue === correctAnswer) {
							console.log('nailed it')
						}
						console.log('in here');
						console.log(correctAnswer);
						console.log(selectedValue);
						console.log(e);
						console.log(e.target.selected);
					}}
				>
					<select
						size={4}
						defaultValue='first'
						onClick={(e) => {
							selectedValue = e.target.value;
						}}
					>
						<option disabled style={{'display': 'none'}} value='first'></option>
						{generatedAnswers}
					</select>
					<button>
						Submit
					</button>
				</form>
			</span>
		);
	}
}

export default Question;