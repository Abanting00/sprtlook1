import React, { Component } from 'react';
import SignUp from './SignUp';
import '../styles/home.css';
// got rid of the bg class add bg-test
// change color of the p 

class Home extends Component {
	render() {
		return (
			<div className="bg-test">
				<div className="home-container">
					<h1 className="slogan">
						Connect with Athletes
						<p>Expose your talent</p>
					</h1>
					<div className="signup">
						<SignUp />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;