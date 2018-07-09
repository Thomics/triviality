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
			trivia: undefined
		};
	}
  
	componentDidMount() {
		console.log(optionData);
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
				{trivia}
			</div>
		);
	}
}

export default App;
