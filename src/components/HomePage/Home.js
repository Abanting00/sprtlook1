import React, { Component } from 'react';
import SignUp from '../SignUp';
import '../../styles/HomePage/home.css';

class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<h1 className="slogan">
					Connect with Athletes
					<p>Expose your talent</p>
				</h1>
				<div className="signup">
					<SignUp />
				</div>
			</div>
		);
	}
}

export default Home;
