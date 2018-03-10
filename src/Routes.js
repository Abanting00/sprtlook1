import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/SignIn' component={SignIn}/>
					<Route path='/SignUp' component={SignUp}/>
				</Switch>
			</main>
		);
	}
};

export default Routes;