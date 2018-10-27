import Startpage from './src/containers/Startpage';

import React, { Component } from 'react';
import { Route, Switch, MemoryRouter } from 'react-router-native';
import TriviaQuestions from './src/containers/TriviaQuestions';

export default class App extends Component {
	render() {
		return (
			<MemoryRouter basename={'/'}>
				<Switch>
					<Route exact path="/" component={Startpage} />
					<Route
						exact
						path="/TriviaQuestions"
						component={TriviaQuestions}
					/>
				</Switch>
			</MemoryRouter>
		);
	}
}
