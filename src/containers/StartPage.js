import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SelectDropDown from '../components/SelectDropDown';
import optionData from '../optionData';
import { getTrivia } from '../utils/Trivia';
import '../styles/App.scss';


class StartPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			category: undefined,
			categoryAPI: undefined,
			difficulty: undefined,
			difficultyAPI: undefined,
			questionType: undefined,
			questionAPI: undefined
		};
	}

	generateAPIUrl() {
		getTrivia(this.state)
		.then((data) => {
			this.setState({trivia: data});
		});
	}
  
	render() {
		return (
			<div className={'generateQuestionContainer'}>
				<SelectDropDown
					title={'Select the Category'}
					options={optionData.categories}
					onChange={(e) => {
						this.setState({
							categoryAPI: e.target.value,
							category: e.target[e.target.selectedIndex].getAttribute('label')
						});
					}}
					selectedValue={this.state.category}
				/>

				<SelectDropDown
					title={'Select the Questions Difficulty'}
					options={optionData.difficulty}
					onChange={(e) => {
						this.setState({
							difficultyAPI: e.target.value,
							difficulty: e.target[e.target.selectedIndex].getAttribute('label')
						});
					}}
					selectedValue={this.state.difficulty}
				/>

				<SelectDropDown
					title={'Select the Question Type'}
					options={optionData.questionType}
					onChange={(e) => {
						this.setState({
							questionAPI: e.target.value,
							questionType: e.target[e.target.selectedIndex].getAttribute('label')
						});
					}}
					selectedValue={this.state.questionType}
				/>

				<Link 
					to={{
						pathname: '/Questions',
						state: {state: this.state}
					}}
					className={'generateQuestionBtn'}
				>
					Generate Questions
				</Link>
			</div>
		);
	}
}

export default StartPage;