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
		const dropdownProps = {
			pickerStyle: { backgroundColor: '#00d5f9' },
			textColor: '#FFFFFF',
			fontSize: 24,
			baseColor: '#FFFFFF',
			dropdownMargins: { min: 20, max: 40 }
		};
		return (
			<View style={styles.container}>
				<Dropdown
					label="Category"
					data={optionData.categories}
					{...dropdownProps}
					onChangeText={(event) => {
						this.setState({ categoryAPI: event });
					}}
				/>
				<Dropdown
					label="Difficulty"
					data={optionData.difficulty}
					{...dropdownProps}
					onChangeText={(event) => {
						this.setState({ difficultyAPI: event });
					}}
				/>
				<Dropdown
					label="Question Type"
					data={optionData.questionType}
					{...dropdownProps}
					onChangeText={(event) => {
						this.setState({ questionAPI: event });
					}}
				/>
				<TouchableOpacity style={styles.button}>
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
						<Text style={styles.buttonText}>Start Trivia</Text>
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
		backgroundColor: '#1b286b',
		paddingHorizontal: '10%'
	},
	button: {
		backgroundColor: '#00d5f9',
		width: '100%',
		paddingVertical: 18,
		alignItems: 'center',
		marginTop: 40,
		borderRadius: 100
	},
	buttonText: {
		fontSize: 32,
		color: '#FFFFFF',
		fontWeight: '700'
	}
});

export default StartPage;
