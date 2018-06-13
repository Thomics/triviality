import React, { Component } from 'react';
import { MemoryRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import Questions from './Questions';

class Router extends Component {

	render() {

		return (
			<MemoryRouter basename={'/'}>
				<Switch>
					<Route exact path='/' component={StartPage} />
					<Route exact path='/Questions' component={Questions} />
				</Switch>
			</MemoryRouter>
		)
	}

}

export default Router;