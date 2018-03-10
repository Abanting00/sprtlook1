import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home_container from './HomePage/Home_container';
import SignIn from './SignIn';	
import Footer from './Footer';

class Router extends Component {
	render() {
		return (
			<main>
			    <Switch>
		      		<Route exact path= "/" component={Home_container}/>
		      		<Route path = "/login" component={SignIn} />
		    	</Switch>
		    </main>
		);
	}
}

export default Router;
