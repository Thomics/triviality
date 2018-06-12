import React, { Component } from 'react';
import SelectDropDown from '../components/SelectDropDown';
import optionData from '../optionData';
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
  
	render() {
		return (
			<div>
				<SelectDropDown
					title={'Select the Category'}
					options={optionData.categories}
					onChange={(e) => {
						this.setState({
							category: e.target.value,
							categoryAPI: e.target[e.target.selectedIndex].getAttribute('label')
						});
					}}
					selectedValue={this.state.category}
				/>

				<SelectDropDown
					title={'Select the Questions Difficulty'}
					options={optionData.difficulty}
					onChange={(e) => {
						this.setState({
							difficulty: e.target.value,
							difficultyAPI: e.target[e.target.selectedIndex].getAttribute('label')
						});
					}}
					selectedValue={this.state.difficulty}
				/>

				<SelectDropDown
					title={'Select the Question Type'}
					options={optionData.questionType}
					onChange={(e) => {
						this.setState({
							questionType: e.target.value,
							questionAPI: e.target[e.target.selectedIndex].getAttribute('label')
						});
					}}
					selectedValue={this.state.questionType}
				/>
			</div>
		);
	}
}

export default StartPage;