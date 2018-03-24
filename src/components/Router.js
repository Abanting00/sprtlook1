import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home_container from './HomePage/Home_container';
import SignUp from './SignUp';
import ProfileContainer from './ProfilePage/ProfileContainer';
import GetStarted from './GetStarted/GetStarted';
import SignIn from './SignIn';	
import Footer from './Footer';

class Router extends Component {
	render() {
		return (
			<main>
			    <Switch>
		      		<Route exact path= "/" component={Home_container} />
		      		<Route path = "/login" component={SignIn} />
		      		<Route path = "/signup" component={SignUp} />
		      		<Route path = "/profile" component={ProfileContainer} />
		      		<Route path="/getstarted" component={GetStarted} />
		    	</Switch>
		    </main>
		);
	}
}

export default Router;
