import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Dropdown } from 'react-native-material-dropdown';
import optionData from '../data/optionData';
import { getTrivia } from '../utils/getTrivia';


class StartPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categoryAPI: undefined,
			difficultyAPI: undefined,
			questionAPI: undefined
		};
	}
  
	render() {
		
		return (
			<View style={styles.container}>
				<Dropdown
					label='Category'
					data={optionData.categories}
					style={{flex: 1}}
					onChangeText={(event) => {
						this.setState({categoryAPI: event});
					}}
				/>
				<Dropdown
					label='Difficulty'
					data={optionData.difficulty}
					style={{flex: 2}}
					onChangeText={(event) => {
						this.setState({difficultyAPI: event});
					}}
				/>
				<Dropdown
					label='Question Type'
					data={optionData.questionType}
					style={{flex: 3}}
					onChangeText={(event) => {
						this.setState({questionAPI: event});
					}}
				/>
				<TouchableOpacity
					style={styles.button}
				>
					<Link 
						to={{
							pathname: '/TriviaQuestions',
							state: { 
								categoryAPI: this.state.categoryAPI,
								difficultyAPI: this.state.difficultyAPI,
								questionAPI: this.state.questionAPI
							 }
						}}
					>
						<Text>Start Trivia</Text>
					</Link>
					
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#E8EAF6',
	},
	button: {
		backgroundColor: '#DDDDDD',
		width: 250
	}
});

export default StartPage;