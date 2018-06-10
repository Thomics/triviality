import React, { Component } from 'react';
import SelectDropDown from '../components/SelectDropDown';
import optionData from '../optionData';
import '../styles/App.scss';


class StartPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: undefined,
			difficulty: undefined,
			questionType: undefined
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
							category: e.target.value
						});
					}}
					selectedValue={this.state.category}
				/>

				<SelectDropDown
					title={'Select the Questions Difficulty'}
					options={optionData.difficulty}
					onChange={(e) => {
						this.setState({
							difficulty: e.target.value
						});
					}}
					selectedValue={this.state.difficulty}
				/>

				<SelectDropDown
					title={'Select the Question Type'}
					options={optionData.questionType}
					onChange={(e) => {
						this.setState({
							questionType: e.target.value
						});
					}}
					selectedValue={this.state.questionType}
				/>
			</div>
		);
	}
}

export default StartPage;