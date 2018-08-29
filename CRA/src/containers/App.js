import React, { Component } from 'react';
import _ from 'lodash';
import SelectDropDown from '../components/SelectDropDown';
import Question from '../components/Question';
import { getTrivia } from '../utils/Trivia';
import optionData from '../optionData';
import '../styles/App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: undefined
		};
	}
  
	componentDidMount() {
		getTrivia().then((data) => {
			this.setState({questions: data});
		});
	}

	generateQuestions() {
		return this.state.questions ? this.state.questions.map((val, index) => {
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
		let questions = this.generateQuestions();

		return (
			<div >
				<SelectDropDown
					options={optionData.categories}
					onChange={(e) => {
						this.setState({
							category: e.target.value
						});
					}}
					selectedValue={this.state.category}
				/>
				{questions}
			</div>
		);
	}
}

export default App;
