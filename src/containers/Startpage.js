import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import optionData from '../data/optionData';
import { getTrivia } from '../utils/getTrivia';


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
			<View style={styles.container}>
				<Dropdown
					label='Category'
					data={optionData.categories}
					style={{flex: 1, margin: 150}}
				/>
				<Dropdown
					label='Difficulty'
					data={optionData.difficulty}
					style={{flex: 2, margin: 150}}
				/>
				<Dropdown
					label='Question Type'
					data={optionData.questionType}
					style={{flex: 3, margin: 150}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

export default StartPage;